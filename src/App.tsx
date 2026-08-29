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

export default function App() {
  return (
    <div className="relative min-h-screen bg-ink text-paper">
      <Cursor />
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Work />
        <Services />
        <Capabilities />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
