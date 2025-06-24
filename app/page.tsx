"use client";
import { Mail, Code, Briefcase, GraduationCap } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <header className="bg-white shadow-lg py-8 text-center">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">John Doe</h1>
        <p className="text-xl text-gray-600 mb-2">{summary || "Software Engineer & Full-Stack Developer"}</p>
        <a href="mailto:john.doe@example.com" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          <Mail size={20} /> {email}
        </a>
      </header>
      <main className="max-w-4xl mx-auto px-4 py-12">
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Skills</h2>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {["JavaScript","React","Node.js","Python","SQL","Git","AWS"].map((skill, i) => (
              <li key={i} className="bg-white rounded shadow p-3 text-center">{skill}</li>
            ))}
          </ul>
        </section>
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Experience</h2>
          <ul className="space-y-4">
            {["Senior Software Engineer at Tech Corp (2020","2024)","Full Stack Developer at Startup Inc (2018","2020)"].map((exp, i) => (
              <li key={i} className="bg-white rounded shadow p-4 flex items-start gap-3">
                <Briefcase className="text-blue-600 mt-1" size={20} />
                <span>{exp}</span>
              </li>
            ))}
          </ul>
        </section>
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Education</h2>
          <ul className="space-y-4">
            {["Bachelor of Science in Computer Science","University of Technology (2014","2018)"].map((edu, i) => (
              <li key={i} className="bg-white rounded shadow p-4 flex items-start gap-3">
                <GraduationCap className="text-blue-600 mt-1" size={20} />
                <span>{edu}</span>
              </li>
            ))}
          </ul>
        </section>
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Projects</h2>
          <ul className="space-y-4">
            {["E","commerce Platform (React/Node.js)","Portfolio Website (Next.js)","Task Management App (Python/Django)"].map((proj, i) => (
              <li key={i} className="bg-white rounded shadow p-4 flex items-start gap-3">
                <Code className="text-blue-600 mt-1" size={20} />
                <span>{proj}</span>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <footer className="bg-gray-900 text-white py-8 text-center">
        <p>&copy; 2024 John Doe. All rights reserved.</p>
      </footer>
    </div>
  );
}