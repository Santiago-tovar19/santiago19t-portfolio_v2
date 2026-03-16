import React, { useState } from "react";
import SobreMi from "./SobreMi";
import Educacion from "./Educacion";
import Habilidades from "./Habilidades";
import Experiencia from "./Experiencia";

export default function About() {
  const [aboutFilter, setAboutFilter] = useState("ABOUT");

  const sections = {
    ABOUT: "Sobre mi",
    EDUCACION: "Educación",
    HABILIDADES: "Habilidades",
    EXPERIENCIA: "Experiencia",
  };

  return (
    <section className="lg:h-screen flex bg-[#22282f] py-14 lg:py-0" id="sobre-mi">
      <div className="w-full max-w-[1140px] flex flex-col items-center justify-center mx-auto px-6 lg:px-0">
        <h2 className="text-white text-4xl mb-10">{sections[aboutFilter]}</h2>

        <div className="w-full bg-[#1b1f24] rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.25)] border border-[#2a3138]">
          <div className="flex flex-col lg:flex-row min-h-[500px]">
            <aside className="w-full lg:w-[280px] bg-[#181c22] border-b lg:border-b-0 lg:border-r border-[#2a3138] flex flex-col justify-center px-6 py-8">
              <button
                onClick={() => setAboutFilter("ABOUT")}
                className={`w-full text-left text-lg py-5 border-b border-[#13bbff] transition-all duration-300 cursor-pointer ${
                  aboutFilter === "ABOUT"
                    ? "text-[#13bbff]"
                    : "text-white hover:text-[#13bbff]"
                }`}
              >
                Sobre mi
              </button>

              <button
                onClick={() => setAboutFilter("EDUCACION")}
                className={`w-full text-left text-lg py-5 border-b border-[#13bbff] transition-all duration-300 cursor-pointer ${
                  aboutFilter === "EDUCACION"
                    ? "text-[#13bbff]"
                    : "text-white hover:text-[#13bbff]"
                }`}
              >
                Educación
              </button>

              <button
                onClick={() => setAboutFilter("HABILIDADES")}
                className={`w-full text-left text-lg py-5 border-b border-[#13bbff] transition-all duration-300 cursor-pointer ${
                  aboutFilter === "HABILIDADES"
                    ? "text-[#13bbff]"
                    : "text-white hover:text-[#13bbff]"
                }`}
              >
                Habilidades
              </button>

              <button
                onClick={() => setAboutFilter("EXPERIENCIA")}
                className={`w-full text-left text-lg py-5 transition-all duration-300 cursor-pointer ${
                  aboutFilter === "EXPERIENCIA"
                    ? "text-[#13bbff]"
                    : "text-white hover:text-[#13bbff]"
                }`}
              >
                Experiencia
              </button>
            </aside>

            <div className="flex-1 px-6 py-8 lg:px-10 lg:py-10 text-white">
              {
                {
                  ABOUT: <SobreMi />,
                  EDUCACION: <Educacion />,
                  HABILIDADES: <Habilidades />,
                  EXPERIENCIA: <Experiencia />,
                }[aboutFilter]
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
