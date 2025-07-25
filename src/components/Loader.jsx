import { useEffect, useMemo, useState } from "react";

function Loader({ onFinish }) {
  const [exit, setExit] = useState(false);

  const letters = ["L", "O", "A", "D", "I", "N", "G"];
  const dotts = [".", ".", "."];

  const balls = useMemo(() => {
    return Array.from({ length: 500 }, (_, i) => {
      const colors = [
        "bg-blue-400/70",
        "bg-cyan-800/70",
        "bg-blue-800/70",
        "bg-blue-300/70",
        "bg-blue-200/70",
        "bg-blue-900/70",
      ];
      const angle = Math.random() * 2 * Math.PI;
      const radius = Math.random() * 100;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;

      const dx = (Math.random() - 0.5) * 150;
      const dy = (Math.random() - 0.5) * 150;
      const duration = 1 + Math.random();
      const delay = Math.random();
      const animationName = `float-${i}`;

      // dynamic css animation
      const styleSheet = document.styleSheets[0];
      const keyframes = `
        @keyframes ${animationName} {
          0%, 100% { transform: translate(0px, 0px); }
          50% { transform: translate(${dx}px, ${dy}px); }
        }
      `;
      styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

      // choose random color
      const colorClass = colors[Math.floor(Math.random() * colors.length)];

      return { x, y, animationName, duration, delay, colorClass };
    });
  }, []);

  useEffect(() => {
    const timer1 = setTimeout(() => setExit(true), 2000);
    const timer2 = setTimeout(() => onFinish(), 3000);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onFinish]);

  return (
    <div className="fixed inset-0 bg-gray-900 flex flex-col items-center justify-center z-50 overflow-hidden">
      <div className="relative w-64 h-64">
        {balls.map(({ x, y, animationName, duration, delay, colorClass }, index) => {
          const tx = exit ? x * 2 : x;
          const ty = exit ? y * 2 : y;

          return (
            <div
              key={index}
              className="absolute top-1/2 left-1/2"
              style={{
                transform: `translate(${tx}px, ${ty}px)`,
                transition: "transform 0.8s ease-out, opacity 0.8s",
                opacity: exit ? 0 : 1,
              }}
            >
              <div
                className={`w-3 h-3 rounded-full ${colorClass}`}
                style={{
                  animation: `${animationName} ${duration}s ease-in-out infinite`,
                  animationDelay: `${delay}s`,
                }}
              />
            </div>
          );
        })}
      </div>

      <div className="flex flex-row mt-6 justify-center items-center">
        {letters.map((letter, index) => (
          <span
            key={index}
            className={`ml-5 text-white text-4xl font-bebas mt-6 inline-block transition-opacity duration-500 ${
              exit ? "opacity-0" : "opacity-100"
            } animate-pulse`}
            style={{ animationDelay: `${index * 0.4}s` }}
          >
            {letter === " " ? "\u00A0" : letter}
          </span>
        ))}
        {dotts.map((dott, index) => (
          <span
            key={index}
            className={`ml-5 text-white text-4xl font-bebas mt-6 inline-block transition-opacity duration-500 ${
              exit ? "opacity-0" : "opacity-100"
            } animate-pulse`}
            style={{ animationDelay: `${index * 0.3}s` }}
          >
            {dott}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Loader;
