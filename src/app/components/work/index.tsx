import Image from 'next/image';
type Work = {
  name: string;
  detail: string;
  imageUrl: string;
};
const Works = () => {
  return (
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
  );
};

export default Works;
