import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Button from '@/components/common/ui/button-mui';

import * as styles from './LogoRegisterBlock.styles';

const LogoRegisterBlock = () => {
  const { push } = useRouter();

  return (
    <Box sx={styles.logoRegisterBlock}>
      <Link href="/">
        <Image
          style={{ margin: 0, padding: '8px' }}
          src="/icons/logo.png"
          alt="akashi logo"
          priority
          width={300}
          height={300}
        />
      </Link>
      <Typography variant="h3SemiBold" sx={styles.registerText}>
        Are you not with us yet? Join in!
      </Typography>
      <Button
        sx={styles.registerButton}
        text="Register"
        onClick={() => {
          void push('/register');
        }}
      />
    </Box>
  );
};

export default LogoRegisterBlock;
