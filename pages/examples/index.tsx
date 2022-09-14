import Layout from '../../layouts/default';
import AppButton from './../../components/button/AppButton';
import type { AppButtonProps } from './../../components/button/AppButton';

const ExamplesPage = () => (
  <Layout title="Examples  | Faculdade Grau">
    <div>Examples</div>
    <AppButton
      type="contained"
      bgColor="primary"
      size="large"
      label="Botão Exemplos"
    />
    <AppButton
      type="contained"
      bgColor="secondary"
      size="small"
      label="Botão Exemplos 2 "
    />
  </Layout>
);

export default ExamplesPage;
