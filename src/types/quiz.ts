export interface QuestionOption {
  label: string;
  value: string;
}

export interface Question {
  question: string;
  options: QuestionOption[];
}

export interface QuizAnswers {
  occasion: string;
  style: string;
  food: string;
  color: string;
  price: string;
  acidity: string;
}
