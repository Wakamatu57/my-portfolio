import Image from 'next/image';

const SplitSection = () => {
  return (
    <div className="flex flex-col md:flex-row py-24 bg-split bg-cover bg-center relative">
      <div className="flex flex-1 items-center justify-center text-center md:text-left p-6">
        <div>
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
