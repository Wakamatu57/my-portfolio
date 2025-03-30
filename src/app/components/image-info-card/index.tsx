import Image from 'next/image';
import { ImageInfo } from '@/app/types/ImageInfo';

const ImageInfoCard = ({ imageInfo }: { imageInfo: ImageInfo }) => {
  return (
    <div className="text-center">
      <Image
        className="mx-auto mb-4"
        src={`/img/${imageInfo.imageUrl}`}
        alt={imageInfo.name}
        width={100}
        height={100}
      />
      <h3 className="text-xl font-semibold">{imageInfo.name}</h3>
      <p className="text-gray-500">{imageInfo.title}</p>
      {imageInfo.details && (
        <ul className="mt-2 text-gray-600 text-sm text-left inline-block">
          {imageInfo.details.map((detail, i) => (
            <li key={i} className="flex items-start">
              <span className="mr-2 text-blue-500">•</span>
              {detail}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ImageInfoCard;
