import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Check, Loader2 } from "lucide-react";
import { appConfig } from "@/data/config";
import { trackEvent } from "@/lib/analytics";
import { supabase } from "@/integrations/supabase/client";
import type { Wine } from "@/types/wine";
import type { QuizAnswers } from "@/types/quiz";

interface LeadCaptureCardProps {
  wine?: Wine | null;
  alternative?: Wine | null;
  answers?: QuizAnswers;
}

const LeadCaptureCard = ({ wine, alternative, answers }: LeadCaptureCardProps) => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      if (!email.trim()) return;

      setLoading(true);
      setError(null);

      try {
        const { error: dbError } = await supabase.from("leads").insert([{
          email: email.trim(),
          wine_name: wine?.name ?? null,
          wine_id: wine?.id ?? null,
          quiz_answers: answers ? JSON.parse(JSON.stringify(answers)) : null,
        }]);

        if (dbError) throw dbError;

        const projectId = import.meta.env.VITE_SUPABASE_PROJECT_ID;
        const anonKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

        await fetch(
          `https://${projectId}.supabase.co/functions/v1/send-transactional-email`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${anonKey}`,
            },
            body: JSON.stringify({
              email: email.trim(),
              wineName: wine?.name,
              winery: wine?.weingut,
              description: wine?.description,
              price: wine?.price ? `€${wine.price.toFixed(2).replace(".", ",")}` : undefined,
              grapeVariety: wine?.grape_variety,
              region: wine?.region,
              bodyStyle: wine?.body,
              foodPairings: wine?.food_pairing,
              wineLink: wine?.link,
              alternativeName: alternative?.name,
              alternativeWinery: alternative?.weingut,
            }),
          }
        );

        trackEvent("lead_capture_submitted", { email, wine: wine?.name });
        setSubmitted(true);
      } catch {
        setError("Etwas ist schiefgelaufen. Bitte versuche es erneut.");
      } finally {
        setLoading(false);
      }
    },
    [email, wine, alternative, answers]
  );

  const handleFocus = useCallback(() => {
    trackEvent("lead_capture_opened");
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7 }}
      className="bg-card rounded-xl shadow-card border border-border p-7 mt-10"
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
          <Mail className="h-4 w-4 text-primary" />
        </div>
        <h4 className="font-display text-xl font-semibold text-foreground">
          {appConfig.leadCaptureHeadline}
        </h4>
      </div>
      <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
        {appConfig.leadCaptureDescription}
      </p>

      <AnimatePresence mode="wait">
        {!submitted ? (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            className="flex flex-col gap-3"
            exit={{ opacity: 0 }}
          >
            <div className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={handleFocus}
                placeholder="deine@email.de"
                className="flex-1 rounded-full border border-border bg-background px-5 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 transition-shadow"
                required
                disabled={loading}
              />
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                disabled={loading}
                className="bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-medium shrink-0 disabled:opacity-50 flex items-center gap-2"
              >
                {loading && <Loader2 className="h-3 w-3 animate-spin" />}
                {appConfig.leadCaptureButton}
              </motion.button>
            </div>
            {error && (
              <p className="text-destructive text-xs mt-1">{error}</p>
            )}
          </motion.form>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-primary text-sm font-medium py-2"
          >
            <Check className="h-4 w-4" />
            {appConfig.leadCaptureSuccess}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default LeadCaptureCard;
