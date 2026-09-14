import { ArrowRight, Check } from "lucide-react";
import { useState, type FormEvent, type SVGProps } from "react";
import { Wordmark } from "./Navbar";

function XIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}
function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}
function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12M7.12 20.45H3.56V9h3.56z" />
    </svg>
  );
}
function GithubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M12 .3a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.03c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5 1 .1-.78.42-1.31.76-1.61-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.11-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.81 1.1.81 2.23v3.3c0 .32.22.7.83.58A12 12 0 0 0 12 .3" />
    </svg>
  );
}

const COLS = [
  {
    title: "Product",
    links: ["Copilot", "Smart Inbox", "Flows", "Meeting Autopilot", "Changelog", "Roadmap"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Manifesto", "Press kit", "Brand (yes, the gradients)"],
  },
  {
    title: "Resources",
    links: ["Help center", "Prompt library", "Community", "Status", "API docs"],
  },
  {
    title: "Legal-ish",
    links: ["Privacy", "Terms", "Security", "DPA", "Cookies (the boring kind)"],
  },
];

const SOCIALS = [
  { icon: XIcon, label: "Aura on X" },
  { icon: InstagramIcon, label: "Aura on Instagram" },
  { icon: LinkedinIcon, label: "Aura on LinkedIn" },
  { icon: GithubIcon, label: "Aura on GitHub" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (email.trim()) setDone(true);
  };

  return (
    <footer className="relative border-t border-white/[0.07]">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_2fr]">
          {/* brand + newsletter */}
          <div>
            <Wordmark />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-dim">
              The AI workspace that does your busywork — made for people who have plans after six.
            </p>
            <form onSubmit={submit} className="mt-7" aria-label="Newsletter signup">
              <label htmlFor="footer-email" className="text-[11px] font-semibold uppercase tracking-[0.22em] text-faint">
                The Sunday-scaries antidote, monthly
              </label>
              {done ? (
                <p className="mt-3 inline-flex items-center gap-2 rounded-full border border-mint/25 bg-mint/[0.08] px-4 py-2.5 text-sm text-mint">
                  <Check className="size-4" />
                  You&apos;re on the list. Go touch grass.
                </p>
              ) : (
                <div className="mt-3 flex max-w-sm items-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.03] p-1.5 pl-4 transition-colors focus-within:border-lilac/40">
                  <input
                    id="footer-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@actually-leave-at-five.com"
                    className="w-full bg-transparent text-sm text-mist placeholder:text-faint focus:outline-none"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe"
                    className="group grid size-9 shrink-0 place-items-center rounded-full bg-mist text-void transition-transform duration-300 hover:scale-105 active:scale-95"
                  >
                    <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </button>
                </div>
              )}
            </form>
            <div className="mt-7 flex gap-2.5">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href="#top"
                  aria-label={s.label}
                  className="grid size-10 place-items-center rounded-full border border-white/[0.09] bg-white/[0.03] text-dim transition-all duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:text-mist"
                >
                  <s.icon className="size-4.5" strokeWidth={1.6} />
                </a>
              ))}
            </div>
          </div>

          {/* link columns */}
          <nav aria-label="Footer" className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {COLS.map((c) => (
              <div key={c.title}>
                <h3 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-faint">{c.title}</h3>
                <ul className="mt-4 space-y-2.5">
                  {c.links.map((l) => (
                    <li key={l}>
                      <a
                        href="#top"
                        className="group relative inline-block text-[13.5px] text-dim transition-colors duration-300 hover:text-mist"
                      >
                        {l}
                        <span
                          aria-hidden
                          className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-mint via-lilac to-bloom transition-transform duration-300 group-hover:scale-x-100"
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-5 border-t border-white/[0.06] pt-8 sm:flex-row">
          <p className="text-[12.5px] text-faint">© 2026 Aura Labs, Inc. All rights reserved. All vibes intact.</p>
          <div className="flex items-center gap-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-[11.5px] text-dim">
              <span className="size-1.5 rounded-full bg-mint animate-pulse-dot" />
              All systems vibing
            </span>
            <span className="text-[11.5px] text-faint">SOC 2 · GDPR · AES-256</span>
          </div>
        </div>
      </div>

      {/* oversized watermark */}
      <div aria-hidden className="pointer-events-none select-none overflow-hidden pb-2">
        <p className="bg-gradient-to-b from-white/[0.055] to-transparent bg-clip-text text-center text-[24vw] font-bold leading-[0.78] tracking-[-0.05em] text-transparent">
          aura
        </p>
      </div>
    </footer>
  );
}
