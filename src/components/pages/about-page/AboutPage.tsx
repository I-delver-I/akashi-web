import { Box, Typography } from '@mui/material';

const AboutPage = () => {
  return (
    <Box sx={{ mx: '10px' }}>
      <Typography variant={'h6'} mt={'50px'} textAlign={'justify'}>
        <b>AkaShi</b> — it's an internet registry of program libraries for C#
        programming language. It's my <b>Kursach</b> at KPI.
      </Typography>
    </Box>
  );
};

export default AboutPage;
