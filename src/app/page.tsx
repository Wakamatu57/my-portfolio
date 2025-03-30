import Header from './components/header';
import SplitSection from './components/split';
import Skills from './components/skill';
import Licenses from './components/license';
import Contact from './components/contact';
import Footer from './components/footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      {/* Main content */}
      <main>
        <SplitSection />

        {/* Skills section */}
        <section id="skill" className="py-28 bg-gray-100">
          <Skills />
        </section>

        <section id="license" className="py-28 bg-white">
          <Licenses />
        </section>

        {/* Contact section */}
        <section id="contact" className="py-28 bg-gray-100">
          <Contact />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
