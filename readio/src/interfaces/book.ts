import type { User } from './user';
import type { Page } from './page';

export interface Book {
  id: number | null;
  user: User;
  originalFilename: string;
  title: string;
  author?: string | null;
  format: 'pdf' | 'epub';
  totalPages: number;
  uploadedAt: string;
  pages: Page[];
}