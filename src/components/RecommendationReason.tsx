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
      className="mt-5 bg-secondary/50 rounded-lg p-4"
    >
      <h4 className="font-display text-sm font-semibold text-foreground mb-1.5 tracking-wide uppercase">
        {appConfig.whyThisWineLabel}
      </h4>
      <p className="text-foreground/80 text-sm leading-relaxed italic">
        „{reason}"
      </p>
    </motion.div>
  );
};

export default RecommendationReason;
