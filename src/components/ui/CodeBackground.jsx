const symbols = [
  { text: "{ }", top: "8%", left: "3%", size: "1.8rem", duration: "2s", delay: "0s" },
  { text: "</>", top: "15%", left: "88%", size: "1.6rem", duration: "2.4s", delay: "0.3s" },
  { text: "=>", top: "30%", left: "6%", size: "1.5rem", duration: "2.2s", delay: "0.2s", mobileHide: true },
  { text: "//", top: "50%", left: "92%", size: "1.4rem", duration: "2.6s", delay: "0.5s", mobileHide: true },
  { text: "const", top: "65%", left: "4%", size: "1.3rem", duration: "2.3s", delay: "0.25s", mobileHide: true },
  { text: "[ ]", top: "75%", left: "85%", size: "1.6rem", duration: "2s", delay: "0.1s" },
  { text: "&&", top: "20%", left: "50%", size: "1.4rem", duration: "2.8s", delay: "0.7s", mobileHide: true },
  { text: "fn()", top: "85%", left: "45%", size: "1.4rem", duration: "2.4s", delay: "0.4s", mobileHide: true },
  { text: "===", top: "40%", left: "78%", size: "1.3rem", duration: "2.2s", delay: "0.6s", mobileHide: true },
  { text: "import", top: "55%", left: "20%", size: "1.3rem", duration: "2.5s", delay: "0.05s", mobileHide: true },
  { text: "<>", top: "90%", left: "10%", size: "1.5rem", duration: "2s", delay: "0.35s" },
  { text: "return", top: "10%", left: "65%", size: "1.3rem", duration: "2.3s", delay: "0.55s" },
  { text: "async", top: "85%", left: "68%", size: "1.3rem", duration: "2.4s", delay: "0.45s", mobileHide: true },
  { text: "()", top: "92%", left: "55%", size: "1.5rem", duration: "2s", delay: "0.7s", mobileHide: true },
  { text: "true", top: "95%", left: "75%", size: "1.2rem", duration: "2.3s", delay: "0.2s", mobileHide: true },
  { text: "{ }", top: "88%", left: "90%", size: "1.6rem", duration: "2s", delay: "0.3s" },
];

export default function CodeBackground() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      {symbols.map((s, i) => (
        <span
          key={i}
          className={`code-char ${s.mobileHide ? "hidden sm:inline" : ""}`}
          style={{
            top: s.top,
            left: s.left,
            fontSize: s.size,
            animationDuration: s.duration,
            animationDelay: s.delay,
          }}
        >
          {s.text}
        </span>
      ))}
    </div>
  );
}
