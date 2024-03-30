import { FC } from 'react';
import { Box, Link, Typography } from '@mui/material';
import Image from 'next/image';
import NextLink from 'next/link';

import Button from '@/components/common/ui/button-mui';
import {
  ButtonSize,
  ButtonVariant,
} from '@/components/common/ui/button-mui/types';

import { supportLinks } from './constants';
import * as styles from './Footer.styles';

const Footer: FC = () => {
  return (
    <Box sx={styles.footerContainer}>
      <Box sx={styles.footerLogoContainer}>
        <Link href="/" component={NextLink} sx={styles.footerLogo}>
          <Image
            src={'/icons/logo.png'}
            alt="AkaShi logo"
            width={90}
            height={90}
          />
        </Link>
        <Typography sx={styles.signature}>By Pluhatyrov Dmytro</Typography>
      </Box>

      <Box sx={styles.support}>
        <Typography>Support</Typography>
        {supportLinks.map((data, index) => (
          <Link
            key={index}
            component={NextLink}
            href={data.link}
            underline="none"
          >
            <Button
              // sx={styles.button}
              text={data.text}
              size={ButtonSize.SMALL}
              variant={ButtonVariant.TEXT}
            />
          </Link>
        ))}
      </Box>
    </Box>
  );
};

export default Footer;
