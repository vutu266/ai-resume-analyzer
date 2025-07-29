import { resumes } from "constants";
import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";
import ResumeCard from "~/components/ResumeCard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumind" },
    { name: "description", content: "Smart feedback for your dream job!" },
  ];
}

export default function Home() {
  return (
  <main className="bg-[url('/images/bg-main.svg')] bg-cover">

    <Navbar />
    <section className="main-section">
      <div className="page-heading">
        <h1>Track your Applications & Resume Rating</h1>
        <h2>Review your submissions and check AI-powered feedback.</h2>
      </div>
    </section>

    {resumes.length > 0 && 
    <div className="resumes-section">
      {resumes.map((resume: any) => (
          <ResumeCard key={resumes.id} resume={resume}/>
      ))}
    </div>
    }
    
  </main>

  )
}
