import React from "react";
import { useAppContext } from "../context/AppContext";
import { FaTimes } from "react-icons/fa";

const Answers = ({ setShowAnswers }) => {
  const { correctAnswerList } = useAppContext();
  console.log(correctAnswerList);
  return (
    <div className="bg-white absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-30 w-full max-w-[40rem] h-full max-h-[40rem]">
      <div className="flex justify-center items-center relative">
        <h1 className="font-bold text-2xl pt-3 text-teal-800">
          CORRECT ANSWERS
        </h1>
      </div>
      {correctAnswerList.map((item, index) => {
        return (
          <h2 key={index} className="font-bold text-start px-3 text-lg">
            {index + 1}. {item}
          </h2>
        );
      })}
      <button
        className=" absolute bottom-1 left-[50%] translate-x-[-50%] font-bold text-xl px-4 rounded-lg text-white bg-red-600 hover:opacity-80"
        onClick={() => setShowAnswers(false)}
      >
        CLOSE
      </button>
    </div>
  );
};

export default Answers;
