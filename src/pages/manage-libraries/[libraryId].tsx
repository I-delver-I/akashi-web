import { GetServerSideProps, type InferGetServerSidePropsType } from 'next';

import PageLayout from '@/components/common/layout/page-layout';
import ManageLibraryVersionsPage from '@/components/pages/manage-library-versions-page';
import { ManageLibraryVersionsPageProps } from '@/components/pages/manage-library-versions-page/ManageLibraryVersionsPage';
import LibraryVersionAPI from '@/lib/api/library-version/LibraryVersionAPI';

export const getServerSideProps: GetServerSideProps<
  ManageLibraryVersionsPageProps
> = async context => {
  const libraryId = context.params?.libraryId;
  if (Array.isArray(libraryId) || !libraryId) {
    return { notFound: true };
  }

  try {
    const parsedLibraryId = parseInt(libraryId);
    const libraryVersions =
      await LibraryVersionAPI.getByLibraryId(parsedLibraryId);

    return {
      props: {
        libraryVersions,
      },
    };
  } catch (error) {
    console.log(error);
    return { notFound: true };
  }
};

const ManageLibraryVersions = ({
  libraryVersions,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <PageLayout>
      <ManageLibraryVersionsPage libraryVersions={libraryVersions} />
    </PageLayout>
  );
};

export default ManageLibraryVersions;
