import {
  CalendarCheck2,
  Check,
  FileSignature,
  Inbox,
  Lock,
  Workflow,
} from "lucide-react";
import { Eyebrow, Reveal, Stagger, StaggerItem } from "./ui";

/* Small inline visuals keep the bento crisp at every resolution */

function VoiceVisual() {
  return (
    <div aria-hidden className="mt-6 space-y-2.5">
      <div className="flex items-center gap-2.5">
        <span className="grid size-6 shrink-0 place-items-center rounded-full bg-gradient-to-br from-mint via-lilac to-bloom text-[9px] font-bold text-void">J</span>
        <p className="rounded-lg rounded-tl-sm bg-white/[0.05] px-3 py-2 text-[11.5px] text-faint line-through decoration-faint/60">
          Per my last email, circling back on this thread…
        </p>
      </div>
      <div className="flex items-center gap-2.5">
        <span className="gradient-border grid size-6 shrink-0 place-items-center rounded-full">
          <FileSignature className="size-3 text-lilac" />
        </span>
        <div className="relative flex-1 rounded-lg rounded-tl-sm border border-mint/20 bg-mint/[0.05] px-3 py-2">
          <p className="text-[11.5px] leading-snug text-mist">
            Hey Sam — nudging on the Q3 numbers so we can lock the deck by Thursday. Two mins, promise.
          </p>
          <span className="absolute -top-2 right-2.5 rounded-full bg-mint/15 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-widest text-mint">
            Your voice
          </span>
        </div>
      </div>
    </div>
  );
}

function MeetingVisual() {
  const rows = [
    { speaker: "Priya", text: "Ship the onboarding flow Friday — I'll own QA.", mine: false },
    { speaker: "Aura", text: "Decision logged · 2 action items assigned", mine: true },
  ];
  return (
    <div aria-hidden className="mt-6 space-y-2">
      {rows.map((r) => (
        <div key={r.speaker} className="flex items-center gap-2.5 rounded-lg border border-white/[0.05] bg-white/[0.03] px-3 py-2">
          <span
            className={
              r.mine
                ? "rounded-md bg-lilac/15 px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-widest text-lilac"
                : "rounded-md bg-white/[0.06] px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-widest text-dim"
            }
          >
            {r.speaker}
          </span>
          <span className="truncate text-[11.5px] text-dim">{r.text}</span>
          {r.mine && <Check className="ml-auto size-3 shrink-0 text-mint" />}
        </div>
      ))}
      <div className="flex items-center gap-1.5 pl-1 pt-0.5">
        <span className="size-1.5 rounded-full bg-bloom animate-typing" />
        <span className="size-1.5 rounded-full bg-bloom animate-typing" style={{ animationDelay: "0.18s" }} />
        <span className="size-1.5 rounded-full bg-bloom animate-typing" style={{ animationDelay: "0.36s" }} />
        <span className="ml-1 text-[10px] text-faint">Listening so you can daydream</span>
      </div>
    </div>
  );
}

function InboxVisual() {
  const items = [
    { from: "Newsletter #47", label: "Archive", tone: "text-faint bg-white/[0.06]" },
    { from: "Client: contract?", label: "Urgent", tone: "text-bloom bg-bloom/15" },
    { from: "\"Quick sync??\"", label: "Decline politely", tone: "text-mint bg-mint/15" },
  ];
  return (
    <div aria-hidden className="mt-6 space-y-2">
      {items.map((i) => (
        <div key={i.from} className="flex items-center justify-between gap-2 rounded-lg border border-white/[0.05] bg-white/[0.03] px-3 py-2">
          <span className="truncate text-[11.5px] text-dim">{i.from}</span>
          <span className={`shrink-0 rounded-md px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-widest ${i.tone}`}>{i.label}</span>
        </div>
      ))}
    </div>
  );
}

function FlowVisual() {
  const nodes = ["New lead", "Draft reply", "Log in CRM", "Ping #sales"];
  return (
    <div aria-hidden className="mt-6">
      <div className="flex flex-wrap items-center gap-1.5">
        {nodes.map((n, i) => (
          <div key={n} className="flex items-center gap-1.5">
            <span
              className={
                i === 1
                  ? "rounded-lg gradient-border px-2.5 py-1.5 text-[10.5px] font-medium text-mist"
                  : "rounded-lg border border-white/[0.07] bg-white/[0.03] px-2.5 py-1.5 text-[10.5px] text-dim"
              }
            >
              {n}
            </span>
            {i < nodes.length - 1 && <span className="h-px w-3 bg-gradient-to-r from-mint/50 to-lilac/50" />}
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center gap-2 rounded-lg border border-mint/15 bg-mint/[0.05] px-3 py-2 text-[10.5px] text-mint">
        <span className="size-1.5 rounded-full bg-mint animate-pulse-dot" />
        Ran 214 times this week · 0 Sunday scaries
      </div>
    </div>
  );
}

const BENTO = [
  {
    icon: FileSignature,
    title: "Drafts that sound like you",
    copy: "Aura studies your sent folder (with permission) and writes in your voice — unhinged sign-offs optional.",
    visual: <VoiceVisual />,
    span: "lg:col-span-4",
  },
  {
    icon: CalendarCheck2,
    title: "Meetings, minus the meeting",
    copy: "Notes, decisions and action items land in your tools before the Zoom fatigue does.",
    visual: <MeetingVisual />,
    span: "lg:col-span-2",
  },
  {
    icon: Inbox,
    title: "Inbox zero on autopilot",
    copy: "Triage, labels, and graceful declines — handled while you sleep in.",
    visual: <InboxVisual />,
    span: "lg:col-span-2",
  },
  {
    icon: Workflow,
    title: "Flows: your clone army",
    copy: "Chain your apps together with plain-English automations. No code, no tears, no Zapier invoice.",
    visual: <FlowVisual />,
    span: "lg:col-span-2",
  },
  {
    icon: Lock,
    title: "Locked down, pinky promise",
    copy: "SOC 2 Type II, EU hosting, zero model training on your data. Your secrets stay yours.",
    visual: (
      <div aria-hidden className="mt-6 flex flex-wrap gap-1.5">
        {["SOC 2 Type II", "GDPR", "SSO / SAML", "AES-256", "No training on your data"].map((b) => (
          <span key={b} className="rounded-full border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-[10px] font-medium text-dim">
            {b}
          </span>
        ))}
      </div>
    ),
    span: "lg:col-span-2",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <Eyebrow>
              <span className="size-1.5 rounded-full bg-lilac" />
              What Aura does
            </Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-5 text-balance text-4xl font-semibold tracking-[-0.04em] text-mist sm:text-5xl lg:text-[3.4rem] lg:leading-[1.04]">
              A whole ops team, <span className="font-serif-accent text-aurora text-[1.05em]">in your pocket.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 text-pretty text-base leading-relaxed text-dim sm:text-lg">
              Five superpowers, one subscription that costs less than your weekly matcha run.
            </p>
          </Reveal>
        </div>

        <Stagger className="mt-14 grid grid-cols-1 gap-4 sm:mt-16 md:grid-cols-2 lg:grid-cols-6" gap={0.08}>
          {BENTO.map((c) => (
            <StaggerItem key={c.title} className={c.span}>
              <article className="glass card-sheen group relative h-full overflow-hidden rounded-3xl p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-white/[0.16] hover:shadow-[0_30px_70px_-30px_rgba(139,245,201,0.14)] sm:p-7">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-16 -top-16 size-44 rounded-full bg-lilac/[0.08] blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
                <span className="gradient-border inline-grid size-11 place-items-center rounded-2xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <c.icon className="size-5 text-mist" strokeWidth={1.7} />
                </span>
                <h3 className="mt-5 text-lg font-semibold tracking-[-0.02em] text-mist">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-dim">{c.copy}</p>
                {c.visual}
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
