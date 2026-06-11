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

// TODO: sostituisci con i tuoi progetti reali.
const projects: Project[] = [
  {
    title: "Nome del progetto",
    description:
      "Descrivi il problema che hai risolto e il risultato ottenuto. Es: piattaforma di prenotazioni che ha ridotto del 40% i tempi di gestione per il cliente.",
    tags: ["React", "TypeScript", "Node.js"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/username/repo",
  },
  {
    title: "Secondo progetto",
    description:
      "Concentrati su cosa hai costruito e perché conta: tecnologie chiave, sfide affrontate e impatto concreto del lavoro.",
    tags: ["Next.js", "PostgreSQL", "Tailwind"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/username/repo",
  },
  {
    title: "Terzo progetto",
    description:
      "Anche un side-project o un contributo open source vanno benissimo: mostra come scrivi codice e come pensi i problemi.",
    tags: ["Python", "FastAPI", "Docker"],
    repoUrl: "https://github.com/username/repo",
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
            Una selezione dei lavori di cui vado più fiero. Codice, demo e
            risultati concreti.
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
