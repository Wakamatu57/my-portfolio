import { render, screen } from '@testing-library/react';
import ImageInfoCard from './';
import { ImageInfo } from '@/app/types/ImageInfo';
// setupTests.ts
import '@testing-library/jest-dom';

// モックデータ
const mockImageInfo: ImageInfo = {
  name: 'Vue.js',
  title: '2023年10月からVue.3を用いたデータ可視化アプリの開発に従事',
  details: ['Detail 1', 'Detail 2'],
  imageUrl: 'vue.png',
};

describe('ImageInfoCard', () => {
  it('should render image, name, and title', () => {
    render(<ImageInfoCard imageInfo={mockImageInfo} />);

    // 名前がレンダリングされているか
    const nameElement = screen.getByText(mockImageInfo.name);
    expect(nameElement).toBeInTheDocument();

    // タイトルがレンダリングされているか
    const titleElement = screen.getByText(mockImageInfo.title);
    expect(titleElement).toBeInTheDocument();

    // 詳細リストがレンダリングされているか
    const detailsList = screen.queryByRole('list');
    expect(detailsList).toBeInTheDocument();
  });

  it('should not render details if not provided', () => {
    const imageInfoWithoutDetails = { ...mockImageInfo, details: [] };

    render(<ImageInfoCard imageInfo={imageInfoWithoutDetails} />);

    // 詳細リストが存在しない場合、詳細の項目は表示されない
    const detailsList = screen.queryByRole('list');
    expect(detailsList).toBeNull();
  });
});
