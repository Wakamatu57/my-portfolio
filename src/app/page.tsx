import Image from 'next/image';
import Link from 'next/link';
import Header from './components/header';
import SplitSection from './components/split';
import Works from './components/work';
import Skills from './components/skill';

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

        {/* Contact section */}
        <section id="contact" className="py-28 bg-white">
          <div className="max-w-screen-xl mx-auto text-center">
            <h2 className="text-4xl font-semibold mb-6">CONTACT</h2>
            <p className="text-lg text-gray-700 mb-8">
              お問い合わせは、
              <br className="block md:hidden" />
              SNSかメールにてお願いいたします。
            </p>
            <div className="flex justify-center space-x-8">
              <a
                href="https://twitter.com"
                target="_blank"
                className="text-blue-500 hover:text-blue-700 transition"
              >
                Twitter
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                className="text-pink-500 hover:text-pink-700 transition"
              >
                Instagram
              </a>
              <span className="text-gray-700">xxxxxx@gmail.com</span>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-center">
        <div>&copy; 2025 WAKAMATU</div>
      </footer>
    </div>
  );
}
