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
        className={styles.typing.icon}
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

            <div className={styles.typing.header}>
                <div className={styles.typing.headerWrapper}>
                <h2 className={styles.typing.headerTitle}>
                  ⌨ Typing Speed Test
                </h2>

                <p className={styles.typing.headerSubtitle}>
                  Type as fast and accurately as possible.
                </p>

                <div className={styles.typing.timerRow}>
                    <div className={styles.typing.timerInfo}>
                    <span>Time Left: {timeLeft}s</span>

                    <span>{wpm} WPM</span>
                  </div>

                  <div className={styles.typing.progressTrack}>
                    <div
                      className={styles.typing.progressBar}
                      style={{
                        width: `${(timeLeft / TEST_TIME) * 100}%`,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {!finished ? (
              <div className={styles.typing.body}>
               <div className={styles.typing.paragraph}>
                  {renderText()}
                </div>

                <textarea
                  ref={inputRef}
                  value={typed}
                  onChange={handleTyping}
                  disabled={finished}
                  placeholder="Start typing here..."
                  className={styles.typing.textarea}
                />

                <div className={styles.typing.statsGrid}>
                  <div className={styles.typing.statCard}>
                    <p className={styles.typing.statLabel}>
                      Accuracy
                    </p>

                    <h3 className={styles.typing.accuracyValue}>
                      {accuracy}%
                    </h3>
                  </div>

                  <div className={styles.typing.statCard}>
                    <p className={styles.typing.statLabel}>
                      Mistakes
                    </p>

                      <h3 className={styles.typing.mistakeValue}> 
                      {mistakes}
                    </h3>
                  </div>

                  <div className={styles.typing.statCard}>
                    <p className={styles.typing.statLabel}>
                      WPM
                    </p>

                    <h3 className={styles.typing.wpmValue}>
                      {wpm}
                    </h3>
                  </div>
                </div>
                <div className={styles.typing.restartContainer}>
                  <button
                    onClick={startNewTest}
                    className={styles.debug.submitButton}
                  >
                    🔄 Restart
                  </button>
                </div>
              </div>
            ) : (
             <div className={styles.typing.resultOverlay}>

  <div className={styles.typing.resultWrapper}>

    <h2 className={styles.typing.resultTitle}>
      ⌨ Typing Complete!
    </h2>

      <p className={styles.typing.resultSubtitle}>
      Here are your typing statistics
    </p>

    <div className={styles.typing.resultGrid}>

      <div className={styles.typing.resultCard}>
        <p className={styles.typing.resultLabel}>⚡ WPM</p>

        <h2 className="text-5xl font-bold text-cyan-400 mt-3">
          {wpm}
        </h2>
      </div>

      <div className={styles.typing.resultCard}>
        <p className={styles.typing.resultLabel}>🎯 Accuracy</p>

        <h2 className="text-5xl font-bold text-blue-400 mt-3">
          {accuracy}%
        </h2>
      </div>

      <div className={styles.typing.resultCard}>
        <p className={styles.typing.resultLabel}>❌ Mistakes</p>

        <h2 className="text-5xl font-bold text-red-400 mt-3">
          {mistakes}
        </h2>
      </div>

      <div className={styles.typing.resultCard}>
        <p className={styles.typing.resultLabel}>🏆 Best WPM</p>

        <h2 className="text-5xl font-bold text-indigo-400 mt-3">
          {highScore}
        </h2>
      </div>

    </div>

    <div className={styles.typing.badgeContainer}>

      {wpm >= 80 && (
        <h3 className={styles.typing.legendBadge}>
          👑 Typing Legend
        </h3>
      )}

      {wpm >= 60 && wpm < 80 && (
        <h3 className={styles.typing.fastBadge}>
          🚀 Fast Typer
        </h3>
      )}

      {wpm >= 40 && wpm < 60 && (
        <h3 className={styles.typing.goodBadge}>
          ⌨ Good Speed
        </h3>
      )}

      {wpm < 40 && (
        <h3 className={styles.typing.practiceBadge}>
          💪 Keep Practicing
        </h3>
      )}

    </div>

    <div className={styles.typing.buttonRow}>

      <button
        onClick={startNewTest}
        className={styles.typing.playAgainButton}
      >
        🔄 Play Again
      </button>

      <button
        onClick={() => setIsOpen(false)}
       className={styles.typing.closeResultButton}
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