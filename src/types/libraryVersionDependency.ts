import { Framework } from '@/types/framework';
import { Library } from '@/types/library';
import { LibraryVersion } from '@/types/libraryVersion';

export interface LibraryVersionDependency {
  id: number;
  framework: Framework;
  libraryVersion: LibraryVersion;
  dependencyLibrary: Library;
  supportedVersions: string;
}
