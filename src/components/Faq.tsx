import { AnimatePresence, motion } from "framer-motion";
import { MessageCircleQuestion, Plus } from "lucide-react";
import { useState } from "react";
import { cn } from "../utils/cn";
import { EASE, Eyebrow, Reveal, Stagger, StaggerItem } from "./ui";

const FAQS = [
  {
    q: "Will Aura actually sound like me, or like a LinkedIn bot?",
    a: "Like you — suspiciously so. Aura learns from your sent emails, docs and Slack style (all opt-in) to match your tone, length and even your sign-offs. You approve everything before it ships, and you can dial the sass up or down per draft.",
  },
  {
    q: "Is my data used to train AI models?",
    a: "Never. Zero training on your data, full stop. Everything is encrypted in transit and at rest, hosted on SOC 2 Type II infrastructure with EU region options. Your embarrassing draft folder stays between us.",
  },
  {
    q: "How long does setup actually take?",
    a: "About 90 seconds: connect Gmail or Outlook, link your calendar, pick a vibe. Aura starts triaging immediately and gets noticeably smarter over your first week. No 47-step onboarding, no 'schedule a demo' hostage situation.",
  },
  {
    q: "What apps does Aura connect to?",
    a: "Gmail, Outlook, Slack, Notion, Google Workspace, Linear, Figma, HubSpot, Zoom and 110+ more. Flows can chain any of them together — if it has an API or a webhook, Aura probably speaks it.",
  },
  {
    q: "Can I cancel whenever? Will you make it weird?",
    a: "Cancel in two clicks from settings — no chat-with-support maze, no guilt-trip modal with a crying mascot. Your data exports cleanly and we delete it on request. We'll be sad, professionally.",
  },
  {
    q: "I'm a student. Am I rich enough for this?",
    a: "Statistically, no — and that's fine. Sidekick is free forever, and a .edu email gets you Main Character at 50% off. Spend the savings on groceries. Call your parents.",
  },
];

function Item({ q, a, open, onToggle, index }: { q: string; a: string; open: boolean; onToggle: () => void; index: number }) {
  const panelId = `faq-panel-${index}`;
  const btnId = `faq-btn-${index}`;
  return (
    <div
      className={cn(
        "glass overflow-hidden rounded-2xl transition-colors duration-300",
        open ? "border-white/[0.16]" : "hover:border-white/[0.14]"
      )}
    >
      <button
        id={btnId}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-5 py-4.5 text-left sm:px-6 sm:py-5"
      >
        <span className="text-[15px] font-medium tracking-[-0.01em] text-mist sm:text-base">{q}</span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.35, ease: EASE }}
          className={cn(
            "grid size-7 shrink-0 place-items-center rounded-full border transition-colors duration-300",
            open ? "border-lilac/40 bg-lilac/15 text-lilac" : "border-white/10 bg-white/[0.04] text-dim"
          )}
        >
          <Plus className="size-3.5" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={btnId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-5 text-[13.5px] leading-relaxed text-dim sm:px-6 sm:text-[14.5px]">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Reveal>
              <Eyebrow>
                <span className="size-1.5 rounded-full bg-lilac" />
                FAQ
              </Eyebrow>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-5 text-balance text-4xl font-semibold tracking-[-0.04em] text-mist sm:text-5xl">
                Asked, <span className="font-serif-accent text-aurora text-[1.05em]">answered.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-5 max-w-sm text-pretty text-base leading-relaxed text-dim">
                The questions everyone DMs us anyway. Still curious? Our humans reply fast — the AI made them very available.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <a
                href="#cta"
                className="group mt-7 inline-flex items-center gap-2.5 rounded-full border border-white/12 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-mist transition-colors duration-300 hover:border-white/25 hover:bg-white/[0.07]"
              >
                <MessageCircleQuestion className="size-4.5 text-lilac" />
                Talk to a human
              </a>
            </Reveal>
          </div>

          <Stagger className="space-y-3" gap={0.07}>
            {FAQS.map((f, i) => (
              <StaggerItem key={f.q} y={22}>
                <Item q={f.q} a={f.a} index={i} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
