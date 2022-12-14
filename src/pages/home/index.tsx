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
import brazilMap from '../../assets/img/brazil-map.png';
import jobAgency from '../../assets/img/job-agency.png';
import empoloyersHome from '../../assets/img/empoloyers-home.png';
import studentCourse from '../../assets/img/student-course-match.png';
import studentCourseMobile from '../../assets/img/student-course-match-mobile.png';
import prouniImage from '../../assets/img/prouni.png';
import AppTag from '@/components/tag/AppTag';
import AppButton from '@/components/button/AppButton';
import Qrcode from '@mui/icons-material/QrCodeOutlined';
import { useMediaQuery } from '@mui/material';

const buttonClick = () => {
  console.log('click');
};

// const match = useMediaQuery('(min-width:600px)');
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
          Entraremos em <br /> contato com voc??
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
            <div className="ours-courses-card-chip body">Tecnologia</div>
            <div className="ours-courses-card-title">
              Engenharia de produ????o
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
            <div className="ours-courses-card-chip body">Neg??cios</div>
            <div className="ours-courses-card-title">Administra????o</div>
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
        Educa????o de qualidade. Da faculdade at?? <br /> o mercado de trabalho
      </div>
      <div className="card-points-home-list">
        <div className="card-points-home">
          <div className="box-icon-points-home">
            <Qrcode className="icon-input-points-home" />
          </div>
          <div className="card-points-title h3">Infraestrutura</div>
          <div className="card-points-text body">
            Laborat??rios com tecnologia de ponta espec??fica para cada curso.
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
          <div className="card-points-title h3">Mentoria e orienta????o</div>
          <div className="card-points-text body">
            N??s sabemos como pode ser dif??cil a vida depois de se formar. Que
            tal a gente orientar voc?? nesse tempo?{' '}
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
    <div className="video-home">video</div>

    <div className="units-home">
      <div className="col-first-units-home">
        <div className="text-units-home">
          <div className="big-number text-quantity-units-home text-secondary">
            80 unidades
          </div>
          <div className="big-number text-part-two-units-home">
            presente em todo o Brasil
          </div>
        </div>
        <div className="box-buttons-units-home desktop">
          <AppButton
            type="contained"
            bgColor="secondary"
            size="large"
            style="light"
            className="buttons-units-home"
            label="Conhe??a nossos polos"
            click={buttonClick}
          />
          <AppButton
            type="contained"
            bgColor="primary"
            size="large"
            style="light"
            className="buttons-units-home"
            label="Inscreva-se agora"
            icon={true}
            click={buttonClick}
          />
        </div>
      </div>
      <div className="col-second-units-home">
        <div className="box-buttons-units-home-mobile mobile">
          <AppButton
            type="contained"
            bgColor="secondary"
            size="large"
            style="light"
            className="buttons-units-home"
            label="Conhe??a nossos polos"
            click={buttonClick}
          />
          <AppButton
            type="contained"
            bgColor="primary"
            size="large"
            style="light"
            className="buttons-units-home-two"
            label="Inscreva-se agora"
            icon={true}
            click={buttonClick}
          />
        </div>
        <div className=" brazil-image-units-home">
          <Image src={brazilMap} />
        </div>
      </div>
    </div>
    <div className="choose-course-home">
      <div className="box-img-choose-course-home">
        <div className="img-choose-course-home">
          <Image src={empoloyersHome} />
        </div>
      </div>
      <div className="box-text-choose-course-home">
        <div className="agency-choose-course-home">
          <Image src={jobAgency} />
        </div>
        <div className="title-text-choose-course-home h1">
          Conquiste seu primeiro emprego de forma r??pida
        </div>
        <div className="text-choose-course-home body">
          Encaminhamento para emprego e est??gio dos alunos do Grau Educacional.
        </div>
        <div className="box-button-choose-course-home ">
          <AppButton
            type="contained"
            bgColor="secondary"
            size="large"
            style="light"
            className="button-choose-course-home"
            label="Saiba mais"
            icon={true}
            click={buttonClick}
          />
        </div>
      </div>
    </div>
    <div className="course-match-home">
      <div className="course-match-text">
        <div className="box-text-course-match big-number">
          <div className="text-course-match big-number">
            Qual <span className="text-primary">curso</span> combina mais com
            voc??
          </div>
          <div className="box-button-course-match ">
            <AppButton
              type="contained"
              bgColor="primary"
              size="large"
              style="light"
              className="button-course-match"
              label="Saiba mais"
              icon={true}
              click={buttonClick}
            />
          </div>
        </div>
      </div>
      <div className="box-image-course-match">
        <Image src={studentCourse} className="image-course-match" />
      </div>
    </div>
    <div className="prouni-home">
      <div className="box-image-prouni-home">
        <Image src={prouniImage} />
      </div>
      <div className="box-text-prouni-home">
        <div className="title-text-prouni-home h1">
          E o melhor: tudo isso cabe no seu bolso!
        </div>
        <div className="text-prouni-home body ">
          No Grau, voc?? estuda sem preocupa????es. Conhe??a as solu????es financeiras
          pensadas especialmente para voc??.
        </div>
        <div className="box-buttons-prouni-home">
          <AppButton
            type="contained"
            size="large"
            style="light"
            className="buttons-prouni-home btn-white"
            label="Fazer Teste"
            click={buttonClick}
          />
          <AppButton
            type="contained"
            bgColor="secondary"
            size="large"
            style="dark"
            className="buttons-prouni-home"
            label="Inscreva-se agora"
            icon={true}
            click={buttonClick}
          />
        </div>
      </div>
    </div>
  </Layout>
);

export default HomePage;
