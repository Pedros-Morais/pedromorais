import Header from './components/header';
import Hero from './components/hero';
import About from './components/about';
import Projects from './components/projects';
import StackBox from './components/stackBox';
import FinalCta from './components/finalCta';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <About />
      <Projects />
      <StackBox />
      <FinalCta />
    </main>
  );
}
