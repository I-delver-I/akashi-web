import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';

import PageLayout from '@/components/common/layout/page-layout';
import StatisticsPage from '@/components/pages/statistics-page';
import { StatisticsPageProps } from '@/components/pages/statistics-page/StatisticsPage';
import StatisticsAPI from '@/lib/api/statistics/StatisticsAPI';

export const getServerSideProps: GetServerSideProps<
  StatisticsPageProps
> = async () => {
  try {
    // @ts-ignore
    const { $values: topLibraryStatsByDownloads } =
      await StatisticsAPI.getTopDownloads();

    return {
      props: {
        topLibraryStatsByDownloads,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      notFound: true,
    };
  }
};

const Statistics = ({
  topLibraryStatsByDownloads,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <PageLayout title="Statistics">
      <StatisticsPage topLibraryStatsByDownloads={topLibraryStatsByDownloads} />
    </PageLayout>
  );
};

export default Statistics;
