import Layout from '@/layouts/default';
import AppButton from '@/components/button/AppButton';

const ExamplesPage = () => (
  <Layout title="Examples  | Faculdade Grau">
    <div>Examples Light</div>
    <AppButton
      type="contained"
      bgColor="primary"
      size="large"
      label="Desabilitado Dark Primary"
      disabled={true}
      style="light"
    />
    <AppButton
      type="contained"
      bgColor="secondary"
      size="small"
      style="light"
      label="Secondary light Default"
    />
    <div>Examples Dark</div>
    <AppButton
      type="contained"
      bgColor="primary"
      size="large"
      label="Primary Dark Default"
      style="dark"
    />
    <AppButton
      type="contained"
      bgColor="secondary"
      size="small"
      disabled={true}
      style="dark"
      label="Desabilitado Secondary Dark "
    />
  </Layout>
);

export default ExamplesPage;
