import { ArrowRight, BriefcaseBusiness, HeartHandshake, Lightbulb, Target, Users } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"

const roleMatches = [
  {
    task: "Evolucionar la experiencia digital con vision omnicanal",
    done: "Trabaje experiencias web, desktop, mobile, aplicaciones y autogestion, pensando recorridos completos y coherencia entre canales.",
    how: "No lo pienso solo como pantallas. Lo trabajo como canales y contextos distintos: online, offline, corporativo y autogestion, siempre con foco en el asociado.",
  },
  {
    task: "Traducir objetivos de negocio en iniciativas concretas",
    done: "Lidere proyectos end-to-end bajando objetivos generales a prioridades, soluciones implementables y mejoras medibles.",
    how: "Conecto estrategia, discovery y delivery para transformar definiciones amplias en decisiones accionables, manteniendo foco en time-to-market.",
  },
  {
    task: "Articular con IT, Marketing y Unidades de Negocio",
    done: "Coordine diseno, producto, desarrollo y stakeholders, y tambien presente avances y vision a direccion y CEO.",
    how: "Me muevo bien entre equipos distintos, ordenando conversaciones, alineando criterios y empujando para que todos rememos para el mismo lado.",
  },
  {
    task: "Impulsar el uso de datos e inteligencia artificial",
    done: "Integre Hotjar, Clarity, Analytics, VWO e IA generativa para detectar fricciones, priorizar oportunidades y mejorar procesos.",
    how: "Suelo acercar herramientas nuevas al equipo, impulsar su adopcion y proponer usos concretos con Codex, Claude, Notion AI y prototipos acelerados por IA para decidir con mas evidencia.",
  },
  {
    task: "Asegurar consistencia y eficiencia operativa",
    done: "Ademas de experiencia de usuario, participe en soluciones internas para mejorar eficiencia, visibilidad operativa y consistencia entre areas.",
    how: "Para mi no alcanza con una buena idea si no llega a sprint, a release y a resultado. Las decisiones tienen que sostenerse en datos, impacto real y capacidad de ejecucion.",
  },
  {
    task: "Disenar propuesta de valor digital y monitorear CX",
    done: "Trabaje en la interseccion entre experiencia, negocio y operacion para que cada mejora digital tenga sentido para el usuario y para la organizacion.",
    how: "Trabajo con foco constante en propuesta de valor, ciclo de vida, friccion, adopcion, CX y senales concretas para decidir mejor.",
  },
]

const evidenceCards = [
  {
    title: "Checkout y buscador con impacto real",
    body: "Lidere mejoras en la experiencia de compra reduciendo fricciones en checkout y mejorando la intencion de compra.",
  },
  {
    title: "Liderazgo UX con dual track",
    body: "Defini una forma de trabajo que conecto discovery y delivery para mejorar decisiones entre diseno, producto y desarrollo.",
  },
  {
    title: "Presentaciones ejecutivas",
    body: "Presente vision, avances y decisiones de producto al CEO general del grupo para alinear decisiones de negocio, roadmap e implementacion.",
  },
  {
    title: "MultiOps como prueba de ejecucion",
    body: "Impulse una herramienta interna para ventas, postventa, marketing y administracion, combinando diseno, producto, tecnologia e IA para mejorar eficiencia y visibilidad.",
  },
  {
    title: "Research, analitica y experimentacion",
    body: "Integre herramientas de comportamiento y experimentacion para validar hipotesis, detectar fricciones y sostener decisiones con evidencia.",
  },
  {
    title: "Canales y contextos distintos",
    body: "Trabaje experiencias online, offline y corporativas, entendiendo que cada canal tiene necesidades, restricciones y expectativas propias.",
  },
]

const avalianNeeds = [
  "Experiencias mas simples y consistentes entre canales y autogestion.",
  "Mejor conexion entre negocio, producto, analitica y operacion.",
  "Uso mas concreto de datos para detectar fricciones, personalizar y medir CX.",
  "Mayor velocidad para llevar definiciones a producto real sin perder consistencia.",
]

const workStyle = [
  {
    icon: HeartHandshake,
    title: "Escucho antes de definir",
    body: "Busco entender contexto, necesidades reales y tensiones del negocio antes de proponer soluciones.",
  },
  {
    icon: Users,
    title: "Ordeno la complejidad sin perder foco humano",
    body: "Trabajo bien entre multiples areas, objetivos y restricciones, buscando claridad sin perder de vista a las personas.",
  },
  {
    icon: Target,
    title: "Busco que las ideas lleguen a ejecucion",
    body: "Valoro la estrategia, pero sobre todo que las definiciones se conviertan en mejoras concretas y sostenibles.",
  },
  {
    icon: HeartHandshake,
    title: "Buena sintonia con el equipo",
    body: "Me adapto bien, acompano, comparto herramientas y suelo ayudar a que el equipo avance con energia y foco comun.",
  },
]

export default function Page() {
  return (
    <main className="min-h-svh overflow-x-hidden bg-[radial-gradient(circle_at_top_left,rgba(139,217,93,0.18),transparent_24%),radial-gradient(circle_at_88%_10%,rgba(15,159,114,0.12),transparent_18%),linear-gradient(180deg,#fcfffd_0%,#f4f9f6_100%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(139,217,93,0.10),transparent_22%),radial-gradient(circle_at_88%_10%,rgba(15,159,114,0.09),transparent_18%),linear-gradient(180deg,#0f1714_0%,#13201c_100%)]">
      <div className="presentation-enter mx-auto h-svh w-full max-w-[1220px] px-4 py-4 sm:px-6 lg:px-8">
        <section className="flex h-[calc(100svh-2rem)] flex-col overflow-hidden rounded-[2rem] border border-border/80 bg-white/95 shadow-[0_24px_90px_rgba(18,52,45,0.10)] dark:bg-card/95 dark:shadow-[0_24px_90px_rgba(0,0,0,0.34)]">
          <header className="card-enter flex items-start justify-between gap-4 border-b border-border/70 px-5 py-5 sm:px-6 lg:px-7" style={{ ["--enter-delay" as string]: "60ms" }}>
            <div className="flex items-center gap-4">
              <div
                aria-hidden="true"
                className="relative flex size-13 shrink-0 items-center justify-center overflow-hidden rounded-[1.35rem] bg-white shadow-[inset_0_0_0_1px_rgba(18,54,45,0.10)] dark:bg-background dark:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]"
              >
                <div className="absolute inset-x-0 top-0 h-[58%] bg-[#8bd95d]" />
                <div className="absolute inset-x-0 bottom-0 h-[52%] rounded-t-[100%] bg-primary" />
                <Lightbulb className="relative z-10 size-4.5 text-white" />
              </div>
              <div className="space-y-1">
                <p className="text-sm font-semibold tracking-[0.24em] text-primary uppercase">
                  Mi aporte a Avalian
                </p>
                <p className="text-sm font-medium text-foreground/72">
                  Orlando Balladares · Product Designer · UX Lead
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="hidden rounded-full border border-primary/20 bg-secondary px-3 py-1 text-xs font-semibold text-primary md:block">
                One-page
              </div>
              <ThemeToggle />
            </div>
          </header>

          <div className="min-h-0 flex-1 overflow-y-auto px-5 py-5 sm:px-6 lg:px-7">
            <div className="flex flex-col gap-6">
              <section className="card-enter flex flex-col gap-5" style={{ ["--enter-delay" as string]: "100ms" }}>
                <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-secondary px-4 py-1.5 text-xs font-semibold tracking-[0.22em] text-primary uppercase">
                  <BriefcaseBusiness className="size-3.5" />
                  Lo que pide el rol y como puedo responder
                </div>

                <div className="space-y-4">
                  <h1 className="max-w-4xl text-4xl leading-none font-semibold tracking-[-0.055em] text-balance text-foreground sm:text-5xl xl:text-[3.35rem]">
                    Como puedo ayudar a Avalian a construir experiencias mas simples, consistentes y valiosas.
                  </h1>
                </div>

                <div className="rounded-[1.5rem] border border-border/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(246,249,247,0.98))] px-5 py-4 dark:bg-[linear-gradient(180deg,rgba(28,40,35,0.96),rgba(22,32,28,0.96))]">
                  <p className="text-xs font-semibold tracking-[0.22em] text-primary uppercase">
                    Lo que me interesa de este rol
                  </p>
                  <p className="mt-3 max-w-3xl text-sm leading-6 text-foreground/84">
                    Me interesa esta oportunidad porque combina algo que valoro especialmente:
                    disenar mejores experiencias para las personas y, al mismo tiempo, traducir esa
                    vision en decisiones concretas para el negocio y los equipos.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 pt-1">
                  <a
                    href="#match"
                    className={cn(
                      buttonVariants({ size: "lg" }),
                      "rounded-full bg-primary px-6 text-primary-foreground shadow-[0_14px_34px_rgba(31,122,103,0.24)] hover:bg-primary/90"
                    )}
                  >
                    Ver como puedo aportar
                    <ArrowRight className="size-4" />
                  </a>
                </div>
              </section>

              <section className="card-enter rounded-[1.55rem] border border-border/80 bg-secondary/35 px-5 py-5 dark:bg-secondary/10" style={{ ["--enter-delay" as string]: "140ms" }}>
                <p className="text-xs font-semibold tracking-[0.22em] text-primary uppercase">
                  Que creo que hoy necesita Avalian
                </p>
                <div className="mt-4 grid gap-3 md:grid-cols-2">
                  {avalianNeeds.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="mt-2 size-2 shrink-0 rounded-full bg-primary" />
                      <p className="text-sm leading-6 text-foreground/80">{item}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <div className="mb-4">
                  <p className="text-xs font-semibold tracking-[0.22em] text-primary uppercase">
                    Evidencias concretas
                  </p>
                  <h2 className="mt-2 text-[1.7rem] leading-none font-semibold tracking-[-0.04em] text-foreground">
                    Experiencias que ya dialogan con el rol.
                  </h2>
                </div>

                <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                  {evidenceCards.map((item, index) => (
                    <article
                      key={item.title}
                      className="card-enter interactive-card rounded-[1.55rem] border border-border/80 bg-white p-5 dark:bg-card"
                      style={{ ["--enter-delay" as string]: `${170 + index * 65}ms` }}
                    >
                      <h3 className="text-[1.05rem] leading-tight font-semibold tracking-[-0.03em] text-foreground">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-[1.45rem] text-foreground/76">{item.body}</p>
                    </article>
                  ))}
                </div>
              </section>

              <section
                id="match"
                className="card-enter scroll-mt-6 rounded-[1.7rem] border border-border/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(246,250,247,0.98))] dark:bg-[linear-gradient(180deg,rgba(29,41,36,0.98),rgba(21,30,27,0.98))]"
                style={{ ["--enter-delay" as string]: "230ms" }}
              >
                <div className="border-b border-border/70 px-6 py-6">
                  <p className="text-xs font-semibold tracking-[0.22em] text-primary uppercase">
                    Lo que hago, lo que hice y como lo hago
                  </p>
                  <h2 className="mt-3 text-[1.85rem] leading-none font-semibold tracking-[-0.04em] text-balance text-foreground">
                    Un cruce directo entre las responsabilidades del rol y mi experiencia.
                  </h2>
                  <p className="mt-3 max-w-3xl text-sm leading-6 text-foreground/70">
                    La idea no es repetir mi CV, sino mostrar donde ya trabaje temas similares y de
                    que manera los abordo.
                  </p>
                </div>

                <div className="hidden border-b border-border/70 bg-secondary/20 dark:bg-secondary/10 lg:grid lg:grid-cols-[minmax(240px,0.3fr)_minmax(260px,0.35fr)_minmax(260px,0.35fr)]">
                  <div className="border-r border-border/70 px-6 py-4">
                    <p className="text-xs font-semibold tracking-[0.22em] text-primary uppercase">
                      Lo que pide el rol
                    </p>
                  </div>
                  <div className="border-r border-border/70 px-6 py-4">
                    <p className="text-xs font-semibold tracking-[0.22em] text-primary uppercase">
                      Donde ya lo hice
                    </p>
                  </div>
                  <div className="px-6 py-4">
                    <p className="text-xs font-semibold tracking-[0.22em] text-primary uppercase">
                      Como lo hago
                    </p>
                  </div>
                </div>

                <div className="divide-y divide-border/70 lg:hidden">
                  {roleMatches.map((item) => (
                    <MatchStackedRow
                      key={item.task}
                      task={item.task}
                      done={item.done}
                      how={item.how}
                    />
                  ))}
                </div>

                <div className="hidden lg:block">
                  {roleMatches.map((item) => (
                    <div
                      key={item.task}
                      className="grid grid-cols-[minmax(240px,0.3fr)_minmax(260px,0.35fr)_minmax(260px,0.35fr)] border-b border-border/70 last:border-b-0"
                    >
                      <div className="border-r border-border/70 px-6 py-4">
                        <p className="text-[0.97rem] font-semibold leading-6 text-foreground">
                          {item.task}
                        </p>
                      </div>
                      <div className="border-r border-border/70 px-6 py-4">
                        <p className="text-sm leading-6 text-foreground/78">{item.done}</p>
                      </div>
                      <div className="px-6 py-4">
                        <p className="text-sm leading-6 text-foreground/78">{item.how}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="grid gap-6 xl:grid-cols-[minmax(280px,0.72fr)_minmax(520px,1.28fr)]">
                <section
                  className="card-enter rounded-[1.7rem] border border-border/80 bg-white p-6 dark:bg-card"
                  style={{ ["--enter-delay" as string]: "300ms" }}
                >
                  <p className="text-xs font-semibold tracking-[0.22em] text-primary uppercase">
                    Como lidero y trabajo con equipos
                  </p>
                  <h2 className="mt-3 text-[1.7rem] leading-none font-semibold tracking-[-0.04em] text-foreground">
                    Mi forma de trabajar.
                  </h2>

                  <div className="mt-6 space-y-4">
                    {workStyle.map((item) => {
                      const Icon = item.icon

                      return (
                        <div key={item.title} className="flex items-start gap-3">
                          <div className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-2xl bg-secondary text-primary">
                            <Icon className="size-4.5" />
                          </div>
                          <div className="space-y-1">
                            <p className="text-sm font-semibold text-foreground">{item.title}</p>
                            <p className="text-sm leading-[1.45rem] text-foreground/74">
                              {item.body}
                            </p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </section>

                <section
                  className="card-enter rounded-[1.7rem] border border-border/80 bg-[linear-gradient(135deg,rgba(139,217,93,0.14),rgba(255,255,255,0.98)_28%,rgba(15,159,114,0.08)_100%)] p-6 dark:bg-[linear-gradient(135deg,rgba(139,217,93,0.08),rgba(28,39,35,0.98)_28%,rgba(15,159,114,0.07)_100%)]"
                  style={{ ["--enter-delay" as string]: "360ms" }}
                >
                  <p className="text-xs font-semibold tracking-[0.22em] text-primary uppercase">
                    Cierre
                  </p>
                  <h2 className="mt-3 text-[1.7rem] leading-none font-semibold tracking-[-0.04em] text-balance text-foreground">
                    Lo que creo que podria sumar en Avalian.
                  </h2>

                  <div className="mt-6 space-y-4">
                    <p className="text-[0.98rem] leading-7 text-foreground/84">
                      Creo que puedo aportar a Avalian una combinacion valiosa para este rol:
                      mirada de experiencia, criterio de producto, capacidad de articulacion entre
                      areas y foco en convertir definiciones estrategicas en soluciones digitales
                      concretas.
                    </p>
                    <p className="text-[0.98rem] leading-7 text-foreground/84">
                      Me entusiasma especialmente la posibilidad de contribuir a experiencias mas
                      simples, consistentes y humanas para los asociados, mientras acompano a los
                      equipos a trabajar con mayor claridad, foco y efectividad.
                    </p>
                  </div>
                </section>
              </section>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

function MatchStackedRow({
  task,
  done,
  how,
}: {
  task: string
  done: string
  how: string
}) {
  return (
    <div className="space-y-3 px-6 py-4">
      <p className="text-xs font-semibold tracking-[0.22em] text-primary uppercase">
        Lo que pide el rol
      </p>
      <p className="text-base font-semibold leading-6 text-foreground">{task}</p>
      <p className="text-xs font-semibold tracking-[0.22em] text-primary uppercase">
        Donde ya lo hice
      </p>
      <p className="text-sm leading-6 text-foreground/78">{done}</p>
      <p className="text-xs font-semibold tracking-[0.22em] text-primary uppercase">
        Como lo hago
      </p>
      <p className="text-sm leading-6 text-foreground/78">{how}</p>
    </div>
  )
}
