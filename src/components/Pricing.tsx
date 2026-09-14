import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck, Check, Crown, Sparkles, Users } from "lucide-react";
import { useState } from "react";
import { cn } from "../utils/cn";
import { EASE, Eyebrow, Reveal, Stagger, StaggerItem } from "./ui";

const TIERS = [
  {
    id: "sidekick",
    icon: Sparkles,
    name: "Sidekick",
    priceM: 0,
    priceY: 0,
    unit: "",
    tagline: "For dipping a perfectly manicured toe.",
    cta: "Start free forever",
    features: ["100 AI actions / month", "1 connected inbox + calendar", "3 active Flows", "Your-voice drafting (lite)", "Community support"],
  },
  {
    id: "main",
    icon: Crown,
    name: "Main Character",
    priceM: 14,
    priceY: 11,
    unit: "",
    tagline: "For the 10x-er paying 1x prices.",
    cta: "Claim the spotlight",
    popular: true,
    features: [
      "Unlimited AI actions",
      "Unlimited inboxes, calendars & Flows",
      "Full voice-match drafting",
      "Meeting autopilot + action items",
      "Priority speed + priority support",
      "Custom prompts & brand tone",
    ],
  },
  {
    id: "squad",
    icon: Users,
    name: "Whole Squad",
    priceM: 29,
    priceY: 23,
    unit: "/seat",
    tagline: "For teams that ship and still brunch.",
    cta: "Assemble the squad",
    features: [
      "Everything in Main Character",
      "Shared workspaces & Flows",
      "Admin controls, SSO / SAML",
      "Team analytics & time-saved reports",
      "Dedicated success human",
    ],
  },
];

export default function Pricing() {
  const [yearly, setYearly] = useState(true);

  return (
    <section id="pricing" className="relative py-24 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-24 h-[420px] w-[760px] -translate-x-1/2 rounded-full bg-mint/[0.06] blur-[130px]"
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <Eyebrow>
              <span className="size-1.5 rounded-full bg-mint" />
              Pricing
            </Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-5 text-balance text-4xl font-semibold tracking-[-0.04em] text-mist sm:text-5xl lg:text-[3.4rem] lg:leading-[1.04]">
              Cheaper than your <span className="font-serif-accent text-aurora text-[1.05em]">matcha budget.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 text-pretty text-base leading-relaxed text-dim sm:text-lg">
              Start free, upgrade when your calendar starts looking suspiciously empty.
            </p>
          </Reveal>

          {/* billing toggle */}
          <Reveal delay={0.28}>
            <div className="mt-8 inline-flex items-center gap-1 rounded-full border border-white/[0.08] bg-white/[0.03] p-1.5 backdrop-blur">
              {(["Monthly", "Yearly"] as const).map((label) => {
                const isYear = label === "Yearly";
                const selected = yearly === isYear;
                return (
                  <button
                    key={label}
                    onClick={() => setYearly(isYear)}
                    aria-pressed={selected}
                    className={cn(
                      "relative flex items-center gap-2 rounded-full px-5 py-2 text-[13.5px] font-medium transition-colors duration-300",
                      selected ? "text-void" : "text-dim hover:text-mist"
                    )}
                  >
                    {selected && (
                      <motion.span
                        layoutId="billing-pill"
                        transition={{ type: "spring", stiffness: 340, damping: 30 }}
                        className="absolute inset-0 rounded-full bg-mist"
                      />
                    )}
                    <span className="relative z-10">{label}</span>
                    {isYear && (
                      <span
                        className={cn(
                          "relative z-10 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider",
                          selected ? "bg-void/10 text-void" : "bg-mint/15 text-mint"
                        )}
                      >
                        -21%
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </Reveal>
        </div>

        <Stagger className="mt-14 grid items-stretch gap-4 sm:mt-16 lg:grid-cols-3 lg:gap-5" gap={0.12}>
          {TIERS.map((tier) => {
            const price = yearly ? tier.priceY : tier.priceM;
            return (
              <StaggerItem key={tier.id} className="h-full">
                <article
                  className={cn(
                    "card-sheen relative flex h-full flex-col rounded-3xl p-7 transition-all duration-500 hover:-translate-y-2 sm:p-8",
                    tier.popular
                      ? "gradient-border shadow-[0_40px_90px_-40px_rgba(183,164,251,0.4)] lg:scale-[1.03]"
                      : "glass hover:border-white/[0.16]"
                  )}
                >
                  {tier.popular && (
                    <span className="absolute -top-3.5 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full bg-gradient-to-r from-mint via-lilac to-bloom px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-void">
                      <BadgeCheck className="size-3.5" />
                      Most popular
                    </span>
                  )}
                  <div className="flex items-center gap-3">
                    <span
                      className={cn(
                        "grid size-10 place-items-center rounded-2xl",
                        tier.popular ? "gradient-border" : "border border-white/[0.08] bg-white/[0.04]"
                      )}
                    >
                      <tier.icon className={cn("size-4.5", tier.popular ? "text-mist" : "text-dim")} strokeWidth={1.7} />
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold tracking-[-0.02em] text-mist">{tier.name}</h3>
                    </div>
                  </div>
                  <p className="mt-3 text-[13.5px] text-faint">{tier.tagline}</p>

                  <div className="mt-6 flex items-end gap-1.5">
                    <span className="relative h-12 overflow-hidden">
                      <motion.span
                        key={String(yearly) + tier.id}
                        initial={{ y: 26, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, ease: EASE }}
                        className="block text-5xl font-semibold tracking-[-0.04em] text-mist"
                      >
                        ${price}
                      </motion.span>
                    </span>
                    <span className="pb-1.5 text-[13px] text-faint">
                      {price === 0 ? "forever" : `${tier.unit ? `${tier.unit} ` : ""}/ month${yearly ? ", billed yearly" : ""}`}
                    </span>
                  </div>

                  <ul className="mt-7 flex-1 space-y-3">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-[13.5px] text-dim">
                        <span
                          className={cn(
                            "mt-0.5 grid size-[18px] shrink-0 place-items-center rounded-full",
                            tier.popular ? "bg-gradient-to-br from-mint/25 via-lilac/25 to-bloom/25" : "bg-white/[0.06]"
                          )}
                        >
                          <Check className={cn("size-2.5", tier.popular ? "text-mint" : "text-dim")} />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#cta"
                    className={cn(
                      "btn-shine group mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[14px] font-semibold transition-all duration-300 active:scale-[0.98]",
                      tier.popular
                        ? "bg-mist text-void hover:scale-[1.03] shadow-[0_18px_40px_-14px_rgba(183,164,251,0.55)]"
                        : "border border-white/12 bg-white/[0.04] text-mist hover:border-white/25 hover:bg-white/[0.07]"
                    )}
                  >
                    <span className="shine-strip" />
                    {tier.cta}
                    <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </article>
              </StaggerItem>
            );
          })}
        </Stagger>

        <Reveal delay={0.2}>
          <p className="mt-8 text-center text-[13px] text-faint">
            Cancel anytime — we&apos;ll be sad, not weird about it. Students with a .edu email get Main Character half-off.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
