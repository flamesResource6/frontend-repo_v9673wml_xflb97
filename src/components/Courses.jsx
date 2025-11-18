import { useEffect, useState } from 'react'

export default function Courses() {
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${base}/api/courses`)
        const data = await res.json()
        setCourses(data)
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <section id="courses" className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_50%,rgba(59,130,246,0.15),transparent_30%)]" />
      <div className="relative max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Popular courses</h2>
        <p className="text-blue-100/90 mt-2">Curated paths to level up your skills</p>

        {loading ? (
          <p className="text-blue-100 mt-10">Loading...</p>
        ) : (
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {courses.map((c, i) => (
              <div key={i} className="group rounded-2xl bg-slate-800/60 border border-white/10 p-5 hover:border-blue-400/40 transition">
                <div className="aspect-video rounded-xl overflow-hidden bg-slate-900/60">
                  {c.thumbnail ? (
                    <img src={c.thumbnail} alt={c.title} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full grid place-items-center text-blue-200/60">No image</div>
                  )}
                </div>
                <h3 className="mt-4 text-white font-semibold text-lg">{c.title}</h3>
                <p className="text-blue-100/90 text-sm mt-1">{c.summary}</p>
                <div className="mt-3 flex items-center gap-3 text-xs text-blue-200/80">
                  <span className="px-2 py-1 rounded bg-white/10">{c.level}</span>
                  <span className="px-2 py-1 rounded bg-white/10">{c.duration_weeks} weeks</span>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {(c.tags || []).map((t, j) => (
                    <span key={j} className="text-xs px-2 py-1 rounded-full bg-blue-500/10 text-blue-200">#{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
