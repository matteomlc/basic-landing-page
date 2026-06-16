import { Separator } from "@/components/ui/separator";
import { Building2, Sparkles, Wrench } from "lucide-react";

const skills = [
  {
    icon: Wrench,
    title: "Sul campo prima dell'aula",
    description:
      "Ho iniziato a scrivere codice e a fare sistemistica anni prima della laurea. Mi sono formato su problemi veri, non su esercizi.",
  },
  {
    icon: Building2,
    title: "Codice che gira davvero",
    description:
      "Banking, assicurativo, ISP. Lavoro con software che ha utenti reali, vincoli reali e che non può andare giù.",
  },
  {
    icon: Sparkles,
    title: "AI applicata, non slide",
    description:
      "Spring AI, RAG, agenti conversazionali e plugin con LLM. Quando lavoro con l'IA è per metterla in produzione, non per fare demo.",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            Chi sono
          </h2>
          <Separator className="mx-auto mt-6 w-16" />
          <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
            Sono Matteo Mullace, software engineer con base a Torino. Ho
            iniziato come sviluppatore mobile e web freelance, poi sono passato
            per la sistemistica e oggi costruisco backend Java/Spring e agenti
            AI in ambiente bancario. Laurea in Informatica all'Università degli
            Studi di Torino, periodo Erasmus, e una buona dose di lavoro reale
            prima del titolo. Adesso il mio focus è portare LLM e RAG in
            produzione, dove servono davvero.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="group rounded-2xl border bg-card p-8 text-center transition-shadow hover:shadow-lg"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                <skill.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mt-6 text-xl font-semibold">{skill.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
