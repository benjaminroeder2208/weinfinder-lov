import { motion, AnimatePresence } from "framer-motion";
import type { Question } from "@/types/quiz";
import ProgressBar from "@/components/ProgressBar";
import AnswerOption from "@/components/AnswerOption";
import { trackEvent } from "@/lib/analytics";

interface QuestionCardProps {
  question: Question;
  questionIndex: number;
  totalQuestions: number;
  onAnswer: (value: string) => void;
}

const QuestionCard = ({ question, questionIndex, totalQuestions, onAnswer }: QuestionCardProps) => {
  const handleAnswer = (value: string) => {
    trackEvent("question_answered", { question: questionIndex + 1, value });
    onAnswer(value);
  };

  return (
    <div className="flex flex-col min-h-[80vh] px-4 pt-10">
      <ProgressBar current={questionIndex} total={totalQuestions} />

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
              <AnswerOption
                key={option.value}
                label={option.label}
                value={option.value}
                onSelect={handleAnswer}
              />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default QuestionCard;
