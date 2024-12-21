import React, { useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

function SingleQuestion({ question, answer, id }) {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <>
      <div
        key={id}
        className="bg-white border-2 border-white rounded-xl my-3 p-3"
      >
        <div className="flex items-center justify-between h-20">
          <h2
            className="text-lg font-semibold tracking-wider cursor-pointer text-black"
            onClick={() => setShowAnswer(!showAnswer)}
          >
            {question}
          </h2>

          <button className="text-white transition-all text-fontSize2 cursor-pointer">
            {showAnswer ? (
              <div
                className="border border-background3 background3 rounded-full p-1"
                onClick={() => setShowAnswer(!showAnswer)}
              >
                <FaChevronDown />
              </div>
            ) : (
              <div
                className="border border-background3 background3 rounded-full p-1"
                onClick={() => setShowAnswer(!showAnswer)}
              >
                <FaChevronRight />
              </div>
            )}
          </button>
        </div>
        <div className="px-5">
          {showAnswer && (
            <p className="transition-all text-black font-medium py-5 px-5">
              {answer}
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default SingleQuestion;