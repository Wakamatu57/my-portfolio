import { CardInfo } from '@/app/types/CardInfo';
import InfoCard from '../info-card';

const Licenses = () => {
  const licenses: CardInfo[] = [
    {
      name: '情報処理安全確保支援士試験',
      title: '2024年4月合格',
      details: ['Webアプリ開発におけるセキュリティリスクとその対策方法を学習'],
    },
    {
      name: '応用情報技術者試験',
      title: '2023年4月合格',
      details: [
        'Webアプリ開発に必要なセキュリティ、ネットワーク、DB、プログラミングの知識を網羅的に習得。',
      ],
    },
    {
      name: '基本情報技術者資格',
      title: '2022年5月合格',
      details: [
        'セキュリティ、ネットワーク、DB、プログラミングなどの基本的な知識を習得。',
      ],
    },
    {
      name: 'HTML5プロフェッショナル試験 レベル1/レベル2',
      title: '2023年2月合格',
      details: [
        'HTML、CSS、JavaScriptを包括的に学習。',
        'フレームワークを使う前に、HTML、CSS、JavaScriptでの実装を経験し、フレームワークの利便性を実感。',
      ],
    },
    {
      name: 'Java Silver',
      title: '2023年5月合格',
      details: [
        'オブジェクト指向プログラミング（OOP）を学び、Javaの基本構文と機能を習得。',
      ],
    },
    {
      name: 'Python3エンジニア認定基礎試験/データ分析試験',
      title: '2020年5月合格, 2021年7月合格',
      details: [
        'Pythonの基本的な構文や機能を習得',
        'numpy、pandas、scikit-learn などのライブラリを活用し、データ処理や機械学習の学習',
      ],
    },
    {
      name: 'AWS Certified Solutions Architect - Associate',
      title: '2022年12月合格',
      details: [
        'AWSの主要サービス（IAM、VPC、EC2、ECS、S3、DynamoDB、RDSなど）の基本的な理解。',
      ],
    },
    {
      name: 'LinuC レベル1',
      title: '2024年2月合格',
      details: [
        'Linuxの基本的なコマンドを学び、サーバの構築・運用に必要なスキルを習得。',
      ],
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto text-center">
      <h2 className="text-4xl font-semibold mb-12">CERTIFICATIONS</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-6 md:px-12">
        {licenses.map((license, index) => (
          <InfoCard cardInfo={license} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Licenses;
