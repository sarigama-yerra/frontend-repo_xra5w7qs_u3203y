export default function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="px-6 py-16 sm:py-20 md:py-24">
      <div className="max-w-3xl mx-auto text-center">
        {subtitle && <p className="text-xs tracking-widest uppercase text-zinc-400 mb-3">{subtitle}</p>}
        <h2 className="text-2xl sm:text-3xl font-semibold text-zinc-100">{title}</h2>
        <div className="mt-6 text-zinc-300 text-sm sm:text-base leading-relaxed">
          {children}
        </div>
      </div>
    </section>
  )
}
