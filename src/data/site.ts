import type { Project, Service } from '../types';

export const site = {
  name: 'UTKCODE',
  domain: 'https://utkcode.me',
  email: 'utkarshpgedam@gmail.com',
  founderName: 'Utkarsh Gedam',
  tagline: 'Websites worth remembering.',
  nav: [
    { id: 'work', label: 'Work' },
    { id: 'services', label: 'Services' },
    { id: 'capabilities', label: 'Capabilities' },
  ],
};

export const projects: Project[] = [
  {
    index: '01',
    title: 'Dental Studio',
    subtitle: 'Essential',
    year: '2026',
    category: 'Static Dental Website',
    description:
      'Clean, fast, static dental website. One industry, one clear direction — essential.',
    focus: ['Art Direction', 'Typography-led UI', 'Conversion'],
    visual: {
      tone: '#2cf2d0',
      tone2: '#0a1420',
      motif: 'orbit',
      label: 'MINIMAL / CLINICAL',
    },
    layout: 'editorial',
    url: 'https://dentist.utkcode.me',
  },
  {
    index: '02',
    title: 'Dental Studio',
    subtitle: 'Dynamic',
    year: '2026',
    category: 'Dynamic Dental Website',
    description:
      'A dynamic dental experience with richer interaction. One industry, three directions — dynamic.',
    focus: ['Interaction', 'Editorial Grid', 'Performance'],
    visual: {
      tone: '#ff5b4d',
      tone2: '#160a0a',
      motif: 'grid',
      label: 'BOLD / EDITORIAL',
    },
    layout: 'split',
    url: 'https://dentist.utkcode.me',
  },
  {
    index: '03',
    title: 'Dental Studio',
    subtitle: 'Signature',
    year: '2026',
    category: 'Advanced Dental Website',
    description:
      'The strongest dental website. Typography as the interface, motion as the narrative. One industry, three directions — signature.',
    focus: ['Motion', 'Scroll Narrative', 'Interface'],
    visual: {
      tone: '#ffb800',
      tone2: '#141007',
      motif: 'type',
      label: 'EXpressive / MOTION',
    },
    layout: 'full',
    url: 'https://dentist.utkcode.me',
  },
];

export const services: Service[] = [
  {
    index: '01',
    name: 'Design',
    items: ['Visual identity', 'UX / UI', 'Art direction', 'Digital systems'],
    note: 'Identity and systems that make a brand feel expensive, intentional, and impossible to ignore.',
  },
  {
    index: '02',
    name: 'Build',
    items: ['Frontend', 'Responsive systems', 'Interactions', 'Performance'],
    note: 'Fast, accessible, engineered frontends. No bloat, no templates, no excuses.',
  },
  {
    index: '03',
    name: 'Experience',
    items: ['Landing pages', 'Business websites', 'Digital experiences', 'Custom interfaces'],
    note: 'Complete web presence designed to present capability and turn attention into action.',
  },
];

export const capabilities = [
  {
    label: 'Typography',
    note: 'Type as a graphic object.',
  },
  {
    label: 'Motion',
    note: 'Restrained. Expensive.',
  },
  {
    label: 'Art Direction',
    note: 'Every pixel intentional.',
  },
  {
    label: 'Interaction',
    note: 'Engineered, not decorated.',
  },
  {
    label: 'Performance',
    note: 'Feels instant.',
  },
  {
    label: 'Responsive',
    note: 'Desktop-grade on mobile.',
  },
  {
    label: 'SEO',
    note: 'Found. Remembered.',
  },
  {
    label: 'Accessibility',
    note: 'Usable by everyone.',
  },
];
