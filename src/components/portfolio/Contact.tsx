import { useState, type FormEvent } from "react";
import { Mail, MapPin, Phone, Linkedin } from "lucide-react";
import { profile } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const subject = encodeURIComponent(String(data.get("subject") ?? ""));
    const body = encodeURIComponent(
      `${String(data.get("message") ?? "")}\n\n— ${String(
        data.get("name") ?? "",
      )} (${String(data.get("email") ?? "")})`,
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const inputClass =
    "w-full rounded-md border border-border bg-surface-2 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-accent";

  return (
    <section id="contact" className="section-pad bg-surface/40">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          title="Contact Me"
          subtitle="Get in touch with me for collaborations or opportunities"
        />

        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold">Let's Talk</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Feel free to reach out if you're looking for a developer, have a question, or just
              want to connect. I'm currently open to new opportunities and interesting projects.
            </p>

            <ul className="mt-8 space-y-4 text-sm">
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Mail className="size-4 text-accent" />
                  {profile.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${profile.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Phone className="size-4 text-accent" />
                  {profile.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="size-4 text-accent" />
                {profile.location}
              </li>
              <li>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Linkedin className="size-4 text-accent" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          <div className="card-surface p-6 sm:p-8">
            <h3 className="text-xl font-semibold">Connect With Me</h3>
            <form onSubmit={onSubmit} className="mt-6 space-y-4">
              <input name="name" required placeholder="Your Name" className={inputClass} />
              <input
                name="email"
                type="email"
                required
                placeholder="Your Email"
                className={inputClass}
              />
              <input name="subject" required placeholder="Subject" className={inputClass} />
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Message"
                className={inputClass}
              />
              <button
                type="submit"
                className="bg-brand w-full rounded-md px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Send Message
              </button>
              {sent && (
                <p className="text-xs text-accent">
                  Your email app should now be open with the message ready to send.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
