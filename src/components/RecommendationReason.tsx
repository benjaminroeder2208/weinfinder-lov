import { motion } from "framer-motion";
import { appConfig } from "@/data/config";

interface RecommendationReasonProps {
  reason: string;
}

const RecommendationReason = ({ reason }: RecommendationReasonProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="mt-6 pt-5 border-t border-border"
    >
      <h4 className="font-display text-lg font-semibold text-foreground mb-3">
        {appConfig.whyThisWineLabel}
      </h4>
      <p className="text-foreground/75 text-sm leading-relaxed italic pl-4 border-l-2 border-accent/40">
        „{reason}"
      </p>
    </motion.div>
  );
};

export default RecommendationReason;
