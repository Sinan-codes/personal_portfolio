export default function BackgroundFX() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-ink">
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.06] via-transparent to-transparent" />
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_40%,transparent_100%)]" />
      <div className="animate-float absolute -top-32 -left-32 h-[28rem] w-[28rem] rounded-full bg-blue-600/20 blur-[110px]" />
      <div className="animate-float-slow absolute top-1/3 -right-40 h-[32rem] w-[32rem] rounded-full bg-cyan-600/15 blur-[120px]" />
      <div className="animate-float absolute bottom-0 left-1/4 h-[24rem] w-[24rem] rounded-full bg-teal-500/10 blur-[110px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink" />
    </div>
  );
}
