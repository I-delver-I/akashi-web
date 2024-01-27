import { Framework } from '@/types/framework';
import { LibraryVersion } from '@/types/libraryVersion';

export interface LibraryVersionSupportedFramework {
  id: number;
  libraryVersion: LibraryVersion;
  framework: Framework;
}
