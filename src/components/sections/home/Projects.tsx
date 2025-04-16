"use client";

import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import {
  CalendarIcon,
  GithubIcon,
  PlayCircleIcon,
  TagIcon,
  XIcon
} from 'lucide-react';
import { useState } from 'react';

// Define TypeScript types for projects data
interface Project {
  name: string;
  time: string;
  short_description: string;
  long_description: string;
  tech_stack: string[];
  github_link: string;
  video_link: string;
}

interface ProjectsProps {
  projects: Project[];
}

// Project Card Component
const ProjectCard: React.FC<{
  project: Project;
  onClick: () => void;
}> = ({ project, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="bg-white dark:bg-neutral-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer group"
    >
      {/* Card Header */}
      <div className="bg-gradient-to-r from-primary-500/10 to-secondary-500/10 dark:from-primary-900/20 dark:to-secondary-900/20 p-4">
        <h3 className="font-heading font-semibold text-lg md:text-xl text-neutral-900 dark:text-white">
          {project.name}
        </h3>
        <div className="flex items-center mt-2 text-sm text-neutral-600 dark:text-neutral-400">
          <CalendarIcon size={14} className="mr-1.5" />
          <span>{project.time}</span>
        </div>
      </div>
      
      {/* Card Body */}
      <div className="p-4">
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base mb-4">
          {project.short_description}
        </p>
        
        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech_stack.slice(0, 3).map((tech) => (
            <span 
              key={tech}
              className="px-2 py-1 bg-neutral-100 dark:bg-neutral-700 rounded-full text-xs text-neutral-700 dark:text-neutral-300 flex items-center"
            >
              <TagIcon size={12} className="mr-1" />
              {tech}
            </span>
          ))}
          {project.tech_stack.length > 3 && (
            <span className="px-2 py-1 bg-neutral-100 dark:bg-neutral-700 rounded-full text-xs text-neutral-700 dark:text-neutral-300">
              +{project.tech_stack.length - 3} more
            </span>
          )}
        </div>
        
        {/* Links */}
        <div className="flex items-center mt-auto">
          {/* GitHub Link */}
          {project.github_link && (
            <a 
              href={project.github_link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-600 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <GithubIcon size={16} />
            </a>
          )}
          
          {/* View Details and Video Buttons */}
          <div className="ml-auto flex items-center space-x-2">
            {/* Video Link Button */}
            {project.video_link && (
              <a 
                href={project.video_link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <PlayCircleIcon size={16} className="mr-1" />
                <span>Demo</span>
              </a>
            )}
            
            {/* View Details Button */}
            <Button 
              variant="ghost" 
              size="sm"
              className="font-medium text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/10 group-hover:bg-primary-100 dark:group-hover:bg-primary-900/20"
              onClick={(e) => {
                e.stopPropagation();
                onClick();
              }}
            >
              View Details
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Project Modal Component
const ProjectModal: React.FC<{
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}> = ({ project, isOpen, onClose }) => {
  if (!project) return null;
  
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm" 
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="bg-white dark:bg-neutral-800 rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-auto z-10 shadow-xl flex flex-col">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-primary-500/15 to-secondary-500/15 dark:from-primary-900/30 dark:to-secondary-900/30 p-4 md:p-6 flex justify-between items-start sticky top-0 z-10">
          <div>
            <h3 className="font-heading font-bold text-xl md:text-2xl text-neutral-900 dark:text-white">
              {project.name}
            </h3>
            <div className="flex items-center mt-2 text-sm md:text-base text-neutral-600 dark:text-neutral-400">
              <CalendarIcon size={16} className="mr-2" />
              <span>{project.time}</span>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
          >
            <XIcon size={20} className="text-neutral-700 dark:text-neutral-300" />
          </button>
        </div>
        
        {/* Modal Body */}
        <div className="p-4 md:p-6 overflow-y-auto flex-grow">
          {/* Description */}
          <div className="mb-6 prose dark:prose-invert prose-neutral prose-sm md:prose-base max-w-none">
            {project.long_description.split('\n\n').map((paragraph, idx) => {
              // Handle bullet points list
              if (paragraph.includes(' • ')) {
                const [title, ...items] = paragraph.split(' • ');
                return (
                  <div key={idx}>
                    <p className="font-medium">{title}</p>
                    <ul className="mt-2">
                      {items.map((item, itemIdx) => (
                        <li key={itemIdx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                );
              }
              return <p key={idx}>{paragraph}</p>;
            })}
          </div>
          
          {/* Tech Stack */}
          <div className="mb-6">
            <h4 className="font-heading font-semibold text-lg mb-3 text-neutral-900 dark:text-white">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tech_stack.map((tech) => (
                <span 
                  key={tech}
                  className="px-3 py-1.5 bg-neutral-100 dark:bg-neutral-700 rounded-full text-sm text-neutral-700 dark:text-neutral-300 flex items-center"
                >
                  <TagIcon size={14} className="mr-1.5" />
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        {/* Modal Footer - Now sticky at bottom */}
        <div className="border-t border-neutral-200 dark:border-neutral-700 p-4 md:p-6 flex flex-wrap gap-3 sticky bottom-0 bg-white dark:bg-neutral-800 z-10">
          {project.github_link && (
            <a 
              href={project.github_link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0"
            >
              <Button variant="outline" size="md" className="flex items-center">
                <GithubIcon size={18} className="mr-2" />
                View Code
              </Button>
            </a>
          )}
          {project.video_link && (
            <a 
              href={project.video_link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0"
            >
              <Button variant="outline" size="md" className="flex items-center">
                <PlayCircleIcon size={18} className="mr-2" />
                Watch Demo
              </Button>
            </a>
          )}
          <Button 
            variant="primary" 
            size="md" 
            className="ml-auto flex-shrink-0"
            onClick={onClose}
          >
            Close
          </Button>
        </div>
      </div>
    </div>
  );
};

// Main Projects Component
const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    // Prevent background scrolling when modal is open
    document.body.style.overflow = 'hidden';
  };
  
  const closeProjectModal = () => {
    setIsModalOpen(false);
    // Re-enable scrolling
    document.body.style.overflow = 'auto';
  };
  
  return (
    <section id="projects" className="py-10 sm:py-16 md:py-24">
      <Container>
        <SectionHeading>Projects</SectionHeading>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {projects.map((project) => (
            <ProjectCard 
              key={project.name}
              project={project}
              onClick={() => openProjectModal(project)}
            />
          ))}
        </div>
        
        {/* Project Modal */}
        <ProjectModal 
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={closeProjectModal}
        />
      </Container>
    </section>
  );
};

export default Projects;