import { Box, Typography, useMediaQuery } from '@mui/material';

import theme from '@/styles/theme';

import * as styles from './AboutPage.styles';

const AboutPage = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down('desktop'));
  const isMobileMedium = useMediaQuery(theme.breakpoints.down('mobileMedium'));
  const isTablet = useMediaQuery(theme.breakpoints.down('tablet'));
  const isSemiMediumDesktop = useMediaQuery(
    theme.breakpoints.down('desktopSemiMedium'),
  );

  return (
    <Box
      display="flex"
      width="100%"
      height={isMobileMedium ? '460px' : '775px'}
    >
      {!isTablet && <Box sx={styles.vitrazhShadow} />}
      <Box
        width="100%"
        display="flex"
        justifyContent={isTablet ? ' center' : 'flex-start'}
      >
        <Box sx={styles.fictCard}>
          <Typography variant={isTablet ? 'h4Bold' : 'h2Bold'}>
            AkaShi
          </Typography>
          <Typography variant={isTablet ? 'body1' : 'h6'}>
            <b>AkaShi</b> — it's an internet registry of program libraries for
            C# programming language. It's my <b>Kursach</b> at KPI.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutPage;
