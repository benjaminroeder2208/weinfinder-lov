import { motion, AnimatePresence } from "framer-motion";
import { QuizQuestion } from "@/data/wines";

interface QuizScreenProps {
  question: QuizQuestion;
  questionIndex: number;
  totalQuestions: number;
  onAnswer: (value: string) => void;
}

const QuizScreen = ({ question, questionIndex, totalQuestions, onAnswer }: QuizScreenProps) => {
  return (
    <div className="flex flex-col min-h-[80vh] px-4 pt-8">
      <p className="text-sm font-medium text-muted-foreground mb-6 tracking-wide">
        Frage {questionIndex + 1} von {totalQuestions}
      </p>

      {/* Progress bar */}
      <div className="w-full h-1.5 bg-secondary rounded-full mb-8 overflow-hidden">
        <motion.div
          className="h-full bg-primary rounded-full"
          initial={{ width: `${(questionIndex / totalQuestions) * 100}%` }}
          animate={{ width: `${((questionIndex + 1) / totalQuestions) * 100}%` }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={questionIndex}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-8">
            {question.question}
          </h2>

          <div className="flex flex-col gap-3">
            {question.options.map((option) => (
              <motion.button
                key={option.value}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onAnswer(option.value)}
                className="w-full text-left bg-card text-card-foreground p-5 rounded-lg shadow-card hover:shadow-card-hover transition-all duration-200 border border-border/50 font-medium text-base"
              >
                {option.label}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default QuizScreen;
