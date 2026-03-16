import React, { useState } from "react";
import useInView from "../../hooks/useInView";
import CardCarousel from "./CardCarousel";
import CodeBackground from "../ui/CodeBackground";
import "./portafolio.css";
import quiosco from "../../assets/proyectos/Screenshot_841.png";
import devjobs from "../../assets/proyectos/Screenshot_847.png";
import journal from "../../assets/proyectos/Screenshot_842.png";
import delivered from "../../assets/proyectos/Screenshot_843.png";
import eccomerce from "../../assets/proyectos/Screenshot_844.png";
import fq from "../../assets/proyectos/Screenshot_846.png";
import gestor from "../../assets/proyectos/Screenshot_848.png";
import generador from "../../assets/proyectos/Screenshot_849.png";
import pokedex from "../../assets/proyectos/Screenshot_851.png";
import calend from "../../assets/proyectos/Screenshot_863.png";
import TesloShop from "../../assets/proyectos/Screenshot_1919.png";
import inmo1 from "../../assets/proyectos/inmobiliaria-1.png";
import inmo2 from "../../assets/proyectos/inmobiliaria-2.png";
import inmo3 from "../../assets/proyectos/inmobiliaria-3.png";
import inmo4 from "../../assets/proyectos/inmobiliaria-4.png";
import inmo5 from "../../assets/proyectos/inmobiliaria-5.png";
import proyex1 from "../../assets/proyectos/proyex-1.png";
import proyex2 from "../../assets/proyectos/proyex-2.png";
import proyex3 from "../../assets/proyectos/proyex-3.png";
import vasAviation1 from "../../assets/proyectos/vas-aviation-1.png";
import vasAviation2 from "../../assets/proyectos/vas-aviation-2.png";
import vasAviation3 from "../../assets/proyectos/vas-aviation-3.png";
import vasAviation4 from "../../assets/proyectos/vas-aviation-4.png";
import agrourbana1 from "../../assets/proyectos/agrourbana-1.png";
import agrourbana2 from "../../assets/proyectos/agrourbana-2.png";
import agrourbana3 from "../../assets/proyectos/agrourbana-3.png";
import agrourbana4 from "../../assets/proyectos/agrourbana-4.png";
import superplan1 from "../../assets/proyectos/superplan-1.png";
import superplan2 from "../../assets/proyectos/superplan-2.png";
import superplan3 from "../../assets/proyectos/superplan-3.png";

const inmobiliariaImages = [inmo1, inmo2, inmo3, inmo4, inmo5];
const proyexImages = [proyex1, proyex2, proyex3];
const vasAviationImages = [vasAviation1, vasAviation2, vasAviation3, vasAviation4];
const agrourbanaImages = [agrourbana1, agrourbana2, agrourbana3, agrourbana4];
const superplanImages = [superplan1, superplan2, superplan3];

const techIcons = {
  React:      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  Php:        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
  Laravel:    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
  Angular:    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg",
  MySql:      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
  NextJs:     "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  Postgres:   "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  Prisma:     "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg",
  Tailwind:   "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  typeScript: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  RxJS:       "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rxjs/rxjs-original.svg",
  ApexChart:  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachekafka/apachekafka-original.svg",
};

function TechBadge({ name }) {
  const icon = techIcons[name];
  return (
    <span
      title={name}
      className="tech-badge"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "40px",
        borderRadius: "10px",
        background: "rgba(255,255,255,0.08)",
        cursor: "default",
      }}
    >
      {icon ? (
        <img src={icon} alt={name} style={{ width: "24px", height: "24px", display: "block", margin: "0", borderRadius: "0", flexShrink: 0 }} />
      ) : (
        <span style={{ fontSize: "10px", fontWeight: 600, color: "rgba(255,255,255,0.75)", textAlign: "center", lineHeight: 1.2, padding: "0 4px" }}>{name}</span>
      )}
    </span>
  );
}

export default function Portafolio() {
  const [modal, setModal] = useState({ open: false, closing: false, images: [], index: 0 });
  const [sectionRef, inView] = useInView();
  const [imgVisible, setImgVisible] = useState(true);

  const openModal = (images) => setModal({ open: true, closing: false, images, index: 0 });

  const closeModal = () => {
    setModal((m) => ({ ...m, closing: true }));
    setTimeout(() => setModal({ open: false, closing: false, images: [], index: 0 }), 250);
  };

  const changeSlide = (newIndex) => {
    setImgVisible(false);
    setTimeout(() => {
      setModal((m) => ({ ...m, index: newIndex }));
      setImgVisible(true);
    }, 100);
  };

  const prev = () => changeSlide((modal.index - 1 + modal.images.length) % modal.images.length);
  const next = () => changeSlide((modal.index + 1) % modal.images.length);

  return (
    <>
    <section
      ref={sectionRef}
      class={`portfolio bg-[#22282f] py-20 relative overflow-hidden section-bg transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
      id="portafolio"
    >
      <CodeBackground />
      <div class="center-text" style={{ position: "relative", zIndex: 1 }}>
        <h2 className="text-4xl mb-10">
          <span>Portafolio</span>
        </h2>
      </div>
      <div class="portfolio-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:w-[1240px] px-10 justify-center items-center" style={{ position: "relative", zIndex: 1 }}>
        <div
          class="row md:w-full lg:w-[95%] cursor-pointer transition-all duration-500"
          style={{ opacity: inView ? 1 : 0, transitionDelay: "100ms", transform: inView ? undefined : "translateY(24px)" }}
          onClick={() => openModal(inmobiliariaImages)}
        >
          <CardCarousel images={inmobiliariaImages} startDelay={0} />
          <div class="main-row">
            <div class="row-text">
              <h5>Inmobiliaria App</h5>
            </div>
            <div class="row-icon">
              <i class="ri-image-line"></i>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 mt-4">
            <TechBadge name="Php" />
            <TechBadge name="Laravel" />
            <TechBadge name="Angular" />
            <TechBadge name="MySql" />
            <TechBadge name="ApexChart" />
          </div>
        </div>
        <div
          class="row md:w-full lg:w-[95%] cursor-pointer transition-all duration-500"
          style={{ opacity: inView ? 1 : 0, transitionDelay: "200ms", transform: inView ? undefined : "translateY(24px)" }}
          onClick={() => openModal(proyexImages)}
        >
          <CardCarousel images={proyexImages} startDelay={500} />
          <div class="main-row">
            <div class="row-text">
              <h5>Proyexiot</h5>
            </div>
            <div class="row-icon">
              <i class="ri-image-line"></i>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 mt-4">
            <TechBadge name="Laravel" />
            <TechBadge name="Php" />
            <TechBadge name="Angular" />
            <TechBadge name="MySql" />
            <TechBadge name="Fuse" />
          </div>
        </div>
        <div
          class="row md:w-full lg:w-[95%] cursor-pointer transition-all duration-500"
          style={{ opacity: inView ? 1 : 0, transitionDelay: "300ms", transform: inView ? undefined : "translateY(24px)" }}
          onClick={() => openModal(vasAviationImages)}
        >
          <CardCarousel images={vasAviationImages} startDelay={1000} />
          <div class="main-row">
            <div class="row-text">
              <h5>Vas Aviation</h5>
            </div>
            <div class="row-icon">
              <i class="ri-image-line"></i>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 mt-4">
            <TechBadge name="Angular" />
            <TechBadge name="Laravel" />
            <TechBadge name="Php" />
            <TechBadge name="RxJS" />
          </div>
        </div>
        <div
          class="row md:w-full lg:w-[95%] cursor-pointer transition-all duration-500"
          style={{ opacity: inView ? 1 : 0, transitionDelay: "400ms", transform: inView ? undefined : "translateY(24px)" }}
          onClick={() => openModal(agrourbanaImages)}
        >
          <CardCarousel images={agrourbanaImages} startDelay={1500} />
          <div class="main-row">
            <div class="row-text">
              <h5>Agrourbana</h5>
            </div>
            <div class="row-icon">
              <i class="ri-image-line"></i>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 mt-4">
            <TechBadge name="Angular" />
            <TechBadge name="Laravel" />
            <TechBadge name="Php" />
            <TechBadge name="RxJS" />
          </div>
        </div>
        <div
          class="row md:w-full lg:w-[95%] cursor-pointer transition-all duration-500"
          style={{ opacity: inView ? 1 : 0, transitionDelay: "500ms", transform: inView ? undefined : "translateY(24px)" }}
          onClick={() => openModal(superplanImages)}
        >
          <CardCarousel images={superplanImages} startDelay={2000} />
          <div class="main-row">
            <div class="row-text">
              <h5>Super Plan</h5>
            </div>
            <div class="row-icon">
              <i class="ri-image-line"></i>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 mt-4">
            <TechBadge name="Angular" />
            <TechBadge name="Laravel" />
            <TechBadge name="Php" />
            <TechBadge name="RxJS" />
          </div>
        </div>
        <a
          class="row md:w-full lg:w-[95%] transition-all duration-500"
          style={{ opacity: inView ? 1 : 0, transitionDelay: "600ms", transform: inView ? undefined : "translateY(24px)" }}
          href=""
          target="_blank"
        >
          <img className="h-full" src={quiosco} alt="h-full" />
          <div class="main-row">
            <div class="row-text">
              <h5>Quiosco App</h5>
            </div>
            <div class="row-icon">
              <a href="https://github.com/Santiago-tovar19/quiosco-frontend" target="_blank">
                {" "}
                <i class="ri-github-fill"></i>
              </a>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 mt-4">
            <TechBadge name="React" />
            <TechBadge name="Php" />
            <TechBadge name="Laravel" />
            <TechBadge name="Tailwind" />
            <TechBadge name="MySql" />
          </div>
        </a>
        <a
          class="row md:w-full lg:w-[95%] transition-all duration-500"
          style={{ opacity: inView ? 1 : 0, transitionDelay: "400ms", transform: inView ? undefined : "translateY(24px)" }}
          href="https://next-teslo-shop-santiago19t.vercel.app/"
          target="_blank"
        >
          <img src={TesloShop} alt="" />
          <div class="main-row">
            <div class="row-text">
              <h5>Teslo | Shop</h5>
            </div>
            <div class="row-icon">
              <a href="https://github.com/Santiago-tovar19/next-teslo-shop" target="_blank">
                {" "}
                <i class="ri-github-fill"></i>
              </a>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 mt-4">
            <TechBadge name="NextJs" />
            <TechBadge name="Postgres" />
            <TechBadge name="Prisma" />
            <TechBadge name="Tailwind" />
            <TechBadge name="typeScript" />
          </div>
        </a>
        <a
          class="row md:w-full lg:w-[95%] transition-all duration-500"
          style={{ opacity: inView ? 1 : 0, transitionDelay: "500ms", transform: inView ? undefined : "translateY(24px)" }}
          href="https://react-pokedex-app-santiago19t.netlify.app/"
          target="_blank"
        >
          <img src={pokedex} alt="" />
          <div class="main-row">
            <div class="row-text">
              <h5>Pokedex</h5>
            </div>
            <div class="row-icon">
              <a href="https://github.com/Santiago-tovar19/react-pokedex-app" target="_blank">
                {" "}
                <i class="ri-github-fill"></i>
              </a>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 mt-4">
            <TechBadge name="React" />
            <TechBadge name="PokeAPI" />
            <TechBadge name="Router" />
          </div>
        </a>
        <a
          class="row md:w-full lg:w-[95%] transition-all duration-500"
          style={{ opacity: inView ? 1 : 0, transitionDelay: "600ms", transform: inView ? undefined : "translateY(24px)" }}
          href="https://santiago19t-food-app.netlify.app"
          target="_blank"
        >
          <img src={delivered} alt="" />
          <div class="main-row">
            <div class="row-text">
              <h5>Delivered food page</h5>
            </div>
            <div class="row-icon">
              <a
                href="https://github.com/Santiago-tovar19/react-delivered-foods-page"
                target="_blank"
              >
                {" "}
                <i class="ri-github-fill"></i>
              </a>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 mt-4">
            <TechBadge name="React" />
            <TechBadge name="Tailwind" />
          </div>
        </a>
      </div>

      </section>

      {modal.open && (
        <div
          className={`fixed inset-0 z-[9999] flex items-center justify-center transition-all duration-250 ${
            modal.closing ? "bg-black/0" : "bg-black/80"
          }`}
          onClick={closeModal}
        >
          <div
            className={`relative w-full max-w-3xl mx-4 bg-[#1b1f24] rounded-xl overflow-hidden transition-all duration-250 ${
              modal.closing ? "opacity-0 scale-95" : "opacity-100 scale-100"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Cerrar */}
            <button
              className="absolute top-3 right-4 text-white text-3xl z-10 hover:text-[#13bbff] transition-colors"
              onClick={closeModal}
            >
              <i class="ri-close-line"></i>
            </button>

            {/* Imagen */}
            <div className="relative">
              <img
                src={modal.images[modal.index]}
                alt=""
                className={`w-full max-h-[70vh] object-contain transition-opacity duration-180 ${
                  imgVisible ? "opacity-100" : "opacity-0"
                }`}
              />

              {/* Flecha izquierda */}
              <button
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-[#13bbff] text-white text-2xl w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                onClick={prev}
              >
                <i class="ri-arrow-left-s-line"></i>
              </button>

              {/* Flecha derecha */}
              <button
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-[#13bbff] text-white text-2xl w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                onClick={next}
              >
                <i class="ri-arrow-right-s-line"></i>
              </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 py-4">
              {modal.images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setModal((m) => ({ ...m, index: i }))}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    i === modal.index ? "bg-[#13bbff]" : "bg-[#8892b0]"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
