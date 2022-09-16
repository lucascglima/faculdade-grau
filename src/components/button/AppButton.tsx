import * as React from 'react';
import { ReactNode } from 'react';
import Button from '@mui/material/Button';
// import '@/style/components/AppButton.css';

import ArrowForwardOutlined from '@mui/icons-material/ArrowForwardOutlined';
import type { TailwindColors } from '../../types';
export type ButtonType = 'text' | 'outlined' | 'contained';
export type ButtonColorText = TailwindColors;
export type ButtonBackGround = TailwindColors;
export type ButtonSizes = 'small' | 'large';
export type AppButtonProps = {
  type: ButtonType;
  bgColor?:
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'error'
    | 'info'
    | 'warning';
  size: ButtonSizes;
  icon?: boolean;
  disabled?: boolean;
  width?: string;
  label?: ReactNode;
  style: 'light' | 'dark';
};

const AppButton = React.forwardRef<HTMLAnchorElement, AppButtonProps>(
  ({ children, type, bgColor, size, icon, disabled, label, style }, ref) => {
    const custom = `${style} custom-button`;
    return (
      <Button
        disableFocusRipple={true}
        disableElevation={true}
        variant={type}
        className={custom}
        color={bgColor}
        disabled={disabled}
        size={size}
        endIcon={icon ? <ArrowForwardOutlined /> : ''}
      >
        {label}
      </Button>
    );
  }
);

export default AppButton;
