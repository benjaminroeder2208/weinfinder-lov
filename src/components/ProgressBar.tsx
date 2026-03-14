import { motion } from "framer-motion";
import { appConfig } from "@/data/config";

interface ProgressBarProps {
  current: number;
  total: number;
}

const ProgressBar = ({ current, total }: ProgressBarProps) => {
  return (
    <div className="mb-10">
      <div className="flex items-center justify-between mb-3">
        <p className="text-sm font-medium text-muted-foreground tracking-wide">
          {appConfig.questionPrefix} {current + 1} {appConfig.questionSuffix} {total}
        </p>
        <p className="text-sm text-muted-foreground tabular-nums">
          {Math.round(((current + 1) / total) * 100)}%
        </p>
      </div>
      <div className="w-full h-1 bg-secondary rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-primary rounded-full"
          initial={{ width: `${(current / total) * 100}%` }}
          animate={{ width: `${((current + 1) / total) * 100}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
