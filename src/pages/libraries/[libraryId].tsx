import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';

import PageLayout from '@/components/common/layout/page-layout';
import LibraryDetailsPage, {
  LibraryDetailsPageProps,
} from '@/components/pages/library-page/LibraryDetailsPage';
import LibraryAPI from '@/lib/api/library/LibraryAPI';
import LibraryVersionAPI from '@/lib/api/library-version/LibraryVersionAPI';

export const getServerSideProps: GetServerSideProps<
  LibraryDetailsPageProps
> = async context => {
  let libraryId: number | undefined;
  if (context.params && typeof context.params.libraryId === 'string') {
    libraryId = parseInt(context.params.libraryId);
  }

  if (!libraryId) {
    console.log(`${libraryId} is undefined`);
    return {
      notFound: true,
    };
  }

  try {
    // @ts-ignore
    const { $values: libraryVersions } =
      await LibraryVersionAPI.getByLibraryId(libraryId);
    const library = await LibraryAPI.getById(libraryId);

    return {
      props: {
        libraryVersions,
        library,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      notFound: true,
    };
  }
};

const LibraryDetails = ({
  libraryVersions,
  library,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const detailsPageTitle = `AkaShi Gallery | ${library.name}`;

  return (
    <PageLayout title={detailsPageTitle}>
      <LibraryDetailsPage libraryVersions={libraryVersions} library={library} />
    </PageLayout>
  );
};

export default LibraryDetails;
