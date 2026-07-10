import { useState, useEffect } from "react";
import { FaBug, FaTimes } from "react-icons/fa";
import { hardQuestions } from "../data/debugQuestions";
import { styles } from "../assets/styles";

const TOTAL_QUESTIONS = 10;

// const shuffleArray = (array) => {
//   return [...array].sort(() => Math.random() - 0.5);
// };

const shuffleArray = (array) => {
  const shuffled = [...array];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [shuffled[i], shuffled[j]] = [
      shuffled[j],
      shuffled[i],
    ];
  }

  return shuffled;
};

const DebugChallenge = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [questions, setQuestions] = useState([]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const [selectedOption, setSelectedOption] = useState(null);

  const [submitted, setSubmitted] = useState(false);

  const [score, setScore] = useState(0);

  const [finished, setFinished] = useState(false);

  const [highScore, setHighScore] = useState(() =>
  Number(localStorage.getItem("debugHighScore")) || 0
);

  useEffect(() => {
    const randomQuestions = shuffleArray(hardQuestions).slice(
      0,
      TOTAL_QUESTIONS
    );

    setQuestions(randomQuestions);
  }, []);

  if (questions.length === 0) return null;

  const currentQuestion = questions[currentIndex];

  const handleSubmit = () => {
    if (selectedOption === null) return;

    setSubmitted(true);

    if (selectedOption === currentQuestion.answer) {
      setScore((prev) => prev + 10);
    }
  };

  const handleNext = () => {
  if (currentIndex < TOTAL_QUESTIONS - 1) {
    setCurrentIndex((prev) => prev + 1);
    setSelectedOption(null);
    setSubmitted(false);
        } else {
            const best = Math.max(score, highScore);

            localStorage.setItem("debugHighScore", best);
            setHighScore(best);

            setFinished(true);
        }
        };

        
  return (
    <>
      {/* Floating Button */}

      {/* <button
        onClick={() => setIsOpen(true)}
        className={styles.debug.floatingButton}
      > */}
      <button
          onClick={() => {
            const randomQuestions = shuffleArray(hardQuestions).slice(
              0,
              TOTAL_QUESTIONS
            );

            setQuestions(randomQuestions);
            setCurrentIndex(0);
            setSelectedOption(null);
            setSubmitted(false);
            setScore(0);
            setFinished(false);

            setIsOpen(true);
          }}
          className={styles.debug.floatingButton}
        >
        <FaBug size={20}
        className="text-white drop-shadow-[0_0_15px_rgba(59,130,246,0.8)] animate-pulse"
        />
      </button>

      {/* Modal */}

      {isOpen && (
       
          <div
              className={styles.debug.overlay}
              onClick={() => setIsOpen(false)}
            >
          <div
              className={styles.debug.modal}
              onClick={(e) => e.stopPropagation()}
            >


            {/* Close */}

            <button
              onClick={() => setIsOpen(false)}
              className={styles.debug.closeButton}
            >
              <FaTimes />
            </button>

            {/* Header */}

            <div className={styles.debug.header}>
            <div className="w-full">
              <h2 className="text-xl font-bold">
                🐞 Debug Challenge
              </h2>

              <p className="text-sm opacity-80 mt-2">
                Can you solve these JavaScript bugs?
              </p>

              <div className="mt-5">
                <div className="flex justify-between text-xs mb-2">
                  <span>
                    Question {currentIndex + 1} / {TOTAL_QUESTIONS}
                  </span>

                  <span>{score} pts</span>
                </div>

                <div className="w-full bg-white/10 rounded-full h-2">
                  <div
                    className="h-2 rounded-full bg-orange-500 transition-all duration-500"
                    style={{
                      width: `${
                        ((currentIndex + 1) /
                          TOTAL_QUESTIONS) *
                        100
                      }%`,
                    }}
                  />
                </div>
              </div>
            </div>
            </div>

            {/* Question */}
            {!finished ? (
                <div className={styles.debug.content}>
                    <h3 className="text-lg font-semibold mb-4">
                    {currentQuestion.question}
                    </h3>

                    <pre className={`${styles.debug.codeBlock} overflow-x-auto`}>
                    <code>{currentQuestion.code}</code>
                    </pre>

                    <div className="space-y-3 mt-6">
                    {currentQuestion.options.map((option, index) => (
                        <button
                        key={index}
                        disabled={submitted}
                        onClick={() => setSelectedOption(index)}
                        className={`
                            ${styles.debug.option}

                            ${
                            selectedOption === index
                                ? "border-orange-500 bg-orange-500/10 ring-1 ring-orange-500"
                                : ""
                            }

                            ${
                            submitted && index === currentQuestion.answer
                                ? "border-green-500 bg-green-500/20"
                                : ""
                            }

                            ${
                            submitted &&
                            selectedOption === index &&
                            selectedOption !== currentQuestion.answer
                                ? "border-red-500 bg-red-500/20"
                                : ""
                            }
                        `}
                        >
                        {option}
                        </button>
                    ))}
                    </div>

                    {submitted && (
                    <div className={styles.debug.explanation}>
                        <h4 className="font-semibold text-green-400">
                        Explanation
                        </h4>

                        <p className="mt-2 text-slate-300">
                        {currentQuestion.explanation}
                        </p>
                    </div>
                    )}

                    <div className="flex justify-end gap-4 mt-8">
                    {!submitted ? (
                        <button
                        onClick={handleSubmit}
                        disabled={selectedOption === null || submitted}
                        className={styles.debug.submitButton}
                        >
                        Submit
                        </button>
                    ) : (
                        <button
                        onClick={handleNext}
                        className={styles.debug.nextButton}
                        >
                        {currentIndex === TOTAL_QUESTIONS - 1
                            ? "Finish"
                            : "Next →"}
                        </button>
                    )}
                    </div>
                </div>
                ) : (
                <div className="absolute inset-0 bg-[#151225] flex items-center justify-center p-8">
                    {/* Keep your Result Screen code here */}
                          <div className="text-center w-full">

                            <h2 className="text-3xl font-bold text-white">
                              🎉 Challenge Complete!
                            </h2>

                            <p className="text-slate-400 mt-2">
                              You scored
                            </p>

                            <h1 className="text-6xl font-bold text-orange-400 mt-6">
                              {score}
                            </h1>

                            <p className="text-slate-400 mt-2">
                              points
                            </p>

                            <div className="mt-8">

                              {score === 100 && (
                                <h3 className="text-green-400 text-2xl font-bold">
                                  👑 Debug Master
                                </h3>
                              )}

                              {score >= 80 && score < 100 && (
                                <h3 className="text-blue-400 text-2xl font-bold">
                                  💻 Senior Debugger
                                </h3>
                              )}

                              {score >= 60 && score < 80 && (
                                <h3 className="text-yellow-400 text-2xl font-bold">
                                  🔧 Bug Hunter
                                </h3>
                              )}

                              {score < 60 && (
                                <h3 className="text-red-400 text-2xl font-bold">
                                  🐞 Keep Practicing
                                </h3>
                              )}

                            </div>

                            <p className="mt-6 text-slate-300">
                              High Score:
                              <span className="text-orange-400 font-bold ml-2">
                                {highScore}
                              </span>
                            </p>

                            <div className="flex justify-center gap-4 mt-10">

                              <button
                                className={styles.debug.submitButton}
                                onClick={() => {

                                  const best = Math.max(score, highScore);

                                  localStorage.setItem(
                                    "debugHighScore",
                                    best
                                  );

                                  setHighScore(best);

                                  const randomQuestions = shuffleArray(
                                    hardQuestions
                                  ).slice(0, TOTAL_QUESTIONS);

                                  setQuestions(randomQuestions);

                                  setCurrentIndex(0);
                                  setScore(0);
                                  setFinished(false);
                                  setSelectedOption(null);
                                  setSubmitted(false);

                                }}
                              >
                                🔄 Play Again
                              </button>

                              <button
                                className={styles.debug.nextButton}
                                onClick={() => setIsOpen(false)}
                              >
                                Close
                              </button>

                            </div>

                          </div>
                </div>
                )}

          </div>
        </div>
      )}
    </>
  );
};

export default DebugChallenge;