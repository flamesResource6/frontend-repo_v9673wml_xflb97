import { useState } from 'react'

export default function Enroll() {
  const [form, setForm] = useState({ name: '', email: '', course_title: '', message: '' })
  const [status, setStatus] = useState(null)

  const submit = async (e) => {
    e.preventDefault()
    setStatus('Submitting...')
    try {
      const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${base}/api/enroll`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      setStatus(data.message || 'Submitted!')
      setForm({ name: '', email: '', course_title: '', message: '' })
    } catch (e) {
      setStatus('Something went wrong. Please try again.')
    }
  }

  return (
    <section id="enroll" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(59,130,246,0.15),transparent_30%)]" />
      <div className="relative max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Apply for the next cohort</h2>
          <p className="text-blue-100/90 mt-2">Tell us a bit about you and the course you're interested in.</p>
          <div className="mt-6 rounded-2xl bg-slate-800/60 border border-white/10 p-6">
            <form className="space-y-4" onSubmit={submit}>
              <div>
                <label className="block text-blue-100/90 text-sm mb-1">Full name</label>
                <input value={form.name} onChange={(e)=>setForm({...form, name:e.target.value})} required className="w-full px-3 py-2 rounded-lg bg-slate-900/60 border border-white/10 text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Jane Doe" />
              </div>
              <div>
                <label className="block text-blue-100/90 text-sm mb-1">Email</label>
                <input type="email" value={form.email} onChange={(e)=>setForm({...form, email:e.target.value})} required className="w-full px-3 py-2 rounded-lg bg-slate-900/60 border border-white/10 text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="jane@domain.com" />
              </div>
              <div>
                <label className="block text-blue-100/90 text-sm mb-1">Course</label>
                <input value={form.course_title} onChange={(e)=>setForm({...form, course_title:e.target.value})} required className="w-full px-3 py-2 rounded-lg bg-slate-900/60 border border-white/10 text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="e.g., Full-Stack Web Development" />
              </div>
              <div>
                <label className="block text-blue-100/90 text-sm mb-1">Message</label>
                <textarea value={form.message} onChange={(e)=>setForm({...form, message:e.target.value})} rows="4" className="w-full px-3 py-2 rounded-lg bg-slate-900/60 border border-white/10 text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Share your goals and background (optional)" />
              </div>
              <button className="w-full md:w-auto px-5 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold">Submit application</button>
            </form>
            {status && <p className="mt-4 text-blue-100">{status}</p>}
          </div>
        </div>
        <div className="text-blue-100/90">
          <div className="rounded-2xl bg-slate-800/60 border border-white/10 p-6">
            <h3 className="text-white font-semibold text-lg">What happens next?</h3>
            <ul className="list-disc list-inside mt-3 space-y-2">
              <li>We review your application within 24-48 hours.</li>
              <li>You'll receive an email with next steps and available dates.</li>
              <li>Accepted learners get access to pre-course materials.</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-slate-800/60 border border-white/10 p-6 mt-6">
            <h3 className="text-white font-semibold text-lg">Need help choosing?</h3>
            <p className="mt-2">Tell us what you want to build, and we’ll suggest a path tailored to your goals.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
