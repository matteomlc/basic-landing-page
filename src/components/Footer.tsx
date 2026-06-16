import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons";

const socialLinks = [
  {
    icon: LinkedinIcon,
    href: "https://www.linkedin.com/in/matteomullace/",
    label: "LinkedIn",
    external: true,
  },
  {
    icon: GithubIcon,
    href: "https://github.com/matteomlc",
    label: "GitHub",
    external: true,
  },
  {
    icon: Mail,
    href: "mailto:mat.mullace@gmail.com",
    label: "Email",
    external: false,
  },
];

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto max-w-6xl px-4 py-12">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <p className="font-heading text-lg font-semibold">Matteo Mullace</p>

          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="flex h-10 w-10 items-center justify-center rounded-full border text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                aria-label={link.label}
              >
                <link.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Matteo Mullace. Software engineer
            freelance, base a Torino.
          </p>
        </div>
      </div>
    </footer>
  );
}
