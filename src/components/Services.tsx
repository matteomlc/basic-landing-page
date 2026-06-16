import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Bot, Globe, Server } from "lucide-react";

type Service = {
  icon: typeof Globe;
  title: string;
  forWho: string;
  delivers: string;
  example: string;
};

const services: Service[] = [
  {
    icon: Globe,
    title: "Siti e web app",
    forWho:
      "Professionisti, PMI e startup che vogliono una presenza online veloce, leggibile e curata.",
    delivers:
      "Landing page, siti vetrina e applicazioni su misura. React 19, Next.js, TypeScript, Tailwind. Hosting e dominio compresi se serve.",
    example:
      "Questo stesso sito è React 19 + Vite + Tailwind 4. Il repo è pubblico.",
  },
  {
    icon: Server,
    title: "Backend e full-stack",
    forWho:
      "Team che hanno bisogno di estendere un sistema esistente o costruirne uno da zero, con dati e logica seri dietro.",
    delivers:
      "API REST, microservizi, integrazioni. Java/Spring Boot, Node.js, PostgreSQL, MongoDB, Docker. CI/CD e test inclusi.",
    example:
      "In Reply lavoro a progetti bancari (Assicura, Unicredit) con Spring, SQL e API REST in produzione.",
  },
  {
    icon: Bot,
    title: "Agenti e plugin AI",
    forWho:
      "Aziende che vogliono portare LLM e RAG dentro processi reali, non solo demo da slide.",
    delivers:
      "Agenti conversazionali, RAG sui tuoi documenti, plugin per Claude, integrazione con LLM via Spring AI o SDK. Anche analisi di fattibilità.",
    example:
      "Ho costruito un agente Spring AI che legge polizze in PDF e risponde in contesto via RAG. Da luglio sviluppo un plugin AI per banca MPS.",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-muted/40 py-24 md:py-32">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            Servizi
          </h2>
          <Separator className="mx-auto mt-6 w-16" />
          <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
            Tre aree in cui posso aiutarti, dalla pagina vetrina al sistema con
            IA in produzione. Tariffe trasparenti, niente sorprese.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <Card
              key={service.title}
              className="flex flex-col transition-shadow hover:shadow-lg"
            >
              <CardContent className="flex flex-1 flex-col p-6 md:p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-6 text-xl font-semibold">{service.title}</h3>
                <div className="mt-4 space-y-3 text-sm leading-relaxed">
                  <p>
                    <span className="font-medium text-foreground">Per chi: </span>
                    <span className="text-muted-foreground">{service.forWho}</span>
                  </p>
                  <p>
                    <span className="font-medium text-foreground">Cosa consegno: </span>
                    <span className="text-muted-foreground">{service.delivers}</span>
                  </p>
                  <p>
                    <span className="font-medium text-foreground">Esempio: </span>
                    <span className="text-muted-foreground">{service.example}</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
