import React from 'react';
import { Box, Typography } from '@mui/material';
import Link from 'next/link';

import * as stylesMUI from '@/components/pages/privacy-page/PrivacyPage.styles';

const PrivacyPage = () => {
  return (
    <Box sx={stylesMUI.privacyContent}>
      <Typography variant="h4Bold">Privacy policy</Typography>
      <Box sx={stylesMUI.privacyList}>
        <Box>
          <Typography
            variant={'body1'}
            paragraph
            sx={stylesMUI.privacyListInfo}
          >
            AkaShi – це курсова робота з дисципліни "Компоненти програмної
            інженерії" навчального закладу “Київський політехнічний інститут ім.
            Ігоря Сікорського” (далі – Система). The main tasks of the System
            are забезпечення якості вищої освіти, цифровізація та автоматизація
            внутрішніх та зовнішніх процесів Студради ФІОТ та її відділів.
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6Bold">Which data we collect?</Typography>
          <Typography
            variant={'body1'}
            paragraph
            sx={stylesMUI.privacyListInfo}
          >
            According to the Law of Ukraine "On the Protection of Personal
            Rights", personal data is considered to be data that can be used to
            uniquely identify a person. The system does not collect such data.
            At the request of the System Administration, the user's personal
            data can be clarified and formatted to one type.
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6Bold">Which data do we process?</Typography>
          <Typography
            variant={'body1'}
            paragraph
            sx={stylesMUI.privacyListInfo}
          >
            The system is an Open-Source project, so all the code is in public
            space via the link{' '}
            <Link
              href={'https://github.com/users/Scarmaing-Whebrolted/projects/7'}
            >
              https://github.com/users/Scarmaing-Whebrolted/projects/7
            </Link>
            .
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6Bold" sx={stylesMUI.privacyListInfo}>
            When we delete personal data?
          </Typography>
          <Typography
            variant={'body1'}
            paragraph
            sx={stylesMUI.privacyListInfo}
          >
            The user's personal data is deleted: at the user's own request;
            after system deactivation. The System Administration reserves the
            right delete the account and personal data of the user in cases
            where actions user harm the functioning of the System.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default PrivacyPage;
