import { useEffect, useRef, useState } from "react";

export default function CardCarousel({ images, interval = 4500, startDelay = 0 }) {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (images.length <= 1) return;

    timeoutRef.current = setTimeout(() => {
      intervalRef.current = setInterval(() => {
        setCurrent((prev) => (prev + 1) % images.length);
      }, interval);
    }, startDelay);

    return () => {
      clearTimeout(timeoutRef.current);
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className="relative w-full overflow-hidden rounded-lg mb-5" style={{ height: "160px" }}>
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt=""
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "8px",
            transform: `translateX(${(i - current) * 100}%)`,
            transition: "transform 0.5s cubic-bezier(0.77, 0, 0.175, 1)",
          }}
        />
      ))}
      <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5" style={{ zIndex: 1 }}>
        {images.map((_, i) => (
          <span
            key={i}
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              display: "inline-block",
              background: i === current ? "#13bbff" : "rgba(255,255,255,0.4)",
              transition: "background 0.3s ease",
            }}
          />
        ))}
      </div>
    </div>
  );
}
