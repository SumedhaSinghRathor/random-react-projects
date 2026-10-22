import { useState } from "react";
import quiz from "./quiz.json";

export default function Quiz() {
  const [questionNo, setQuestionNo] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const correct = quiz.questions[questionNo].answer;
  const [submitted, setSubmitted] = useState(false);
  const [answers, setAnswers] = useState({});

  const correctOptionStyle = "text-white bg-green-400 outline-none";
  const wrongOptionStyle = "text-white bg-red-400 outline-none";

  const answeredCount = Object.keys(answers).length;
  const correctCount = Object.values(answers).filter(
    (answer) => answer.correct,
  ).length;
  const scorePercent = quiz.questions.length
    ? Math.round((correctCount / quiz.questions.length) * 100)
    : 0;

  const submitAnswer = () => {
    if (!selectedOption || submitted) return;

    setAnswers((prev) => ({
      ...prev,
      [questionNo]: {
        selected: selectedOption,
        correct: selectedOption === correct,
      },
    }));

    setSubmitted(true);
  };

  const getOptionStyle = (key) => {
    if (!submitted) return "";

    if (key === correct) return correctOptionStyle;
    if (key === selectedOption) return wrongOptionStyle;

    return "";
  };

  //   const finished = answeredCount >= quiz.questions.length;
  const finished = 1;

  const nextQuestion = () => {
    setSubmitted(false);
    setQuestionNo((prev) => prev + 1);
    setSelectedOption("");
  };

  return (
    <section
      style={{ fontFamily: "Instrument Sans" }}
      className="flex h-screen"
    >
      <div className="grow p-16 flex flex-col gap-8">
        {finished ? (
          <>Done</>
        ) : (
          <>
            <div>
              <h1 className="text-3xl font-semibold">React Quiz</h1>
              <div className="flex items-center gap-4 mt-2">
                <div className="bg-gray-200 grow h-3 rounded-full overflow-clip">
                  <div
                    className="bg-black h-full"
                    style={{
                      width: `${
                        (answeredCount / quiz.questions.length) * 100
                      }%`,
                    }}
                  />
                </div>
                <p>
                  {Math.round(answeredCount / quiz.questions.length) * 100}%
                </p>
              </div>
            </div>
            <div>
              <p className="mb-4">
                <b>Question {questionNo + 1}:</b>{" "}
                {quiz.questions[questionNo].question}
              </p>
              <div className="flex flex-col gap-4">
                {quiz.questions[questionNo].options.map((o) => (
                  <button
                    key={o}
                    onClick={() => selectedOption !== o && setSelectedOption(o)}
                    className={`bg-gray-200 text-start px-3 py-2 rounded cursor-pointer ${
                      selectedOption === o &&
                      "text-blue-500 outline-2 outline-blue-500"
                    } ${submitted && getOptionStyle(o)}`}
                  >
                    {o}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex gap-4 self-end">
              <button
                disabled={selectedOption === ""}
                onClick={submitAnswer}
                className="border px-6 py-2 rounded w-fit disabled:opacity-45"
              >
                Submit
              </button>
              <button
                disabled={!submitted}
                onClick={nextQuestion}
                className="border px-6 py-2 rounded w-fit disabled:opacity-45"
              >
                Next
              </button>
            </div>
          </>
        )}
      </div>

      <div className="p-8 flex flex-col gap-12">
        <div className="w-60 bg-gray-200 flex flex-col items-center justify-center p-4 gap-2 rounded">
          <h2 className="text-5xl font-bold">{scorePercent}%</h2>
          <h4>
            You got {correctCount} {correctCount === 1 ? "answer" : "answers"}{" "}
            correct
          </h4>
        </div>
        <div
          className="grow overflow-scroll flex flex-col gap-4"
          style={{ scrollbarWidth: "none" }}
        >
          {Array.from({ length: quiz.questions.length }).map((_, i) => {
            const result = answers[i];

            const statusClass = !result
              ? "bg-gray-200"
              : result.correct
                ? "bg-green-200"
                : "bg-red-200";

            const iconClass = !result
              ? "bg-white"
              : result.correct
                ? "bg-green-700"
                : "bg-red-700";

            return (
              <div
                key={`Question ${i + 1}`}
                className={`px-4 py-3 flex gap-3 items-center rounded ${statusClass}`}
              >
                <div
                  className={`size-8 rounded-full flex items-center justify-center ${iconClass}`}
                >
                  {result && (
                    <i
                      className={`bx ${
                        result.correct ? "bx-check" : "bx-x"
                      } text-2xl text-white`}
                    />
                  )}
                </div>

                <div className="flex flex-col">
                  <p>Question {i + 1}</p>
                  {result && (
                    <span className="text-xs">
                      {result.correct ? "Correct" : "Incorrect"}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
