import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';

import PageLayout from '@/components/common/layout/page-layout';
import LibrarySearchPage from '@/components/pages/library-search';
import { FilterFrameworkProductNames } from '@/components/pages/library-search/components/framework-filter/FrameworkFilter';
import { OrderBy } from '@/components/pages/library-search/components/sort-dropdown/SortDropdown';
import { LibrarySearchPageProps } from '@/components/pages/library-search/LibrarySearchPage';
import LibraryAPI from '@/lib/api/library/LibraryAPI';

export const getServerSideProps: GetServerSideProps<
  LibrarySearchPageProps
> = async () => {
  try {
    const filter = {
      dotNetFramework: false,
      dotNetStandard: false,
      dotNet: false,
      dotNetCore: false,
    } as FilterFrameworkProductNames;

    const { currentPage, pageSize, items, totalCount } =
      await LibraryAPI.get(filter);
    // @ts-ignore
    const { $values: libraries } = items;

    return {
      props: {
        currentPage,
        pageSize,
        libraries,
        totalCount,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      notFound: true,
    };
  }
};

const LibrariesSearch = ({
  currentPage,
  pageSize,
  libraries,
  totalCount,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <PageLayout title="Search libraries">
      <LibrarySearchPage
        libraries={libraries}
        currentPage={currentPage}
        pageSize={pageSize}
        totalCount={totalCount}
      />
    </PageLayout>
  );
};

export default LibrariesSearch;
