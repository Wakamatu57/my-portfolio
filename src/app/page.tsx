import Header from './components/header';
import SplitSection from './components/split';
import Skills from './components/skill';
import Licenses from './components/license';
import Footer from './components/footer';
import Projects from './components/project';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      {/* Main content */}
      <main>
        <SplitSection />

        {/* Skills section */}
        <section id="skill" className="py-16 bg-gray-100 scroll-mt-20">
          <Skills />
        </section>

        <section id="license" className="py-16 bg-white scroll-mt-20">
          <Licenses />
        </section>

        <section id="project" className="py-16 bg-gray-100 scroll-mt-20">
          <Projects />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
