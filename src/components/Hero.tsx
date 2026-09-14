import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarClock,
  Check,
  CheckCheck,
  FileText,
  Inbox,
  LayoutGrid,
  Mail,
  Mic,
  Play,
  Search,
  Send,
  Sparkles,
  Star,
  Workflow,
  Zap,
} from "lucide-react";
import { type MouseEvent } from "react";
import { AuroraBlobs } from "./Aurora";
import { EASE, Magnetic } from "./ui";

const FLOW_ROWS = [
  { name: "Standup → #product digest", pct: 82 },
  { name: "Inbox triage + polite declines", pct: 64 },
  { name: "Deck polish before 3pm demo", pct: 91 },
];

export default function Hero() {
  const reduce = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 18, mass: 0.6 });
  const sy = useSpring(my, { stiffness: 60, damping: 18, mass: 0.6 });

  const cardX = useTransform(sx, [-0.5, 0.5], [-10, 10]);
  const cardY = useTransform(sy, [-0.5, 0.5], [-8, 8]);
  const floatX = useTransform(sx, [-0.5, 0.5], [16, -16]);
  const floatY = useTransform(sy, [-0.5, 0.5], [12, -12]);
  const floatX2 = useTransform(sx, [-0.5, 0.5], [-22, 22]);
  const floatY2 = useTransform(sy, [-0.5, 0.5], [-14, 14]);
  const glowX = useTransform(sx, [-0.5, 0.5], ["-8%", "8%"]);
  const glowY = useTransform(sy, [-0.5, 0.5], ["-6%", "6%"]);

  const onMove = (e: MouseEvent<HTMLElement>) => {
    if (reduce) return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  return (
    <section id="top" onMouseMove={onMove} className="relative overflow-hidden pt-36 pb-16 sm:pt-44 sm:pb-24">
      <AuroraBlobs />
      <div aria-hidden className="bg-grid mask-fade-y absolute inset-0" />
      {/* cursor glow */}
      <motion.div
        aria-hidden
        style={{ x: glowX, y: glowY }}
        className="pointer-events-none absolute left-1/2 top-24 h-[420px] w-[680px] -translate-x-1/2 rounded-full bg-lilac/[0.07] blur-[110px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* ---------- copy ---------- */}
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <motion.a
            href="#product"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="group mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] py-1.5 pl-2 pr-3.5 text-[13px] font-medium text-dim transition-colors hover:border-white/20 hover:text-mist"
          >
            <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-mint/15 via-lilac/15 to-bloom/15 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-aurora">
              <Sparkles className="size-3 text-lilac" />
              Aura 2.0
            </span>
            Flows are here — automations, minus the tears
            <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </motion.a>

          <h1 className="text-balance text-[2.9rem] font-semibold leading-[1.0] tracking-[-0.045em] text-mist sm:text-6xl md:text-7xl lg:text-[5.4rem]">
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 34 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.08, ease: EASE }}
            >
              Do less busywork.
            </motion.span>
            <motion.span
              className="mt-1 block"
              initial={{ opacity: 0, y: 34 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
            >
              Keep all the{" "}
              <span className="font-serif-accent text-aurora pr-1 text-[1.06em]">credit.</span>
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.32, ease: EASE }}
            className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-dim sm:text-lg"
          >
            Aura is the AI workspace that drafts your emails, summarizes your meetings, and
            quietly automates the boring bits — so you can log off at five and still get promoted.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.44, ease: EASE }}
            className="mt-9 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row"
          >
            <Magnetic className="w-full sm:w-auto">
              <a
                href="#pricing"
                className="btn-shine group inline-flex w-full items-center justify-center gap-2 rounded-full bg-mist px-7 py-3.5 text-[15px] font-semibold text-void shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_18px_50px_-12px_rgba(183,164,251,0.5)] transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98] sm:w-auto"
              >
                <span className="shine-strip" />
                Start free — no card, no catch
                <ArrowUpRight className="size-4.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Magnetic>
            <Magnetic strength={0.2} className="w-full sm:w-auto">
              <a
                href="#product"
                className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full border border-white/12 bg-white/[0.04] px-7 py-3.5 text-[15px] font-semibold text-mist backdrop-blur transition-colors duration-300 hover:border-white/25 hover:bg-white/[0.07] sm:w-auto"
              >
                <span className="grid size-6 place-items-center rounded-full bg-white/10 transition-transform duration-300 group-hover:scale-110">
                  <Play className="size-3 fill-mist text-mist" />
                </span>
                Watch the 2-min film
              </a>
            </Magnetic>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.56, ease: EASE }}
            className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[13px] text-faint"
          >
            <span className="inline-flex items-center gap-2">
              <span className="flex" aria-hidden>
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="size-3.5 fill-ember text-ember" />
                ))}
              </span>
              <span className="font-medium text-dim">4.9/5</span> from 12,400+ reviews
            </span>
            <span aria-hidden className="hidden h-4 w-px bg-white/10 sm:block" />
            <span className="inline-flex items-center gap-1.5">
              <Zap className="size-3.5 text-mint" />
              Set up in 90 seconds
            </span>
            <span aria-hidden className="hidden h-4 w-px bg-white/10 sm:block" />
            <span className="inline-flex items-center gap-1.5">
              <Check className="size-3.5 text-mint" />
              Free forever plan
            </span>
          </motion.div>
        </div>

        {/* ---------- product mockup ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 80, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.62, ease: EASE }}
          className="relative mx-auto mt-16 max-w-5xl sm:mt-20"
        >
          {/* glow under window */}
          <div aria-hidden className="absolute -inset-x-8 bottom-[-30px] top-16 rounded-[40px] bg-gradient-to-r from-mint/10 via-lilac/15 to-bloom/10 blur-3xl" />

          {/* floating card: notes */}
          <motion.div
            style={{ x: floatX, y: floatY }}
            className="absolute -top-8 right-2 z-20 hidden md:block lg:-right-10"
          >
            <div className="glass-deep card-sheen rounded-2xl p-4 shadow-2xl animate-float-a" style={{ "--fl-rot": "2deg" } as React.CSSProperties}>
              <div className="flex items-center gap-3">
                <span className="grid size-9 place-items-center rounded-xl bg-mint/15 text-mint">
                  <CheckCheck className="size-4.5" />
                </span>
                <div>
                  <p className="text-[13px] font-semibold text-mist">Meeting notes delivered</p>
                  <p className="text-[11px] text-faint">3 decisions · 5 action items · just now</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* floating card: inbox zero */}
          <motion.div style={{ x: floatX2, y: floatY2 }} className="absolute -bottom-6 left-2 z-20 hidden md:block lg:-left-10">
            <div className="glass-deep card-sheen rounded-2xl p-4 shadow-2xl animate-float-b" style={{ "--fl-rot": "-2.5deg" } as React.CSSProperties}>
              <div className="flex items-center gap-3">
                <span className="grid size-9 place-items-center rounded-xl bg-bloom/15 text-bloom">
                  <Inbox className="size-4.5" />
                </span>
                <div>
                  <p className="text-[13px] font-semibold text-mist">Inbox zero, again</p>
                  <p className="text-[11px] text-faint">41 emails triaged while you slept</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* the window */}
          <motion.div
            style={{ x: cardX, y: cardY }}
            className="glass-deep relative overflow-hidden rounded-2xl shadow-[0_60px_120px_-40px_rgba(0,0,0,0.9)] sm:rounded-3xl"
          >
            {/* top vignette line */}
            <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
            {/* browser bar */}
            <div className="flex items-center gap-3 border-b border-white/[0.07] px-4 py-3 sm:px-5">
              <div className="flex gap-1.5" aria-hidden>
                <span className="size-2.5 rounded-full bg-white/12" />
                <span className="size-2.5 rounded-full bg-white/12" />
                <span className="size-2.5 rounded-full bg-white/12" />
              </div>
              <div className="mx-auto flex w-full max-w-xs items-center justify-center gap-2 rounded-lg border border-white/[0.07] bg-white/[0.03] px-3 py-1.5 text-[11px] text-faint">
                <Search className="size-3" />
                aura.so / today
              </div>
              <div className="w-10" aria-hidden />
            </div>

            <div className="flex">
              {/* mini sidebar */}
              <div className="hidden flex-col items-center gap-1.5 border-r border-white/[0.07] px-3 py-5 sm:flex" aria-hidden>
                {[LayoutGrid, Mail, CalendarClock, Workflow, FileText].map((Icon, i) => (
                  <span
                    key={i}
                    className={
                      i === 0
                        ? "grid size-9 place-items-center rounded-xl bg-gradient-to-br from-mint/20 via-lilac/20 to-bloom/20 text-mist"
                        : "grid size-9 place-items-center rounded-xl text-faint transition-colors hover:text-dim"
                    }
                  >
                    <Icon className="size-4" />
                  </span>
                ))}
              </div>

              {/* main pane */}
              <div className="grid flex-1 gap-4 p-4 sm:p-6 lg:grid-cols-[1.5fr_1fr]">
                <div className="flex flex-col gap-4">
                  <div className="flex items-end justify-between gap-3">
                    <div>
                      <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-faint">Tuesday, 9:02 AM</p>
                      <p className="mt-1 text-lg font-semibold tracking-[-0.02em] text-mist sm:text-xl">
                        Morning, Mika — <span className="font-serif-accent text-aurora">I handled it.</span>
                      </p>
                    </div>
                    <span className="hidden items-center gap-1.5 rounded-full border border-mint/20 bg-mint/[0.08] px-2.5 py-1 text-[11px] font-medium text-mint sm:inline-flex">
                      <span className="size-1.5 rounded-full bg-mint animate-pulse-dot" />
                      3 flows running
                    </span>
                  </div>

                  {/* chat card */}
                  <div className="rounded-2xl border border-white/[0.07] bg-white/[0.028] p-4">
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full bg-gradient-to-br from-mint via-lilac to-bloom text-[10px] font-bold text-void">M</span>
                      <div className="min-w-0">
                        <p className="rounded-xl rounded-tl-sm bg-white/[0.05] px-3.5 py-2.5 text-[13px] leading-relaxed text-mist">
                          Turn the Q3 standup into a crisp update for #product — and nudge Priya about the launch copy.
                        </p>
                      </div>
                    </div>
                    <div className="mt-3.5 flex items-start gap-3">
                      <span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full gradient-border">
                        <Sparkles className="size-3.5 text-aurora" />
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="rounded-xl rounded-tl-sm border border-lilac/15 bg-lilac/[0.06] px-3.5 py-3">
                          <p className="text-[13px] leading-relaxed text-mist">Done and done. Drafted in your voice — here's the checklist:</p>
                          <ul className="mt-2.5 space-y-1.5">
                            {["Q3 update posted to #product", "Blockers tagged with owners", "Launch copy nudge sent to Priya"].map((t) => (
                              <li key={t} className="flex items-center gap-2 text-[12px] text-dim">
                                <span className="grid size-4 place-items-center rounded-full bg-mint/15">
                                  <Check className="size-2.5 text-mint" />
                                </span>
                                {t}
                              </li>
                            ))}
                          </ul>
                          <div className="mt-3.5 flex gap-2">
                            <button className="inline-flex items-center gap-1.5 rounded-lg bg-mist px-3 py-1.5 text-[11px] font-semibold text-void transition-transform duration-200 hover:scale-[1.04] active:scale-[0.97]">
                              <Send className="size-3" /> Approve & send
                            </button>
                            <button className="rounded-lg border border-white/12 px-3 py-1.5 text-[11px] font-medium text-dim transition-colors hover:text-mist">
                              Edit draft
                            </button>
                          </div>
                        </div>
                        {/* typing indicator */}
                        <div className="mt-2.5 flex items-center gap-1 pl-1" aria-hidden>
                          <span className="size-1.5 rounded-full bg-lilac animate-typing" />
                          <span className="size-1.5 rounded-full bg-lilac animate-typing" style={{ animationDelay: "0.18s" }} />
                          <span className="size-1.5 rounded-full bg-lilac animate-typing" style={{ animationDelay: "0.36s" }} />
                          <span className="ml-1.5 text-[10px] text-faint">Aura is drafting your 1:1 agenda…</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* quick prompt bar */}
                  <div className="flex items-center gap-2.5 rounded-xl border border-white/[0.08] bg-white/[0.03] px-3.5 py-2.5">
                    <Sparkles className="size-4 text-lilac" />
                    <span className="flex-1 truncate text-[13px] text-faint">Ask Aura to do literally anything…</span>
                    <Mic className="size-4 text-faint" aria-hidden />
                    <span className="grid size-6 place-items-center rounded-md bg-mist text-void">
                      <ArrowUpRight className="size-3.5" />
                    </span>
                  </div>
                </div>

                {/* right column */}
                <div className="hidden flex-col gap-4 lg:flex">
                  <div className="rounded-2xl border border-white/[0.07] bg-white/[0.028] p-4">
                    <div className="flex items-center justify-between">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-faint">Today</p>
                      <CalendarClock className="size-3.5 text-faint" />
                    </div>
                    <ul className="mt-3 space-y-2.5">
                      {[
                        { t: "10:30", name: "Design sync — auto-notes on", live: true },
                        { t: "13:00", name: "Deep work — calendar defended", live: false },
                        { t: "15:00", name: "Demo — deck polished by Aura", live: false },
                      ].map((r) => (
                        <li key={r.t} className="flex items-center gap-2.5 rounded-lg border border-white/[0.05] bg-white/[0.02] px-2.5 py-2">
                          <span className="text-[10px] font-semibold tabular-nums text-faint">{r.t}</span>
                          <span className="flex-1 truncate text-[12px] text-dim">{r.name}</span>
                          {r.live && <span className="size-1.5 shrink-0 rounded-full bg-mint animate-pulse-dot" />}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-2xl border border-white/[0.07] bg-white/[0.028] p-4">
                    <div className="flex items-center justify-between">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-faint">Flows</p>
                      <Workflow className="size-3.5 text-faint" />
                    </div>
                    <ul className="mt-3 space-y-3">
                      {FLOW_ROWS.map((f) => (
                        <li key={f.name}>
                          <div className="flex items-center justify-between gap-2 text-[11px]">
                            <span className="truncate text-dim">{f.name}</span>
                            <span className="tabular-nums text-faint">{f.pct}%</span>
                          </div>
                          <div className="mt-1.5 h-1 overflow-hidden rounded-full bg-white/[0.06]">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${f.pct}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1.4, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
                              className="h-full rounded-full bg-gradient-to-r from-mint via-lilac to-bloom"
                            />
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-2xl gradient-border p-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-dim">Time reclaimed</p>
                    <p className="mt-1.5 text-2xl font-semibold tracking-[-0.02em] text-mist">
                      7h 42m <span className="font-serif-accent text-aurora text-[1.05em]">this week</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
