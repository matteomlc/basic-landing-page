import { Separator } from "@/components/ui/separator";
import { Code, Palette, Users } from "lucide-react";

const skills = [
  {
    icon: Code,
    title: "Sviluppo",
    description:
      "Creo applicazioni web moderne utilizzando le tecnologie più recenti e le best practice del settore.",
  },
  {
    icon: Palette,
    title: "Design",
    description:
      "Progetto interfacce intuitive e accattivanti, con attenzione alla user experience e all'accessibilità.",
  },
  {
    icon: Users,
    title: "Collaborazione",
    description:
      "Lavoro efficacemente in team, con ottime capacità comunicative e orientamento al risultato.",
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
            Sono un professionista appassionato di tecnologia e innovazione. Mi
            dedico alla creazione di soluzioni digitali che combinano estetica e
            funzionalità. Con anni di esperienza nel settore, ho sviluppato
            competenze trasversali che mi permettono di affrontare ogni progetto
            con creatività e rigore tecnico.
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
