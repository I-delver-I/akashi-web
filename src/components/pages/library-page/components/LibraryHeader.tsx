import { FC, useState } from 'react';
import * as React from 'react';
import DownloadIcon from '@mui/icons-material/Download';
import { Box, Button, Typography } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Image from 'next/image';

import LibraryVersionAPI from '@/lib/api/library-version/LibraryVersionAPI';

export interface LibraryHeaderProps {
  libraryVersionId: number;
  logoUrl: string;
  libraryName: string;
  currentVersionName: string;
  shortDescription: string;
}

const LibraryHeader: FC<LibraryHeaderProps> = ({
  libraryVersionId,
  libraryName,
  currentVersionName,
  logoUrl,
  shortDescription,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDownload = async (format: string) => {
    console.log(`Download ${format} format`);
    await LibraryVersionAPI.download(libraryVersionId, format);
    handleClose();
  };

  return (
    <Box
      sx={{
        mt: 2,
        borderLeft: '3px solid green',
        borderRight: '3px solid green',
        borderTop: '3px solid green',
        borderRadius: '0 40px 0 0',
        padding: '10px',
        maxWidth: '850px',
      }}
    >
      <Box display={'flex'} justifyContent={'space-between'} flexWrap={'wrap'}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'end',
          }}
        >
          <Image
            src={logoUrl}
            style={{ marginRight: '12px', marginTop: '8px' }}
            alt="library logo"
            width={50}
            height={50}
          />
          <Typography variant="h5" component="h1" gutterBottom>
            {libraryName}{' '}
            <Typography variant="body1" component="span">
              {currentVersionName}
            </Typography>
          </Typography>
        </Box>
        <Button
          id="download-button"
          aria-controls={open ? 'download-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          startIcon={<DownloadIcon />}
          sx={{ color: 'brown' }}
        >
          Download
        </Button>
        <Menu
          id="download-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'download-button',
          }}
        >
          <MenuItem onClick={() => handleDownload('.zip')}>ZIP</MenuItem>
          <MenuItem onClick={() => handleDownload('.tar')}>TAR</MenuItem>
          <MenuItem onClick={() => handleDownload('.gzip')}>GZIP</MenuItem>
          <MenuItem onClick={() => handleDownload('.bzip2')}>BZIP2</MenuItem>
        </Menu>
      </Box>
      <Typography marginTop="10px" variant="body1" color="textSecondary">
        {shortDescription}
      </Typography>
    </Box>
  );
};

export default LibraryHeader;
