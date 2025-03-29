import Image from 'next/image';
import Link from 'next/link';
import Header from './components/header';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      {/* Main content */}
      <main>
        {/* Split section */}
        <div className="flex flex-col md:flex-row py-24 bg-split bg-cover bg-center relative">
          <div className="flex-1 text-center md:text-left p-6">
            <h2 className="text-5xl font-bold leading-tight text-black mb-4">
              TAISHI KATO
            </h2>
            <p className="text-lg text-black opacity-90 mb-6">
              Webアプリ開発のご依頼はお任せください。
              <br />
              フロントエンドからバックエンドまで幅広く対応いたします。
              <br />
              大手メーカーにて3年間、Webアプリの開発に従事しています。
              <br />
            </p>
          </div>
          <div className="flex-1 relative rounded-lg shadow-xl min-h-[300px]">
            <Image
              src="/img/mv.jpg"
              alt="Main Image"
              layout="fill" // 親要素を完全に覆う
              objectFit="cover" // 画像の縦横比を保持しつつ親要素を覆う
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Works section */}
        <section id="works" className="py-20 bg-gray-100">
          <div className="max-w-screen-xl mx-auto text-center">
            <h2 className="text-4xl font-semibold mb-12">WORKS</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Work Item */}
              {['work1', 'work2', 'work3'].map((work, index) => (
                <div
                  key={index}
                  className="group shadow-lg rounded-lg overflow-hidden transform transition-all hover:scale-105"
                >
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
              {[
                'HTML5',
                'CSS3',
                'JavaScript',
                'WordPress',
                'Photoshop',
                'Illustrator',
              ].map((skill, index) => (
                <div key={index} className="text-center">
                  <Image
                    className="mx-auto mb-4"
                    src={`/img/icon_skill.png`}
                    alt={skill}
                    width={100}
                    height={100}
                  />
                  <h3 className="text-xl font-semibold">{skill}</h3>
                  <p className="text-gray-500">
                    説明が入ります。スキルについて詳しく記載します。
                  </p>
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
        <div>&copy; 2025 TARO YAMADA</div>
      </footer>
    </div>
  );
}
