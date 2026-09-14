import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { ArrowUpRight, Menu, Sparkle, X } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../utils/cn";

const LINKS = [
  { label: "Features", href: "#features" },
  { label: "Product", href: "#product" },
  { label: "Why Aura", href: "#why" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export function Wordmark({ className }: { className?: string }) {
  return (
    <a href="#top" className={cn("group inline-flex items-center gap-2.5", className)} aria-label="Aura home">
      <span className="relative grid size-8 place-items-center rounded-xl gradient-border">
        <Sparkle className="size-4 text-aurora transition-transform duration-500 group-hover:rotate-180" fill="currentColor" strokeWidth={1} />
      </span>
      <span className="text-[19px] font-bold tracking-[-0.02em] text-mist">aura</span>
    </a>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 24, mass: 0.3 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* scroll progress */}
      <motion.div
        aria-hidden
        style={{ scaleX: progress }}
        className="fixed inset-x-0 top-0 z-[80] h-[2px] origin-left bg-gradient-to-r from-mint via-lilac to-bloom"
      />

      <header className="fixed inset-x-0 top-0 z-[60]">
        <div
          className={cn(
            "mx-auto flex items-center justify-between gap-4 px-5 transition-all duration-500 sm:px-6",
            scrolled
              ? "mx-4 mt-3 max-w-5xl rounded-2xl border border-white/[0.08] bg-void/70 py-2.5 shadow-[0_18px_50px_-20px_rgba(0,0,0,0.8)] backdrop-blur-2xl sm:mx-6 lg:mx-auto lg:px-4"
              : "mt-0 max-w-7xl border-b border-transparent bg-transparent py-5"
          )}
        >
          <Wordmark />

          <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-dim transition-colors duration-300 hover:bg-white/[0.05] hover:text-mist"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-2.5 lg:flex">
            <a
              href="#pricing"
              className="rounded-full px-4 py-2 text-sm font-medium text-dim transition-colors duration-300 hover:text-mist"
            >
              Sign in
            </a>
            <a
              href="#cta"
              className="btn-shine group inline-flex items-center gap-1.5 rounded-full bg-mist px-4.5 py-2.5 text-sm font-semibold text-void transition-transform duration-300 hover:scale-[1.04] active:scale-[0.98]"
            >
              <span className="shine-strip" />
              Get Aura free
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid size-10 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-mist lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {/* mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -12, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -12, filter: "blur(6px)" }}
              transition={{ duration: 0.32, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="mx-4 mt-2 rounded-2xl glass-deep p-3 shadow-2xl lg:hidden"
            >
              <nav aria-label="Mobile" className="flex flex-col">
                {LINKS.map((l, i) => (
                  <motion.a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: -14 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.05, duration: 0.3 }}
                    className="flex items-center justify-between rounded-xl px-4 py-3.5 text-[15px] font-medium text-dim transition-colors hover:bg-white/[0.05] hover:text-mist"
                  >
                    {l.label}
                    <ArrowUpRight className="size-4 opacity-50" />
                  </motion.a>
                ))}
                <motion.a
                  href="#cta"
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.32, duration: 0.3 }}
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-mist px-4 py-3.5 text-[15px] font-semibold text-void"
                >
                  Get Aura free
                  <ArrowUpRight className="size-4" />
                </motion.a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
