export default function Timeline({ items = [] }) {
  return (
    <div className="relative max-w-3xl mx-auto">
      <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 top-0 bottom-0 w-px bg-zinc-800/80" />
      <ul className="space-y-10">
        {items.map((item, idx) => (
          <li key={idx} className="relative flex sm:block gap-4">
            <div className="mt-1 shrink-0 w-8 h-8 rounded-full bg-zinc-900 border border-zinc-700/70 grid place-content-center text-xs text-zinc-200 z-10">
              {idx + 1}
            </div>
            <div className="sm:ml-10">
              <h3 className="text-zinc-100 font-medium">{item.title}</h3>
              <p className="text-zinc-400 text-sm">{item.time}</p>
              {item.desc && <p className="text-zinc-300 mt-2 text-sm leading-relaxed">{item.desc}</p>}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
