// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Image, { StaticImageData } from 'next/image';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import * as React from 'react';
import gau from '../../assets/img/gau-super-feliz.png';
import gauMobile from '../../assets/img/gau-super-feliz-mobile-2.png';
import foto from '../../assets/img/Banner.png';
import AppButton from '@/components/button/AppButton';
import { useMediaQuery } from '@mui/material';

export type ChipType = 'light' | 'dark';
export type AppProps = {
  color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  type?: 'outlined' | 'filled';
  style?: ChipType;
  disabled?: boolean;
  label?: string;
};

const AppSliders = React.forwardRef<HTMLAnchorElement, AppProps>(
  ({ children, type, disabled, label, style, color }, ref) => {
    const pagination = {
      clickable: true,
      renderBullet: function (index: number, className: string) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
      }
    };
    const clickCta = () => {
      console.log('click cta', window.matchMedia('(max-width: 600px)').matches);
    };

    const match = useMediaQuery('(min-width:600px)');

    return (
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="custom-slider">
            <div className="custom-slider-left">
              <div className="custom-slider-big-text">
                <div className="h1 slider-text-white text-cta mt-[2px] ">
                  <span className="h1 slider-text-secondary text-cta-yellow">
                    100%
                  </span>
                  de desconto
                </div>
                <div className="h1 slider-text-white text-cta">
                  no primeiro mês
                </div>
              </div>
              <div className="custom-slider-box-cta">
                <AppButton
                  type="contained"
                  bgColor="secondary"
                  size="large"
                  style="dark"
                  label="Inscreva-se agora"
                  className="slider-btn-cta"
                  icon={true}
                  click={clickCta}
                />
              </div>
            </div>
            <div className="custom-slider-right">
              <div className="one-hundred-percent">100%</div>
            </div>
            <div className="img-gau">
              <Image src={match ? gau : gauMobile} />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <Image src={foto} />{' '}
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <Image src={foto} />{' '}
        </SwiperSlide>
      </Swiper>
    );
  }
);

export default AppSliders;
