import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Send } from "lucide-react";
import { LinkedinIcon } from "@/components/brand-icons";
import type { FormEvent } from "react";
import { useState } from "react";

const EMAIL = "mat.mullace@gmail.com";
const LINKEDIN_URL = "https://www.linkedin.com/in/matteomullace/";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const subject = String(data.get("subject") ?? "");
    const message = String(data.get("message") ?? "");
    const body = `${message}\n\n— ${name} (${email})`;
    const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setSubmitted(true);
  }

  return (
    <section id="contact" className="bg-muted/40 py-24 md:py-32">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            Contattami
          </h2>
          <Separator className="mx-auto mt-6 w-16" />
          <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
            Hai un progetto, un'idea o vuoi semplicemente capire se posso
            esserti utile? Scrivimi: rispondo a tutti, di solito entro un paio
            di giorni lavorativi.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-5">
          <div className="space-y-6 md:col-span-2">
            <a
              href={`mailto:${EMAIL}`}
              className="flex items-start gap-4 group"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-medium">Email</h4>
                <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  {EMAIL}
                </p>
              </div>
            </a>

            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 group"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <LinkedinIcon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-medium">LinkedIn</h4>
                <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  /in/matteomullace
                </p>
              </div>
            </a>

            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-medium">Sede</h4>
                <p className="text-sm text-muted-foreground">
                  Torino, Italia — disponibile da remoto
                </p>
              </div>
            </div>
          </div>

          <Card className="md:col-span-3">
            <CardContent className="p-6 md:p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                    <Send className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold">
                    Apro il tuo client di posta…
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    Se non si è aperto nulla, scrivimi direttamente a{" "}
                    <a
                      href={`mailto:${EMAIL}`}
                      className="font-medium underline-offset-4 hover:underline"
                    >
                      {EMAIL}
                    </a>
                    .
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-medium"
                      >
                        Nome
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Il tuo nome"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium"
                      >
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="La tua email"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="mb-2 block text-sm font-medium"
                    >
                      Oggetto
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Di cosa vuoi parlarmi?"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium"
                    >
                      Messaggio
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Più contesto mi dai, meglio posso aiutarti…"
                      rows={5}
                      required
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    <Send className="mr-2 h-4 w-4" />
                    Apri email precompilata
                  </Button>
                  <p className="text-center text-xs text-muted-foreground">
                    Il pulsante apre il tuo client di posta con il messaggio
                    già pronto. Niente backend, nessun tracciamento.
                  </p>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
