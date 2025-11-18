export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="home" className="relative pt-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(59,130,246,0.25),transparent_25%),radial-gradient(circle_at_80%_20%,rgba(147,197,253,0.25),transparent_25%)]" />
      <div className="relative max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
            Learn modern tech skills, guided by experts
          </h1>
          <p className="mt-6 text-lg text-blue-100/90">
            Hands-on courses in web development and data science. Build real projects, get mentorship, and launch your career.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button onClick={() => scrollTo('courses')} className="px-5 py-3 rounded-lg bg-white text-slate-900 font-semibold hover:bg-blue-50">Explore courses</button>
            <button onClick={() => scrollTo('enroll')} className="px-5 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-500">Apply now</button>
          </div>
          <p className="mt-6 text-blue-200/80 text-sm">Cohorts start monthly • Live sessions • Career support</p>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] rounded-2xl bg-slate-800/60 border border-white/10 overflow-hidden shadow-2xl">
            <img src="https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1600&auto=format&fit=crop" alt="Classroom" className="w-full h-full object-cover opacity-90" />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur border border-white/20 rounded-xl p-4 text-white text-sm">
            <p className="font-semibold">Project-based learning</p>
            <p className="text-blue-100/80">Learn by building, with feedback from mentors</p>
          </div>
        </div>
      </div>
    </section>
  )
}
