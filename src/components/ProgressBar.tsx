import { motion } from "framer-motion";
import { appConfig } from "@/data/config";

interface ProgressBarProps {
  current: number;
  total: number;
}

const ProgressBar = ({ current, total }: ProgressBarProps) => {
  return (
    <>
      <p className="text-sm font-medium text-muted-foreground mb-6 tracking-wide">
        {appConfig.questionPrefix} {current + 1} {appConfig.questionSuffix} {total}
      </p>
      <div className="w-full h-1.5 bg-secondary rounded-full mb-8 overflow-hidden">
        <motion.div
          className="h-full bg-primary rounded-full"
          initial={{ width: `${(current / total) * 100}%` }}
          animate={{ width: `${((current + 1) / total) * 100}%` }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      </div>
    </>
  );
};

export default ProgressBar;
