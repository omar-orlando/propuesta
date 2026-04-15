import { ArrowRight, BriefcaseBusiness, HeartHandshake, Lightbulb, Target, Users } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const roleMatches = [
  {
    need: "Vision omnicanal centrada en el asociado",
    contribution:
      "Trabaje experiencias web y mobile con foco en recorridos completos, consistencia entre canales y claridad para el usuario.",
  },
  {
    need: "Traducir estrategia en iniciativas digitales concretas",
    contribution:
      "Lidere proyectos end-to-end bajando objetivos generales a prioridades, soluciones implementables y mejoras medibles.",
  },
  {
    need: "Articular con IT, Marketing y Negocio",
    contribution:
      "Coordine diseno, producto, desarrollo y stakeholders para ordenar complejidad y convertirla en ejecucion.",
  },
  {
    need: "Impulsar data e inteligencia artificial",
    contribution:
      "Integre Hotjar, Clarity, Analytics, VWO e IA generativa para detectar fricciones, priorizar oportunidades y mejorar procesos.",
  },
  {
    need: "Fidelizacion y eficiencia operativa",
    contribution:
      "Ademas de experiencia de usuario, participe en soluciones internas para mejorar eficiencia, visibilidad operativa y consistencia entre areas.",
  },
  {
    need: "Disenar propuesta de valor digital",
    contribution:
      "Suelo trabajar en la interseccion entre experiencia, negocio y operacion para que cada mejora digital tenga sentido para el usuario y para la organizacion.",
  },
]

const evidenceCards = [
  {
    title: "Checkout y buscador con impacto real",
    body: "Lidere mejoras en la experiencia de compra trabajando sobre fricciones del recorrido y con impacto en intencion de compra y abandono.",
  },
  {
    title: "Liderazgo UX con dual track",
    body: "Defini una forma de trabajo que conecto discovery y delivery para mejorar decisiones entre diseno, producto y desarrollo.",
  },
  {
    title: "MultiOps como prueba de ejecucion",
    body: "Impulse una herramienta interna para multiples areas, combinando diseno, producto, tecnologia e IA para mejorar eficiencia y visibilidad.",
  },
  {
    title: "Research, analitica y experimentacion",
    body: "Integre herramientas de comportamiento y experimentacion para validar hipotesis y sostener decisiones con evidencia.",
  },
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
]

export default function Page() {
  return (
    <main className="min-h-svh overflow-x-hidden bg-[radial-gradient(circle_at_top_left,rgba(139,217,93,0.18),transparent_24%),radial-gradient(circle_at_88%_10%,rgba(15,159,114,0.12),transparent_18%),linear-gradient(180deg,#fcfffd_0%,#f4f9f6_100%)]">
      <div className="presentation-enter mx-auto w-full max-w-[1520px] px-4 py-4 sm:px-6 lg:px-8">
        <section className="rounded-[2rem] border border-border/80 bg-white/95 p-5 shadow-[0_24px_90px_rgba(18,52,45,0.10)]">
          <div className="grid gap-8 xl:grid-cols-[minmax(420px,0.9fr)_minmax(620px,1.1fr)]">
            <aside className="card-enter flex flex-col gap-7" style={{ ["--enter-delay" as string]: "70ms" }}>
              <header className="flex items-start justify-between gap-4 border-b border-border/70 pb-6">
                <div className="flex items-center gap-4">
                  <div
                    aria-hidden="true"
                    className="relative flex size-13 shrink-0 items-center justify-center overflow-hidden rounded-[1.35rem] bg-white shadow-[inset_0_0_0_1px_rgba(18,54,45,0.10)]"
                  >
                    <div className="absolute inset-x-0 top-0 h-[58%] bg-[#8bd95d]" />
                    <div className="absolute inset-x-0 bottom-0 h-[52%] rounded-t-[100%] bg-primary" />
                    <Lightbulb className="relative z-10 size-4.5 text-white" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-semibold tracking-[0.24em] text-primary uppercase">
                      Mi aporte para Avalian
                    </p>
                    <p className="text-sm font-medium text-foreground/72">
                      Orlando Balladares · Product Designer · UX Lead
                    </p>
                  </div>
                </div>

                <div className="hidden rounded-full border border-primary/20 bg-secondary px-3 py-1 text-xs font-semibold text-primary lg:block">
                  One-page
                </div>
              </header>

                <div className="space-y-5">
                  <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-secondary px-4 py-1.5 text-xs font-semibold tracking-[0.22em] text-primary uppercase">
                    <BriefcaseBusiness className="size-3.5" />
                    Match humano y profesional con el rol
                  </div>

                  <div className="space-y-4">
                    <h1 className="max-w-3xl text-4xl leading-none font-semibold tracking-[-0.055em] text-balance text-foreground sm:text-5xl xl:text-[3.5rem]">
                      Experiencia, criterio y ejecucion para Avalian.
                    </h1>
                    <p className="max-w-2xl text-[0.98rem] leading-7 text-foreground/78 xl:text-[1.02rem]">
                      UX, producto, operaciones y tecnologia al servicio de una experiencia mas
                      simple y valiosa.
                    </p>
                  </div>
                </div>

              <section className="rounded-[1.6rem] border border-border/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(246,249,247,0.98))] p-5">
                <p className="text-xs font-semibold tracking-[0.22em] text-primary uppercase">
                  Lo que me interesa de este rol
                </p>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-foreground/84">
                  Me interesa esta oportunidad porque combina algo que valoro especialmente:
                  disenar mejores experiencias para las personas y, al mismo tiempo, traducir esa
                  vision en decisiones concretas para el negocio y los equipos.
                </p>
              </section>

              <section>
                <div className="mb-4 flex items-end justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold tracking-[0.22em] text-primary uppercase">
                      Evidencias concretas
                    </p>
                    <h2 className="mt-2 text-[1.7rem] leading-none font-semibold tracking-[-0.04em] text-foreground">
                      Experiencia que ya dialogue con el rol.
                    </h2>
                  </div>
                </div>

                <div className="grid gap-3 md:grid-cols-2">
                  {evidenceCards.map((item, index) => (
                    <article
                      key={item.title}
                      className="card-enter interactive-card rounded-[1.55rem] border border-border/80 bg-white p-5"
                      style={{ ["--enter-delay" as string]: `${150 + index * 70}ms` }}
                    >
                      <h3 className="text-[1.05rem] leading-tight font-semibold tracking-[-0.03em] text-foreground">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-[1.45rem] text-foreground/76">{item.body}</p>
                    </article>
                  ))}
                </div>
              </section>

              <div className="flex flex-wrap gap-3 pt-1">
                <a
                  href="#match"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "rounded-full bg-primary px-6 text-primary-foreground shadow-[0_14px_34px_rgba(31,122,103,0.24)] hover:bg-primary/90"
                  )}
                >
                  Ver match con el rol
                  <ArrowRight className="size-4" />
                </a>
                <p className="flex items-center text-sm text-foreground/62">
                  Una sola vista, enfocada en valor humano y laboral.
                </p>
              </div>
            </aside>

            <section className="grid gap-6 xl:grid-rows-[minmax(0,1fr)_auto] xl:min-h-[calc(100svh-4.5rem)]">
              <section
                id="match"
                className="card-enter flex min-h-0 scroll-mt-6 flex-col rounded-[1.7rem] border border-border/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(246,250,247,0.98))]"
                style={{ ["--enter-delay" as string]: "130ms" }}
              >
                <div className="border-b border-border/70 px-6 py-6">
                  <p className="text-xs font-semibold tracking-[0.22em] text-primary uppercase">
                    Match con el rol
                  </p>
                  <h2 className="mt-3 text-[1.85rem] leading-none font-semibold tracking-[-0.04em] text-balance text-foreground">
                    Lo que busca Avalian y como puedo aportar desde mi experiencia.
                  </h2>
                  <p className="mt-3 max-w-2xl text-sm leading-6 text-foreground/70">
                    Mi diferencial esta en conectar experiencia, producto, data, operaciones y
                    articulacion entre areas.
                  </p>
                </div>

                <div className="divide-y divide-border/70 xl:hidden">
                  {roleMatches.map((item) => (
                    <MatchStackedRow
                      key={item.need}
                      need={item.need}
                      contribution={item.contribution}
                    />
                  ))}
                </div>

                <div className="hidden min-h-0 xl:flex xl:flex-1 xl:flex-col">
                  <div className="grid grid-cols-[minmax(220px,0.42fr)_minmax(320px,0.58fr)] border-b border-border/70 bg-secondary/20">
                    <div className="border-r border-border/70 px-6 py-4">
                      <p className="text-xs font-semibold tracking-[0.22em] text-primary uppercase">
                        Lo que busca Avalian
                      </p>
                    </div>
                    <div className="px-6 py-4">
                      <p className="text-xs font-semibold tracking-[0.22em] text-primary uppercase">
                        Como puedo aportar
                      </p>
                    </div>
                  </div>

                  <div className="min-h-0 overflow-y-auto">
                    {roleMatches.map((item) => (
                      <div
                        key={item.need}
                        className="grid grid-cols-[minmax(220px,0.42fr)_minmax(320px,0.58fr)] border-b border-border/70 last:border-b-0"
                      >
                        <div className="border-r border-border/70 px-6 py-4">
                          <p className="text-[0.97rem] font-semibold leading-6 text-foreground">
                            {item.need}
                          </p>
                        </div>
                        <div className="px-6 py-4">
                          <p className="text-sm leading-6 text-foreground/78">{item.contribution}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <div className="grid gap-6 2xl:grid-cols-[0.88fr_1.12fr]">
                <section
                  className="card-enter rounded-[1.7rem] border border-border/80 bg-white p-6"
                  style={{ ["--enter-delay" as string]: "210ms" }}
                >
                  <p className="text-xs font-semibold tracking-[0.22em] text-primary uppercase">
                    Mi forma de trabajar
                  </p>
                  <h2 className="mt-3 text-[1.7rem] leading-none font-semibold tracking-[-0.04em] text-foreground">
                    Valor humano en la forma de liderar.
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
                  className="card-enter rounded-[1.7rem] border border-border/80 bg-[linear-gradient(135deg,rgba(139,217,93,0.14),rgba(255,255,255,0.98)_28%,rgba(15,159,114,0.08)_100%)] p-6"
                  style={{ ["--enter-delay" as string]: "270ms" }}
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

                  <div className="mt-6 rounded-[1.35rem] border border-border/80 bg-white/92 px-4 py-4">
                    <p className="text-sm font-semibold text-foreground">Gracias por el tiempo.</p>
                    <p className="mt-1 text-sm leading-6 text-foreground/72">
                      Me entusiasma la posibilidad de conversar como podria contribuir a esta etapa
                      de Avalian.
                    </p>
                  </div>
                </section>
              </div>
            </section>
          </div>
        </section>
      </div>
    </main>
  )
}

function MatchStackedRow({
  need,
  contribution,
}: {
  need: string
  contribution: string
}) {
  return (
    <div className="space-y-3 px-6 py-4">
      <p className="text-xs font-semibold tracking-[0.22em] text-primary uppercase">
        Lo que busca Avalian
      </p>
      <p className="text-base font-semibold leading-6 text-foreground">{need}</p>
      <p className="text-xs font-semibold tracking-[0.22em] text-primary uppercase">
        Como puedo aportar
      </p>
      <p className="text-sm leading-6 text-foreground/78">{contribution}</p>
    </div>
  )
}
