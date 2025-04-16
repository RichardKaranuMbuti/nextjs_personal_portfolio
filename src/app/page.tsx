import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import About from '@/components/sections/home/About';
import Experience from '@/components/sections/home/Experience';
import Hero from '@/components/sections/home/Hero';
import Projects from '@/components/sections/home/Projects';
import Skills from '@/components/sections/home/Skills';
import { getResumeData } from '@/utils/resumeData';
import projectsData from '../../projects.json';

export default function Home() {
  // Server-side data fetching using getResumeData
  const resumeData = getResumeData();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* Header Section */}
      <Header basics={resumeData.basics} /> 

      {/* Main Content */}
      {/* Hero Section */}
      <Hero basics={resumeData.basics} />

      {/* About Section - Pass resumeData as props */}
      <About resumeData={resumeData} />

      {/* Skills Section */}
      <Skills 
        skills={resumeData.skills} 
        certifications={resumeData.certifications} 
      />

      {/* Projects Section - Pass experience data as props */}
      <Experience experience={resumeData.experience} />

      <Projects projects={projectsData.projects} />
      
      {/* Contact Section */}
      {/* <Contact /> */}

      {/* Footer Section*/} 
      <Footer /> 
    </main>
  );
}
