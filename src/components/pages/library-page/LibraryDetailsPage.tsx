import { FC } from 'react';
import { Typography } from '@mui/material';
import { useRouter } from 'next/router';

import { Library } from '@/types/library';
import { LibraryVersion } from '@/types/libraryVersion';
import { LibraryVersionDependency } from '@/types/libraryVersionDependency';
import { LibraryVersionSupportedFramework } from '@/types/libraryVersionSupportedFramework';

export interface LibraryDetailsPageProps {
  libraryVersions: LibraryVersion[];
  library: Library;
}

const LibraryDetailsPage: FC<LibraryDetailsPageProps> = ({
  libraryVersions,
  library,
}) => {
  return <Typography>Library name: {library.name}</Typography>;
};

export default LibraryDetailsPage;
