import type { Project, Service } from '../types';

export const site = {
  name: 'UTKCODE',
  domain: 'https://utkcode.me',
  email: 'hello@utkcode.me',
  tagline: 'Websites worth remembering.',
  nav: [
    { id: 'work', label: 'Work' },
    { id: 'services', label: 'Services' },
    { id: 'capabilities', label: 'Capabilities' },
    { id: 'contact', label: 'Contact' },
  ],
};

export const projects: Project[] = [
  {
    index: '01',
    title: 'Dental Studio',
    subtitle: 'Digital Experience',
    year: '2026',
    category: 'Premium Clinic Website',
    description:
      'A premium digital experience for a modern dental clinic. Calm, clinical, and quietly confident.',
    focus: ['Art Direction', 'Typography-led UI', 'Conversion'],
    visual: {
      tone: '#2cf2d0',
      tone2: '#0a1420',
      motif: 'orbit',
      label: 'MINIMAL / CLINICAL',
    },
    layout: 'editorial',
  },
  {
    index: '02',
    title: 'Project Two',
    subtitle: 'Digital Experience',
    year: '2026',
    category: 'Business Website',
    description:
      'A distinctive web presence for a growing business. Built to communicate capability at a glance.',
    focus: ['Interaction', 'Editorial Grid', 'Performance'],
    visual: {
      tone: '#ff5b4d',
      tone2: '#160a0a',
      motif: 'grid',
      label: 'BOLD / EDITORIAL',
    },
    layout: 'split',
  },
  {
    index: '03',
    title: 'Project Three',
    subtitle: 'Digital Experience',
    year: '2026',
    category: 'Digital Experience',
    description:
      'An immersive single-page experience. Typography as the interface, motion as the narrative.',
    focus: ['Motion', 'Scroll Narrative', 'Interface'],
    visual: {
      tone: '#ffb800',
      tone2: '#141007',
      motif: 'type',
      label: 'EXPressive / MOTION',
    },
    layout: 'full',
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
