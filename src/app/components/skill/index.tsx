import {
  siAngular,
  siDocker,
  siPython,
  siReact,
  siTypescript,
  siVuedotjs,
} from 'simple-icons';
import { ImageInfo } from '@/app/types/ImageInfo';
import ImageInfoCard from '../image-info-card';
import SimpleIcon from '../simple-icon';

const Skills = () => {
  const skills: ImageInfo[] = [
    {
      name: 'React / Next.js',
      title: '4年の実務経験。複数のWebアプリ開発・移行に従事',
      details: [
        'React Hooks・Context API を活用したコンポーネント設計',
        'SSG / SSR / SPA など用途に応じたレンダリング方式を選択',
        'Jest / Testing Library によるユニット・コンポーネントテストの実装',
        '10年以上稼働の Angular アプリを React へ移行中',
      ],
      icon: <SimpleIcon path={siReact.path} hex={siReact.hex} />,
    },
    {
      name: 'TypeScript',
      title: '4年の実務経験。全プロジェクトで型安全に実装',
      details: [
        '全プロジェクトで TypeScript を採用し、実行時エラーを事前に防止',
        'ジェネリクス・ユーティリティ型・型ガードなど高度な型システムを活用',
        'バックエンド・フロントエンド両方での TypeScript 実装経験あり',
      ],
      icon: <SimpleIcon path={siTypescript.path} hex={siTypescript.hex} />,
    },
    {
      name: 'Vue.js',
      title: '4年の実務経験。データ可視化アプリの開発に従事',
      details: [
        'Vue 3 Composition API を活用し、保守性の高いコンポーネント設計を実現',
        'vue-chartjs を用いた運転データのインタラクティブなグラフ表示を実装',
        '状態管理に Vuex、多言語化に vue-i18n（英語・ヒンディー語）を採用',
        'props・emit による親子間通信を含む実務設計経験あり',
      ],
      icon: <SimpleIcon path={siVuedotjs.path} hex={siVuedotjs.hex} />,
    },
    {
      name: 'Angular',
      title: '4年の実務経験。大規模アプリの開発・移行に従事',
      details: [
        'コンポーネントとサービスの責務を分離し、拡張性の高いアーキテクチャを設計',
        '依存性注入（DI）を活用し、テストしやすく保守性の高いコードを実現',
        'RxJS を用いたリアクティブプログラミングによる効率的な非同期処理を実装',
      ],
      icon: <SimpleIcon path={siAngular.path} hex="DD0031" />,
    },
    {
      name: 'Python / Flask',
      title: '4年の実務経験。バックエンド開発に従事',
      details: [
        'オニオンアーキテクチャ・DDD を意識した設計で保守性の高い API を実装',
        'Pytest によるユニット・統合テストの実装経験あり',
        'SQLAlchemy を用いた ORM 設計と、生 SQL によるバグ調査・検証も対応',
      ],
      icon: <SimpleIcon path={siPython.path} hex={siPython.hex} />,
    },
    {
      name: 'AWS / インフラ',
      title: '4年の実務経験。設計・構築・運用まで一人で対応',
      details: [
        'ECS（nginx + Flask）の Docker 構成設計・構築・運用',
        'GitHub Actions + CodeDeploy による CI/CD パイプラインの構築',
        'AWS CDK によるインフラのコード化（IaC）',
        'EC2 / RDS（PostgreSQL）/ DynamoDB / S3 / Lambda の運用経験あり',
      ],
      icon: <SimpleIcon path={siDocker.path} hex={siDocker.hex} />,
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto text-center">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-12">
        SKILLS
      </h2>
      <div className="flex flex-wrap justify-center gap-12 px-6 md:px-12">
        {skills.map((skill, index) => (
          <div key={index} className="w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-2rem)]">
            <ImageInfoCard imageInfo={skill} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
