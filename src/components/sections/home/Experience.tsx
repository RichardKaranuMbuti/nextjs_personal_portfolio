"use client";

import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import { Experience as ExperienceType } from '@/utils/resumeData';
import { CalendarIcon, CheckCircleIcon, MapPinIcon } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const Experience = ({ experience }: { experience: ExperienceType[] }) => {
  const [activeTab, setActiveTab] = useState(0);
  const experienceRefs = useRef<Array<HTMLElement | null>>([]);
  
  // Track which items have been viewed to keep them visible
  const [viewedItems, setViewedItems] = useState<boolean[]>(Array(experience.length).fill(false));

  useEffect(() => {
    // Mark the active tab as viewed
    setViewedItems(prev => {
      const newState = [...prev];
      newState[activeTab] = true;
      return newState;
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            
            // Find the index of the intersecting element
            const index = experienceRefs.current.findIndex(ref => ref === entry.target);
            if (index !== -1) {
              setViewedItems(prev => {
                const newState = [...prev];
                newState[index] = true;
                return newState;
              });
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    experienceRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      experienceRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [activeTab]);

  return (
    <section id="experience" className="py-16 md:py-24">
      <Container>
        <SectionHeading>Work Experience</SectionHeading>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Company tabs - desktop */}
          <div className="hidden lg:block lg:col-span-3">
            {/* Your existing tabs code */}
            <div className="sticky top-24 space-y-1">
              {experience.map((job, index) => (
                <button
                  key={index}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                    activeTab === index
                      ? 'bg-primary-50 text-primary-700 border-l-4 border-primary-500 dark:bg-primary-900/20 dark:text-primary-400'
                      : 'hover:bg-neutral-100 text-neutral-700 dark:hover:bg-neutral-800 dark:text-neutral-300'
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  <div className="font-medium">{job.company}</div>
                  <div className="text-sm text-neutral-500 dark:text-neutral-400">{job.duration}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Mobile tabs - unchanged */}
          {/* Your existing mobile tabs code */}
          <div className="lg:hidden w-full mb-6 overflow-x-auto scrollbar-hide">
            <div className="flex space-x-2 min-w-max">
              {experience.map((job, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-lg whitespace-nowrap transition-all ${
                    activeTab === index
                      ? 'bg-primary-50 text-primary-700 dark:bg-primary-900/20 dark:text-primary-400'
                      : 'bg-neutral-100 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300'
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  {job.company}
                </button>
              ))}
            </div>
          </div>

          {/* Experience details - modified for better transitions */}
          <div className="lg:col-span-9">
            {experience.map((job, index) => (
              <div
                key={index}
                ref={(el) => {
                  experienceRefs.current[index] = el;
                }}
                className={`bg-white dark:bg-neutral-800 rounded-2xl p-6 md:p-8 shadow-sm transition-all duration-500 
                  ${viewedItems[index] ? 'opacity-100' : 'opacity-0'} 
                  ${activeTab === index ? 'block' : 'absolute invisible'}`}
              >
                {/* Job content remains the same */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-xl md:text-2xl font-heading font-bold text-neutral-900 dark:text-white">
                      {job.role}
                    </h3>
                    <div className="text-lg text-primary-600 dark:text-primary-400 font-medium mt-1">
                      {job.company}
                    </div>
                  </div>
                  <div className="mt-2 md:mt-0 flex items-center text-neutral-500 dark:text-neutral-400">
                    <CalendarIcon size={16} className="mr-1" />
                    <span>{job.duration}</span>
                  </div>
                </div>

                <div className="flex items-center text-neutral-600 dark:text-neutral-300 mb-6">
                  <MapPinIcon size={16} className="mr-2" />
                  <span>{job.location}</span>
                </div>

                <div className="space-y-4 mb-8">
                  {job.responsibilities.map((responsibility, idx) => (
                    <div key={idx} className="flex">
                      <CheckCircleIcon size={20} className="mt-1 mr-3 text-primary-500 dark:text-primary-400 flex-shrink-0" />
                      <p className="text-neutral-700 dark:text-neutral-300">{responsibility}</p>
                    </div>
                  ))}
                </div>

                {job.techStack && (
                  <div>
                    <h4 className="text-lg font-medium mb-3 text-neutral-900 dark:text-white font-heading">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {job.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-neutral-100 dark:bg-neutral-700 rounded-full text-sm text-neutral-800 dark:text-neutral-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Experience;