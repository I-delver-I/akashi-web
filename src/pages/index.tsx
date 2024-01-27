import type { GetServerSideProps, NextPage } from 'next';
import { Inter } from 'next/font/google';

import PageLayout from '@/components/common/layout/page-layout';
import MainPage from '@/components/pages/main-page';

const inter = Inter({ subsets: ['latin'] });

type HomeProps = {
  name: string;
};

const Home = () => (
  <PageLayout>
    <MainPage />
  </PageLayout>
);

export default Home;

// export const getServerSideProps: GetServerSideProps = async () => {
//   try {
//     const stats = await StatAPI.loadStat();
//
//     return {
//       props: {
//         name: 'test-name',
//       },
//     };
//   } catch {
//     return {
//       notFound: true,
//     };
//   }
// };
