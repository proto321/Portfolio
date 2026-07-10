import { useState, useEffect, useRef } from "react";
import { FaKeyboard, FaTimes } from "react-icons/fa";
import { paragraphs } from "../data/typingParagraphs";
import { styles } from "../assets/styles";

const TEST_TIME = 60;

const TypingTest = () => {
  const inputRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);

  const [paragraph, setParagraph] = useState("");

  const [typed, setTyped] = useState("");

  const [timeLeft, setTimeLeft] = useState(TEST_TIME);

  const [started, setStarted] = useState(false);

  const [finished, setFinished] = useState(false);

  const [mistakes, setMistakes] = useState(0);

  const [wpm, setWpm] = useState(0);

  const [accuracy, setAccuracy] = useState(100);

  const [highScore, setHighScore] = useState(
    Number(localStorage.getItem("typingHighScore")) || 0
  );

  const startNewTest = () => {
    const random =
      paragraphs[Math.floor(Math.random() * paragraphs.length)];

    setParagraph(random);

    setTyped("");

    setTimeLeft(TEST_TIME);

    setStarted(false);

    setFinished(false);

    setMistakes(0);

    setWpm(0);

    setAccuracy(100);

    setTimeout(() => {
      inputRef.current?.focus();
    }, 150);
  };

  useEffect(() => {
    if (isOpen) {
      startNewTest();
    }
  }, [isOpen]);

  useEffect(() => {
    if (!started || finished) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev === 1) {
          clearInterval(timer);

          finishTest();

          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [started, finished]);

  const finishTest = () => {
    const words = typed.trim().split(/\s+/).length;

    const finalWpm = words;

    setWpm(finalWpm);

    if (finalWpm > highScore) {
      localStorage.setItem("typingHighScore", finalWpm);

      setHighScore(finalWpm);
    }

    setFinished(true);
  };

  const handleTyping = (e) => {
    const value = e.target.value;

    if (!started) setStarted(true);

    if (value.length > paragraph.length) return;

    let wrong = 0;

    for (let i = 0; i < value.length; i++) {
      if (value[i] !== paragraph[i]) {
        wrong++;
      }
    }

    setMistakes(wrong);

    setTyped(value);

    if (value.length > 0) {
      const correct = value.length - wrong;

      const acc = Math.max(
        0,
        Math.round((correct / value.length) * 100)
      );

      setAccuracy(acc);

      const words = value.trim().split(/\s+/).length;

      const elapsed = TEST_TIME - timeLeft + 1;

      const currentWpm = Math.round(
        words / (elapsed / 60)
      );

      setWpm(currentWpm);
    }

    if (value === paragraph) {
      finishTest();
    }
  };

  const renderText = () => {
    return paragraph.split("").map((char, index) => {
      let color = "text-slate-500";

      if (index < typed.length) {
        color =
          typed[index] === char
            ? "text-green-400"
            : "text-red-400";
      }

      return (
        <span key={index} className={color}>
          {char}
        </span>
      );
    });
  };

  return (
    <>
      {/* Floating Button */}

      <button
        onClick={() => setIsOpen(true)}
        className={styles.typing.floatingButton}
      >
        <FaKeyboard
        size={20}
        className="text-white drop-shadow-[0_0_15px_rgba(59,130,246,0.8)] animate-pulse"
        />
      </button>

      {isOpen && (
        <div
          className={styles.debug.overlay}
          onClick={() => setIsOpen(false)}
        >
          <div
            className={styles.typing.modal}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}

            <button
              className={styles.typing.closeButton}
              onClick={() => setIsOpen(false)}
            >
              <FaTimes />
            </button>

            {/* Header */}

            <div className="bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-500 rounded-t-2xl p-6 text-white">
              <div className="w-full">
                <h2 className="
                    text-2xl
                    font-extrabold
                    bg-gradient-to-r
                    from-white
                    via-emerald-200
                    to-lime-300
                    bg-clip-text
                    text-transparent
                    ">
                  ⌨ Typing Speed Test
                </h2>

                <p className="text-sm opacity-80 mt-2">
                  Type as fast and accurately as possible.
                </p>

                <div className="mt-5">
                  <div className="flex justify-between text-xs mb-2">
                    <span>Time Left: {timeLeft}s</span>

                    <span>{wpm} WPM</span>
                  </div>

                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div
                      className="h-2 rounded-full bg-gradient-to-r
                        from-blue-400
                        via-green-400
                        to-indigo-400
                        animate-pulse transition-all duration-300"
                      style={{
                        width: `${(timeLeft / TEST_TIME) * 100}%`,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {!finished ? (
                <div className="p-6 bg-gradient-to-br from-[#0b1020] via-[#111827] to-[#071a14]">
                <div className="
                        relative
                        overflow-hidden
                        text-lg
                        leading-10
                        font-mono
                        tracking-wide
                        bg-gradient-to-br
                        from-[#0f172a]
                        to-[#06110c]
                        rounded-2xl
                        p-6
                        border
                        border-blue-400/20
                        shadow-[0_0_25px_rgba(59,130,246,0.15)]
                        ">
                  {renderText()}
                </div>

                <textarea
                  ref={inputRef}
                  value={typed}
                  onChange={handleTyping}
                  disabled={finished}
                  placeholder="Start typing here..."
                  className="
                        w-full
                        mt-6
                        h-36
                        rounded-2xl
                        bg-[#090d17]
                        border
                        border-blue-400/20
                        p-5
                        font-mono
                        text-lg
                        tracking-wide
                        text-white
                        placeholder:text-slate-500
                        outline-none
                        resize-none
                        focus:border-blue-400
                        focus:shadow-[0_0_25px_rgba(59,130,246,0.25)]
                        transition-all
                        duration-300
                        "
                />

                <div className="grid grid-cols-3 gap-4 mt-6">
                  <div className="bg-gradient-to-br
                    from-slate-900
                    to-slate-800
                    border
                    border-blue-500/20
                    shadow-[0_0_20px_rgba(59,130,246,0.1)]
                    hover:scale-105
                    transition
                    duration-300 rounded-xl p-4 text-center">
                    <p className="text-slate-400 text-sm">
                      Accuracy
                    </p>

                    <h3 className="text-2xl font-bold text-green-400">
                      {accuracy}%
                    </h3>
                  </div>

                  <div className="bg-gradient-to-br
                    from-slate-900
                    to-slate-800
                    border
                    border-blue-500/20
                    shadow-[0_0_20px_rgba(59,130,246,0.1)]
                    hover:scale-105
                    transition
                    duration-300 rounded-xl p-4 text-center">
                    <p className="text-slate-400 text-sm">
                      Mistakes
                    </p>

                    <h3 className="text-2xl font-bold text-red-400">
                      {mistakes}
                    </h3>
                  </div>

                  <div className="bg-gradient-to-br
                    from-slate-900
                    to-slate-800
                    border
                    border-blue-500/20
                    shadow-[0_0_20px_rgba(59,130,246,0.1)]
                    hover:scale-105
                    transition
                    duration-300 rounded-xl p-4 text-center">
                    <p className="text-slate-400 text-sm">
                      WPM
                    </p>

                    <h3 className="text-2xl font-bold text-orange-400">
                      {wpm}
                    </h3>
                  </div>
                </div>
                                <div className="flex justify-end mt-8">
                  <button
                    onClick={startNewTest}
                    className={styles.debug.submitButton}
                  >
                    🔄 Restart
                  </button>
                </div>
              </div>
            ) : (
             <div className="absolute inset-0 bg-gradient-to-br from-[#050816] via-[#111827] to-[#071b35] flex items-center justify-center p-8">

  <div className="w-full h-full flex flex-col justify-center items-center px-10 text-center">

    <h2 className="text-5xl font-black bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
      ⌨ Typing Complete!
    </h2>

    <p className="text-slate-400 mt-3 text-lg">
      Here are your typing statistics
    </p>

    <div className="grid grid-cols-2 gap-8 mt-12 w-full max-w-4xl">

      <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-blue-500/20 rounded-2xl p-6">
        <p className="text-slate-400 text-sm">⚡ WPM</p>

        <h2 className="text-5xl font-bold text-cyan-400 mt-3">
          {wpm}
        </h2>
      </div>

      <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-blue-500/20 rounded-2xl p-6">
        <p className="text-slate-400 text-sm">🎯 Accuracy</p>

        <h2 className="text-5xl font-bold text-blue-400 mt-3">
          {accuracy}%
        </h2>
      </div>

      <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-blue-500/20 rounded-2xl p-6">
        <p className="text-slate-400 text-sm">❌ Mistakes</p>

        <h2 className="text-5xl font-bold text-red-400 mt-3">
          {mistakes}
        </h2>
      </div>

      <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-blue-500/20 rounded-2xl p-6">
        <p className="text-slate-400 text-sm">🏆 Best WPM</p>

        <h2 className="text-5xl font-bold text-indigo-400 mt-3">
          {highScore}
        </h2>
      </div>

    </div>

    <div className="mt-10">

      {wpm >= 80 && (
        <h3 className="text-cyan-400 text-3xl font-bold">
          👑 Typing Legend
        </h3>
      )}

      {wpm >= 60 && wpm < 80 && (
        <h3 className="text-blue-400 text-3xl font-bold">
          🚀 Fast Typer
        </h3>
      )}

      {wpm >= 40 && wpm < 60 && (
        <h3 className="text-indigo-400 text-3xl font-bold">
          ⌨ Good Speed
        </h3>
      )}

      {wpm < 40 && (
        <h3 className="text-orange-400 text-3xl font-bold">
          💪 Keep Practicing
        </h3>
      )}

    </div>

    <div className="flex justify-center gap-5 mt-12">

      <button
        onClick={startNewTest}
        className="
        px-8
        py-3
        rounded-xl
        bg-gradient-to-r
        from-blue-600
        to-cyan-500
        hover:scale-105
        transition
        font-semibold
        "
      >
        🔄 Play Again
      </button>

      <button
        onClick={() => setIsOpen(false)}
        className="
        px-8
        py-3
        rounded-xl
        bg-slate-700
        hover:bg-slate-600
        transition
        font-semibold
        "
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

export default TypingTest;