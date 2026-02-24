import {
  Mail,
  Phone,
  Users,
  Award,
  Briefcase,
  TrendingUp,
  CheckCircle,
} from "lucide-react";
import videoBg from "../../assets/video3.mp4";
import { motion } from "framer-motion";
import { useState } from "react";
import CountUp from "react-countup";
import about1 from "../../assets/team2.jpg";
import about2 from "../../assets/about-team.jpg";
import section3 from "../../assets/section3.png";
import service1 from "../../assets/service-1.jpg";
import service2 from "../../assets/service-2.jpg";
import service3 from "../../assets/service-3.jpg";

import project1 from "../../assets/project-1.jpg";
import project2 from "../../assets/project-2.jpg";
import project3 from "../../assets/project-3.png";

import mc1 from "../../assets/mc1.jpeg";
import team2 from "../../assets/mc2.jpeg";
import team3 from "../../assets/mc3.jpeg";
import team4 from "../../assets/mc4.jpg";
import team5 from "../../assets/team5.png";
import team6 from "../../assets/team6.png";
import team7 from "../../assets/team7.png";
import team8 from "../../assets/team8.jpg";
import team9 from "../../assets/team9.jpg";

import perumin1 from "../../assets/perumin1.jpg";
import perumin2 from "../../assets/perumin2.jpg";
import perumin3 from "../../assets/perumin3.jpg";
import perumin4 from "../../assets/perumin4.jpg";

import continental1 from "../../assets/continental1.jpg";
import continental2 from "../../assets/continental2.jpg";

import unsa1 from "../../assets/unsa1.jpg";
import unsa2 from "../../assets/unsa2.jpg";
import unsa3 from "../../assets/unsa3.jpg";
import unsa4 from "../../assets/unsa4.jpg";

import pucp from "../../assets/pucp.png";

import { FaLinkedinIn, FaEnvelope } from "react-icons/fa";

export default function HomePage() {
  const facts = [
    { icon: Award, value: 10, label: "Especialidades" },
    { icon: Users, value: 15, label: "Miembros del Equipo" },
    { icon: Briefcase, value: 3, label: "Alianzas Estratégicas" },
    { icon: TrendingUp, value: 10, prefix: "+", label: "Proyectos en Marcha" },
  ];

  // Estado para modal y testimonios
  const [isOpen, setIsOpen] = useState(false);

  // Noticias
  const [newsFilter, setNewsFilter] = useState("Todo");

  // Modal galería
  const [selectedNews, setSelectedNews] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);

  const newsItems = [
    {
      id: 1,
      category: "Perumin",
      type: "Feria / Networking",
      date: "Sep 2025",
      city: "Arequipa, PE",
      title: "Participación en PERUMIN 37",
      summary: "Participación activa en actividades técnicas y networking.",
      attendees: 1200,
      images: [perumin1, perumin2, perumin3, perumin4],
      image: perumin1,
      link: "",
      highlight: true,
      points: [
        "Rondas de networking con proveedores y empresas mineras",
        "Charlas técnicas sobre innovación y productividad",
        "Recopilación de insights para proyectos en operación",
      ],
    },
    {
      id: 2,
      category: "Universidades",
      type: "Ponencia",
      date: "Nov 2025",
      city: "Arequipa, PE",
      title: "Ponencia en universidad continental: CONTIMIN",
      summary:
        "Exposición de casos y buenas prácticas en reconciliación minera.",
      points: [
        "Desafíos actuales de la industria",
        "Importancia de la estimación de recursos y reservas",
        "Innovación en procesos y el valor de una formación técnica con propósito.",
      ],
      attendees: 180,
      image: continental1,
      images: [continental1,continental2], 
      link: "",
      highlight: false,
    },
    {
      id: 3,
      category: "Universidades",
      type: "Ponencia",
      date: "Dic 2025",
      city: "Arequipa, PE",
      title: "Asistencia  LXXIX Aniversario de la Facultad de Geología, Geofísica y Minas - UNSA",
      summary:
        "Crecimiento Minero en el Perú, Arequipa como cluster de innovación y desarrollo territorial.",
      points: [
        "Consolidación de Arequipa como hub minero del sur del Perú",
        "Innovación tecnológica aplicada a la reconciliación minera",
        "Impacto del crecimiento minero en el desarrollo territorial",
        "Articulación universidad–empresa–Estado para impulsar investigación aplicada",
      ],
      attendees: 350,
      image: unsa1,
      images: [unsa1,unsa2,unsa3,unsa4], 
      link: "",
      highlight: false,
    },
    {
      id: 4,
      category: "Universidades",
      type: "Ponencia",
      date: "Feb 2026",
      city: "Lima, PE",
      title: "Ponencia en Centrum PUCP Business Consulting Club (CPBCC)",
      summary:
        "Distinción por aporte en actividades técnicas y difusión de conocimiento aplicado al sector.",
      points: ["La Minería 4.0 no crea valor por sí sola", "El valor surge cuando la geología se integra estratégicamente", "Permite planificar, explotar y reconciliar con precisión y datos confiables."],
      attendees: 60,
      image: pucp,
      images: [pucp], 
      link: "",
      highlight: false,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-start">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={videoBg} type="video/mp4" />
          Tu navegador no soporta el video en HTML5.
        </video>

        <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>

        <div className="relative z-10 max-w-7xl px-6 sm:px-12 text-left">
          <h3 className="text-3xl md:text-5xl font-bold text-white leading-snug">
            Optimizar decisiones <br /> en el ciclo minero
          </h3>
          <a
            href="https://wa.me/51932432031?text=Hola%2C%20quiero%20más%20información%20sobre%20sus%20servicios."
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="mt-6 px-8 py-3 font-semibold text-white transition-colors rounded-full text-lg"
              style={{ backgroundColor: "#3f9dc8" }}
            >
              Agendar reunión
            </button>
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6 md:gap-8 w-full">
              <motion.img
                src={about1}
                alt="About 1"
                className="w-full h-48 sm:h-56 md:h-64 lg:h-72 rounded-lg shadow-lg object-cover"
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                loading="lazy"
              />
              <motion.img
                src={about2}
                alt="About 2"
                className="w-full h-48 sm:h-56 md:h-64 lg:h-72 rounded-lg shadow-lg object-cover"
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                loading="lazy"
              />
            </div>

            <div>
              <p className="uppercase font-semibold mb-2" style={{ color: "#3f9dc8" }}>
                Nosotros
              </p>
              <h2 className="text-5xl font-bold text-gray-900 mb-6">MC CONSULTORES</h2>
              <p className="text-lg text-gray-700 mb-6 text-justify">
                Somos una consultora <b>especializada en el sector minero</b> Enfocada en
                brindar soluciones técnicas, estratégicas y operativas para optimizar la
                toma de decisiones a lo largo del ciclo operativo minero. Ponemos toda
                nuestra experiencia a su disposición mediante servicios que ayudarán a
                mejorar el control de sus proyectos de exploración y los procesos de la
                mina. Estamos alineados a los estándares internacionales y nos
                posicionamos como su aliado estratégico.
              </p>

              {/* Especialidades */}
              <div className="flex items-start mb-8">
                <div className="text-white p-4 text-center" style={{ backgroundColor: "#3f9dc8" }}>
                  <h5 className="font-bold">Conoce</h5>
                  <h5 className="font-bold">Nuestras</h5>
                  <br />
                  <h5 className="text-white font-bold">Especialidades</h5>
                </div>
                <div className="ml-6 text-gray-700 text-lg">
                  {[
                    "Reconciliación Minera",
                    "Consultoría",
                    "Base de datos QA-QC",
                    "Estimación de recursos y reservas",
                    "Capacitación en Códigos Mineros y Control de Calidad",
                  ].map((t) => (
                    <p key={t} className="flex items-center mb-2">
                      <CheckCircle className="mr-2" size={20} style={{ color: "#3f9dc8" }} />
                      {t}
                    </p>
                  ))}
                </div>
              </div>

              {/* Contacto */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-center">
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#3f9dc8" }}
                  >
                    <Mail className="text-white" size={22} />
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-500 text-sm">Email</p>
                    <h5 className="text-lg text-gray-900 font-semibold">
                      ventas@mc-consultoria.com
                    </h5>
                  </div>
                </div>

                <div className="flex items-center">
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#3f9dc8" }}
                  >
                    <Phone className="text-white" size={22} />
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-500 text-sm">Cel</p>
                    <h5 className="text-lg text-gray-900 font-semibold">+51 932432031</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ MODAL GALERÍA */}
      {selectedNews && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4"
          onClick={() => setSelectedNews(null)}
        >
          <div
            className="bg-white rounded-2xl w-full max-w-4xl p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Cerrar */}
            <button
              onClick={() => setSelectedNews(null)}
              className="absolute top-4 right-4 text-gray-600 hover:text-black text-xl"
              aria-label="Cerrar"
            >
              ✕
            </button>

            <h3 className="text-2xl font-bold mb-4">{selectedNews.title}</h3>

            {/* Imagen principal */}
            <img
              src={selectedNews.images[currentImage]}
              alt={`${selectedNews.title} - ${currentImage + 1}`}
              className="w-full h-[240px] sm:h-[400px] object-cover rounded-xl"
              loading="lazy"
            />

            {/* Controles */}
            <div className="flex items-center justify-between mt-4 gap-3">
              <button
                onClick={() =>
                  setCurrentImage((prev) =>
                    prev === 0 ? selectedNews.images.length - 1 : prev - 1
                  )
                }
                className="px-4 py-2 rounded-xl border text-sm font-semibold hover:bg-gray-50"
              >
                ← Anterior
              </button>

              <span className="text-sm text-gray-500">
                {currentImage + 1} / {selectedNews.images.length}
              </span>

              <button
                onClick={() =>
                  setCurrentImage((prev) =>
                    prev === selectedNews.images.length - 1 ? 0 : prev + 1
                  )
                }
                className="px-4 py-2 rounded-xl border text-sm font-semibold hover:bg-gray-50"
              >
                Siguiente →
              </button>
            </div>

            {/* Miniaturas */}
            <div className="flex gap-3 mt-4 overflow-x-auto pb-1">
              {selectedNews.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentImage(i)}
                  className={`shrink-0 rounded-lg border-2 ${
                    currentImage === i ? "border-[#3f9dc8]" : "border-transparent"
                  }`}
                  title={`Foto ${i + 1}`}
                >
                  <img src={img} alt={`thumb-${i}`} className="h-20 w-28 object-cover rounded-lg" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* News / Fechas clave */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div>
              <p className="uppercase font-semibold mb-2" style={{ color: "#3f9dc8" }}>
                Noticias
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Fechas clave y participaciones
              </h2>
              <p className="text-gray-600 mt-3 max-w-2xl">
                Participación en ponencias, congresos, ferias y actividades del sector.
                Aquí se registran los hitos más relevantes.
              </p>
            </div>

            {/* Filtro */}
            <div className="w-full md:w-auto">
              <div className="bg-white rounded-2xl shadow-sm border p-2 flex gap-2 overflow-x-auto">
                {["Todo", "Universidades", "Perumin"].map(
                  (tag) => (
                    <button
                      key={tag}
                      onClick={() => setNewsFilter(tag)}
                      className={`px-4 py-2 rounded-xl text-sm font-semibold whitespace-nowrap transition
                        ${newsFilter === tag ? "text-white" : "text-gray-700 hover:bg-gray-100"}`}
                      style={{
                        backgroundColor: newsFilter === tag ? "#3f9dc8" : "transparent",
                      }}
                    >
                      {tag}
                    </button>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Línea vertical */}
            <div className="hidden lg:block lg:col-span-2">
              <div className="sticky top-24">
                <div className="h-[520px] w-[3px] rounded-full bg-gray-200 relative mx-auto">
                  <div
                    className="absolute top-0 left-0 w-[3px] h-[35%] rounded-full"
                    style={{ backgroundColor: "#3f9dc8" }}
                  />
                </div>
                <p className="text-center text-sm text-gray-500 mt-4">Línea de tiempo</p>
              </div>
            </div>

            {/* Cards */}
            <div className="lg:col-span-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {newsItems
                  .filter((n) => newsFilter === "Todo" || n.category === newsFilter)
                  .map((item, idx) => (
                    <motion.article
                      key={item.id}
                      initial={{ y: 25, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.6, delay: idx * 0.04 }}
                      onClick={() => {
                        setSelectedNews(item);
                        setCurrentImage(0);
                      }}
                      className="cursor-pointer bg-white rounded-2xl shadow-sm border overflow-hidden hover:shadow-md transition"
                    >
                      {/* Imagen */}
                      <div className="relative">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="h-44 w-full object-cover"
                          loading="lazy"
                        />
                        <div className="absolute top-3 left-3 flex gap-2">
                          <span
                            className="text-xs font-bold px-3 py-1 rounded-full text-white"
                            style={{ backgroundColor: "#3f9dc8" }}
                          >
                            {item.category}
                          </span>
                          {item.highlight && (
                            <span className="text-xs font-bold px-3 py-1 rounded-full bg-black/70 text-white">
                              Destacado
                            </span>
                          )}
                        </div>

                        {item.images?.length > 1 && (
                          <div className="absolute bottom-3 right-3 bg-black/60 text-white text-xs font-semibold px-3 py-1 rounded-full">
                            {item.images.length} fotos
                          </div>
                        )}
                      </div>

                      {/* Contenido */}
                      <div className="p-6">
                        <div className="flex items-center justify-between gap-3 mb-3">
                          <p className="text-sm text-gray-500 font-medium">
                            {item.date} • {item.city}
                          </p>
                          <span className="text-xs text-gray-500 border rounded-full px-3 py-1">
                            {item.type}
                          </span>
                        </div>

                        <h3 className="text-xl font-bold text-gray-900 leading-snug">
                          {item.title}
                        </h3>

                        <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                          {item.summary}
                        </p>

                        {/* Bullets */}
                        {item.points?.length ? (
                          <ul className="mt-4 space-y-2">
                            {item.points.slice(0, 3).map((p, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                                <CheckCircle size={18} style={{ color: "#3f9dc8" }} />
                                <span>{p}</span>
                              </li>
                            ))}
                          </ul>
                        ) : null}

                        {/* CTA */}
                        <div className="mt-6 flex items-center justify-between gap-4">
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <Users size={18} />
                            <span>{item.attendees} asistentes</span>
                          </div>

                          <span className="text-sm font-semibold" style={{ color: "#3f9dc8" }}>
                            Ver fotos →
                          </span>
                        </div>
                      </div>
                    </motion.article>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
{/* Universidades y otra carta de noticias*/}


      {/* Stats / Facts Section */}
      <section className="w-full py-20" style={{ backgroundColor: "#01395C" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facts.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="text-center border border-gray-300 rounded-2xl p-12 flex flex-col justify-center min-h-[350px] bg-transparent"
                >
                  <div className="flex justify-center mb-6">
                    <Icon size={56} color="white" />
                  </div>
                  <h1
                    className="text-7xl font-extrabold mb-4"
                    style={{ color: "#5fa8d3" }}
                  >
                    <CountUp
                      start={0}
                      end={item.value}
                      duration={2.5}
                      enableScrollSpy
                      scrollSpyOnce
                      prefix={item.prefix || ""}
                    />
                  </h1>
                  <p className="text-2xl font-semibold text-white">
                    {item.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Start */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Imagen con botón de play */}
            <div className="relative flex justify-center">
              <img
                src={section3}
                alt="Sección 3"
                className="w-5/6 rounded-lg shadow-lg"
              />
              <button
                onClick={() => setIsOpen(true)}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-6 shadow-lg hover:scale-105 transition"
              >
                <span className="block w-0 h-0 border-l-[20px] border-l-[#3f9dc8] border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent"></span>
              </button>
            </div>

            {/* Texto con razones */}
            <div>
              <p
                className="uppercase font-semibold mb-2"
                style={{ color: "#3f9dc8" }}
              >
                ¿Por qué elegirnos?
              </p>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                ¡Algunas razones por las que las empresas nos eligen!
              </h2>
              <p className="text-lg text-gray-700 mb-8 text-justify">
                En un sector tan dinámico y retador como el minero, las decisiones deben
                ser rápidas, precisas y respaldadas por{" "}
                <b>experiencia especializada</b>. Nuestra consultora combina conocimiento
                técnico con visión estratégica para acompañar a las compañías en cada etapa
                del ciclo operativo minero, ofreciendo soluciones que generan valor real y
                sostenible.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "Especialistas en el sector minero",
                    desc: "Entendemos los desafíos y oportunidades de la industria.",
                  },
                  {
                    title: "Respuestas ágiles",
                    desc: "Capacidad de adaptación y entrega en tiempos cortos.",
                  },
                  {
                    title: "Enfoque en la optimización",
                    desc: "Ayudamos a mejorar procesos, reducir costos y potenciar.",
                  },
                  {
                    title: "Acompañamiento cercano",
                    desc: "Comunicación clara y compromiso con cada cliente.",
                  },
                  {
                    title: "Soporte técnico y estratégico",
                    desc: "Soluciones integrales que abarcan lo operativo y lo gerencial.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start">
                    <div
                      className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "#3f9dc8" }}
                    >
                      <CheckCircle className="text-white" size={24} />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-xl font-semibold text-gray-900">
                        {item.title}
                      </h4>
                      <span className="text-gray-600">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Features End */}

      {/* Video Modal Start */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="bg-white rounded-lg overflow-hidden w-11/12 md:w-3/4 lg:w-1/2">
            <div className="flex justify-between items-center px-4 py-2 border-b">
              <h3 className="text-lg font-semibold">Video</h3>
              <button onClick={() => setIsOpen(false)} className="text-gray-600">
                ✕
              </button>
            </div>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.youtube.com/embed/DWRcNpR6Kdc"
                title="Video"
                className="w-full h-96"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
      {/* Video Modal End */}


   
    {/* Service Start */}
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Título */}
        <div className="text-center mx-auto pb-12 max-w-2xl">
          <p className="uppercase font-semibold mb-2" style={{ color: "#3f9dc8" }}>
            Nuestros Servicios
          </p>
          <h5 className="text-4xl font-bold text-gray-900">
            Priorizamos un Servicio Cercano y con Innovación
          </h5>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Servicio 1 */}
          <div className="relative group overflow-hidden shadow-lg border border-gray-300">
            <img
              src={service1}
              alt="Reconciliación Minera"
              className="w-full h-[480px] object-cover transform transition-transform duration-500 group-hover:scale-105"
            />
            <div
              className="absolute inset-0 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500 
              flex flex-col justify-end items-center text-center p-8"
              style={{
                background: "rgba(1, 57, 92, 0.7)",
                clipPath: "polygon(0 12%, 100% 0, 100% 100%, 0% 100%)",
              }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                Reconciliación Minera
              </h3>
              <p className="text-white text-sm mb-6">
                Integra mina, planta y despacho con reconciliación de tonelaje,
                ley y recuperación desde planificación hasta embarque.
              </p>
            </div>
          </div>

          {/* Servicio 2 */}
          <div className="relative group overflow-hidden shadow-lg border border-gray-300">
            <img
              src={service2}
              alt="Estimación de Recursos y Reservas"
              className="w-full h-[480px] object-cover transform transition-transform duration-500 group-hover:scale-105"
            />
            <div
              className="absolute inset-0 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500 
              flex flex-col justify-end items-center text-center p-8"
              style={{
                background: "rgba(1, 57, 92, 0.7)",
                clipPath: "polygon(0 12%, 100% 0, 100% 100%, 0% 100%)",
              }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                Estimación de Recursos y Reservas
              </h3>
              <p className="text-white text-sm mb-6">
                Desarrolla modelos geológicos y de ley combinando geoestadística
                para mejorar la precisión. Los modelos quedan versionados y
                documentados para su revisión técnica.
              </p>
            </div>
          </div>

          {/* Servicio 3 */}
          <div className="relative group overflow-hidden shadow-lg border border-gray-300">
            <img
              src={service3}
              alt="Analítica y BD QAQC"
              className="w-full h-[480px] object-cover transform transition-transform duration-500 group-hover:scale-105"
            />
            <div
              className="absolute inset-0 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500 
              flex flex-col justify-end items-center text-center p-8"
              style={{
                background: "rgba(1, 57, 92, 0.7)",
                clipPath: "polygon(0 12%, 100% 0, 100% 100%, 0% 100%)",
              }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                Analítica y BD QAQC
              </h3>
              <p className="text-white text-sm mb-6">
                Centraliza y asegura la calidad de datos de exploración y
                operación. Implementa reglas automáticas para ensayes, duplicados,
                blancos y estándares; generando alertas ante anomalías.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Service End */}

         
    {/* --- Projects (reemplaza las imgs que usaban rutas de texto) */}
    <section className="bg-[#01395c] py-16 px-6">
      {(() => {
        type Project = {
          title: string;
          image: string;
          description: string;
        };

        const [selected, setSelected] = useState<Project | null>(null);

        const projects: Project[] = [
          {
            title: "Curso de Código S-K 1300  -  SOUTHERN PERU COPPER CORPORATION",
            image: project1,
            description:
              " Junto al equipo de SOUTHERN PERU COPPER CORPORATION Exploraciones, compartimos un espacio de aprendizaje, análisis y colaboración. La capacitación fue conducida por nuestro Consultor Asociado, Dr. Armando Simón, PhD, PGeo. Y contó con la participación de los responsables de Exploraciones de proyectos en Perú, Chile y Argentina.",
          },
          {
            title: "Servicio de Reconciliación Minera - Minera Condestable S.A",
            image: project2,
            description:
              "Durante el proyecto, analizamos y validamos datos críticos de producción y recursos, generando información confiable que permitirá optimizar procesos y mejorar la toma de decisiones estratégicas.",
          },
          {
            title: "Automatización y análitica en BD geológica",
            image: project3,
            description:
              "Se realizó la integración y el análisis de datos geológicos para automatizar el proceso e identificar puntos de mejora, con el fin de importarlos automáticamente en un software de modelado."          },
        ];

        return (
          <>
            <div className="max-w-3xl mx-auto text-center">
              <p className="uppercase font-semibold text-blue-400 mb-2">
                Nuestros Proyectos
              </p>
              <h1 className="text-4xl font-bold text-white mb-10">
                Conozca Nuestros Proyectos Recientes
              </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {projects.map((proj, index) => (
                <div
                  key={index}
                  className="relative group cursor-pointer"
                  onClick={() => setSelected(proj)}
                >
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-72 object-cover rounded-lg transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                    <h5 className="text-white text-xl font-semibold">
                      {proj.title}
                    </h5>
                  </div>
                </div>
              ))}
            </div>

            {/* Modal Detalle del Proyecto */}
            {selected && (
              <div
                className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4"
                onClick={() => setSelected(null)}
              >
                <div
                  className="bg-white rounded-xl shadow-2xl max-w-2xl w-full transform scale-95 animate-fadeIn overflow-hidden"
                  onClick={(e) => e.stopPropagation()}
                >
                  <img
                    src={selected.image}
                    alt={selected.title}
                    className="w-full h-80 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <img src={about1} alt="logo" className="w-8 h-8 object-contain" />
                      <h3 className="text-2xl font-bold text-gray-900">
                        {selected.title}
                      </h3>
                    </div>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      {selected.description}
                    </p>
                    <button
                      className="mt-6 px-6 py-2 bg-[#01395c] text-white rounded-md hover:bg-[#02507f] transition"
                      onClick={() => setSelected(null)}
                    >
                      Cerrar
                    </button>
                  </div>
                </div>
              </div>
            )}

            <style>{`
              @keyframes fadeIn {
                from { opacity: 0; transform: scale(0.95); }
                to { opacity: 1; transform: scale(1); }
              }
              .animate-fadeIn {
                animation: fadeIn 0.3s ease forwards;
              }
            `}</style>
          </>
        );
      })()}
    </section>
    {/* --- end Projects --- */}






    {/* ==== TEAM SECTION */}
    <section className="py-16 md:py-20 bg-white">
      {(() => {
        const [showAll, setShowAll] = useState(false);

        const cards = [
          { img: mc1,   name: "Marcos Calderon",  role: "CEO & Founder",                                              linkedin: "https://www.linkedin.com/in/marcos-s-calder%C3%B3n-aran%C3%ADbar-a07283140/" },
          { img: team2, name: "Armando Simón",    role: "Ph.D. Ing. Geólogo y Geofísico",                             linkedin: "https://www.linkedin.com/in/armando-sim%C3%B3n-phd-pgeo-5781513b/" },
          { img: team5, name: "Adalberto Rivadeneira",    role: "Consultor Senior Procesos Metalúrgicos",                   linkedin: "https://www.linkedin.com/in/adalberto-rivadeneira-48ab24b8/" },
          { img: team3, name: "Astrid Flores", role: "Ing. Geóloga Mina QAQC y Desarrollo Corporativo",                        linkedin: "https://www.linkedin.com/in/carmen-astrid-flores-ramirez-87086339/" },
          { img: team4, name: "Cecilia Ildefonso",        role: "Ing. Geóloga, Consultora en Modelamiento Geológico",                                               linkedin: "https://pe.linkedin.com/in/cecilia-i-40a36355" },
          { img: team6, name: "Luis Maldonado",        role: "Ing. Geólogo, Consultor Senior de Geotecnia",                                               linkedin: "https://www.linkedin.com/in/luis-maldonado-zorrilla-a7b34322/" },
          { img: team7, name: "Juan Rondinel",        role: "Ing. de Minas, Consultor Senior de Planeamiento, CP MAusIMM 3000013",                                               linkedin: "https://www.linkedin.com/in/juandavidrondinel/" },
          { img: team8, name: "Arnold Chávez",        role: "Ing. de Minas, Consultor Senior de Planeamiento",                                               linkedin: "https://www.linkedin.com/in/arnold-chavez-atalaya-928302121/" },
          { img: team9, name: "Sofia Quispe",        role: "Ing. de Sistemas, Análitica de Datos y Automatización de Procesos",                                               linkedin: "https://www.linkedin.com/in/sofia-quispe-salas/" },
        ];
        {/*Modificacion asociados */}
        const Card = ({ c }: any) => (
          <div className="shadow-lg rounded-lg overflow-hidden">
            <img
              src={c.img}
              alt={c.name}
              className="w-full h-56 sm:h-60 md:h-64 object-cover"
              loading="lazy"
            />
            <div className="flex items-center bg-gray-100 p-3 sm:p-4 relative group overflow-hidden">
              {/* Bloque con ícono */}
              <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 bg-blue-500 flex items-center justify-center relative z-10 rounded-md">
                <FaEnvelope className="text-white text-xl sm:text-2xl" />
              </div>
              {/* Texto */}
              <div className="flex-1 pl-3 sm:pl-4 relative z-10">
                <h5 className="font-bold text-base sm:text-lg">{c.name}</h5>
                <span className="text-blue-500 text-xs sm:text-sm">{c.role}</span>
              </div>
              {/* Overlay LinkedIn */}
              {c.linkedin && (
                <div className="absolute inset-0 bg-blue-600/50 flex items-center translate-x-0 md:translate-x-[-100%] md:group-hover:translate-x-0 transition-transform duration-500 ease-out z-20">
                  <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center ml-[20px]">
                    <a
                      href={c.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-blue-600 flex items-center justify-center"
                    >
                      <FaLinkedinIn className="text-white text-base sm:text-lg" />
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        );

        return (
          <>
            <div className="max-w-3xl mx-auto text-center mb-10 md:mb-12">
              <p className="uppercase font-semibold text-blue-500 mb-2">Nuestro Equipo</p>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Conoce a nuestros Asociados</h1>
            </div>

            {/* 3 visibles */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
              {cards.slice(0, 3).map((c, i) => (
                <Card key={`team-top-${i}`} c={c} />
              ))}
            </div>

            {/* 9 ocultas (u el resto) */}
            <div
              className={`${showAll ? "grid" : "hidden"} grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto mt-6 md:mt-8`}
            >
              {cards.slice(3).map((c, i) => (
                <Card key={`team-rest-${i}`} c={c} />
              ))}
            </div>

            {/* Botón ver más / ver menos */}
            <div className="flex justify-center mt-8">
              <button
                onClick={() => setShowAll((v) => !v)}
                className="px-5 py-2.5 rounded-md bg-[#01395c] text-white text-sm md:text-base hover:bg-[#02507f] transition"
                aria-expanded={showAll}
              >
                {showAll ? "Ver menos" : "Ver más"}
              </button>
            </div>
          </>
        );
      })()}
    </section>
    {/* ==== TEAM SECTION */}



      {/* Testimonials */}
      

      {/* CTA Section */}
      <section
        className="py-20 text-white"
        style={{ backgroundColor: "#3f9dc8" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            ¿Listo para iniciar tu proyecto minero?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contáctanos hoy y descubre cómo podemos ayudarte a alcanzar tus
            objetivos
          </p>
          <a 
            href="https://wa.me/51932432031?text=Hola%2C%20quiero%20más%20información%20sobre%20sus%20servicios." 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <button className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-colors text-lg">
              Contactar Ahora
            </button>
          </a>

        </div>
      </section>


    </>
  );
}



      