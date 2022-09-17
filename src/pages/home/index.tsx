import Layout from '../../layouts/default';
import AppSliders from '../../components/slider/AppSlider';

import PhoneForwarded from '@mui/icons-material/PhoneForwardedOutlined';

import ChevronRightOutlined from '@mui/icons-material/ChevronRightOutlined';
import WhatsaApp from '@mui/icons-material/WhatsApp';
import TextField from '@mui/material/TextField';
// import CodeSandBox from '@mui/icons-material/CodeSandBox';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Image from 'next/image';
import gauNeedHelp from '../../assets/img/gau-need-help.png';
import coursesCardImage from '../../assets/img/ours-courses-card-image.png';
import coursesCardImage2 from '../../assets/img/ours-courses-card-image-2.png';
import coursesCardImage3 from '../../assets/img/ours-courses-card-image-3.png';
import AppTag from '@/components/tag/AppTag';
import AppButton from '@/components/button/AppButton';
import Qrcode from '@mui/icons-material/QrCodeOutlined';

const buttonClick = () => {
  console.log('click');
};
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
    <div className="ours-courses-home">
      <div className="big-number title-desktop">Nossos cursos</div>
      <div className="big-number  title-mobile">
        Nossos <br /> cursos
      </div>
      <div className="tag-list-home">
        <AppTag
          label="Todos"
          type="filled"
          color="primary"
          disabled={false}
          style="light"
        />
        <AppTag
          label="Humanas"
          type="filled"
          color="info"
          disabled={true}
          style="light"
        />
        <AppTag
          label="Exatas"
          type="filled"
          color="info"
          disabled={true}
          style="light"
        />
      </div>
      <div className="ours-courses-list-cards">
        <Card className="ours-courses-card primary">
          <CardContent className="ours-courses-card-content">
            <div className="ours-courses-card-chip body">Humanas</div>
            <div className="ours-courses-card-title">Pedagodia</div>
            <div className="ours-courses-card-model smaller-medium">
              EAD <span className="text-secondary separator">|</span> Presencial
            </div>
            <div className="ours-courses-card-image">
              <Image src={coursesCardImage} />
            </div>
          </CardContent>
        </Card>
        <Card className="ours-courses-card secondary">
          <CardContent className="ours-courses-card-content">
            <div className="ours-courses-card-chip body">Tecnologiua</div>
            <div className="ours-courses-card-title">
              Engenharia de produção
            </div>
            <div className="ours-courses-card-model smaller-medium">
              EAD <span className="text-secondary separator">|</span> Presencial
            </div>
            <div className="ours-courses-card-image">
              <Image src={coursesCardImage2} />
            </div>
          </CardContent>
        </Card>
        <Card className="ours-courses-card primary">
          <CardContent className="ours-courses-card-content">
            <div className="ours-courses-card-chip body">Negócios</div>
            <div className="ours-courses-card-title">Administração</div>
            <div className="ours-courses-card-model smaller-medium">
              EAD <span className="text-secondary separator">|</span> Presencial
            </div>
            <div className="ours-courses-card-image">
              <Image src={coursesCardImage3} />
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="ours-courses-cta">
        <AppButton
          type="contained"
          bgColor="secondary"
          size="large"
          style="dark"
          label="Inscreva-se Agora "
          className="button-ours-courses-cta"
          icon={true}
          click={buttonClick}
        />
      </div>
    </div>
    <div className="points-home">
      <div className="title-points-home h1">
        Educação de qualidade. Da faculdade até <br /> o mercado de trabalho
      </div>
      <div className="card-points-home-list">
        <div className="card-points-home">
          <div className="box-icon-points-home">
            <Qrcode className="icon-input-points-home" />
          </div>
          <div className="card-points-title h3">Infraestrutura</div>
          <div className="card-points-text body">
            Laboratórios com tecnologia de ponta específica para cada curso.
          </div>
        </div>
        <div className="card-points-home">
          <div className="box-icon-points-home">
            <Qrcode className="icon-input-points-home" />
          </div>
          <div className="card-points-title h3">
            Reconhecimento do <span className="text-primary">MEC</span>
          </div>
          <div className="card-points-text body">
            Mais de 87 cursos com notas 4 e 5 no MEC.
          </div>
        </div>
        <div className="card-points-home">
          <div className="box-icon-points-home">
            <Qrcode className="icon-input-points-home" />
          </div>
          <div className="card-points-title h3">Mentoria e orientação</div>
          <div className="card-points-text body">
            Nós sabemos como pode ser difícil a vida depois de se formar. Que
            tal a gente orientar você nesse tempo?{' '}
          </div>
        </div>
      </div>
      <div className="ours-courses-cta">
        <AppButton
          type="contained"
          bgColor="primary"
          size="large"
          style="light"
          className="ours-courses-button"
          label="Inscreva-se agora"
          icon={true}
          click={buttonClick}
        />
      </div>
    </div>
    <div className="video">video</div>
  </Layout>
);

export default HomePage;
