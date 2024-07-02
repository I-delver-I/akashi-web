import { Library } from '@/types/library';
import { LibraryVersionDependency } from '@/types/libraryVersionDependency';
import { LibraryVersionSupportedFramework } from '@/types/libraryVersionSupportedFramework';

export interface LibraryVersion {
  id: number;
  name: string;
  downloadsCount: number;
  library: Library;
  lastUpdateTime: Date;
  usageContent: string;
  sourceRepositoryUrl: string;
  licenseUrl: string;
  fileExtension: string;
}

export interface LibraryVersionWithDetails extends LibraryVersion {
  libraryVersionDependencies: LibraryVersionDependency[];
  libraryVersionSupportedFrameworks: LibraryVersionSupportedFramework[];
}
