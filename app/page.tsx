import Header from './components/header';
import Hero from './components/hero';
import About from './components/about';
import Projects from './components/projects';
import StackBox from './components/stackBox';
import SimpleContact from './components/simpleContact';
import FinalCta from './components/finalCta';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <About />
      <Projects />
      <StackBox />
      <SimpleContact />
      <FinalCta />
    </main>
  );
}
