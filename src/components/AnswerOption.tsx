import { motion } from "framer-motion";

interface AnswerOptionProps {
  label: string;
  value: string;
  onSelect: (value: string) => void;
  index?: number;
}

const AnswerOption = ({ label, value, onSelect, index = 0 }: AnswerOptionProps) => {
  return (
    <motion.button
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06, duration: 0.3 }}
      whileHover={{ y: -2, boxShadow: "var(--shadow-card-hover)" }}
      whileTap={{ scale: 0.985 }}
      onClick={() => onSelect(value)}
      className="w-full text-left bg-card text-card-foreground p-5 md:p-6 rounded-lg shadow-card border border-border hover:border-primary/30 transition-all duration-250 font-medium text-base group"
    >
      <span className="group-hover:text-primary transition-colors duration-200">{label}</span>
    </motion.button>
  );
};

export default AnswerOption;
