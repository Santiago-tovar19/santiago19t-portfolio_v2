import React from "react";
import Typewriter from "typewriter-effect";
import useInView from "../../hooks/useInView";
import useMenu from "../../hooks/useMenu";
import CodeBackground from "../ui/CodeBackground";

export default function Contacto() {
  const { abrirCorreo } = useMenu();
  const [sectionRef, inView] = useInView();
  return (
    <section
      ref={sectionRef}
      className={`lg:h-screen my-20 lg:mt-0 flex items-center justify-center relative overflow-hidden section-bg transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
      id="contact"
    >
      <CodeBackground />
      <div className="lg:w-[1240px] w-full flex flex-col items-center" style={{ position: "relative", zIndex: 1 }}>
        <h2 className="text-center text-3xl lg:text-6xl font-bold mb-10 text-[#13bbff]">
          <Typewriter
            options={{
              strings: ["¿Tienes un proyecto?", "¡Hablemos!"],
              autoStart: true,
              loop: true,
              delay: 90,
              deleteSpeed: 55,
            }}
          />
        </h2>
        <p className="lg:w-1/2 mx-16 lg:mx-0 lg:text-xl text-center text-[#c3cad5]">
          Estaré encantado de recibir tu contacto si quieres conversar acerca de
          nuevas oportunidades. Escríbeme, y te responderé tan pronto como vea
          tu mensaje.
        </p>
        <button
          className="mt-10 inline-block px-7 py-3 bg-[#13bbff] text-[#1b1f24] border-2 border-[#13bbff] rounded-lg font-semibold text-[15px] transition-all duration-500 ease-in-out hover:bg-transparent hover:text-[#13bbff]"
          onClick={abrirCorreo}
        >
          Contacto
        </button>
      </div>
    </section>
  );
}
