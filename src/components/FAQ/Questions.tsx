import { QUESTIONS } from "@/constants";
import QuestionItem from "./QuestionItem";

const Questions = () => {
  return (
    <div className="mt-[50px]  sm:w-[520px] [&>*:nth-child(1)]:border-t-[1px]">
      {QUESTIONS.map((question, i) => (
        <QuestionItem
          key={question.id}
          questionId={question.id}
          question={question.question}
          answer={question.answer}
        />
      ))}
    </div>
  );
};

export default Questions;
