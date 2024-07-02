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
import Link from 'next/link';

import { LibraryWithDetails } from '@/types/library';

export interface VersionTableProps {
  library: LibraryWithDetails;
}

const VersionsTable: FC<VersionTableProps> = ({ library }) => (
  <TableContainer component={Paper}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Version</TableCell>
          <TableCell align="left">Downloads</TableCell>
          <TableCell align="left">Last Updated</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {library.libraryVersions.map(lv => (
          <TableRow key={lv.id}>
            <TableCell component="th" scope="row">
              <Typography
                href={`/libraries/${library.id}/${lv.id}`}
                component={Link}
              >
                {lv.name}
              </Typography>
            </TableCell>
            <TableCell align="left">{lv.downloadsCount}</TableCell>
            <TableCell align="left">
              {new Date(lv.lastUpdateTime).toLocaleDateString()}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default VersionsTable;
