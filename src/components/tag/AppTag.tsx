import * as React from 'react';
import Chip from '@mui/material/Chip';

export type ChipType = 'light' | 'dark';

export type AppTagProps = {
  color: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';

  type: 'outlined' | 'filled';
  style: ChipType;
  disabled?: boolean;
  label: string;
};

const AppTag = React.forwardRef<HTMLAnchorElement, AppTagProps>(
  ({ children, type, disabled, label, style, color }, ref) => {
    const customStyle = !disabled
      ? `${style} custom-tag smaller `
      : `${style} custom-tag smaller custom-disabled-tag `;
    return (
      <Chip
        label={label}
        variant={type}
        color={color}
        disabled={disabled}
        className={customStyle}
      />
    );
  }
);

export default AppTag;
