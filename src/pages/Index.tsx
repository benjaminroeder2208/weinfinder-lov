import { useState, useCallback, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
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
    <div className="min-h-screen bg-background flex flex-col">
      <header className="border-b border-foreground/10">
        <div className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
          <Link
            to="/"
            className="font-bold text-2xl tracking-tight font-serif text-foreground"
          >
            Wein<span className="text-primary">finder</span>
          </Link>
          <Link to="/" className="text-sm text-foreground/80 hover:opacity-70">
            ← Zurück zur Startseite
          </Link>
        </div>
      </header>

      <main className="flex-1 flex justify-center">
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
      </main>

      <footer className="border-t border-foreground/10 mt-10">
        <div className="max-w-5xl mx-auto px-6 py-8 flex flex-wrap gap-4 justify-between text-sm text-foreground/70">
          <span>© {new Date().getFullYear()} Weinfinder</span>
          <div className="flex gap-6">
            <Link to="/kontakt" className="hover:opacity-70">Kontakt</Link>
            <Link to="/impressum" className="hover:opacity-70">Impressum</Link>
            <Link to="/datenschutz" className="hover:opacity-70">Datenschutz</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
