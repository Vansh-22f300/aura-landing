/* Ambient aurora background — drifting blurred blobs, reused across sections */
export function AuroraBlobs({ variant = "hero" }: { variant?: "hero" | "cta" }) {
  if (variant === "cta") {
    return (
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-[-30%] h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-lilac/[0.16] blur-[130px] animate-drift-a" />
        <div className="absolute bottom-[-40%] left-[8%] h-[480px] w-[620px] rounded-full bg-mint/[0.13] blur-[120px] animate-drift-b" />
        <div className="absolute bottom-[-35%] right-[4%] h-[480px] w-[620px] rounded-full bg-bloom/[0.13] blur-[120px] animate-drift-c" />
      </div>
    );
  }
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute left-[12%] top-[-12%] h-[620px] w-[720px] rounded-full bg-lilac/[0.13] blur-[140px] animate-drift-a" />
      <div className="absolute right-[-6%] top-[6%] h-[540px] w-[640px] rounded-full bg-mint/[0.11] blur-[130px] animate-drift-b" />
      <div className="absolute bottom-[-18%] left-[28%] h-[520px] w-[680px] rounded-full bg-bloom/[0.1] blur-[140px] animate-drift-c" />
    </div>
  );
}
