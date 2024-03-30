import { LibraryVersion } from '@/types/libraryVersion';
import { User } from '@/types/user';

export interface Library {
  id: number;
  name: string;
  user: User;
  downloadsCount: number;
  lastUpdateTime: Date;
  shortDescription: string;
  tags: string;
  projectWebsiteURL: string;
  logoURL: string;
}

export interface LibraryWithDetails extends Library {
  libraryVersions: LibraryVersion[];
}

export interface PaginatedLibraries {
  items: LibraryWithDetails[];
  currentPage: number;
  pageSize: number;
  totalCount: number;
}
