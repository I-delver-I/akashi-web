import { FC } from 'react';
import { Box } from '@mui/material';
import Image from 'next/image';

import Divider from '@/components/common/ui/divider';

import LeftBlock from './components/left-block';
import RightBlock from './components/right-block';
import * as styles from './RegisterPage.styles';

import imgStyles from './RegisterImage.module.scss';

const RegisterPage: FC = () => {
  return (
    <Box sx={styles.registerPage}>
      <Image
        quality={100}
        className={imgStyles['background-image']}
        src="/images/register-page/background.png"
        fill
        priority
        alt="cute image"
      />
      <Box sx={styles.registerContent}>
        <LeftBlock />
        <Divider sx={styles.divider} />
        <RightBlock />
      </Box>
    </Box>
  );
};

export default RegisterPage;
