import { ArrowUpRight, Sparkle, Zap } from "lucide-react";
import { AuroraBlobs } from "./Aurora";
import { Magnetic, Reveal } from "./ui";

export default function Cta() {
  return (
    <section id="cta" className="relative px-5 py-24 sm:px-8 sm:py-32">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[36px] gradient-border">
        <AuroraBlobs variant="cta" />
        <div aria-hidden className="bg-grid mask-fade-y absolute inset-0 opacity-70" />

        {/* orbiting sparkle decorations */}
        <div aria-hidden className="pointer-events-none absolute inset-0 hidden sm:block">
          <Sparkle className="absolute left-[12%] top-[20%] size-4 text-mint/60 animate-float-a" fill="currentColor" strokeWidth={1} />
          <Sparkle className="absolute right-[14%] top-[30%] size-3 text-lilac/60 animate-float-b" fill="currentColor" strokeWidth={1} />
          <Sparkle className="absolute bottom-[22%] left-[22%] size-3 text-bloom/60 animate-float-b" fill="currentColor" strokeWidth={1} style={{ animationDelay: "1.2s" }} />
          <Zap className="absolute bottom-[26%] right-[20%] size-4 text-mint/50 animate-float-a" style={{ animationDelay: "0.8s" }} />
        </div>

        <div className="relative px-6 py-20 text-center sm:px-12 sm:py-28">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-lilac">Ready when you are</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mx-auto mt-6 max-w-3xl text-balance text-[2.6rem] font-semibold leading-[1.04] tracking-[-0.045em] text-mist sm:text-6xl lg:text-[4.4rem]">
              Your 5pm self
              <br />
              says <span className="font-serif-accent text-aurora text-[1.06em]">thank you.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-lg text-pretty text-base leading-relaxed text-dim sm:text-lg">
              Free forever plan. Ninety-second setup. The only thing you have to lose is the busywork.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Magnetic>
                <a
                  href="#top"
                  className="btn-shine group inline-flex items-center justify-center gap-2 rounded-full bg-mist px-8 py-4 text-[15px] font-semibold text-void shadow-[0_0_0_1px_rgba(255,255,255,0.12),0_24px_60px_-16px_rgba(183,164,251,0.6)] transition-transform duration-300 hover:scale-[1.04] active:scale-[0.98]"
                >
                  <span className="shine-strip" />
                  Claim your aura — it&apos;s free
                  <ArrowUpRight className="size-4.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </Magnetic>
              <p className="text-[12.5px] text-faint">
                No card · No sales call · No 14-day countdown clock
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
