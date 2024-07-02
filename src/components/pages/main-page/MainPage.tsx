import { FC } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  Link,
  Typography,
} from '@mui/material';
import Container from '@mui/material/Container';
import NextLink from 'next/link';

import { registryFeatures } from '@/components/pages/main-page/constants';

const MainPage: FC = () => {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          my: 5,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant="h2" gutterBottom>
          Welcome to AkaShi
        </Typography>
        <Typography variant="h5">Your premiere C# library registry</Typography>
        <Link href={'/libraries'} passHref component={NextLink}>
          <Button variant="contained" color="primary" sx={{ mt: 2 }}>
            Get Started
          </Button>
        </Link>
      </Box>

      <Typography variant={'h4'}>Features</Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '10px',
          my: '10px',
        }}
      >
        {registryFeatures.map((feature, index) => (
          <Card key={index} sx={{ display: 'flex', width: '300px' }}>
            <CardContent
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <Box>
                <Typography variant="h5">{feature.title}</Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {feature.description}
                </Typography>
              </Box>
              <Link href={feature.link} passHref component={NextLink}>
                <Button size="small">Learn More</Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Container>
  );
};

export default MainPage;
