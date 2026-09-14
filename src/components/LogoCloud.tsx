import { Aperture, Box, Compass, Hexagon, Layers, Orbit, Triangle, Waves } from "lucide-react";
import { Reveal } from "./ui";

const LOGOS = [
  { name: "Northloop", icon: Orbit },
  { name: "Hexlab", icon: Hexagon },
  { name: "Fjord", icon: Waves },
  { name: "Mutiny", icon: Triangle },
  { name: "Arcadia", icon: Aperture },
  { name: "Driftwell", icon: Compass },
  { name: "Kanso", icon: Box },
  { name: "Layerline", icon: Layers },
];

function Row({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <div aria-hidden={ariaHidden} className="flex shrink-0 items-center gap-14 pr-14 sm:gap-20 sm:pr-20">
      {LOGOS.map((l) => (
        <span
          key={l.name}
          className="group inline-flex items-center gap-2.5 text-faint transition-colors duration-300 hover:text-dim"
        >
          <l.icon className="size-[18px]" strokeWidth={1.6} />
          <span className="text-lg font-semibold tracking-[-0.02em]">{l.name}</span>
        </span>
      ))}
    </div>
  );
}

export default function LogoCloud() {
  return (
    <section aria-label="Trusted by teams" className="relative py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="text-center text-[11px] font-semibold uppercase tracking-[0.28em] text-faint">
            Powering the group chat&apos;s most employable at
          </p>
        </Reveal>
        <Reveal delay={0.12} className="mt-9">
          <div className="mask-fade-edges marquee-pause overflow-hidden">
            <div className="flex w-max animate-marquee">
              <Row />
              <Row ariaHidden />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
