import React, { useEffect, useState } from "react";
import useMenu from "../../hooks/useMenu";
import photo3 from "../../assets/proyectos/Photo3.jpg";

export default function SobreMi() {
  const { showMenu } = useMenu();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="flex flex-col lg:flex-row items-center h-full justify-center mx-10 gap-x-16">
        <div
          className={`lg:w-1/3 w-full px-4 py-6 lg:px-0 lg:py-0 md:flex md:items-center md:justify-center transition-all duration-500 ${
            mounted ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
          }`}
        >
          <img src={photo3} alt="" className="rounded-lg" />
        </div>
        <div
          className={`lg:w-[70%] text-center lg:text-left transition-all duration-500 delay-150 ${
            mounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"
          }`}
        >
          <h2 className="text-3xl mb-4">
            Acerca <span className="text-[#13bbff] ">de mi</span>
          </h2>
          <p className="leading-8 mb-4">
            Soy un desarrollador con 4 años de experiencia Mi enfoque abarca el
            desarrollo frontend con React y Angular, así como el backend
            utilizando Laravel y Node.js. Soy un firme creyente de que de que
            siempre hay algo nuevo por aprender y eso me motiva para mejorar
            cada dia. Para mi cada proyecto no es solo codigo, es la forma en la
            que ayudo a las personas a transformar sus ideas en realidad digital
          </p>
          <h5>Conecta conmigo:</h5>
          <div className="flex gap-4 mt-4 text-lg justify-center lg:justify-start mb-4 md:mb-4 lg:mb-0">
            <span
              className={`${
                showMenu ? "" : "transform hover:scale-110 transition-al"
              }`}
            >
              <a href="https://github.com/Santiago-tovar19" target="_blank">
                <i class="ri-github-fill text-[#13bbff] text-2xl"></i>
              </a>
            </span>
            <span
              className={`${
                showMenu ? "" : "transform hover:scale-110 transition-all"
              }`}
            >
              <a
                href="https://www.linkedin.com/in/santiago-tovar-86979a2aa/"
                target="_blank"
              >
                <i class="ri-linkedin-line text-[#13bbff] text-2xl"></i>
              </a>
            </span>
            {/* <span
              className={`${
                showMenu ? "" : "transform hover:scale-110 transition-al"
              }`}
            >
              <a href="">
                <i class="ri-linkedin-box-fill text-[#13bbff] "></i>
              </a>
            </span> */}
            {/*
            <span
              className={`${
                showMenu ? "" : "transform hover:scale-110 transition-al"
              }`}
            >
              <a href="">
                <i class="ri-github-fill text-[#13bbff] "></i>
              </a>
            </span>
            <span
              className={`${
                showMenu ? "" : "transform hover:scale-110 transition-al"
              }`}
            >
              <a href="">
                <i class="ri-github-fill text-[#13bbff] "></i>
              </a>
            </span> */}
          </div>
        </div>
      </div>
    </>
  );
}
