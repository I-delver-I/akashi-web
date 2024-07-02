import PageLayout from '@/components/common/layout/page-layout';
import MainPage from '@/components/pages/main-page';

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
