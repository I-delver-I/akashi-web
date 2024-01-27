import { FC } from 'react';
import Container from '@mui/material/Container';
import { Breakpoint } from '@mui/system';

import DownloadedLibrariesPerWeek from '@/components/pages/statistics-page/components/downloaded-libraries-per-week';
import LibraryDownloadsTop from '@/components/pages/statistics-page/components/library-downloads-top';
import { Statistics } from '@/types/statistics';

export interface StatisticsPageProps {
  topLibraryStatsByDownloads: Statistics[];
}

const StatisticsPage: FC<StatisticsPageProps> = ({
  topLibraryStatsByDownloads,
}) => {
  return (
    <Container
      maxWidth={'xl' as Breakpoint}
      sx={{
        display: 'flex',
        margin: '20px',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '30px',
      }}
    >
      <LibraryDownloadsTop
        topLibraryStatsByDownloads={topLibraryStatsByDownloads}
      />
      <DownloadedLibrariesPerWeek />
    </Container>
  );
};

export default StatisticsPage;
