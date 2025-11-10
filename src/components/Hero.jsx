import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative w-full min-h-[85vh] md:min-h-screen overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/vc19ejtcC5VJjy5v/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Subtle gradient to improve text contrast (non-blocking for Spline interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />

      <div className="relative z-10 mx-auto max-w-xl px-6 pt-28 pb-16 sm:pt-36 sm:pb-24 text-center text-zinc-100">
        <p className="tracking-widest text-xs uppercase text-zinc-400">Undangan Pernikahan</p>
        <h1 className="mt-4 text-4xl sm:text-5xl font-bold leading-tight">
          <span className="block">Aira</span>
          <span className="block text-zinc-300">&</span>
          <span className="block">Dimas</span>
        </h1>
        <p className="mt-4 text-sm sm:text-base text-zinc-300">Sabtu, 14 Desember 2025 • Jakarta</p>
        <a href="#details" className="mt-8 inline-flex items-center justify-center rounded-full bg-zinc-900/70 hover:bg-zinc-800/80 text-zinc-100 border border-zinc-700/50 px-6 py-3 text-sm transition-colors">
          Buka Undangan
        </a>
      </div>
    </section>
  )
}
