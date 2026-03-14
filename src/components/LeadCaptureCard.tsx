import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Check } from "lucide-react";
import { appConfig } from "@/data/config";
import { trackEvent } from "@/lib/analytics";

const LeadCaptureCard = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (!email.trim()) return;
      trackEvent("lead_capture_submitted", { email });
      setSubmitted(true);
    },
    [email]
  );

  const handleFocus = useCallback(() => {
    trackEvent("lead_capture_opened");
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7 }}
      className="bg-card rounded-lg shadow-card border border-border/50 p-6 mt-8"
    >
      <div className="flex items-center gap-2 mb-2">
        <Mail className="h-4 w-4 text-primary" />
        <h4 className="font-display text-base font-semibold text-foreground">
          {appConfig.leadCaptureHeadline}
        </h4>
      </div>
      <p className="text-muted-foreground text-sm mb-4">
        {appConfig.leadCaptureDescription}
      </p>

      <AnimatePresence mode="wait">
        {!submitted ? (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            className="flex gap-2"
            exit={{ opacity: 0 }}
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={handleFocus}
              placeholder="deine@email.de"
              className="flex-1 rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
              required
            />
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-medium shrink-0"
            >
              {appConfig.leadCaptureButton}
            </motion.button>
          </motion.form>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-primary text-sm font-medium"
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
