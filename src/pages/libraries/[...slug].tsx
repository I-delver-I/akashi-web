import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';

import PageLayout from '@/components/common/layout/page-layout';
import LibraryDetailsPage, {
  LibraryDetailsPageProps,
} from '@/components/pages/library-page/LibraryDetailsPage';
import LibraryAPI from '@/lib/api/library/LibraryAPI';
import LibraryVersionAPI from '@/lib/api/library-version/LibraryVersionAPI';
import getLatestLibraryVersion from '@/lib/utils/getLatestLibraryVersion';
import { LibraryVersionWithDetails } from '@/types/libraryVersion';

export const getServerSideProps: GetServerSideProps<
  LibraryDetailsPageProps
> = async context => {
  if (!context.params?.slug || context.params.slug.length > 2) {
    return {
      notFound: true,
    };
  }

  const libraryId = parseInt(context.params.slug[0]);
  let currentLibraryVersionId = parseInt(context.params.slug[1]);

  if (!libraryId) {
    console.log(`${libraryId} is undefined`);
    return {
      notFound: true,
    };
  }

  try {
    const library = await LibraryAPI.getById(libraryId);

    if (
      !currentLibraryVersionId ||
      !library.libraryVersions.find(lv => lv.id === currentLibraryVersionId)
    ) {
      const latestLibraryVersionId = getLatestLibraryVersion(
        library.libraryVersions,
      )?.id;

      if (!latestLibraryVersionId) {
        return {
          notFound: true,
        };
      }

      currentLibraryVersionId = latestLibraryVersionId;
    }

    const currentLibraryVersion: LibraryVersionWithDetails =
      await LibraryVersionAPI.getById(currentLibraryVersionId);

    return {
      props: {
        library,
        currentLibraryVersion,
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
  currentLibraryVersion,
  library,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <PageLayout title={`AkaShi Gallery | ${library.name}`}>
      <LibraryDetailsPage
        currentLibraryVersion={currentLibraryVersion}
        library={library}
      />
    </PageLayout>
  );
};

export default LibraryDetails;
