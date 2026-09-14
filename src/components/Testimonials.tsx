import { Quote, Star } from "lucide-react";
import { Eyebrow, Reveal } from "./ui";

type T = { name: string; role: string; initials: string; quote: string; hue: string };

const ROW_A: T[] = [
  {
    name: "Maya Chen",
    role: "Product Manager, 26 · recovering meeting addict",
    initials: "MC",
    hue: "from-mint/40 to-lilac/40",
    quote: "Aura declined 11 \"quick syncs\" for me this week, politely. My calendar has never looked this empty or my perf review this good.",
  },
  {
    name: "Jordan Okafor",
    role: "Consultant, 28 · professional slide-maker",
    initials: "JO",
    hue: "from-lilac/40 to-bloom/40",
    quote: "It drafted a client email so accurately that my manager replied 'great note!!' I simply accepted the praise. That's between me and Aura.",
  },
  {
    name: "Sofia Reyes",
    role: "Marketing Lead, 25 · inbox-zero believer",
    initials: "SR",
    hue: "from-bloom/40 to-mint/40",
    quote: "The morning digest turned 40 minutes of email dread into 90 seconds. I now use that time to drink my coffee while it's hot. Revolutionary.",
  },
  {
    name: "Dev Patel",
    role: "Founder, 29 · chief everything officer",
    initials: "DP",
    hue: "from-mint/40 to-bloom/40",
    quote: "We delayed hiring an ops person by 6 months because Flows just… runs the back office. Sorry, imaginary hire. You were wonderful.",
  },
];

const ROW_B: T[] = [
  {
    name: "Leni Fischer",
    role: "Designer, 24 · pixel perfectionist",
    initials: "LF",
    hue: "from-lilac/40 to-mint/40",
    quote: "I was the 'AI is cheating' person. Then Aura wrote my status updates in my exact tone and I converted faster than a Figma plugin.",
  },
  {
    name: "Theo Marchetti",
    role: "Data Analyst, 27 · spreadsheet enjoyer",
    initials: "TM",
    hue: "from-bloom/40 to-lilac/40",
    quote: "Asked it 'what changed on the launch?' and got a cited answer in 4 seconds. My old workflow was opening 9 tabs and sighing.",
  },
  {
    name: "Amara Diallo",
    role: "Account Exec, 26 · quota crusher",
    initials: "AD",
    hue: "from-mint/40 to-lilac/40",
    quote: "Follow-up drafts before I've even hung up the call. My pipeline updates itself. I close at 5 and go to pilates like a meds ad.",
  },
  {
    name: "Kenji Sato",
    role: "Software Engineer, 30 · standup skeptic",
    initials: "KS",
    hue: "from-lilac/40 to-bloom/40",
    quote: "The meeting notes are better than the meetings. Decisions, owners, deadlines — all logged. I attend maybe 40% of them now. Bliss.",
  },
];

function Card({ t }: { t: T }) {
  return (
    <figure className="glass card-sheen w-[300px] shrink-0 rounded-3xl p-6 transition-colors duration-500 hover:border-white/[0.18] sm:w-[340px]">
      <div className="flex items-center justify-between">
        <div className="flex gap-0.5" aria-label="5 out of 5 stars">
          {[0, 1, 2, 3, 4].map((i) => (
            <Star key={i} className="size-3.5 fill-ember text-ember" />
          ))}
        </div>
        <Quote className="size-4 text-faint" aria-hidden />
      </div>
      <blockquote className="mt-4 text-[14px] leading-relaxed text-dim">“{t.quote}”</blockquote>
      <figcaption className="mt-5 flex items-center gap-3">
        <span className={`grid size-10 shrink-0 place-items-center rounded-full bg-gradient-to-br ${t.hue} text-[11px] font-bold text-mist`}>
          {t.initials}
        </span>
        <div>
          <p className="text-[13.5px] font-semibold text-mist">{t.name}</p>
          <p className="text-[11.5px] text-faint">{t.role}</p>
        </div>
      </figcaption>
    </figure>
  );
}

export default function Testimonials() {
  return (
    <section aria-label="Testimonials" className="relative overflow-hidden py-24 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-bloom/[0.06] blur-[130px]"
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <Eyebrow>
              <span className="size-1.5 rounded-full bg-ember" />
              Wall of love
            </Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-5 text-balance text-4xl font-semibold tracking-[-0.04em] text-mist sm:text-5xl lg:text-[3.4rem] lg:leading-[1.04]">
              Rated 5 stars by people <span className="font-serif-accent text-aurora text-[1.05em]">who log off at five.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 text-pretty text-base leading-relaxed text-dim sm:text-lg">
              121,000+ young professionals. Zero performance reviews mentioning "warm regards" fatigue.
            </p>
          </Reveal>
        </div>
      </div>

      <Reveal delay={0.15} className="mt-14 sm:mt-16">
        <div className="mask-fade-edges marquee-pause space-y-4 overflow-hidden">
          <div className="flex w-max animate-marquee-fast">
            <div className="flex gap-4 pr-4">
              {ROW_A.map((t) => (
                <Card key={t.name} t={t} />
              ))}
            </div>
            <div aria-hidden className="flex gap-4 pr-4">
              {ROW_A.map((t) => (
                <Card key={t.name + "-dup"} t={t} />
              ))}
            </div>
          </div>
          <div className="flex w-max animate-marquee-rev">
            <div className="flex gap-4 pr-4">
              {ROW_B.map((t) => (
                <Card key={t.name} t={t} />
              ))}
            </div>
            <div aria-hidden className="flex gap-4 pr-4">
              {ROW_B.map((t) => (
                <Card key={t.name + "-dup"} t={t} />
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
