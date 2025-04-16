"use client";

import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import { Certification, Skill } from '@/utils/resumeData';
import {
  ActivityIcon,
  ArrowRightIcon,
  BookOpenIcon,
  BoxIcon,
  BrainIcon,
  CheckIcon,
  CloudIcon,
  CodeIcon,
  CodepenIcon,
  DatabaseIcon,
  GitBranchIcon,
  GraduationCapIcon,
  LayersIcon,
  MessageSquareIcon,
  MonitorIcon,
  ServerIcon,
  TerminalIcon,
  TrelloIcon
} from 'lucide-react';
import { useEffect, useRef } from 'react';

// Technology icon mapping
const getTechIcon = (tech: string) => {
  const iconMap: Record<string, typeof CodeIcon> = {
    // Languages
    "Python": CodeIcon,
    "Java": CodeIcon,
    "Typescript": CodeIcon,
    "SQL": DatabaseIcon,
    "NoSQL": DatabaseIcon,
    
    // Frameworks & Libraries
    "Spring Boot": LayersIcon,
    "Django": LayersIcon,
    "React.js": CodepenIcon,
    "React-Native": MonitorIcon,
    "Node.js": ServerIcon,
    
    // Cloud & Infrastructure
    "Docker": BoxIcon,
    "AWS": CloudIcon,
    "Azure": CloudIcon,
    "Kubernetes": BoxIcon,
    "Linux": TerminalIcon,
    "CI/CD": GitBranchIcon,
    "GitHub Actions": GitBranchIcon,
    
    // Architecture & Patterns
    "Microservices": LayersIcon,
    "Rest APIs": ActivityIcon,
    "Kafka": MessageSquareIcon,
    
    // Other tech
    "Machine Learning & AI": BrainIcon,
    "Go": CodeIcon,
    "Agentic Computing": BrainIcon,
    "Agile": TrelloIcon,
    "Swagger": ActivityIcon,
    "Bash Scripting": TerminalIcon
  };

  return iconMap[tech] || CodeIcon;
};

const Skills = ({ 
  skills, 
  certifications 
}: { 
  skills: Skill; 
  certifications: Certification[] 
}) => {
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.skill-item');
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('animate-fade-in');
                el.classList.remove('opacity-0');
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <section id="skills" className="py-10 sm:py-16 md:py-24 bg-neutral-50 dark:bg-neutral-900">
      <Container>
        <SectionHeading className="mb-6 sm:mb-10">Skills & Expertise</SectionHeading>
        
        <div ref={skillsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {/* Proficient Skills */}
          <div className="bg-white dark:bg-neutral-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm">
            <div className="flex items-center mb-4 sm:mb-6">
              <div className="p-1.5 sm:p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg text-primary-600 dark:text-primary-400 mr-2 sm:mr-3">
                <CheckIcon size={18} className="sm:w-5 sm:h-5" />
              </div>
              <h3 className="font-heading font-semibold text-lg sm:text-xl">Proficient In</h3>
            </div>
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-2 sm:gap-3">
              {skills.proficientIn.map((skill) => {
                const IconComponent = getTechIcon(skill);
                return (
                  <div 
                    key={skill} 
                    className="skill-item opacity-0 flex items-center p-2 sm:p-3 bg-neutral-50 dark:bg-neutral-700/50 rounded-lg break-words"
                  >
                    <div className="flex-shrink-0 p-1 sm:p-1.5 bg-primary-100 dark:bg-primary-900/30 rounded text-primary-600 dark:text-primary-400 mr-2 sm:mr-3">
                      <IconComponent size={14} className="sm:w-4 sm:h-4" />
                    </div>
                    <span className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 truncate">{skill}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Familiar With */}
          <div className="bg-white dark:bg-neutral-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm">
            <div className="flex items-center mb-4 sm:mb-6">
              <div className="p-1.5 sm:p-2 bg-secondary-100 dark:bg-secondary-900/30 rounded-lg text-secondary-600 dark:text-secondary-400 mr-2 sm:mr-3">
                <ArrowRightIcon size={18} className="sm:w-5 sm:h-5" />
              </div>
              <h3 className="font-heading font-semibold text-lg sm:text-xl">Familiar With</h3>
            </div>
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-2 sm:gap-3">
              {skills.familiarWith.map((skill) => {
                const IconComponent = getTechIcon(skill);
                return (
                  <div 
                    key={skill} 
                    className="skill-item opacity-0 flex items-center p-2 sm:p-3 bg-neutral-50 dark:bg-neutral-700/50 rounded-lg break-words"
                  >
                    <div className="flex-shrink-0 p-1 sm:p-1.5 bg-secondary-100 dark:bg-secondary-900/30 rounded text-secondary-600 dark:text-secondary-400 mr-2 sm:mr-3">
                      <IconComponent size={14} className="sm:w-4 sm:h-4" />
                    </div>
                    <span className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 truncate">{skill}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Learning & Certifications */}
          <div className="bg-white dark:bg-neutral-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm md:col-span-2 lg:col-span-1">
            <div className="space-y-4 sm:space-y-6">
              {/* Currently Learning */}
              <div>
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="p-1.5 sm:p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg text-primary-600 dark:text-primary-400 mr-2 sm:mr-3">
                    <BookOpenIcon size={18} className="sm:w-5 sm:h-5" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg sm:text-xl">Currently Learning</h3>
                </div>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {skills.currentlyLearning.map((skill) => {
                    const IconComponent = getTechIcon(skill);
                    return (
                      <div 
                        key={skill}
                        className="skill-item opacity-0 px-2 sm:px-3 py-1 sm:py-2 bg-primary-50 dark:bg-primary-900/20 rounded-full flex items-center text-xs sm:text-sm text-primary-700 dark:text-primary-300"
                      >
                        <IconComponent size={12} className="mr-1 sm:mr-1.5 sm:w-3.5 sm:h-3.5" />
                        {skill}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Certifications */}
              <div>
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="p-1.5 sm:p-2 bg-secondary-100 dark:bg-secondary-900/30 rounded-lg text-secondary-600 dark:text-secondary-400 mr-2 sm:mr-3">
                    <GraduationCapIcon size={18} className="sm:w-5 sm:h-5" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg sm:text-xl">Certifications</h3>
                </div>
                <div className="space-y-2 sm:space-y-3">
                  {certifications.map((cert) => (  
                    <div 
                      key={cert.name}
                      className="skill-item opacity-0 p-2 sm:p-3 bg-neutral-50 dark:bg-neutral-700/50 rounded-lg"
                    >
                      <div className="font-medium text-sm sm:text-base text-neutral-900 dark:text-white">{cert.name}</div>
                      <div className="flex flex-col xs:flex-row xs:justify-between text-xs sm:text-sm mt-1">
                        <span className="text-neutral-600 dark:text-neutral-400">{cert.issuer}</span>
                        <span className="text-neutral-500 dark:text-neutral-500 mt-0.5 xs:mt-0">{cert.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Skills;