import { FC } from 'react';
import { Line } from 'react-chartjs-2';
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
import Container from '@mui/material/Container';

import 'chart.js/auto';

type DownloadsPerWeek = {
  weekStartDate: Date;
  weekEndDate: Date;
  downloadsCount: number;
};

const DownloadedLibrariesPerWeek: FC = () => {
  const downloadsPerWeeks: DownloadsPerWeek[] = [
    {
      weekStartDate: new Date('2023-12-4'),
      weekEndDate: new Date('2023-12-11'),
      downloadsCount: 3343538922,
    },
    {
      weekStartDate: new Date('2023-12-11'),
      weekEndDate: new Date('2023-12-18'),
      downloadsCount: 3463839232,
    },
    {
      weekStartDate: new Date('2023-12-18'),
      weekEndDate: new Date('2023-12-25'),
      downloadsCount: 2477317025,
    },
    {
      weekStartDate: new Date('2023-12-25'),
      weekEndDate: new Date('2024-1-1'),
      downloadsCount: 2879018245,
    },
    {
      weekStartDate: new Date('2024-1-1'),
      weekEndDate: new Date('2024-1-8'),
      downloadsCount: 3512341357,
    },
    {
      weekStartDate: new Date('2024-1-8'),
      weekEndDate: new Date('2024-1-15'),
      downloadsCount: 3736341437,
    },
    {
      weekStartDate: new Date('2024-1-15'),
      weekEndDate: new Date('2024-1-22'),
      downloadsCount: 3439321531,
    },
  ];

  const data = {
    labels: [
      '2023-12-4 - 2023-12-11',
      '2023-12-11 - 2023-12-18',
      '2023-12-18 - 2023-12-25',
      '2023-12-25 - 2023-1-1',
      '2024-1-1 - 2024-1-8',
      '2024-1-8 - 2024-1-15',
      '2024-1-15 - 2024-1-22',
    ],
    datasets: [
      {
        label: 'Downloads',
        data: [
          3343538922, 3463839232, 2477317025, 2879018245, 3512341357,
          3736341437, 3439321531,
        ],
        fill: false,
        backgroundColor: 'blue',
        borderColor: 'blue',
      },
    ],
  };

  const options = {
    scales: {
      y: {
        grid: {
          color: 'darkslategrey', // Grey color for horizontal grid lines
          drawBorder: false, // Optional: remove the border line
        },
        ticks: {
          color: '#fff', // Bright text color for the Y axis
          font: {
            size: 16, // Bigger font size
          },
        },
      },
      x: {
        grid: {
          color: 'darkslategrey', // Grey color for vertical grid lines
          drawBorder: false, // Optional: remove the border line
        },
        ticks: {
          color: '#fff', // Bright text color for the X axis
          font: {
            size: 16, // Bigger font size
          },
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: '#fff', // Bright text color for the legend
          font: {
            size: 18, // Bigger font size
          },
        },
      },
    },
  };

  return (
    <Container>
      <Typography variant="h5" gutterBottom>
        Downloaded Libraries Per Week (Last 7 Weeks)
      </Typography>
      <Line data={data} options={options} />
      <TableContainer component={Paper} sx={{ marginTop: 4 }}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Week</TableCell>
              <TableCell align="right">Downloads</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {downloadsPerWeeks.map((download, index) => (
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
                  {download.weekStartDate.toLocaleDateString()} -{' '}
                  {download.weekEndDate.toLocaleDateString()}
                </TableCell>
                <TableCell align="right" width="180px">
                  {download.downloadsCount.toLocaleString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default DownloadedLibrariesPerWeek;
