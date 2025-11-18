import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Courses from './components/Courses'
import Instructors from './components/Instructors'
import Enroll from './components/Enroll'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 text-white">
      <Navbar />
      <Hero />
      <Courses />
      <Instructors />
      <Enroll />
      <footer className="py-10 text-center text-blue-200/70 border-t border-white/10">
        <p>© {new Date().getFullYear()} Flames Academy. All rights reserved.</p>
        <a href="/test" className="inline-block mt-3 text-blue-300 hover:text-white">System status</a>
      </footer>
    </div>
  )
}

export default App
