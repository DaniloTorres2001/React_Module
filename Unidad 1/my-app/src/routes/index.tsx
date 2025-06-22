// File: my-app/src/routes/index.tsx
import { createFileRoute } from '@tanstack/react-router'
import '../App.css' // Mantener si hay estilos globales no-Tailwind
import Candidate from '@/components/candidate'
import type { CandidateType } from '@/types/candidates';

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  // Lista de candidatos para renderizar dinámicamente
  const candidates: CandidateType[] = [
    {
      name: 'Danilo Torres',
      age: 21,
      experience: 5,
      skills: ['JavaScript', 'React', 'Node.js', 'TypeScript'],
      status: 'Hired',
      working: true,
    },
    {
      name: 'Ana García',
      age: 35,
      experience: 10,
      skills: ['Java', 'Spring Boot', 'Microservices'],
      status: 'Interviewed',
      working: true,
    },
    {
      name: 'Carlos Rodriguez',
      age: 28,
      experience: 7,
      skills: ['C++', 'Qt', 'Linux'],
      status: 'Hired',
      working: true,
    },
    {
      name: 'Emanuel Gómez',
      age: 26,
      experience: 3,
      skills: ['Python', 'Django', 'SQL'],
      status: 'Reviewing',
      working: false,
    },
    {
      name: 'Luis Pérez',
      age: 22,
      experience: 1,
      skills: ['HTML', 'CSS', 'Vue.js'],
      status: 'Pending',
      working: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4"> 
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Lista de Candidatos</h1> 
      <div className="flex flex-wrap justify-center gap-4">
        {candidates.map((candidate, index) => (
          <Candidate
            key={index}
            name={candidate.name}
            age={candidate.age}
            experience={candidate.experience}
            skills={candidate.skills}
            status={candidate.status}
            working={candidate.working}
            children={<p className="text-sm text-gray-600 mt-2">Este es un candidato destacado.</p>} 
          />
        ))}
      </div>
    </div>
  )
}
