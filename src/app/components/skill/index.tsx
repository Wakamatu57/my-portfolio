import { ImageInfo } from '@/app/types/ImageInfo';
import ImageInfoCard from '../image-info-card';

const Skills = () => {
  const skills: ImageInfo[] = [
    {
      name: 'Vue.js',
      title: '2023年10月からVue.3を用いたデータ可視化アプリの開発に従事',
      details: [
        'Vue 3 Composition API を活用し、保守性の高いコンポーネント設計を実現。',
        'vue-chartjs を用いて、動的にデータを更新できるインタラクティブなグラフを実装。',
        '状態管理には Vuex を使用し、スムーズなデータ管理とコンポーネント間の通信を実現。',
        'vue-i18n を導入し、英語・ヒンディー語対応の多言語化機能を実装',
      ],
      imageUrl: 'vue.png',
    },
    {
      name: 'Angular.js',
      title: '2024年4月からAngular.jsを用いたレポート出力アプリの開発に従事',
      details: [
        'コンポーネントとサービスの責務を分離し、拡張性の高いアーキテクチャを設計',
        '依存性注入（DI）を活用し、テストしやすく保守性の高いコードを実現',
        'RxJS を用いたリアクティブプログラミングにより、効率的な非同期処理を実装',
      ],
      imageUrl: 'angular.png',
    },
    {
      name: 'Next.js/React',
      title: '2025年1月からNext.js/Reactを独学で学習',
      details: [
        'SSG（静的サイト生成）、SSR（サーバーサイドレンダリング）、SPA（シングルページアプリケーション）などのレンダリング方式を学習',
        'React のフック（Hooks）を理解し、コンポーネントの状態管理や副作用処理の実装方法を習得',
        '本ポートフォリオを作成し、テストライブラリ jest を使用したユニットテストの実装も行う',
      ],
      imageUrl: 'next.png',
    },
    {
      name: 'Python/Flask',
      title:
        '2023年10月からPythonのフレームワークFlaskを用いて、Webアプリのバックエンド開発に従事',
      details: [
        'DDD（ドメイン駆動設計）を採用し、レイヤードアーキテクチャを基に保守性の高いAPIを実装',
        'Pytest を使用して、テスト駆動開発（TDD）を実践し、コードの品質と保守性を確保',
        'numpy、pandas、scikit-learn などのライブラリを活用し、データ処理や機械学習の機能を実装',
      ],
      imageUrl: 'python.png',
    },
    {
      name: 'Java',
      title: '2023年ごろから独学で学習（アプリ実装経験はなし）',
      details: [
        'オブジェクト指向プログラミング（OOP）を学びながら、Java の基本的な構文や機能を習得',
        '2023年5月に Java Silver 認定資格を取得し、Java の基礎的な知識とスキルを証明',
      ],
      imageUrl: 'java.png',
    },
  ];
  return (
    <div className="max-w-screen-xl mx-auto text-center">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-12">
        SKILLS
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-6 md:px-12">
        {skills.map((skill, index) => (
          <ImageInfoCard imageInfo={skill} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
