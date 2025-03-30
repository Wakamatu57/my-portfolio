import { CardInfo } from '@/app/types/CardInfo';
const InfoCard = ({ cardInfo }: { cardInfo: CardInfo }) => {
  return (
    <div className="text-center border p-4 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold">{cardInfo.name}</h3>
      <p className="text-gray-500">{cardInfo.title}</p>
      {cardInfo.details && (
        <ul className="mt-2 text-gray-600 text-sm text-left">
          {cardInfo.details.map((detail, i) => (
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

export default InfoCard;
