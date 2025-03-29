import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="w-full py-8 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center px-6">
          <h1 className="text-4xl font-bold tracking-wider">
            <a href="#">TARO DESIGN</a>
          </h1>
          <nav>
            <ul className="flex space-x-8 text-lg">
              <li><a href="#works" className="hover:text-gray-300 transition">WORKS</a></li>
              <li><a href="#skill" className="hover:text-gray-300 transition">SKILL</a></li>
              <li><a href="#contact" className="hover:text-gray-300 transition">CONTACT</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main content */}
      <main>
        {/* Split section */}
        <div className="flex flex-col md:flex-row py-24 bg-split bg-cover bg-center relative">
          <div className="flex-1 text-center md:text-left p-6">
            <h2 className="text-5xl font-bold leading-tight text-black mb-4">TAISHI<br />KATO</h2>
            <p className="text-lg text-black opacity-90 mb-6">
              ユーザーとお客様が心から満足できるサイトをお作りいたします。<br />
              デザインとコーディングはおまかせください。<br />
              福島県郡山市在住。猫と暮らしています。<br />
              ２年間Web制作会社に勤務後、フリーランスとして独立しました。
            </p>
          </div>
          <div className="flex-1 bg-cover bg-center rounded-lg shadow-xl" style={{ backgroundImage: 'url("/img/mv.jpg")' }}></div>
        </div>

        {/* Works section */}
        <section id="works" className="py-20 bg-gray-100">
          <div className="max-w-screen-xl mx-auto text-center">
            <h2 className="text-4xl font-semibold mb-12">WORKS</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Work Item */}
              {["work1", "work2", "work3"].map((work, index) => (
                <div key={index} className="group shadow-lg rounded-lg overflow-hidden transform transition-all hover:scale-105">
                  <Image
                    className="w-full h-60 object-cover"
                    src={`/img/works-dummy-thumb.jpg`}
                    alt={`Work ${index + 1}`}
                    width={600}
                    height={400}
                  />
                  <div className="p-6 bg-white">
                    <h3 className="text-xl font-semibold mb-2">作品名が入る</h3>
                    <p className="text-gray-500">Design / Coding(Responsive)</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills section */}
        <section id="skill" className="py-20 bg-white">
          <div className="max-w-screen-xl mx-auto text-center">
            <h2 className="text-4xl font-semibold mb-12">SKILL</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
              {["HTML5", "CSS3", "JavaScript", "WordPress", "Photoshop", "Illustrator"].map((skill, index) => (
                <div key={index} className="text-center">
                  <Image
                    className="mx-auto mb-4"
                    src={`/img/icon_skill.png`}
                    alt={skill}
                    width={100}
                    height={100}
                  />
                  <h3 className="text-xl font-semibold">{skill}</h3>
                  <p className="text-gray-500">説明が入ります。スキルについて詳しく記載します。</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact section */}
        <section id="contact" className="py-20 bg-gray-100">
          <div className="max-w-screen-xl mx-auto text-center">
            <h2 className="text-4xl font-semibold mb-6">CONTACT</h2>
            <p className="text-lg text-gray-700 mb-8">
              お問い合わせは、<br className="block md:hidden" />SNSかメールにてお願いいたします。
            </p>
            <div className="flex justify-center space-x-8">
              <a href="https://twitter.com" target="_blank" className="text-blue-500 hover:text-blue-700 transition">Twitter</a>
              <a href="https://instagram.com" target="_blank" className="text-pink-500 hover:text-pink-700 transition">Instagram</a>
              <span className="text-gray-700">xxxxxx@gmail.com</span>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-center">
        <div>&copy; 2025 TARO YAMADA</div>
      </footer>
    </div>
  );
}
