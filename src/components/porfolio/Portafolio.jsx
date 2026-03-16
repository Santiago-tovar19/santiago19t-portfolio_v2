import React, { useState } from "react";
import useInView from "../../hooks/useInView";
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

const inmobiliariaImages = [inmo1, inmo2, inmo3, inmo4, inmo5];
const proyexImages = [proyex1, proyex2, proyex3];

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
    <section
      ref={sectionRef}
      class={`portfolio bg-[#22282f] py-20 transition-all duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      id="portafolio"
    >
      <div class="center-text">
        <h2 className="text-4xl mb-10">
          <span>Portafolio</span>
        </h2>
      </div>
      <div class="portfolio-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:w-[1240px] px-10 justify-center items-center">
        <div
          class="row md:w-full lg:w-[95%] cursor-pointer"
          onClick={() => openModal(inmobiliariaImages)}
        >
          <img className="h-full" src={inmo1} alt="" />
          <div class="main-row">
            <div class="row-text">
              <h5>Inmobiliaria App</h5>
            </div>
            <div class="row-icon">
              <i class="ri-image-line"></i>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-x-2 gap-y-4 mt-4">
            <span className="col-span-1 text-white border-b-4 border-[#075fe4] text-center font-bold">
              Php
            </span>
            <span className="col-span-1 text-white border-b-4 border-[#075fe4] text-center font-bold">
              Laravel
            </span>
            <span className="col-span-1 text-white border-b-4 border-[#075fe4] text-center font-bold">
              Angular
            </span>
            <span className="col-span-1 text-white border-b-4 border-[#075fe4] text-center font-bold">
              MySql
            </span>
            <span className="col-span-1 text-white border-b-4 border-[#075fe4] text-center font-bold">
              ApexChart
            </span>
          </div>
        </div>
        <div
          class="row md:w-full lg:w-[95%] cursor-pointer"
          onClick={() => openModal(proyexImages)}
        >
          <img className="h-full" src={proyex1} alt="" />
          <div class="main-row">
            <div class="row-text">
              <h5>Proyexiot</h5>
            </div>
            <div class="row-icon">
              <i class="ri-image-line"></i>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-x-2 gap-y-4 mt-4">
            <span className="col-span-1 text-white border-b-4 border-[#075fe4] text-center font-bold">
              Laravel
            </span>
            <span className="col-span-1 text-white border-b-4 border-[#075fe4] text-center font-bold">
              Php
            </span>
            <span className="col-span-1 text-white border-b-4 border-[#075fe4] text-center font-bold">
              Angular
            </span>
            <span className="col-span-1 text-white border-b-4 border-[#075fe4] text-center font-bold">
              MySql
            </span>
            <span className="col-span-1 text-white border-b-4 border-[#075fe4] text-center font-bold">
              Fuse
            </span>
          </div>
        </div>
        <a
          class="row md:w-full lg:w-[95%]"
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
          <div className="grid grid-cols-3 gap-x-2 gap-y-4 mt-4">
            <span className="col-span-1 text-white  border-b-4  border-[#075fe4] text-center font-bold">
              React
            </span>
            <span className="col-span-1 text-white  border-b-4  border-[#075fe4] text-center font-bold">
              Php
            </span>
            <span className="col-span-1 text-white  border-b-4  border-[#075fe4] text-center font-bold">
              Laravel
            </span>
            <span className="col-span-1 text-white  border-b-4  border-[#075fe4] text-center font-bold">
              Tailwind
            </span>
            <span className="col-span-1 text-white  border-b-4  border-[#075fe4] text-center font-bold">
              MySql
            </span>
          </div>
        </a>
        <a
          class="row md:w-full lg:w-[95%]"
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
          <div className="grid grid-cols-3 gap-x-4 gap-y-4 mt-4">
            <span className="col-span-1 text-white border-b-4  border-[#075fe4]  text-center font-bold">
              NextJs
            </span>
            <span className="col-span-1 text-white border-b-4  border-[#075fe4] text-center font-bold">
              Postgres
            </span>
            <span className="col-span-1 text-white border-b-4  border-[#075fe4] text-center font-bold">
              Prisma
            </span>
            <span className="col-span-1 text-white border-b-4  border-[#075fe4] text-center font-bold">
              Tailwind
            </span>
            <span className="col-span-1 text-white border-b-4  border-[#075fe4] text-center font-bold">
              Eccomerce
            </span>
            <span className="col-span-1 text-white border-b-4  border-[#075fe4] text-center font-bold">
              typeScript
            </span>
          </div>
        </a>
        <a
          class="row md:w-full lg:w-[95%]"
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
          <div className="grid grid-cols-3 gap-x-2 gap-y-4 mt-4">
            <span className="col-span-1 text-white border-b-4 border-[#075fe4] text-center font-bold">
              React
            </span>
            <span className="col-span-1 text-white border-b-4 border-[#075fe4] text-center font-bold">
              PokeAPI
            </span>
            <span className="col-span-1 text-white border-b-4 border-[#075fe4] text-center font-bold">
              Router
            </span>
            <span className="col-span-1 text-white border-b-4 border-[#075fe4] text-center font-bold">
              Pokedex
            </span>
          </div>
        </a>
        <a
          class="row md:w-full lg:w-[95%]"
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
          <div className="grid grid-cols-3 gap-x-2 gap-y-4 mt-4">
            <span className="col-span-1 text-white border-b-4 border-[#075fe4] text-center font-bold">
              React
            </span>
            <span className="col-span-1 text-white border-b-4 border-[#075fe4] text-center font-bold">
              Tailwind
            </span>
            <span className="col-span-1 text-white border-b-4 border-[#075fe4] text-center font-bold">
              Diseño
            </span>
            <span className="col-span-1 text-white border-b-4 border-[#075fe4] text-center font-bold">
              Filtros
            </span>
          </div>
        </a>
      </div>

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
    </section>
  );
}
