import Header from './components/header';
import Hero from './components/hero';
import About from './components/about';
import Journey from './components/journey';
import Projects from './components/projects';
import StackBox from './components/stackBox';
import FinalCta from './components/finalCta';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <About />
      <Journey />
      <Projects />
      <StackBox />
      <FinalCta />
    </main>
  );
}
