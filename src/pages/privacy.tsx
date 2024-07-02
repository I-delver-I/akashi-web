import { FC } from 'react';

import PageLayout from '@/components/common/layout/page-layout';
import PrivacyPage from '@/components/pages/privacy-page';

const Privacy: FC = () => {
  return (
    <PageLayout
      title="Privacy policy | AkaShi"
      description="On this page, we provide a description of the process of collecting and processing personal data, as well as the conditions for their deletion. Personal data is deleted after the user's own request or after deactivation of the system."
    >
      <PrivacyPage />
    </PageLayout>
  );
};

export default Privacy;
