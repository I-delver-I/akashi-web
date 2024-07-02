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
import useMediaQuery from '@mui/material/useMediaQuery';
import { Breakpoint } from '@mui/system';
import Image from 'next/image';
import NextLink from 'next/link';

import theme from '@/styles/theme';
import { LibraryWithDetails } from '@/types/library';

export interface LibraryCardProps {
  library: LibraryWithDetails;
  onEdit: (library: LibraryWithDetails) => void;
}

const LibraryCard: FC<LibraryCardProps> = ({ library, onEdit }) => {
  const isDesktop = useMediaQuery(theme.breakpoints.down('lg' as Breakpoint));

  return (
    <ListItem divider>
      <Card variant="outlined" sx={{ width: '100%' }}>
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            gap: '10px',
          }}
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
              <NextLink href={`/manage-libraries/${library.id}`}>
                <Typography variant="h6">
                  {library.name.replace(/\./g, '.\u200B')}
                </Typography>
              </NextLink>
            </Box>
            <Box display="flex" columnGap="20px" flexWrap="wrap">
              <Typography>
                last updated {library.lastUpdateTime.toString().split('T')[0]}
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
            <Typography
              component={Link}
              href={library.projectWebsiteURL}
              underline={'none'}
              gutterBottom
            >
              Project website
            </Typography>
          </Box>
          <Button onClick={() => onEdit(library)}>Edit</Button>
        </CardContent>
      </Card>
    </ListItem>
  );
};

export default LibraryCard;
