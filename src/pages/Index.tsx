import { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import StartScreen from "@/components/StartScreen";
import QuestionCard from "@/components/QuestionCard";
import ResultScreen from "@/components/ResultScreen";
import { questions } from "@/data/questions";
import { wines } from "@/data/wines";
import { matchWines, type MatchResult } from "@/lib/matchWines";
import type { QuizAnswers } from "@/types/quiz";

type Phase = "start" | "quiz" | "result";

const Index = () => {
  const navigate = useNavigate();
  const [phase, setPhase] = useState<Phase>("start");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [results, setResults] = useState<MatchResult>({ top: null, alternative: null, alternative2: null, valueTip: null });
  const [quizAnswers, setQuizAnswers] = useState<QuizAnswers>({
    occasion: "",
    style: "",
    food: "",
    color: "",
    price: "",
    acidity: "",
  });

  const handleStart = useCallback(() => setPhase("quiz"), []);

  const handleAnswer = useCallback(
    (value: string) => {
      const newAnswers = [...answers, value];
      setAnswers(newAnswers);

      if (newAnswers.length >= questions.length) {
        const qa: QuizAnswers = {
          occasion: newAnswers[0],
          style: newAnswers[1],
          food: newAnswers[2],
          color: newAnswers[3],
          price: newAnswers[4],
          acidity: newAnswers[5],
        };
        setQuizAnswers(qa);
        setResults(matchWines(wines, qa));
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
    setResults({ top: null, alternative: null, alternative2: null, valueTip: null });
  }, []);

  // Hidden admin shortcut: Ctrl+Shift+A
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === "A") {
        e.preventDefault();
        navigate("/leads");
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [navigate]);

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
            <ResultScreen key="result" results={results} answers={quizAnswers} onRestart={handleRestart} />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Index;
