import Layout from '@/layouts/default';
import AppButton from '@/components/button/AppButton';
import AppTag from '@/components/tag/AppTag';
import AppLink from '@/components/link/AppLink';
import AppButtonCta from './../../components/button/AppButtonCta';
import AppSliders from '../../components/slider/AppSlider';

const clickCta = () => {
  console.log('clickou no cta');
};
const clickBtn = () => {
  console.log('clickou no Botão');
};
const clickTag = () => {
  console.log('clickou na Tag');
};
const clickLick = () => {
  console.log('clickou no Link');
};
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
      click={clickBtn}
    />
    <AppButton
      type="contained"
      bgColor="secondary"
      size="small"
      style="light"
      label="Secondary light Default"
      click={clickBtn}
    />
    <div>Examples Dark</div>
    <AppButton
      type="contained"
      bgColor="primary"
      size="large"
      label="Primary Dark Default"
      style="dark"
      click={clickBtn}
    />
    <AppButton
      type="contained"
      bgColor="secondary"
      size="small"
      disabled={true}
      style="dark"
      label="Desabilitado Secondary Dark "
      icon={true}
      click={clickBtn}
    />
    <div>Examples Chips</div>

    <AppTag
      label="Chip Dark"
      type="filled"
      color="primary"
      disabled={true}
      style="dark"
      click={clickTag}
    />
    <AppTag
      label="Chip Dark"
      type="filled"
      color="primary"
      disabled={false}
      style="dark"
      click={clickTag}
    />
    <AppTag
      label="Chip light"
      type="filled"
      color="primary"
      disabled={true}
      style="light"
      click={clickTag}
    />
    <AppTag
      label="Chip light"
      type="filled"
      color="primary"
      disabled={false}
      style="light"
      click={clickTag}
    />
    <div>Examples Link</div>

    <AppLink
      href="#"
      label="Link Dark"
      color="info"
      disabled={true}
      style="dark"
      click={clickLick}
    />
    <AppLink
      href="#"
      label="Link Dark"
      color="info"
      disabled={false}
      style="dark"
      click={clickLick}
    />
    <AppLink
      href="#"
      label="Link light"
      color="info"
      disabled={true}
      style="light"
      click={clickLick}
    />
    <AppLink
      href="#"
      label="Link light"
      color="info"
      disabled={false}
      style="light"
      click={clickLick}
    />

    <div>Examples Button CTA</div>
    <AppButtonCta
      label="Compre agora"
      clickleft={clickCta}
      clickright={clickCta}
    />
    <div>Examples Button CTA</div>
    <AppSliders />
  </Layout>
);

export default ExamplesPage;
