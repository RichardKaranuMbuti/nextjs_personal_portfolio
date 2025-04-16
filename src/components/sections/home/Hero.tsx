'use client';

import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import { ArrowDownIcon, GithubIcon, LinkedinIcon, MailIcon } from 'lucide-react';
import { useEffect, useRef } from 'react';

interface HeroProps {
  basics: {
    name: string;
    title: string;
    summary: string;
    email: string;
    github: string;
    linkedin: string;
  };
}

const Hero = ({ basics }: HeroProps) => {
  const highlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-up');
        }
      },
      { threshold: 0.1 }
    );

    if (highlightRef.current) {
      observer.observe(highlightRef.current);
    }

    return () => {
      if (highlightRef.current) {
        observer.unobserve(highlightRef.current);
      }
    };
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center py-16 md:py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-primary-500/20 rounded-full filter blur-3xl opacity-60" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-500/20 rounded-full filter blur-3xl opacity-60" />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-primary-600 dark:text-primary-400 font-medium mb-2 animate-fade-in">
              Hello, I'm
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-display font-bold mb-4 font-heading text-balance">
              {basics.name}
            </h1>
            <h2 className="text-2xl md:text-3xl text-neutral-700 dark:text-neutral-300 mb-6">
              <span className="gradient-text">{basics.title}</span>
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 mb-8 md:text-lg max-w-2xl text-pretty">
              {basics.summary}
            </p>

            <div ref={highlightRef} className="flex flex-wrap gap-4 mb-12 opacity-0">
              <Button href="#contact" size="lg">
                Get in Touch
              </Button>
              <Button href="#experience" variant="outline" size="lg">
                View My Work
              </Button>
            </div>

            <div className="flex space-x-6">
              <a
                href={`https://github.com/${basics.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-700 hover:text-primary-600 dark:text-neutral-300 dark:hover:text-primary-400 transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon size={24} />
              </a>
              <a
                href={`https://linkedin.com/in/${basics.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-700 hover:text-primary-600 dark:text-neutral-300 dark:hover:text-primary-400 transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={24} />
              </a>
              <a
                href={`mailto:${basics.email}`}
                className="text-neutral-700 hover:text-primary-600 dark:text-neutral-300 dark:hover:text-primary-400 transition-colors"
                aria-label="Email"
              >
                <MailIcon size={24} />
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 animate-spin-slow blur-lg opacity-70"></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-secondary-500/80 to-primary-500/80 transform rotate-45"></div>
              <div className="absolute inset-[6px] rounded-full bg-white dark:bg-neutral-900 flex items-center justify-center">
                <div className="p-2 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 text-4xl text-white font-heading font-bold">
                  RK
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <a
            href="#about"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-neutral-800 shadow-md text-neutral-700 dark:text-neutral-300"
            aria-label="Scroll down"
          >
            <ArrowDownIcon size={20} />
          </a>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
