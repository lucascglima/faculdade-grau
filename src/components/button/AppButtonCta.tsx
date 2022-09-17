import * as React from 'react';

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import IconButton from '@mui/material/IconButton';
import ArrowBackOutlined from '@mui/icons-material/ArrowBackOutlined';

import ArrowForwardOutlined from '@mui/icons-material/ArrowForwardOutlined';
export type ChipType = 'light' | 'dark';

export type AppButtonCtaProps = {
  color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  type?: 'outlined' | 'filled';
  style?: ChipType;
  disabled?: boolean;
  label?: string;
  clickleft: (event: React.MouseEvent<HTMLButtonElement>) => void;
  clickright: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const AppButtonCta = React.forwardRef<HTMLAnchorElement, AppButtonCtaProps>(
  (
    { children, type, disabled, label, style, color, clickleft, clickright },
    ref
  ) => {
    return (
      <div className="custom-button-cta">
        <IconButton
          size="large"
          onClick={clickleft}
          className="custom-icon-button-cta"
        >
          <ArrowBackOutlined />
        </IconButton>
        <span className="custom-button-cta-label body"> label</span>
        <IconButton
          size="large"
          onClick={clickright}
          className="custom-icon-button-cta"
        >
          <ArrowForwardOutlined />
        </IconButton>
      </div>
    );
  }
);

export default AppButtonCta;
