
import { cache } from 'react';

export type Skill = {
  proficientIn: string[];
  familiarWith: string[];
  currentlyLearning: string[];
};

export type Experience = {
  company: string;
  role: string;
  location: string;
  duration: string;
  responsibilities: string[];
  techStack?: string[];
};

export type Education = {
  institution: string;
  degree: string;
  location: string;
};

export type Certification = {
  name: string;
  issuer: string;
  date: string;
};

export type Language = {
  language: string;
  level: string;
};

export type ResumeData = {
  basics: {
    name: string;
    location: string;
    phone: string;
    email: string;
    linkedin: string;
    github: string;
    title: string;
    summary: string;
  };
  skills: Skill;
  experience: Experience[];
  education: Education;
  certifications: Certification[];
  languages: Language[];
  interests: string[];
};

// This function will only be called on the server side
export const getServerResumeData = cache(async (): Promise<ResumeData> => {
  // We need to use dynamic imports for fs and path to avoid client-side errors
  if (typeof window === 'undefined') {
    // Replace require() with dynamic imports
    const fs = await import('fs');
    const path = await import('path');
    const filePath = path.join(process.cwd(), 'resume.json');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(fileContents) as ResumeData;
  }
  return {} as ResumeData; // This should never be reached in practice
});
// This is the main function that will be used by both server and client components
export async function getResumeData(): Promise<ResumeData> {
  // If we're running on the server, fetch the data directly
  if (typeof window === 'undefined') {
    return await getServerResumeData();
  }
  // If we're on the client, the data should already be available via props
  // This is a fallback that should ideally not be reached
  // We'll fix this with updated component structure
  console.warn('getResumeData called on client side - this is not optimal');
  return {
    // Return empty/default values as a fallback
    basics: {
      name: '',
      location: '',
      phone: '',
      email: '',
      linkedin: '',
      github: '',
      title: '',
      summary: ''
    },
    skills: {
      proficientIn: [],
      familiarWith: [],
      currentlyLearning: []
    },
    experience: [],
    education: {
      institution: '',
      degree: '',
      location: ''
    },
    certifications: [],
    languages: [],
    interests: []
  };
}