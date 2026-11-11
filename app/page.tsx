"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    name: "Mentoría de trading",
    tag: "01 / TRADING",
    icon: "⌁",
    description: "Desarrolla un proceso de operación que puedas preparar, ejecutar y revisar con disciplina.",
    topics: ["Lectura y estructura del mercado", "Futuros, opciones y criptomonedas", "Gestión del riesgo y revisión de operaciones"],
  },
  {
    name: "Análisis de inversiones",
    tag: "02 / INVERSIÓN",
    icon: "◎",
    description: "Aprende a evaluar empresas y construir una tesis antes de decidir dónde invertir.",
    topics: ["Tecnología e innovación", "Análisis de negocios y tesis de inversión", "Escenarios, riesgos y horizonte de inversión"],
  },
];

const process = [
  ["Define una hipótesis", "Identifica qué está pasando, qué esperas que cambie y qué evidencia respaldaría tu lectura."],
  ["Delimita el riesgo", "Antes de tomar una decisión, considera los escenarios posibles y qué invalidaría tu hipótesis."],
  ["Revisa tus decisiones", "Documenta lo que observaste y lo que hiciste para identificar qué puedes ajustar en tu proceso."],
];

const questions = [
  ["¿Necesito experiencia previa?", "Puedes solicitar una conversación tanto si estás empezando como si ya operas o inviertes. En el primer contacto revisaremos tus objetivos."],
  ["¿Cómo se agenda una cita?", "Envía tu solicitud y te contactaré por correo para acordar la fecha y los detalles. Si ya conoces tu disponibilidad, puedes incluirla en los datos opcionales."],
  ["¿Qué incluye y cuánto cuesta?", "El alcance, la frecuencia y los honorarios se acuerdan según tus objetivos y el tipo de acompañamiento que buscas."],
];

const email = "edgar.pro91@icloud.com";
const instagram = "https://www.instagram.com/edroscapital/";
const tiktok = "https://www.tiktok.com/@edroscapital";

// Decorative candle coordinates, independent of market data.
const candles = [
  [112, 99], [103, 87], [89, 97], [95, 77], [79, 63], [65, 72],
  [70, 51], [53, 41], [40, 49], [47, 29], [31, 18], [20, 24], [22, 10],
];

export default function Home() {
  const [interest, setInterest] = useState("");
  const [chartPaused, setChartPaused] = useState(false);
  const privacy = useRef<HTMLDialogElement>(null);
  const confirmationUrl = useRef<HTMLInputElement>(null);
  const stats = useRef<HTMLElement>(null);
  const mobileMenu = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    const row = stats.current;
    if (!row || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(([entry]) => {
      row.classList.toggle("stats-visible", entry.isIntersecting);
    }, { threshold: 0.3 });
    observer.observe(row);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header className="topbar">
        <div className="shell navigation">
          <a className="wordmark" href="#inicio" aria-label="EdRos Capital, inicio">
            <span className="logomark" aria-hidden="true">↗</span>
            <span>EdRos<span className="wordmark-light"> Capital</span></span>
          </a>
          <nav className="desktop-nav" aria-label="Navegación principal">
            <a href="#servicios">Servicios</a><a href="#enfoque">Enfoque</a><a href="#sobre-mi">Sobre mí</a>
          </nav>
          <a className="button button-small" href="#agenda">Solicitar cita <span aria-hidden="true">↗</span></a>
          <details className="mobile-menu" ref={mobileMenu} onKeyDown={event => {
            if (event.key === "Escape" && mobileMenu.current?.open) {
              mobileMenu.current.open = false;
              mobileMenu.current.querySelector("summary")?.focus();
            }
          }}>
            <summary><span>Menú</span><span className="menu-icon" aria-hidden="true" /></summary>
            <nav aria-label="Navegación móvil" onClick={event => {
              if ((event.target as HTMLElement).closest("a") && mobileMenu.current) {
                mobileMenu.current.open = false;
              }
            }}>
              <a href="#servicios">Servicios <span aria-hidden="true">↗</span></a>
              <a href="#enfoque">Enfoque <span aria-hidden="true">↗</span></a>
              <a href="#sobre-mi">Sobre mí <span aria-hidden="true">↗</span></a>
              <a href="#agenda">Solicitar una cita <span aria-hidden="true">↗</span></a>
            </nav>
          </details>
        </div>
      </header>

      <main id="inicio" className="shell">
        <section className="hero" data-motion-paused={chartPaused}>
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> MENTORÍA INDIVIDUAL</p>
            <h1>Lee el mercado.<br /><em>Decide con criterio.</em></h1>
            <p className="hero-description">Mentoría en trading y análisis de inversiones con Edgar Rosales. Desarrolla un método para evaluar oportunidades, definir riesgos y revisar tus decisiones.</p>
            <div className="actions">
              <a className="button" href="#agenda">Solicitar una cita <span aria-hidden="true">↗</span></a>
              <a className="button button-outline" href="#servicios">Explorar servicios <span aria-hidden="true">↓</span></a>
            </div>
          </div>

          <div className="hero-visual" data-chart-paused={chartPaused}>
            <div className="hero-grid" aria-hidden="true" />
            <Image src="/assets/edgar.png" alt="Edgar Rosales, mentor de trading y analista de inversiones" fill preload sizes="(max-width: 800px) 100vw, 45vw" />
            <svg className="candle-chart" viewBox="0 0 330 140" preserveAspectRatio="none" aria-hidden="true">
              {candles.map(([open, close], index) => {
                const x = 15 + index * 25;
                const top = Math.min(open, close);
                const bottom = Math.max(open, close);
                return (
                  <g key={x} className={close > open ? "candle candle-down" : "candle"}
                    style={{ animationDelay: `${index * 310 - 3800}ms` }}>
                    <line x1={x} x2={x} y1={top - 6} y2={bottom + 7} />
                    <rect x={x - 5} y={top} width={10} height={bottom - top} rx={1} />
                  </g>
                );
              })}
            </svg>
            <button className="chart-toggle" type="button" aria-pressed={chartPaused}
              aria-label="Pausar las animaciones" onClick={() => setChartPaused(!chartPaused)}>
              <span aria-hidden="true">{chartPaused ? "▶" : "Ⅱ"}</span>
            </button>
            <span className="visual-index">EdRos Capital / 01</span>
            <div className="profile-label"><span className="profile-symbol" aria-hidden="true">↗</span><div><strong>Edgar Rosales</strong><small>Inversor · Mentor de trading</small></div></div>
          </div>
        </section>

        <section className="stats" ref={stats} aria-label="Trayectoria" data-motion-paused={chartPaused}>
          <div><strong>10+</strong><span>Años en mercados<br />financieros</span></div>
          <div><strong>MBA</strong><span>Administración y Finanzas<br />Tecmilenio · 2018</span></div>
          <div><strong>1:1</strong><span>Mentoría según<br />tus objetivos</span></div>
        </section>

        <section className="section" id="servicios">
          <div className="section-head"><div><p className="eyebrow">01 / SERVICIOS</p><h2>¿Qué quieres trabajar?</h2></div><p>Elige el acompañamiento que mejor encaje con tu experiencia y tus objetivos.</p></div>
          <div className="service-grid">
            {services.map(service => (
              <article className="service-card" key={service.name}>
                <div className="card-top"><span className="service-icon" aria-hidden="true">{service.icon}</span><span className="eyebrow">{service.tag}</span></div>
                <h3>{service.name}</h3>
                <p>{service.description}</p>
                <ul>{service.topics.map(topic => <li key={topic}>{topic}</li>)}</ul>
                <a href="#agenda" onClick={() => setInterest(service.name)}>Solicitar cita para {service.name.toLowerCase()} <span aria-hidden="true">↗</span></a>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="enfoque">
          <div className="section-head"><div><p className="eyebrow">02 / ENFOQUE</p><h2>Cómo trabajaremos</h2></div><p>Un proceso para evaluar una idea, dimensionar el riesgo y aprender de cada decisión.</p></div>
          <ol className="steps">
            {process.map(([title, description], index) => <li key={title}><span className="eyebrow">PASO 0{index + 1}</span><h3>{title}</h3><p>{description}</p></li>)}
          </ol>
        </section>

        <section className="section about" id="sobre-mi">
          <div className="about-photo" data-motion-paused={chartPaused}>
            <Image src="/assets/biografia.jpeg" alt="Retrato de Edgar Rosales" fill sizes="(max-width: 800px) 100vw, 36vw" />
            <Image className="about-photo-alternate" src="/assets/biografia-alternativa.jpg" alt="" aria-hidden="true" fill sizes="(max-width: 800px) 100vw, 36vw" />
          </div>
          <div className="about-copy">
            <p className="eyebrow">03 / TU MENTOR</p>
            <h2>Soy Edgar Rosales.</h2>
            <p className="bio-lead">Invierto en tecnología e innovación y llevo más de una década en los mercados financieros.</p>
            <p>Mi trayectoria incluye inversiones tempranas en NVIDIA, Palantir, AMD, Google y Tesla. Cuento con un MBA en Administración y Finanzas por Tecmilenio, obtenido en 2018, y experiencia operando futuros, opciones y criptomonedas.</p>
            <p>Fundé EdRos Capital para compartir cómo evalúo negocios, leo el mercado y gestiono el riesgo. En la mentoría trabajamos estas habilidades a partir de tus objetivos.</p>
            <ul className="tags" aria-label="Áreas de experiencia"><li>Tecnología</li><li>Futuros</li><li>Opciones</li><li>Criptomonedas</li></ul>
          </div>
        </section>

        <section className="section booking" id="agenda">
          <div className="booking-copy">
            <p className="eyebrow">04 / PRIMER CONTACTO</p>
            <h2>Hablemos de<br />tus objetivos.</h2>
            <p>Cuéntame qué te gustaría trabajar. Te contactaré por correo para acordar una fecha y los detalles de la conversación.</p>
            <div className="contact">
              <a href={`mailto:${email}`}>{email} <span aria-hidden="true">↗</span></a>
              <a href={instagram} target="_blank" rel="noreferrer">Instagram · @edroscapital <span aria-hidden="true">↗</span></a>
              <a href={tiktok} target="_blank" rel="noreferrer">TikTok · @edroscapital <span aria-hidden="true">↗</span></a>
            </div>
          </div>

          <form
            className="booking-form"
            action={`https://formsubmit.co/${email}`}
            method="post"
            onSubmit={() => {
              if (confirmationUrl.current) {
                confirmationUrl.current.value = new URL("/gracias.html", window.location.origin).href;
              }
            }}
          >
            <h3>Solicita tu cita</h3>
            <p>Comparte tus datos y tu objetivo. Los campos marcados con * son obligatorios.</p>
            <input type="hidden" name="_subject" value="EdRos Capital — Nueva solicitud de cita" />
            <input type="hidden" name="_template" value="table" />
            <input ref={confirmationUrl} type="hidden" name="_next" defaultValue="https://edros-capital.vercel.app/gracias.html" />
            <input hidden type="text" name="_honey" tabIndex={-1} autoComplete="off" />
            <div className="form-row">
              <label>Nombre completo <span aria-hidden="true">*</span><input name="nombre" autoComplete="name" placeholder="Tu nombre" maxLength={120} required /></label>
              <label>Correo electrónico <span aria-hidden="true">*</span><input type="email" name="email" inputMode="email" autoComplete="email" autoCapitalize="none" spellCheck={false} placeholder="tu@correo.com" maxLength={254} required /></label>
            </div>
            <label>Me interesa <span aria-hidden="true">*</span><select name="interes" value={interest} onChange={event => setInterest(event.target.value)} required><option value="">Selecciona una opción</option>{services.map(({name}) => <option key={name}>{name}</option>)}<option>Ambos servicios</option></select></label>
            <label>¿Qué te gustaría lograr? <span aria-hidden="true">*</span><textarea name="objetivos" rows={3} placeholder="Ej. Quiero aprender a gestionar el riesgo de mis operaciones." minLength={10} maxLength={2000} aria-describedby="objectives-help" required /></label>
            <p className="field-help" id="objectives-help">Escribe al menos 10 caracteres para contarme tu objetivo.</p>
            <details className="optional-fields">
              <summary>Agregar experiencia y disponibilidad <span>Opcional</span></summary>
              <div>
                <label>Mi experiencia<select name="experiencia" defaultValue=""><option value="">Selecciona tu nivel</option><option>Estoy comenzando</option><option>Tengo algo de experiencia</option><option>Opero o invierto habitualmente</option></select></label>
                <label>Disponibilidad y zona horaria<input name="disponibilidad" placeholder="Ej. martes por la tarde, Ciudad de México" maxLength={250} /></label>
              </div>
            </details>
            <div className="consent"><label><input type="checkbox" name="consentimiento" value="Acepto el uso de mis datos para gestionar esta solicitud" required /> Acepto el uso de mis datos para gestionar mi cita.</label><button type="button" className="text-button" onClick={() => privacy.current?.showModal()}>Ver privacidad</button></div>
            <button className="button submit" type="submit">Enviar solicitud <span aria-hidden="true">↗</span></button>
            <p className="form-note">Recibirás la respuesta en el correo que indiques. Acordaremos la fecha contigo.</p>
          </form>
        </section>

        <section className="section faq">
          <div><p className="eyebrow">ANTES DE AGENDAR</p><h2>Preguntas frecuentes</h2></div>
          <div>{questions.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div>
        </section>
      </main>

      <footer className="footer"><div className="shell"><a href="#inicio" className="wordmark"><span className="logomark" aria-hidden="true">↗</span><span>EdRos<span className="wordmark-light"> Capital</span></span></a><div><button className="text-button" type="button" onClick={() => privacy.current?.showModal()}>Privacidad</button><a href={instagram} target="_blank" rel="noreferrer">Instagram ↗</a></div></div></footer>
      <dialog ref={privacy} aria-labelledby="privacy-title"><form method="dialog"><button className="close" aria-label="Cerrar aviso de privacidad">×</button></form><h2 id="privacy-title">Tu privacidad</h2><p>Edgar Rosales, de EdRos Capital, usará tus datos para responder y coordinar tu cita. FormSubmit procesa el formulario y lo envía a {email}.</p><p>Evita incluir credenciales o datos financieros sensibles. Puedes solicitar acceso, corrección o eliminación de tus datos escribiendo a ese correo.</p></dialog>
    </>
  );
}
