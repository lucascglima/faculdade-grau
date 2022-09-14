import * as React from 'react';
import { ReactNode } from 'react';
import Button from '@mui/material/Button';

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
  textColor?:
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
};

const AppButton = React.forwardRef<HTMLAnchorElement, AppButtonProps>(
  (
    { children, type, bgColor, textColor, size, icon, disabled, width, label },
    ref
  ) => {
    const textStyle = disabled ? `text-dark-medium` : `text-${textColor}`;
    const bgStyle = disabled ? `bg-light-opacity-20` : `bg-${bgColor}`;
    const sizeStyle =
      size == 'large' ? 'h-[64px] p-[20px]' : 'h-[36px] py-[8px] px-[16px]';
    const widthStyle = width ? `w-[${width}]` : `w-[100%]`;
    const btnStyle = `${textStyle} ${bgStyle} ${bgStyle}  ${sizeStyle} ${widthStyle}  AppBtn`;

    return (
      <Button
        variant={type}
        className="flex"
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
