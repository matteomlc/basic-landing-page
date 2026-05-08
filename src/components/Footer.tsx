import { ExternalLink, Globe, Code } from "lucide-react";

const socialLinks = [
  { icon: Code, href: "#", label: "GitHub" },
  { icon: ExternalLink, href: "#", label: "LinkedIn" },
  { icon: Globe, href: "#", label: "Website" },
];

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto max-w-6xl px-4 py-12">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <p className="font-heading text-lg font-semibold">Mario Rossi</p>

          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="flex h-10 w-10 items-center justify-center rounded-full border text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                aria-label={link.label}
              >
                <link.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Mario Rossi. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
}
