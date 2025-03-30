import { render, screen } from '@testing-library/react';
import InfoCard from './';
import { CardInfo } from '@/app/types/CardInfo';
import '@testing-library/jest-dom';

// モックデータ
const mockCardInfo: CardInfo = {
  name: 'React.js',
  title: '2023年にReactを使って新しいウェブアプリケーションを開発',
  details: ['詳細情報 1', '詳細情報 2'],
};

describe('InfoCard', () => {
  it('should render name, title, and details list', () => {
    render(<InfoCard cardInfo={mockCardInfo} />);

    // 名前がレンダリングされているか
    const nameElement = screen.getByText(mockCardInfo.name);
    expect(nameElement).toBeInTheDocument();

    // タイトルがレンダリングされているか
    const titleElement = screen.getByText(mockCardInfo.title);
    expect(titleElement).toBeInTheDocument();

    // 詳細リストがレンダリングされているか
    const detailsList = screen.queryByRole('list');
    expect(detailsList).toBeInTheDocument();
  });

  it('should not render details if not provided', () => {
    const cardInfoWithoutDetails = { ...mockCardInfo, details: [] };

    render(<InfoCard cardInfo={cardInfoWithoutDetails} />);

    // 詳細リストが存在しない場合、詳細の項目は表示されない
    const detailsList = screen.queryByRole('list');
    expect(detailsList).toBeNull();
  });
});
