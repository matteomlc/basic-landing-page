import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import type { FormEvent } from "react";
import { useState } from "react";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
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
            Hai un progetto in mente o vuoi semplicemente fare una chiacchierata?
            Scrivimi, sarò felice di risponderti.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-5">
          {/* Contact Info */}
          <div className="space-y-6 md:col-span-2">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-medium">Email</h4>
                <p className="text-sm text-muted-foreground">
                  mario.rossi@email.com
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-medium">Telefono</h4>
                <p className="text-sm text-muted-foreground">
                  +39 333 123 4567
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-medium">Posizione</h4>
                <p className="text-sm text-muted-foreground">
                  Milano, Italia
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="md:col-span-3">
            <CardContent className="p-6 md:p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                    <Send className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold">
                    Messaggio inviato!
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    Grazie per avermi scritto. Ti risponderò il prima possibile.
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
                      placeholder="Oggetto del messaggio"
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
                      placeholder="Scrivi il tuo messaggio..."
                      rows={5}
                      required
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    <Send className="mr-2 h-4 w-4" />
                    Invia messaggio
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
