import { motion } from "framer-motion";

interface AnswerOptionProps {
  label: string;
  value: string;
  onSelect: (value: string) => void;
}

const AnswerOption = ({ label, value, onSelect }: AnswerOptionProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.02, y: -1 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onSelect(value)}
      className="w-full text-left bg-card text-card-foreground p-5 md:p-6 rounded-lg shadow-card hover:shadow-card-hover transition-all duration-200 border border-border/50 hover:border-primary/30 font-medium text-base"
    >
      {label}
    </motion.button>
  );
};

export default AnswerOption;
