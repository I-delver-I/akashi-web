import * as React from 'react';
import { FC } from 'react';
import {
  Box,
  Card,
  CardContent,
  Link,
  ListItem,
  Typography,
} from '@mui/material';
import Button from '@mui/material/Button';

import { LibraryVersion } from '@/types/libraryVersion';

export interface LibraryVersionCardProps {
  libraryVersion: LibraryVersion;
  onEdit: (libraryVersion: LibraryVersion) => void;
}

const LibraryVersionCard: FC<LibraryVersionCardProps> = ({
  libraryVersion,
  onEdit,
}) => {
  return (
    <ListItem divider>
      <Card variant="outlined" sx={{ width: '100%' }}>
        <CardContent
          sx={{ display: 'flex', flexDirection: 'row', gap: '10px' }}
        >
          <Box>
            <Box display="flex" columnGap="10px" flexWrap="wrap">
              <Typography variant="h6">{libraryVersion.name}</Typography>
            </Box>
            <Box display="flex" columnGap="20px" flexWrap="wrap">
              <Typography>
                last updated{' '}
                {libraryVersion.lastUpdateTime.toString().split('T')[0]}
              </Typography>
              <Button onClick={() => onEdit(libraryVersion)}>Edit</Button>
            </Box>
            <Box sx={{ display: 'flex', gap: '10px' }}>
              <Typography
                component={Link}
                href={libraryVersion.licenseUrl}
                underline={'none'}
                gutterBottom
              >
                License
              </Typography>
              <Typography
                component={Link}
                href={libraryVersion.sourceRepositoryUrl}
                underline={'none'}
                gutterBottom
              >
                Source repository
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </ListItem>
  );
};

export default LibraryVersionCard;
