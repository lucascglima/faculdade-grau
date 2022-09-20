import * as React from 'react';
import { ReactNode } from 'react';
import Button from '@mui/material/Button';
import ArrowForwardOutlined from '@mui/icons-material/ArrowForwardOutlined';
import ArrowBackOutlined from '@mui/icons-material/ArrowBackOutlined';
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
  icon?: boolean | 'double';
  disabled?: boolean;
  width?: string;
  label?: ReactNode;
  style: 'light' | 'dark';
  className?: string;
  click: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const AppButton = React.forwardRef<HTMLAnchorElement, AppButtonProps>(
  (
    {
      children,
      type,
      bgColor,
      size,
      icon,
      disabled,
      label,
      style,
      click,
      className
    },
    ref
  ) => {
    const custom =
      icon == true
        ? `${style} custom-button justify-between ${className}`
        : `${style} custom-button 	 ${className}`;
    return (
      <Button
        disableFocusRipple={false}
        disableElevation={true}
        variant={type}
        className={custom}
        color={bgColor}
        disabled={disabled}
        size={size}
        endIcon={icon ? <ArrowForwardOutlined /> : ''}
        startIcon={icon == 'double' ? <ArrowBackOutlined /> : ''}
        onClick={click}
      >
        <span className="custom-button-label">{label}</span>
      </Button>
    );
  }
);

export default AppButton;
