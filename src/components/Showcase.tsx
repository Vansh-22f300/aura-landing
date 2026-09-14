import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Inbox,
  Reply,
  Search,
  Send,
  Sparkles,
  Workflow,
} from "lucide-react";
import { useState, type ComponentType } from "react";
import { cn } from "../utils/cn";
import { EASE, Eyebrow, Reveal } from "./ui";

const TABS = [
  {
    id: "copilot",
    icon: Sparkles,
    label: "Copilot",
    headline: "Ask once. Aura does the doing.",
    copy: "Chat like you would with a work bestie who somehow read every doc, email and Slack thread in the company.",
    bullets: [
      "Answers grounded in your actual work — cited, not hallucinated",
      "Drafts docs, decks and replies in your voice",
      "Hands you the next step before you even ask",
    ],
  },
  {
    id: "inbox",
    icon: Inbox,
    label: "Smart Inbox",
    headline: "Your inbox, managed like a celebrity's.",
    copy: "Aura reads everything first. You only see the four emails that actually matter — plus drafts already written for each.",
    bullets: [
      "Auto-triage by urgency, not by who shouts loudest",
      "Polite declines for \"quick syncs\" that could've been a Loom",
      "Morning digest: 41 emails → a 90-second read",
    ],
  },
  {
    id: "flows",
    icon: Workflow,
    label: "Flows",
    headline: "Automate the job, keep the paycheck.",
    copy: "Describe the outcome in plain English. Aura builds the automation across your stack and runs it forever — no flowchart degree required.",
    bullets: [
      "120+ integrations: Slack, Notion, Gmail, Linear, Figma…",
      "Triggers, conditions and approvals built in",
      "Versioned and monitored, so nothing breaks silently at 2am",
    ],
  },
] as const;

function CopilotPane() {
  return (
    <div className="space-y-3.5">
      <div className="flex items-center gap-2.5 rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3">
        <Search className="size-4 text-lilac" />
        <span className="text-[13px] text-faint">What changed on the Atlas launch this week?</span>
        <Send className="ml-auto size-4 text-faint" />
      </div>
      <div className="rounded-2xl border border-lilac/15 bg-lilac/[0.05] p-5">
        <p className="text-[13.5px] leading-relaxed text-mist">
          Since Monday: the launch slipped to the 18th, Priya merged the new pricing page, and legal approved the copy
          — you're only waiting on Ben's hero video.
        </p>
        <div className="mt-4 grid gap-2 sm:grid-cols-3">
          {[
            { src: "Linear · ATL-231", t: "Launch moved to the 18th" },
            { src: "GitHub · PR #482", t: "Pricing page merged" },
            { src: "Gmail · Legal", t: "Copy approved, 2 typos fixed" },
          ].map((c) => (
            <div key={c.src} className="rounded-xl border border-white/[0.06] bg-void/50 p-3">
              <p className="text-[9.5px] font-semibold uppercase tracking-widest text-lilac">{c.src}</p>
              <p className="mt-1 text-[11.5px] leading-snug text-dim">{c.t}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          <button className="inline-flex items-center gap-1.5 rounded-lg bg-mist px-3 py-1.5 text-[11px] font-semibold text-void transition-transform duration-200 hover:scale-105 active:scale-95">
            <Reply className="size-3" /> Nudge Ben nicely
          </button>
          <button className="rounded-lg border border-white/12 px-3 py-1.5 text-[11px] font-medium text-dim transition-colors hover:text-mist">
            Share to #launch
          </button>
        </div>
      </div>
    </div>
  );
}

function InboxPane() {
  const rows = [
    { from: "Amara · Client", subj: "Contract ready to sign", tag: "Reply drafted", tone: "text-mint border-mint/25 bg-mint/[0.07]", time: "9:04" },
    { from: "Priya", subj: "Launch copy — final FINAL v3", tag: "Summarized", tone: "text-lilac border-lilac/25 bg-lilac/[0.07]", time: "8:52" },
    { from: "Random webinar", subj: "LAST CHANCE: synergy summit", tag: "Archived", tone: "text-faint border-white/10 bg-white/[0.04]", time: "8:31" },
    { from: "Ben", subj: "hero_video_final_v9.mp4", tag: "Nudge queued", tone: "text-bloom border-bloom/25 bg-bloom/[0.07]", time: "7:58" },
  ];
  return (
    <div className="space-y-2.5">
      <div className="flex items-center justify-between rounded-xl border border-mint/20 bg-mint/[0.06] px-4 py-3">
        <p className="text-[12.5px] font-medium text-mint">
          <span className="font-serif-accent text-[1.15em]">41 emails</span> became 4 while you made coffee
        </p>
        <Check className="size-4 text-mint" />
      </div>
      {rows.map((r) => (
        <div key={r.subj} className="group flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.028] px-4 py-3 transition-colors duration-300 hover:border-white/[0.14]">
          <span className="grid size-8 shrink-0 place-items-center rounded-full bg-gradient-to-br from-mint/30 via-lilac/30 to-bloom/30 text-[10px] font-bold text-mist">
            {r.from[0]}
          </span>
          <div className="min-w-0 flex-1">
            <p className="truncate text-[12.5px] font-medium text-mist">{r.from}</p>
            <p className="truncate text-[11.5px] text-faint">{r.subj}</p>
          </div>
          <span className={cn("hidden shrink-0 rounded-full border px-2 py-0.5 text-[9.5px] font-semibold uppercase tracking-widest sm:inline", r.tone)}>
            {r.tag}
          </span>
          <span className="shrink-0 text-[10px] tabular-nums text-faint">{r.time}</span>
        </div>
      ))}
    </div>
  );
}

function FlowsPane() {
  const steps = [
    { app: "Typeform", event: "New lead drops in", on: true },
    { app: "Aura", event: "Drafts a reply in your voice", on: true },
    { app: "HubSpot", event: "Logs the deal + next step", on: true },
    { app: "Slack", event: "Pings #sales with context", on: false },
  ];
  return (
    <div className="space-y-0">
      {steps.map((s, i) => (
        <div key={s.app} className="relative flex gap-4 pb-5 last:pb-0">
          {i < steps.length - 1 && (
            <span aria-hidden className="absolute left-[17px] top-10 h-[calc(100%-40px)] w-px bg-gradient-to-b from-mint/40 via-lilac/40 to-bloom/40" />
          )}
          <span className="gradient-border grid size-9 shrink-0 place-items-center rounded-xl bg-void text-[10px] font-bold text-mist">
            {s.app[0]}
          </span>
          <div className="flex-1 rounded-xl border border-white/[0.06] bg-white/[0.028] px-4 py-2.5">
            <p className="text-[9.5px] font-semibold uppercase tracking-widest text-faint">{s.app}</p>
            <p className="text-[12.5px] text-mist">{s.event}</p>
          </div>
          <span className={cn("mt-3 size-2 shrink-0 rounded-full", s.on ? "bg-mint animate-pulse-dot" : "bg-white/20")} />
        </div>
      ))}
      <div className="mt-4 flex items-center gap-2 rounded-xl border border-white/[0.07] bg-white/[0.03] px-4 py-3 text-[11.5px] text-dim">
        <Sparkles className="size-3.5 text-lilac" />
        Built from one sentence: <span className="text-mist">"When a lead comes in, handle it."</span>
      </div>
    </div>
  );
}

const PANES: Record<string, ComponentType> = {
  copilot: CopilotPane,
  inbox: InboxPane,
  flows: FlowsPane,
};

export default function Showcase() {
  const [active, setActive] = useState<(typeof TABS)[number]["id"]>("copilot");
  const tab = TABS.find((t) => t.id === active)!;
  const Pane = PANES[active];

  return (
    <section id="product" className="relative py-24 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[480px] w-[820px] -translate-x-1/2 rounded-full bg-lilac/[0.07] blur-[130px]"
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <Eyebrow>
              <span className="size-1.5 rounded-full bg-mint" />
              The tour
            </Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-5 text-balance text-4xl font-semibold tracking-[-0.04em] text-mist sm:text-5xl lg:text-[3.4rem] lg:leading-[1.04]">
              Pretty. Productive. <span className="font-serif-accent text-aurora text-[1.05em]">Pick two.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 text-pretty text-base leading-relaxed text-dim sm:text-lg">
              Poke around. Three views that quietly replace three hours of your day.
            </p>
          </Reveal>
        </div>

        {/* tab bar */}
        <Reveal delay={0.25} className="mt-10">
          <div role="tablist" aria-label="Product views" className="mx-auto flex w-fit max-w-full gap-1 overflow-x-auto rounded-full border border-white/[0.08] bg-white/[0.03] p-1.5 backdrop-blur">
            {TABS.map((t) => (
              <button
                key={t.id}
                role="tab"
                aria-selected={active === t.id}
                onClick={() => setActive(t.id)}
                className={cn(
                  "relative flex items-center gap-2 whitespace-nowrap rounded-full px-4 py-2.5 text-[13.5px] font-medium transition-colors duration-300 sm:px-5",
                  active === t.id ? "text-void" : "text-dim hover:text-mist"
                )}
              >
                {active === t.id && (
                  <motion.span
                    layoutId="showcase-pill"
                    transition={{ type: "spring", stiffness: 320, damping: 30 }}
                    className="absolute inset-0 rounded-full bg-mist"
                  />
                )}
                <t.icon className="relative z-10 size-4" />
                <span className="relative z-10">{t.label}</span>
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 grid items-center gap-10 lg:grid-cols-[1fr_1.25fr] lg:gap-14">
          {/* copy side */}
          <div className="order-2 lg:order-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={tab.id}
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.45, ease: EASE }}
              >
                <h3 className="text-2xl font-semibold tracking-[-0.03em] text-mist sm:text-3xl">{tab.headline}</h3>
                <p className="mt-3.5 text-[15px] leading-relaxed text-dim">{tab.copy}</p>
                <ul className="mt-6 space-y-3.5">
                  {tab.bullets.map((b, i) => (
                    <motion.li
                      key={b}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.12 + i * 0.09, duration: 0.45, ease: EASE }}
                      className="flex items-start gap-3 text-[14.5px] text-dim"
                    >
                      <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-mint/15">
                        <Check className="size-3 text-mint" />
                      </span>
                      {b}
                    </motion.li>
                  ))}
                </ul>
                <a
                  href="#pricing"
                  className="group mt-7 inline-flex items-center gap-2 text-[14px] font-semibold text-mist transition-colors hover:text-mint"
                >
                  Try {tab.label} free
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </a>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* pane side */}
          <div className="order-1 lg:order-2">
            <Reveal delay={0.15}>
              <div className="relative">
                <div aria-hidden className="absolute -inset-4 rounded-[32px] bg-gradient-to-r from-mint/[0.07] via-lilac/[0.1] to-bloom/[0.07] blur-2xl" />
                <div
                  role="tabpanel"
                  aria-label={tab.label}
                  className="glass-deep relative min-h-[380px] overflow-hidden rounded-3xl p-5 sm:p-6"
                >
                  <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={tab.id}
                      initial={{ opacity: 0, scale: 0.985, y: 14 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.99, y: -10 }}
                      transition={{ duration: 0.4, ease: EASE }}
                    >
                      <Pane />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
