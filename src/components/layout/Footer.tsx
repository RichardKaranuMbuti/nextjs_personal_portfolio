import { getResumeData } from '@/utils/resumeData';
import { GithubIcon, LinkedinIcon, MailIcon, PhoneIcon } from 'lucide-react';
import Link from 'next/link';
import Container from '../ui/Container';

const Footer = () => {
  const { basics } = getResumeData();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-100 dark:bg-neutral-900 py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4 font-heading text-neutral-900 dark:text-white">
              {basics.name}
            </h3>
            <p className="text-neutral-600 dark:text-neutral-300 mb-4">
              {basics.title}
            </p>
            <p className="text-neutral-600 dark:text-neutral-300">
              {basics.location}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 font-heading text-neutral-900 dark:text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#about" className="text-neutral-600 hover:text-primary-600 dark:text-neutral-300 dark:hover:text-primary-400">
                  About
                </Link>
              </li>
              <li>
                <Link href="/#experience" className="text-neutral-600 hover:text-primary-600 dark:text-neutral-300 dark:hover:text-primary-400">
                  Experience
                </Link>
              </li>
              <li>
                <Link href="/#skills" className="text-neutral-600 hover:text-primary-600 dark:text-neutral-300 dark:hover:text-primary-400">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-neutral-600 hover:text-primary-600 dark:text-neutral-300 dark:hover:text-primary-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 font-heading text-neutral-900 dark:text-white">
              Connect
            </h3>
            <div className="flex space-x-4 mb-4">
              <Link 
                href={basics.github}
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-700 hover:text-primary-600 dark:text-neutral-300 dark:hover:text-primary-400"
                aria-label="GitHub"
              >
                <GithubIcon size={20} />
              </Link>
              <Link 
                href={basics.linkedin}
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-700 hover:text-primary-600 dark:text-neutral-300 dark:hover:text-primary-400"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={20} />
              </Link>
              <Link 
                href={`mailto:${basics.email}`}
                className="text-neutral-700 hover:text-primary-600 dark:text-neutral-300 dark:hover:text-primary-400"
                aria-label="Email"
              >
                <MailIcon size={20} />
              </Link>
              <Link 
                href={`tel:${basics.phone}`}
                className="text-neutral-700 hover:text-primary-600 dark:text-neutral-300 dark:hover:text-primary-400"
                aria-label="Phone"
              >
                <PhoneIcon size={20} />
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-neutral-200 dark:border-neutral-700 mt-8 pt-8 text-center text-neutral-600 dark:text-neutral-400">
          <p>© {currentYear} {basics.name}. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;