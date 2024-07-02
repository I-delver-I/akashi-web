import { FC } from 'react';

import PageLayout from '@/components/common/layout/page-layout';
import NotFoundPage from '@/components/pages/404-page';

const NotFound: FC = () => {
  return (
    <PageLayout hasFooter={false} title="Page is not found" robots="noindex">
      <NotFoundPage />
    </PageLayout>
  );
};

export default NotFound;
