import React, { useState, useEffect } from "react";
import useMenu from "../hooks/useMenu";

export default function Header() {
  const { showMenu, setShowMenu, abrirCorreo, handleClickMenu } = useMenu();
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sectionIds = ["contact", "proyectos", "portafolio", "sobre-mi", "home"];
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(id);
          return;
        }
      }
      setActiveSection("home");
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-[999] flex items-center justify-between transition-all duration-300 px-10 py-4 bg-[#1b1f24]"
      >

        <div
          className="bx bx-menu ml-auto text-4xl z-9999 cursor-pointer lg:hidden"
          id="menu-icon"
          onClick={() => setShowMenu(!showMenu)}
        ></div>
        <ul
          className={` fixed  w-[80%] xl:w-full md:w-[40%] h-full bg-[#22282f] lg:bg-transparent ${
            showMenu ? "right-0" : "-right-full text-r"
          } top-0 xl:static flex-1 flex flex-col xl:flex-row items-center justify-center gap-10 trasnition-all duration-500   z-[99999px]`}
        >
          <i
            class="bx bx-x relative -top-20 right-24 text-5xl lg:hidden"
            onClick={() => setShowMenu(!showMenu)}
          ></i>
          <li>
            <a
              href="#home"
              className={`text-lg font-medium ml-10 transition-all hover:text-[#13bbff] ${activeSection === "home" ? "text-[#13bbff]" : "text-[#c3cad5]"}`}
              onClick={() => setShowMenu(false)}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#sobre-mi"
              className={`text-lg font-medium ml-10 transition-all hover:text-[#13bbff] ${activeSection === "sobre-mi" ? "text-[#13bbff]" : "text-[#c3cad5]"}`}
              onClick={() => setShowMenu(false)}
            >
              Sobre
            </a>
          </li>
          <li>
            <a
              href="#portafolio"
              className={`text-lg font-medium ml-10 transition-all hover:text-[#13bbff] ${activeSection === "portafolio" ? "text-[#13bbff]" : "text-[#c3cad5]"}`}
              onClick={() => setShowMenu(false)}
            >
              Portafolio
            </a>
          </li>
          <li>
            <a
              href="#proyectos"
              className={`text-lg font-medium ml-10 transition-all hover:text-[#13bbff] ${activeSection === "proyectos" ? "text-[#13bbff]" : "text-[#c3cad5]"}`}
              onClick={() => setShowMenu(false)}
            >
              Proyectos
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={`text-lg font-medium ml-10 transition-all hover:text-[#13bbff] ${activeSection === "contact" ? "text-[#13bbff]" : "text-[#c3cad5]"}`}
              onClick={() => setShowMenu(false)}
            >
              Contacto
            </a>
          </li>
        </ul>

        <div class="top-btnn">
          <a
            href="#"
            class={`
            py-2 px-6 bg-transparent text-[#13bbff] border-2 border-[#13bbff] rounded-lg font-semibold text-15 transition-all duration-500 ease-in-out hover:bg-[#13bbff] hover:text-[#1b1f24] ${
              showMenu ? "" : "transform hover:scale-110 hidden md:block -z-50"
            }
            `}
            onClick={() => abrirCorreo()}
          >
            Contactame
          </a>
        </div>
      </header>
    </>
  );
}
