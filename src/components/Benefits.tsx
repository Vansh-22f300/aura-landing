import { motion } from "framer-motion";
import { Check, Coffee, Moon, TrendingUp, X } from "lucide-react";
import { Counter, EASE, Eyebrow, Reveal, Stagger, StaggerItem } from "./ui";

const WITHOUT = [
  "9:07 — 63 unread emails, 3 of them actually matter",
  "11:00 — meeting about the pre-meeting for the meeting",
  "14:30 — rewriting the same update for the fourth tool",
  "18:47 — \"just one more thing…\" (narrator: it was not)",
  "22:15 — laptop in bed. Character building, apparently",
];

const WITH = [
  "9:00 — digest: 4 emails matter, drafts already written",
  "11:00 — Aura attends, you take a walk. Notes delivered",
  "14:30 — one update, auto-shipped to every tool",
  "17:00 — laptop closes with a satisfying little click",
  "22:15 — you're two episodes deep into your show",
];

const STATS = [
  { icon: TrendingUp, value: 8.2, decimals: 1, suffix: " hrs", label: "reclaimed weekly, per person" },
  { icon: Coffee, value: 63, suffix: "%", label: "fewer meetings survived" },
  { icon: Moon, value: 97, suffix: "%", label: "report zero Sunday scaries" },
  { icon: Check, value: 121, suffix: "k+", label: "young professionals employed & unbothered" },
];

function List({ items, good }: { items: string[]; good: boolean }) {
  return (
    <motion.ul
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07 } } }}
      className="space-y-3"
    >
      {items.map((t) => (
        <motion.li
          key={t}
          variants={{
            hidden: { opacity: 0, y: 18 },
            show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
          }}
          className={
            good
              ? "flex items-center gap-3 rounded-xl border border-mint/[0.12] bg-mint/[0.045] px-4 py-3 text-[13.5px] text-mist"
              : "flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3 text-[13.5px] text-faint"
          }
        >
          <span
            className={
              good
                ? "grid size-5 shrink-0 place-items-center rounded-full bg-mint/15"
                : "grid size-5 shrink-0 place-items-center rounded-full bg-white/[0.06]"
            }
          >
            {good ? <Check className="size-3 text-mint" /> : <X className="size-3 text-faint" />}
          </span>
          {t}
        </motion.li>
      ))}
    </motion.ul>
  );
}

export default function Benefits() {
  return (
    <section id="why" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <Eyebrow>
              <span className="size-1.5 rounded-full bg-bloom" />
              Why Aura
            </Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-5 text-balance text-4xl font-semibold tracking-[-0.04em] text-mist sm:text-5xl lg:text-[3.4rem] lg:leading-[1.04]">
              The math is <span className="font-serif-accent text-aurora text-[1.05em]">mathing.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 text-pretty text-base leading-relaxed text-dim sm:text-lg">
              Same Tuesday. One runs on Aura, one runs on vibes and panic.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-4 sm:mt-16 lg:grid-cols-2 lg:gap-6">
          <Reveal delay={0.1}>
            <div className="h-full rounded-3xl border border-white/[0.07] bg-white/[0.015] p-6 sm:p-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-faint">Without Aura</p>
              <p className="mt-1.5 text-xl font-semibold tracking-[-0.02em] text-dim">The hustle-culture rerun</p>
              <div className="mt-6">
                <List items={WITHOUT} good={false} />
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.22}>
            <div className="card-sheen relative h-full overflow-hidden rounded-3xl gradient-border p-6 sm:p-8">
              <div aria-hidden className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-lilac/[0.12] blur-3xl" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-mint">With Aura</p>
              <p className="mt-1.5 text-xl font-semibold tracking-[-0.02em] text-mist">
                The <span className="font-serif-accent text-aurora text-[1.08em]">limited series</span>
              </p>
              <div className="mt-6">
                <List items={WITH} good />
              </div>
            </div>
          </Reveal>
        </div>

        {/* stats */}
        <Stagger className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4" gap={0.1}>
          {STATS.map((s) => (
            <StaggerItem key={s.label}>
              <div className="glass card-sheen group h-full rounded-3xl p-6 text-center transition-all duration-500 hover:-translate-y-1 hover:border-white/[0.16] sm:p-7">
                <span className="mx-auto inline-grid size-10 place-items-center rounded-2xl bg-white/[0.05] text-dim transition-all duration-500 group-hover:scale-110 group-hover:text-mint">
                  <s.icon className="size-4.5" strokeWidth={1.7} />
                </span>
                <p className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-mist sm:text-4xl">
                  <Counter to={s.value} decimals={s.decimals ?? 0} suffix={s.suffix} />
                </p>
                <p className="mt-1.5 text-[12.5px] leading-snug text-faint">{s.label}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
