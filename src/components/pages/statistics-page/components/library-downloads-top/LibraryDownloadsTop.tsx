import { FC } from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';

import { StatisticsPageProps } from '@/components/pages/statistics-page/StatisticsPage';

const LibraryDownloadsTop: FC<StatisticsPageProps> = ({
  topLibraryStatsByDownloads,
}) => {
  return (
    <TableContainer component={Paper} sx={{ maxWidth: 900 }}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell
              sx={{
                backgroundColor: 'royalblue',
                color: 'white',
              }}
            >
              <Typography variant="h6">Name</Typography>
            </TableCell>
            <TableCell
              align="right"
              sx={{
                backgroundColor: 'royalblue',
                color: 'white',
              }}
            >
              <Typography variant="h6">Downloads</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {topLibraryStatsByDownloads.map((library, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell
                component="th"
                scope="row"
                sx={{
                  textOverflow: 'ellipsis',
                  overflow: 'hidden',
                  whiteSpace: 'nowrap',
                  maxWidth: 0,
                }}
              >
                {library.libraryName}
              </TableCell>
              <TableCell align="right" width="180px">
                {library.downloadsCount.toLocaleString()}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default LibraryDownloadsTop;
