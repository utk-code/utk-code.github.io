import { useState } from 'react';
import { Cursor } from './components/Cursor';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { Work } from './components/Work';
import { Services } from './components/Services';
import { Capabilities } from './components/Capabilities';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ScrollProgress } from './components/ScrollProgress';
import { ContactCard } from './components/ContactCard';

export default function App() {
  const [cardOpen, setCardOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-ink text-paper">
      <Cursor />
      <ScrollProgress />
      <Header onOpenContact={() => setCardOpen(true)} />
      <main>
        <Hero onOpenContact={() => setCardOpen(true)} />
        <Marquee />
        <Work />
        <Services />
        <Capabilities />
        <Contact onOpenContact={() => setCardOpen(true)} />
      </main>
      <Footer />
      <ContactCard open={cardOpen} onClose={() => setCardOpen(false)} />
    </div>
  );
}
