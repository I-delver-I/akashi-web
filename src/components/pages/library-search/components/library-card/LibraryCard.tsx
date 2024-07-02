import * as React from 'react';
import { FC } from 'react';
import { Box, Card, CardContent, ListItem, Typography } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Breakpoint } from '@mui/system';
import Image from 'next/image';
import Link from 'next/link';

import getLatestLibraryVersion from '@/lib/utils/getLatestLibraryVersion';
import theme from '@/styles/theme';
import { LibraryWithDetails } from '@/types/library';

export interface LibraryCardProps {
  library: LibraryWithDetails;
}

const LibraryCard: FC<LibraryCardProps> = ({ library }) => {
  const isDesktop = useMediaQuery(theme.breakpoints.down('lg' as Breakpoint));

  return (
    <ListItem divider>
      <Card variant="outlined" sx={{ width: '100%' }}>
        <CardContent
          sx={{ display: 'flex', flexDirection: 'row', gap: '10px' }}
        >
          {!isDesktop && (
            <Image
              src={library.logoURL}
              alt="library logo"
              width={50}
              height={50}
            />
          )}
          <Box>
            <Box display="flex" columnGap="10px" flexWrap="wrap">
              <Link href={`/libraries/${library.id}`}>
                <Typography variant="h6">
                  {library.name.replace(/\./g, '.\u200B')}
                </Typography>
              </Link>
              <Typography color="textSecondary">
                dev: {library.user.username}
              </Typography>
            </Box>
            <Box display="flex" columnGap="20px" flexWrap="wrap">
              <Typography>
                {library.downloadsCount.toLocaleString()} total downloads
              </Typography>
              <Typography>
                last updated {library.lastUpdateTime.toString().split('T')[0]}
              </Typography>
              <Typography>
                Latest version:{' '}
                {getLatestLibraryVersion(library.libraryVersions)?.name ??
                  'N/A'}
              </Typography>
            </Box>
            {library.tags && (
              <Typography color="textSecondary">
                tags: {library.tags}
              </Typography>
            )}
            <Typography color="textSecondary">
              {library.shortDescription}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </ListItem>
  );
};

export default LibraryCard;
