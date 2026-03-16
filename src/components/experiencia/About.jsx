import React, { useState, useEffect } from "react";
import useInView from "../../hooks/useInView";
import SobreMi from "../about/SobreMi";
import Educacion from "../about/Educacion";
import Habilidades from "../about/Habilidades";
import Experiencia from "../about/Experiencia";

export default function ExperienciaPage() {
  const [aboutFilter, setAboutFilter] = useState("ABOUT");
  const [visible, setVisible] = useState(true);
  const [sectionRef, inView] = useInView();

  const handleTabClick = (filter) => {
    if (filter === aboutFilter) return;
    setVisible(false);
    setTimeout(() => {
      setAboutFilter(filter);
      setVisible(true);
    }, 200);
  };

  return (
    <section
      ref={sectionRef}
      className={`lg:h-screen flex bg-[#22282f] py-14 lg:py-0 transition-all duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      id="sobre-mi"
    >
      <div className="w-[1140px] flex flex-col items-center justify-center mx-auto">
        <h2 className="text-white text-4xl text-right mb-10">
          {
            {
              ABOUT: "Sobre mi",
              EDUCACION: "Educación",
              HABILIDADES: "Habilidades",
              EXPERIENCIA: "Experiencia",
            }[aboutFilter]
          }
        </h2>
        <div className="lg:w-[1240px] w-full flex flex-col lg:flex-row lg:items-center lg:justify-between px-8 lg:px-0">
          <div className="bg-[#1b1f24] h-96  w-full lg:w-[33%] flex flex-col items-center justify-center  py-7 px-8 rounded-lg ">
            <div
              className="border-b border-solid border-[#13bbff] w-full text-center text-lg cursor-pointer pt-6"
              onClick={() => handleTabClick("ABOUT")}
            >
              <button
                className={`${
                  aboutFilter === "ABOUT" && "text-[#13bbff]"
                } mb-5 cursor-pointer`}
              >
                Sobre mi
              </button>
            </div>
            <div
              className="border-b border-solid border-[#13bbff] w-full text-center text-lg cursor-pointer pt-6"
              onClick={() => handleTabClick("EDUCACION")}
            >
              <button
                className={`${
                  aboutFilter === "EDUCACION" && "text-[#13bbff]"
                } mb-5 cursor-pointer`}
              >
                Educación
              </button>
            </div>
            <div
              className="border-b border-solid border-[#13bbff] w-full text-center text-lg cursor-pointer pt-6"
              onClick={() => handleTabClick("HABILIDADES")}
            >
              <button
                className={`${
                  aboutFilter === "HABILIDADES" && "text-[#13bbff]"
                } mb-5 cursor-pointer`}
              >
                Habilidades
              </button>
            </div>
            <div
              onClick={() => handleTabClick("EXPERIENCIA")}
              className="w-full text-center text-lg cursor-pointer pt-6"
            >
            </div>
          </div>
          <div
            className={`bg-[#1b1f24] h-full lg:h-[425px] w-full mt-14 lg:mt-0 lg:w-[65%] rounded-lg transition-all duration-200 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
          >
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
    </section>
  );
}
