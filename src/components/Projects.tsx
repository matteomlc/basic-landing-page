import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowUpRight, Code2 } from "lucide-react";

type Project = {
  title: string;
  description: string;
  tags: string[];
  /** Link alla demo live del progetto (lascia vuoto per nasconderlo) */
  liveUrl?: string;
  /** Link al repository (lascia vuoto per nasconderlo) */
  repoUrl?: string;
};

const projects: Project[] = [
  {
    title: "Agente conversazionale Spring AI",
    description:
      "Per IRISCUBE Reply: agente che legge polizze assicurative in PDF e risponde in modo contestualizzato via RAG. Pipeline completa di ingestion, embedding, retrieval e risposta in linguaggio naturale.",
    tags: ["Spring AI", "RAG", "Java", "Spring", "PDF"],
  },
  {
    title: "Backend Assicura",
    description:
      "Sviluppo e supporto sul backend del progetto Assicura in Reply. Servizi Java/Spring in produzione su PostgreSQL e MongoDB, deploy in container Docker e flussi gestiti in Scrum.",
    tags: ["Java", "Spring", "MongoDB", "PostgreSQL", "Docker"],
  },
  {
    title: "Questo sito",
    description:
      "La landing page che stai guardando. React 19, Vite 8 e Tailwind 4 con componenti shadcn/ui. Repo pubblico: chiunque può vedere com'è strutturata.",
    tags: ["React 19", "TypeScript", "Vite", "Tailwind 4", "shadcn/ui"],
    repoUrl: "https://github.com/matteomlc/basic-landing-page",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            Progetti
          </h2>
          <Separator className="mx-auto mt-6 w-16" />
          <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
            Una selezione di lavori reali: due case study aziendali e questo
            stesso sito. Niente demo da slide.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="group flex flex-col transition-shadow hover:shadow-lg"
            >
              <CardContent className="flex flex-1 flex-col p-6 md:p-8">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <div className="flex shrink-0 items-center gap-2">
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground transition-colors hover:text-foreground"
                        aria-label={`Repository di ${project.title}`}
                      >
                        <Code2 className="h-5 w-5" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground transition-colors hover:text-foreground"
                        aria-label={`Demo live di ${project.title}`}
                      >
                        <ArrowUpRight className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>
                <p className="mt-4 flex-1 leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
