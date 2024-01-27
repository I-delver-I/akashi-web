import PageLayout from '@/components/common/layout/page-layout/PageLayout';
import RegisterPage from '@/components/pages/register';

const Register = () => (
  <PageLayout
    hasFooter={false}
    hasHeader={false}
    robots="noindex"
    title="Registration in AkaShi"
  >
    <RegisterPage />
  </PageLayout>
);

export default Register;
