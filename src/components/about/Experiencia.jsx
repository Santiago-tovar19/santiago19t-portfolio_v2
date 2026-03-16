import React, { useState, useEffect } from "react";
import useInView from "../../hooks/useInView";
import CodeBackground from "../ui/CodeBackground";

export default function ExperienciaSection() {
  const jobs = [
    {
      company: "Sacre C.A",
      role: "Full Stack Developer",
      date: "Enero 2026 - Actualidad",
      responsibilities: [
        "Desarrollar y mantener una plataforma web para la gestión integral de usuarios y representantes de una unidad educativa, incluyendo módulos de registro, seguimiento y administración de datos.",
        "Diseñar e implementar interfaces de usuario intuitivas y responsivas, garantizando una experiencia fluida tanto para el personal administrativo como para los representantes.",
        "Construir y consumir APIs RESTful para la comunicación entre el frontend y el backend, asegurando la integridad y seguridad de los datos.",
        "Implementar control de acceso por roles, diferenciando permisos entre administradores, docentes y representantes dentro del sistema.",
        "Colaborar activamente en la definición de requerimientos funcionales, traduciendo necesidades del cliente en soluciones técnicas concretas y escalables.",
      ],
    },
    {
      company: "Vas Aviation",
      role: "Full Stack Developer",
      date: "2024 - Actualidad",
      responsibilities: [
        "Diseñar y desarrollar una plataforma web integral para la gestión operativa de servicios de aviación, abarcando módulos de reservas, seguimiento de vuelos y administración de tripulación.",
        "Implementar dashboards interactivos con visualización de datos en tiempo real, permitiendo al equipo operativo tomar decisiones informadas de manera ágil.",
        "Construir y mantener APIs RESTful robustas para la integración con sistemas externos de la industria aeronáutica, garantizando disponibilidad y rendimiento bajo alta demanda.",
        "Aplicar buenas prácticas de seguridad en el manejo de datos sensibles de pasajeros y operaciones, cumpliendo con estándares internacionales del sector.",
        "Colaborar directamente con stakeholders para traducir requerimientos del negocio en soluciones técnicas escalables y de alto impacto.",
      ],
    },
    {
      company: "Agrourbana",
      role: "Full Stack Developer",
      date: "2022 - 2024",
      responsibilities: [
        "Desarrollar y mantener una plataforma digital para la gestión y comercialización de productos agrícolas urbanos, conectando productores locales con consumidores finales.",
        "Implementar módulos de inventario, pedidos y logística de entrega, optimizando los flujos operativos de la empresa y reduciendo tiempos de gestión.",
        "Diseñar interfaces de usuario intuitivas y responsivas, priorizando la accesibilidad y facilidad de uso tanto para productores como para clientes.",
        "Integrar pasarelas de pago y sistemas de notificación en tiempo real, mejorando la experiencia de compra y aumentando la tasa de conversión.",
        "Participar activamente en la planificación de sprints, revisiones de código y definición de arquitectura, contribuyendo a la evolución continua del producto.",
      ],
    },
    {
      company: "Proyexiot",
      role: "Full Stack Developer",
      date: "junio 2024 - Octubre 2025",
      responsibilities: [
        "Desarrollar y mantener una plataforma de monitoreo de datos de pozos de agua, remolcadores e instalaciones, incluyendo autenticación, gestión de usuarios y geolocalización con OpenLayers.",
        "Crear módulos de visualización de datos y gráficos configurables para grandes volúmenes de información.",
        "Detectar y corregir errores, implementando mejoras continuas para optimizar rendimiento y experiencia de usuario.",
        "Colaborar con el equipo para definir objetivos, planificar funcionalidades y asegurar cumplimiento de los proyectos desde cero.",
      ],
    },
    {
      company: "Academy global",
      role: "Full Stack Developer",
      date: "diciembre 2023 - junio 2024",
      responsibilities: [
        "Desarrollar y mantener una plataforma web interna para gestión de ventas, cobranza y seguimiento de procesos, utilizando Angular y Laravel.",
        "Implementar integraciones con sistemas externos como WordPress, Zadarma y LiveConnect, y gestionar tareas automatizadas con jobs y schedules.",
        "Optimizar componentes y funcionalidades para mejorar rendimiento, escalabilidad y mantenibilidad del sistema.",
        "Detectar y solucionar errores, incorporando mejoras continuas y nuevas funcionalidades según requerimientos del negocio.",
      ],
    },
    {
      company: "Workana",
      role: "Freelancer",
      date: "Marzo 2021 - Actualidad",
      responsibilities: [
        "Desarrollar soluciones personalizadas para clientes, adaptando aplicaciones web y sistemas a diversas necesidades tecnológicas.",
        "Diseñar, implementar y mantener interfaces de usuario, módulos backend y funcionalidades completas según requerimientos del proyecto.",
        "Colaborar estrechamente con clientes para definir objetivos, planificar entregables y garantizar la calidad de los resultados.",
        "Gestionar distintos aspectos del ciclo de desarrollo, incluyendo integración de sistemas, automatizaciones y optimizaciones técnicas.",
      ],
    },
  ];

  const [activeJob, setActiveJob] = useState(0);
  const [visible, setVisible] = useState(true);
  const [sectionRef, inView] = useInView();
  const currentJob = jobs[activeJob];

  const handleTabClick = (index) => {
    if (index === activeJob) return;
    setVisible(false);
    setTimeout(() => {
      setActiveJob(index);
      setVisible(true);
    }, 200);
  };

  return (
    <section
      ref={sectionRef}
      className={`flex bg-[#1b1f24] lg:py-0 relative overflow-hidden section-bg transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
      id="experiencia"
    >
      <CodeBackground />
      <div className="w-full max-w-[1140px] mx-auto flex flex-col justify-center py-40 px-6 lg:px-0" style={{ position: "relative", zIndex: 1 }}>
        <h2 className="text-white text-4xl text-left mb-12">Experiencia</h2>

        <div className="w-full flex flex-col lg:flex-row lg:items-start gap-10 lg:gap-16 justify-center bg-[#1b1f24] rounded-xl p-8">
          {/* Tabs izquierda */}
          <div className="relative w-full lg:w-[220px] shrink-0">
            <div className={`absolute left-0 top-0 h-full w-px bg-[#2f3f52] timeline-line ${inView ? "in-view" : ""}`} />

            <div className="flex flex-col">
              {jobs.map((job, index) => (
                <button
                  key={job.company}
                  onClick={() => handleTabClick(index)}
                  className={`relative text-left pl-6 pr-4 py-4 text-lg transition-all duration-300 cursor-pointer ${
                    activeJob === index
                      ? "text-[#13bbff] bg-[#1b2f45]"
                      : "text-[#8892b0] hover:text-[#13bbff]"
                  }`}
                >
                  {job.company}
                </button>
              ))}
            </div>
          </div>

          {/* Contenido derecha */}
          <div
            className={`min-h-[320px] text-white transition-all duration-200 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-[#ccd6f6] leading-tight">
              {currentJob.role} <span className="text-[#13bbff]">| {currentJob.company}</span>
            </h3>

            <p className="mt-2 text-sm md:text-base text-[#8892b0]">{currentJob.date}</p>

            <ul className="mt-8 flex flex-col gap-4">
              {currentJob.responsibilities.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-[#8892b0] leading-7">
                  <span className="mt-2 text-[#13bbff] text-xs">▸</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
