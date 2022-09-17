import Layout from '../../layouts/default';
import AppSliders from '../../components/slider/AppSlider';

const HomePage = () => (
  <Layout title="Home">
    <div className="slider-home">
      <AppSliders />
    </div>
  </Layout>
);

export default HomePage;
