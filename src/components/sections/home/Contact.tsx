'use client';

import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import { GithubIcon, LinkedinIcon, MailIcon, PhoneIcon, SendIcon } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface ContactProps {
  basics: {
    name: string;
    email: string;
    phone: string;
    github: string;
    linkedin: string;
    location: string;
  };
}

const Contact = ({ basics }: ContactProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const formRef = useRef<HTMLFormElement>(null);
  const contactInfoRef = useRef<HTMLDivElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      // Replace with actual form submission logic
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch {  
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  useEffect(() => {
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

    const items = document.querySelectorAll('.contact-item');
    if (items.length > 0) {
      items.forEach((item) => observer.observe(item));
    }

    return () => {
      if (items.length > 0) {
        items.forEach((item) => observer.unobserve(item));
      }
    };
  }, []);

  return (
    <section id="contact" className="py-16 md:py-24">
      <Container>
        <SectionHeading>Get In Touch</SectionHeading>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div ref={contactInfoRef} className="space-y-8">
            <div className="contact-item opacity-0">
              <p className="text-neutral-700 dark:text-neutral-300 text-lg leading-relaxed text-pretty mb-6">
                Interested in working together? Feel free to reach out through any of the channels below or by filling out the contact form.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg text-primary-600 dark:text-primary-400">
                    <MailIcon size={20} />
                  </div>
                  <div>
                    <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-1">Email</p>
                    <a 
                      href={`mailto:${basics.email}`} 
                      className="text-neutral-900 dark:text-white font-medium hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      {basics.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-secondary-100 dark:bg-secondary-900/30 rounded-lg text-secondary-600 dark:text-secondary-400">
                    <PhoneIcon size={20} />
                  </div>
                  <div>
                    <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-1">Phone</p>
                    <a 
                      href={`tel:${basics.phone}`} 
                      className="text-neutral-900 dark:text-white font-medium hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      {basics.phone}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg text-primary-600 dark:text-primary-400">
                    <LinkedinIcon size={20} />
                  </div>
                  <div>
                    <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-1">LinkedIn</p>
                    <a 
                      href={basics.linkedin}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-neutral-900 dark:text-white font-medium hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      Connect on LinkedIn
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-secondary-100 dark:bg-secondary-900/30 rounded-lg text-secondary-600 dark:text-secondary-400">
                    <GithubIcon size={20} />
                  </div>
                  <div>
                    <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-1">GitHub</p>
                    <a 
                      href={basics.github}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-neutral-900 dark:text-white font-medium hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      Check my repositories
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="contact-item opacity-0 bg-neutral-50 dark:bg-neutral-900 p-6 rounded-xl border border-neutral-200 dark:border-neutral-800">
              <h3 className="font-heading font-semibold text-lg mb-3">Location</h3>
              <p className="text-neutral-700 dark:text-neutral-300">Based in {basics.location}</p>
              <p className="text-neutral-600 dark:text-neutral-400 mt-2">Available for remote work and on-site(Nairobi) opportunities.</p>
            </div>
          </div>
          
          <div className="contact-item opacity-0 bg-white dark:bg-neutral-900 p-6 md:p-8 rounded-xl shadow-md">
            <h3 className="font-heading font-semibold text-xl mb-6">Send a Message</h3>
            
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 outline-none transition-all"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 outline-none transition-all"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 outline-none transition-all resize-none"
                  placeholder="Your message..."
                />
              </div>
              
              <div>
                <Button 
                  type="submit" 
                  className="w-full flex items-center justify-center gap-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  {!isSubmitting && <SendIcon size={16} />}
                </Button>
                
                {submitStatus === 'success' && (
                  <p className="mt-3 text-success text-sm">Your Message is with me! I&apos;ll get back to you soon.</p>
                )}
                
                {submitStatus === 'error' && (
                  <p className="mt-3 text-error text-sm">Something went wrong. Please try again or contact me directly.</p>
                )}
              </div>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;