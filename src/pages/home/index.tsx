import Layout from '../../layouts/default';
import AppSliders from '../../components/slider/AppSlider';

import PhoneForwarded from '@mui/icons-material/PhoneForwardedOutlined';

import ChevronRightOutlined from '@mui/icons-material/ChevronRightOutlined';
import WhatsaApp from '@mui/icons-material/WhatsApp';
import TextField from '@mui/material/TextField';
import Image from 'next/image';
import gauNeedHelp from '../../assets/img/gau-need-help.png';

const HomePage = () => (
  <Layout title="Home">
    <div className="slider-home">
      <AppSliders />
    </div>
    <div className="contact-home">
      <div className="action-buttons-contact">
        <span className="action-button-home-contact">
          <PhoneForwarded className="action-contact-icon" />
        </span>
        <span className="action-button-home-contact">
          <WhatsaApp className="action-contact-icon" />
        </span>
      </div>
      <div>
        <span className="circle-contact-home"></span>
        <div className="text-contact-home h1">
          Entraremos em <br /> contato com você
        </div>
        <div className="box-input-contact-home">
          <div className="label-input-contact-home body">Seu nome</div>
          <div>
            <TextField
              placeholder="Seu nome aqui"
              className="input-contact-home body"
            />
          </div>
          <div>
            <div className="button-input-contact-home">
              <ChevronRightOutlined className="icon-input-contact-home" />
            </div>
          </div>
        </div>
      </div>
      <div className="need-help-box-home">
        <div className="need-help-image-home">
          <Image src={gauNeedHelp} />
        </div>
        <div className="need-help-text-home body">
          Precisa de <br />
          ajuda ?
        </div>
      </div>
    </div>
  </Layout>
);

export default HomePage;
