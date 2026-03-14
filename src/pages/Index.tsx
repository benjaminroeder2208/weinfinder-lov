import { useState, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import StartScreen from "@/components/StartScreen";
import QuestionCard from "@/components/QuestionCard";
import ResultScreen from "@/components/ResultScreen";
import { questions } from "@/data/questions";
import { wines } from "@/data/wines";
import { matchWines } from "@/lib/matchWines";
import type { Wine } from "@/types/wine";
import type { QuizAnswers } from "@/types/quiz";

type Phase = "start" | "quiz" | "result";

const Index = () => {
  const [phase, setPhase] = useState<Phase>("start");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [results, setResults] = useState<Wine[]>([]);

  const handleStart = useCallback(() => setPhase("quiz"), []);

  const handleAnswer = useCallback(
    (value: string) => {
      const newAnswers = [...answers, value];
      setAnswers(newAnswers);

      if (newAnswers.length >= questions.length) {
        const quizAnswers: QuizAnswers = {
          occasion: newAnswers[0],
          style: newAnswers[1],
          food: newAnswers[2],
          color: newAnswers[3],
          price: newAnswers[4],
        };
        setResults(matchWines(wines, quizAnswers));
        setPhase("result");
      } else {
        setQuestionIndex(questionIndex + 1);
      }
    },
    [answers, questionIndex]
  );

  const handleRestart = useCallback(() => {
    setPhase("start");
    setQuestionIndex(0);
    setAnswers([]);
    setResults([]);
  }, []);

  return (
    <div className="min-h-screen bg-background flex justify-center">
      <div className="w-full max-w-quiz">
        <AnimatePresence mode="wait">
          {phase === "start" && <StartScreen key="start" onStart={handleStart} />}
          {phase === "quiz" && (
            <QuestionCard
              key={`q-${questionIndex}`}
              question={questions[questionIndex]}
              questionIndex={questionIndex}
              totalQuestions={questions.length}
              onAnswer={handleAnswer}
            />
          )}
          {phase === "result" && (
            <ResultScreen key="result" wines={results} onRestart={handleRestart} />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Index;
