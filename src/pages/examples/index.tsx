import Layout from '@/layouts/default';
import AppButton from '@/components/button/AppButton';
import AppTag from '@/components/tag/AppTag';

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
      icon={true}
    />
    <div>Examples Chips</div>

    <AppTag
      label="Chip Dark"
      type="filled"
      color="primary"
      disabled={true}
      style="dark"
    />
    <AppTag
      label="Chip Dark"
      type="filled"
      color="primary"
      disabled={false}
      style="dark"
    />
    <AppTag
      label="Chip light"
      type="filled"
      color="primary"
      disabled={true}
      style="light"
    />
    <AppTag
      label="Chip light"
      type="filled"
      color="primary"
      disabled={false}
      style="light"
    />
  </Layout>
);

export default ExamplesPage;
