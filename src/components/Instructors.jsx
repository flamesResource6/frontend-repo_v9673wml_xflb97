import { useEffect, useState } from 'react'

export default function Instructors() {
  const [list, setList] = useState([])

  useEffect(() => {
    const load = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${base}/api/instructors`)
        const data = await res.json()
        setList(data)
      } catch (e) {
        console.error(e)
      }
    }
    load()
  }, [])

  return (
    <section id="instructors" className="relative py-20">
      <div className="relative max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Meet the instructors</h2>
        <p className="text-blue-100/90 mt-2">Learn from practitioners working in the field</p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
          {list.map((p, i) => (
            <div key={i} className="rounded-2xl bg-slate-800/60 border border-white/10 p-6">
              <div className="aspect-square rounded-xl overflow-hidden bg-slate-900/60">
                {p.avatar ? (
                  <img src={p.avatar} alt={p.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full grid place-items-center text-blue-200/60 text-sm">No photo</div>
                )}
              </div>
              <h3 className="mt-4 text-white font-semibold">{p.name}</h3>
              <p className="text-blue-200/90 text-sm">{p.title}</p>
              <p className="text-blue-100/80 text-sm mt-2">{p.bio}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {(p.specialties || []).map((s, j) => (
                  <span key={j} className="text-xs px-2 py-1 rounded-full bg-blue-500/10 text-blue-200">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
