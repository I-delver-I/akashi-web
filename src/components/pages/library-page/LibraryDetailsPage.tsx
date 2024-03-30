import { FC } from 'react';
import { Box } from '@mui/material';

import BasicTabs from '@/components/pages/library-page/components/BasicTabs';
import LibraryDetailBlock from '@/components/pages/library-page/components/LibraryDetailBlock';
import LibraryHeader from '@/components/pages/library-page/components/LibraryHeader';
import { LibraryWithDetails } from '@/types/library';
import { LibraryVersionWithDetails } from '@/types/libraryVersion';

export interface LibraryDetailsPageProps {
  currentLibraryVersion: LibraryVersionWithDetails;
  library: LibraryWithDetails;
}

const LibraryDetailsPage: FC<LibraryDetailsPageProps> = ({
  currentLibraryVersion,
  library,
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: 'center',
        width: '100%',
        pb: '75px',
        paddingX: '15px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          maxWidth: '850px',
          flexDirection: 'column',
          flexGrow: 1,
          px: '15px',
        }}
      >
        <LibraryHeader
          libraryVersionId={currentLibraryVersion.id}
          libraryName={library.name}
          logoUrl={library.logoURL}
          currentVersionName={currentLibraryVersion.name}
          shortDescription={library.shortDescription}
        />
        <BasicTabs
          library={library}
          currentLibraryVersion={currentLibraryVersion}
        />
      </Box>
      <LibraryDetailBlock
        library={library}
        currentLibraryVersion={currentLibraryVersion}
      />
    </Box>
  );
};

export default LibraryDetailsPage;
