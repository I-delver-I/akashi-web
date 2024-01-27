import { LibraryVersionDependency } from '@/types/libraryVersionDependency';
import { LibraryVersionSupportedFramework } from '@/types/libraryVersionSupportedFramework';

export interface Framework {
  id: number;
  productName: string;
  versionName: string;
}

export interface FrameworkWithDetails extends Framework {
  libraryVersionDependencies: LibraryVersionDependency[];
  libraryVersionSupportedFrameworks: LibraryVersionSupportedFramework[];
}
