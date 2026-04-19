import { ReactNode } from 'react';

export type ImageInfo = {
  name: string;
  title: string;
  details: string[];
  imageUrl?: string;
  icon?: ReactNode;
};
