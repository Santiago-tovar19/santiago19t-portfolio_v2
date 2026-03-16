import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;
    let animFrame;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
      animFrame = requestAnimationFrame(animate);
    };

    const onMouseEnterInteractive = () => ring.classList.add("cursor-ring--hover");
    const onMouseLeaveInteractive = () => ring.classList.remove("cursor-ring--hover");

    const interactives = document.querySelectorAll("a, button, [role='button'], .row");
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", onMouseEnterInteractive);
      el.addEventListener("mouseleave", onMouseLeaveInteractive);
    });

    document.addEventListener("mousemove", onMouseMove);
    animFrame = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animFrame);
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", onMouseEnterInteractive);
        el.removeEventListener("mouseleave", onMouseLeaveInteractive);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "6px",
          height: "6px",
          borderRadius: "50%",
          backgroundColor: "#13bbff",
          pointerEvents: "none",
          zIndex: 99999,
          transform: "translate(-50%, -50%)",
          marginLeft: "-3px",
          marginTop: "-3px",
          transition: "opacity 0.2s",
        }}
      />
      <div
        ref={ringRef}
        className="cursor-ring"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "36px",
          height: "36px",
          borderRadius: "50%",
          border: "2px solid rgba(19, 187, 255, 0.6)",
          pointerEvents: "none",
          zIndex: 99998,
          marginLeft: "-18px",
          marginTop: "-18px",
          transition: "width 0.3s ease, height 0.3s ease, border-color 0.3s ease, background 0.3s ease",
        }}
      />
      <style>{`
        body { cursor: none !important; }
        a, button, [role='button'], .row { cursor: none !important; }
        .cursor-ring--hover {
          width: 56px !important;
          height: 56px !important;
          margin-left: -28px !important;
          margin-top: -28px !important;
          border-color: rgba(19, 187, 255, 0.9) !important;
          background: rgba(19, 187, 255, 0.08) !important;
        }
      `}</style>
    </>
  );
}
