import { Menu } from "lucide-react"
import { useState } from "react"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" })
      setOpen(false)
    }
  }

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-slate-900/60 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" onClick={(e)=>{e.preventDefault();scrollTo('home')}} className="flex items-center gap-2">
          <img src="/flame-icon.svg" alt="Logo" className="w-8 h-8" />
          <span className="text-white font-semibold tracking-tight">Flames Academy</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm text-blue-100">
          <button onClick={() => scrollTo('courses')} className="hover:text-white">Courses</button>
          <button onClick={() => scrollTo('instructors')} className="hover:text-white">Instructors</button>
          <button onClick={() => scrollTo('enroll')} className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium">Enroll</button>
        </nav>

        <button className="md:hidden text-white/80" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <Menu />
        </button>
      </div>

      {open && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <button onClick={() => scrollTo('courses')} className="block w-full text-left text-blue-100 hover:text-white py-2">Courses</button>
          <button onClick={() => scrollTo('instructors')} className="block w-full text-left text-blue-100 hover:text-white py-2">Instructors</button>
          <button onClick={() => scrollTo('enroll')} className="block w-full text-left py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium px-4">Enroll</button>
        </div>
      )}
    </header>
  )
}
