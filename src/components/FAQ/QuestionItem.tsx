"use client";

import React from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

interface Props {
  questionId: string;
  question: string;
  answer: string;
}

const QuestionItem = ({ questionId, question, answer }: Props) => {
  const [toggleAnswer, setToggleAnswer] = React.useState("");

  return (
    <div
      className={`relative border-b-[1px]  border-neutral-300 py-[20px] px-1 `}
    >
      <div className="flex justify-between ">
        <p
          onClick={() => setToggleAnswer(questionId)}
          className="text-veryDarkBlue hover:text-softRed duration-300 cursor-pointer"
        >
          {question}
        </p>
        {toggleAnswer === questionId ? (
          <IoIosArrowUp
            size={25}
            className="cursor-pointer text-softRed"
            onClick={() => setToggleAnswer("")}
          />
        ) : (
          <IoIosArrowDown
            size={25}
            className="cursor-pointer text-softBlue"
            onClick={() => setToggleAnswer(questionId)}
          />
        )}
      </div>
      {toggleAnswer === questionId ? (
        <p className="text-grayishBlue my-10">{answer}</p>
      ) : null}
    </div>
  );
};

export default QuestionItem;
