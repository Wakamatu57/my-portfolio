import Image from 'next/image';

const SplitSection = () => {
  return (
    <div className="flex flex-col md:flex-row py-24 bg-split bg-cover bg-center relative">
      <div className="flex flex-1 items-center justify-center text-center md:text-left p-6">
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-black mb-4">
            About me
          </h2>
          <p className="text-lg text-black opacity-90 mb-6">
            京都府出身のエンジニアです。
            <br />
            大学・大学院で機械工学を学び、2022年から大手メーカーでWebアプリの開発に従事しています。
            <br />
            AWS環境でのサーバ構築をはじめ、フロントエンド・バックエンドの実装まで幅広い業務を担当しています。
          </p>
        </div>
      </div>

      <div className="flex-1 relative rounded-lg shadow-xl w-full md:w-[50%] min-h-[50vh] md:min-h-[70vh]">
        <Image
          src="/img/cat.JPG"
          alt="Main Image"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default SplitSection;
