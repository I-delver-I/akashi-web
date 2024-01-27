import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Button from '@/components/common/ui/button-mui';

import * as stylesMUI from './RightBlock.styles';

import styles from './RightBlock.module.scss';

const RightBlock = () => {
  const router = useRouter();

  return (
    <Box sx={stylesMUI.rightBlock}>
      <Link href="/">
        <Image
          className={styles['login-logo']}
          src="/icons/logo.png"
          alt="akashi logo"
          priority
          width={200}
          height={200}
        />
      </Link>
      <Typography variant="h3" sx={stylesMUI.loginText}>
        Already have an account? Login!
      </Typography>
      <Button
        sx={stylesMUI.loginButton}
        text="Login"
        onClick={() => {
          void router.push('/login');
        }}
      />
    </Box>
  );
};

export default RightBlock;
