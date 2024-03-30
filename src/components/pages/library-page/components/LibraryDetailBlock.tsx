import { FC } from 'react';
import { Link, Typography } from '@mui/material';
import Box from '@mui/material/Box';

import { Library } from '@/types/library';
import { LibraryVersion } from '@/types/libraryVersion';

export interface LibraryDetailCardProps {
  library: Library;
  currentLibraryVersion: LibraryVersion;
}

const LibraryDetailBlock: FC<LibraryDetailCardProps> = ({
  library,
  currentLibraryVersion,
}) => {
  return (
    <Box
      sx={{
        borderLeft: '2px solid black',
        padding: '0 15px',
        mt: '16px',
        width: '300px',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Typography variant="h6">Downloads</Typography>
      <Typography gutterBottom>Total: {library.downloadsCount}</Typography>
      <Typography gutterBottom>
        Current version: {currentLibraryVersion.downloadsCount}
      </Typography>

      <Typography variant="h6">About</Typography>
      <Typography gutterBottom>
        Last updated{' '}
        {new Date(currentLibraryVersion.lastUpdateTime).toLocaleDateString()}
      </Typography>
      <Typography
        component={Link}
        href={library.projectWebsiteURL}
        underline={'none'}
        gutterBottom
      >
        Project website
      </Typography>
      <Typography
        component={Link}
        href={currentLibraryVersion.sourceRepositoryUrl}
        underline={'none'}
        gutterBottom
      >
        Source repository
      </Typography>
      <Typography
        component={Link}
        href={currentLibraryVersion.licenseUrl}
        underline={'none'}
        gutterBottom
      >
        License
      </Typography>

      <Typography variant="h6">Owner</Typography>
      <Typography gutterBottom>{library.user.username}</Typography>

      <Typography variant="h6">Tags</Typography>
      <Typography>{library.tags}</Typography>
    </Box>
  );
};

export default LibraryDetailBlock;
