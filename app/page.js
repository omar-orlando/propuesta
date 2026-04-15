const focusAreas = [
  {
    label: "Journey del asociado",
    title: "Ordenar la experiencia completa, no solo los puntos aislados.",
    description:
      "Desde la afiliacion hasta la autogestion, la propuesta apunta a detectar fricciones reales y construir un recorrido mas simple, consistente y confiable.",
  },
  {
    label: "Métricas CX",
    title: "Medir lo que impacta confianza, resolucion y fidelizacion.",
    description:
      "NPS, adopcion digital, tiempos de respuesta, abandono y resolucion en canales digitales como base para tomar decisiones con criterio.",
  },
  {
    label: "Roadmap de valor",
    title: "Convertir estrategia en iniciativas claras y priorizadas.",
    description:
      "Una combinacion de quick wins y apuestas estrategicas para alinear Diseno, Analytics, IT y Negocio alrededor de una vision compartida.",
  },
];

const sections = [
  {
    eyebrow: "1. Journey del asociado",
    title: "Entender el recorrido para identificar momentos que hoy erosionan valor.",
    body: "Mapear el ciclo de vida del asociado y del paciente permite alinear canales, lenguaje, autogestion y puntos de soporte bajo una sola experiencia.",
  },
  {
    eyebrow: "2. Fricciones y oportunidades",
    title: "Priorizar los problemas correctos antes de definir soluciones.",
    body: "No todas las fricciones pesan igual. La propuesta parte de detectar impacto real en confianza, esfuerzo del usuario y costo operativo.",
  },
  {
    eyebrow: "3. Dashboard CX",
    title: "Hacer visible la salud de la experiencia con indicadores accionables.",
    body: "Un tablero ejecutivo-producto para monitorear satisfaccion, adopcion digital, eficiencia y oportunidades de mejora continua.",
  },
  {
    eyebrow: "4. Iniciativas priorizadas",
    title: "Bajar la estrategia a un plan concreto y compartible.",
    body: "Cada iniciativa se vincula con impacto esperado, dependencias y equipos involucrados para acelerar time-to-market sin perder coherencia.",
  },
];

const metrics = [
  { value: "72", label: "NPS digital potencial", hint: "Meta conceptual a 12 meses" },
  { value: "34%", label: "Consultas evitables", hint: "Oportunidad de autogestion y claridad" },
  { value: "4", label: "frentes de trabajo", hint: "Journey, data, operacion y propuesta de valor" },
];

const strengths = [
  "Cruzar experiencia, negocio, operaciones y tecnologia en un mismo lenguaje.",
  "Traducir objetivos de gerencia en iniciativas digitales priorizadas.",
  "Diseñar con foco en datos, fricciones reales y consistencia omnicanal.",
];

export default function HomePage() {
  return (
    <main className="page-shell">
      <section className="hero-section">
        <header className="topbar">
          <div className="brand">
            <span className="brand-mark" />
            <div>
              <p>Avalian CX Command Center</p>
              <span>Propuesta conceptual para entrevista</span>
            </div>
          </div>
          <nav className="nav-links" aria-label="Navegacion principal">
            <a href="#propuesta">Propuesta</a>
            <a href="#enfoque">Enfoque</a>
            <a href="#siguientes">Siguientes pasos</a>
          </nav>
        </header>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Vision de experiencia y propuesta de valor digital</p>
            <h1>Una home pensada para mostrar como podria evolucionar la experiencia digital de Avalian.</h1>
            <p className="hero-text">
              Esta demo parte de una idea simple: en salud, cada friccion digital impacta confianza,
              percepcion de valor y eficiencia operativa. Por eso la propuesta conecta journey,
              metricas e iniciativas para transformar estrategia en ejecucion.
            </p>

            <div className="hero-actions">
              <a className="primary-button" href="#propuesta">
                Ver propuesta
              </a>
              <a className="secondary-button" href="#siguientes">
                Explorar roadmap
              </a>
            </div>

            <ul className="hero-bullets" aria-label="Fortalezas del enfoque">
              {strengths.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <aside className="hero-panel" aria-label="Resumen visual de la propuesta">
            <div className="panel-header">
              <div>
                <p>Panorama inicial</p>
                <span>Asociado, CX y prioridades compartidas</span>
              </div>
              <span className="status-pill">Draft v1</span>
            </div>

            <div className="metric-grid">
              {metrics.map((metric) => (
                <article key={metric.label} className="metric-card">
                  <strong>{metric.value}</strong>
                  <p>{metric.label}</p>
                  <span>{metric.hint}</span>
                </article>
              ))}
            </div>

            <div className="journey-strip">
              <span>Afiliacion</span>
              <span>Autogestion</span>
              <span>Autorizaciones</span>
              <span>Soporte</span>
              <span>Fidelizacion</span>
            </div>

            <div className="signal-card">
              <p className="signal-title">Hipotesis central</p>
              <p>
                Una experiencia mas simple y consistente puede reducir friccion, aumentar adopcion
                digital y mejorar la percepcion integral del servicio.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="insight-section">
        <div className="section-heading">
          <p className="eyebrow">Por que esta propuesta</p>
          <h2>La experiencia digital en salud necesita unir claridad, cercania y ejecucion coordinada.</h2>
        </div>

        <div className="insight-grid">
          {focusAreas.map((item) => (
            <article key={item.label} className="insight-card">
              <p className="card-label">{item.label}</p>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="propuesta" className="proposal-section">
        <div className="section-heading">
          <p className="eyebrow">Que vas a ver en esta demo</p>
          <h2>Una narrativa breve para pasar de la vision a un plan accionable.</h2>
        </div>

        <div className="proposal-list">
          {sections.map((section) => (
            <article key={section.eyebrow} className="proposal-card">
              <p className="card-label">{section.eyebrow}</p>
              <h3>{section.title}</h3>
              <p>{section.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="enfoque" className="profile-section">
        <div className="profile-copy">
          <p className="eyebrow">Mi aporte a este tipo de desafio</p>
          <h2>No se trata solo de disenar pantallas, sino de alinear experiencia, negocio y operacion.</h2>
          <p>
            Mi experiencia combinando product design, liderazgo UX, operaciones, discovery y soluciones
            apoyadas en tecnologia me permite trabajar en la interseccion donde este rol genera mas valor:
            detectar fricciones reales, priorizar con criterio y bajar una vision estrategica a iniciativas
            concretas.
          </p>
        </div>

        <div className="profile-panel">
          <div className="profile-line">
            <span>Experiencia</span>
            <strong>UX, producto y operacion</strong>
          </div>
          <div className="profile-line">
            <span>Enfoque</span>
            <strong>Journey, data y propuesta de valor</strong>
          </div>
          <div className="profile-line">
            <span>Modo de trabajo</span>
            <strong>Cross-functional y orientado a ejecucion</strong>
          </div>
        </div>
      </section>

      <section id="siguientes" className="closing-section">
        <div>
          <p className="eyebrow">Siguiente etapa</p>
          <h2>Esta Home es el punto de partida para desarrollar el journey, las metricas CX y el roadmap.</h2>
        </div>
        <a className="primary-button" href="#propuesta">
          Continuar con la propuesta
        </a>
      </section>
    </main>
  );
}
