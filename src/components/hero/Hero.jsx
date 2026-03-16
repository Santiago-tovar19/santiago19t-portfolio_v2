import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import useMenu from "../../hooks/useMenu";
import photo from "../../assets/proyectos/Photo2.png";
import pdf from "../../assets/pdf/CV_Santigo_Tovar_Español.pdf";

export default function Hero() {
  const { showMenu, abrirCorreo } = useMenu();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <section
        class="lg:h-screen my-24 lg:my-0 pt-10  flex flex-col lg:flex-row items-center justify-center "
        id="home"
      >
        <div className="w-full px-8 lg:w-[1140px] flex flex-col lg:flex-row items-center justify-between gap-4">
          <div
            className={`transition-all duration-700 ${
              mounted ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <h4 className="text-2xl text-center lg:text-left">
              Hola! Yo soy :
            </h4>
            <h1 className="text-3xl lg:text-6xl my-5 text-center lg:text-left font-semibold text-[#13bbff] ">
              <Typewriter
                options={{
                  strings: [
                    "Santiago Tovar",
                    "Ingeniero Industrial",
                    "Desarrollador de Software",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 60,
                  deleteSpeed: 40,
                }}
              />
            </h1>
            <p
              className={`text-[18px] font-normal text-center lg:text-left md:mx-14 lg:mx-0 lg:w-[620px] text-[#c3cad5] leading-[30px] mb-4 transition-all duration-700 delay-200 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Soy un apasionado{" "}
              <span className="text-[#13bbff] ">
                {" "}
                desarrollador de software{" "}
              </span>
              con 5 años de experiencia. Me especializo en el desarrollo de{" "}
              sistemas, interfaces de usuario y aplicaciones web. Además, tengo
              habilidades en el diseño de páginas y la búsqueda de soluciones
              tecnológicas.
            </p>
            <div
              className={`mb-10 text-center lg:text-left transition-all duration-700 delay-300 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              {/* <a href="#">
                <i
                  class={`
                ri-facebook-circle-line inline-flex items-center justify-center w-10 h-10 text-[#13bbff] rounded-xl text-xl mr-4 cursor-pointer shadow-xl transition-all
                ${
                  showMenu
                    ? ""
                    : "backdrop-brightness-88 transform hover:scale-110"
                }
                hover:scale-110 -z-50`}
                ></i>
              </a> */}
              <a href="https://github.com/Santiago-tovar19" target="_blank">
                <i
                  class={`
                ri-github-line inline-flex items-center justify-center w-10 h-10 text-[#13bbff] rounded-xl text-xl mr-4 cursor-pointer shadow-xl transition-all ${
                  showMenu
                    ? ""
                    : "backdrop-brightness-88 transform hover:scale-110"
                }
                `}
                ></i>
              </a>
              <a
                href="https://www.linkedin.com/in/santiago-tovar-86979a2aa/"
                target="_blank"
              >
                <i
                  class={`
                ri-linkedin-line inline-flex items-center justify-center w-10 h-10 text-[#13bbff] rounded-xl text-xl mr-4 cursor-pointer shadow-xl transition-all
                ${
                  showMenu
                    ? ""
                    : "backdrop-brightness-88 transform hover:scale-110"
                }
                `}
                ></i>
              </a>
            </div>
            <div
              className={`main-btn text-center lg:text-left mb-10 lg:mb-0 transition-all duration-700 delay-[400ms] ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <a
                href="#"
                class="inline-block px-4 py-2 bg-[#13bbff] text-[#1b1f24] border-2 border-[#13bbff] rounded-lg font-semibold text-[15px] transition-all duration-500 ease-in-out hover:bg-transparent hover:text-[#13bbff] "
                onClick={() => abrirCorreo()}
              >
                Salúdame
              </a>
              <a
                href={pdf}
                target="_blank"
                class="inline-block px-4 py-2 hover:bg-[#13bbff] hover:text-[#1b1f24] border-2 border-[#13bbff] rounded-lg font-semibold text-[15px] transition-all duration-500 ease-in-out bg-transparent  text-[#13bbff] ml-4"
              >
                Curriculum
              </a>
            </div>
          </div>
          <div
            className={`transition-all duration-700 delay-300 ${
              mounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <img src={photo} alt="" />
          </div>
        </div>
      </section>
    </>
  );
}
