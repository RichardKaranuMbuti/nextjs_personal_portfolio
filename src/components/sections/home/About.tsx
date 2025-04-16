"use client";

import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import { AwardIcon, BookOpenIcon, BriefcaseIcon, GlobeIcon } from 'lucide-react';
import { useEffect, useRef } from 'react';

// Add an interface for the props
interface AboutProps {
  resumeData: {
    basics: {
      location: string;
      summary: string;
    };
    education: {
      degree: string;
      institution: string;
      location: string;
    };
    languages: Array<{
      language: string;
      level: string;
    }>;
    interests: string[];
  }
}

const About = ({ resumeData }: AboutProps) => {
  const { basics, education, languages, interests } = resumeData;
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Make sure this effect only runs on the client side
    if (typeof window === 'undefined') return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Type casting to HTMLElement to access style properties
            const element = entry.target as HTMLElement;
            element.classList.add('animate-fade-in');
            element.style.opacity = '1';
            element.style.animationFillMode = 'forwards';
          }
        });
      },
      { threshold: 0.1, rootMargin: '20px' }
    );
  
    const items = document.querySelectorAll('.about-item');
    if (items.length > 0) {
      items.forEach((item) => observer.observe(item));
    } else {
      console.warn('No .about-item elements found');
    }
  
    return () => {
      if (items.length > 0) {
        items.forEach((item) => observer.unobserve(item));
      }
    };
  }, []);

  return (
    <section id="about" className="py-16 md:py-24 bg-neutral-50 dark:bg-neutral-900">
      <Container>
        <SectionHeading>About Me</SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div ref={aboutRef} className="space-y-6">
            <p className="text-neutral-700 dark:text-neutral-300 text-lg leading-relaxed text-pretty">
              As a Full Stack Software Engineer based in {basics.location}, I bring over 4 years of hands-on experience 
              working with modern web technologies and enterprise frameworks.
            </p>
            <p className="text-neutral-700 dark:text-neutral-300 text-lg leading-relaxed text-pretty">
              I specialize in building scalable, production-ready solutions that help companies modernize their 
              applications and improve their technical infrastructure. My expertise spans from frontend development 
              with React to backend systems with Spring Boot, Django, and Node.js.
            </p>
            <p className="text-neutral-700 dark:text-neutral-300 text-lg leading-relaxed text-pretty">  
              I'm passionate about leveraging artificial intelligence to solve complex problems and actively contribute 
              to open-source projects that drive innovation in the tech community.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="about-item opacity-0 bg-white dark:bg-neutral-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg text-primary-600 dark:text-primary-400 mr-3">
                  <BookOpenIcon size={20} />
                </div>
                <h3 className="font-heading font-semibold text-lg">Education</h3>
              </div>
              <p className="text-neutral-900 dark:text-white font-medium">{education.degree}</p>
              <p className="text-neutral-600 dark:text-neutral-400">{education.institution}</p>
              <p className="text-neutral-500 dark:text-neutral-500 text-sm">{education.location}</p>
            </div>

            <div className="about-item opacity-0 bg-white dark:bg-neutral-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-secondary-100 dark:bg-secondary-900/30 rounded-lg text-secondary-600 dark:text-secondary-400 mr-3">
                  <GlobeIcon size={20} />
                </div>
                <h3 className="font-heading font-semibold text-lg">Languages</h3>
              </div>
              <ul className="space-y-2">
                {languages.map((lang) => (
                  <li key={lang.language} className="flex justify-between">
                    <span className="text-neutral-700 dark:text-neutral-300">{lang.language}</span>
                    <span className="text-neutral-500 dark:text-neutral-500">{lang.level}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="about-item opacity-0 bg-white dark:bg-neutral-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg text-primary-600 dark:text-primary-400 mr-3">
                  <BriefcaseIcon size={20} />
                </div>
                <h3 className="font-heading font-semibold text-lg">Experience</h3>
              </div>
              <p className="text-neutral-700 dark:text-neutral-300">
                Over {basics.summary.match(/(\d+)\+/)?.[1] || '4'}+ years of professional experience in software development 
                across multiple industries and technologies.
              </p>
            </div>

            <div className="about-item opacity-0 bg-white dark:bg-neutral-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-secondary-100 dark:bg-secondary-900/30 rounded-lg text-secondary-600 dark:text-secondary-400 mr-3">
                  <AwardIcon size={20} />
                </div>
                <h3 className="font-heading font-semibold text-lg">Interests</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <span 
                    key={interest}
                    className="px-3 py-1 bg-neutral-100 dark:bg-neutral-700 rounded-full text-sm text-neutral-700 dark:text-neutral-300"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;