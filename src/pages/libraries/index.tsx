import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';

import PageLayout from '@/components/common/layout/page-layout';
import LibrarySearchPage from '@/components/pages/library-search';
import { FilterFrameworkProductNames } from '@/components/pages/library-search/components/framework-filter/FrameworkFilter';
import { SortBy } from '@/components/pages/library-search/components/sort-dropdown/SortDropdown';
import { LibrarySearchPageProps } from '@/components/pages/library-search/LibrarySearchPage';
import LibraryAPI from '@/lib/api/library/LibraryAPI';

export const getServerSideProps: GetServerSideProps<
  LibrarySearchPageProps
> = async context => {
  try {
    const query = context.query?.q as string | undefined;
    const sortBy = context.query?.sortby as SortBy | undefined;
    const page = context.query?.page as number | undefined;

    const frameworks = context.query?.frameworks;
    const frameworksFilter: FilterFrameworkProductNames = {
      net: frameworks?.includes('net') ?? false,
      netCore: frameworks?.includes('netcoreapp') ?? false,
      netStandard: frameworks?.includes('netstandard') ?? false,
      netFramework: frameworks?.includes('netframework') ?? false,
    };

    const {
      pageSize,
      items: libraries,
      totalCount,
      currentPage,
    } = await LibraryAPI.get(10, frameworksFilter, sortBy, query, page);

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
        currentPage={currentPage}
        libraries={libraries}
        pageSize={pageSize}
        totalCount={totalCount}
      />
    </PageLayout>
  );
};

export default LibrariesSearch;
