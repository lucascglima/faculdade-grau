import * as React from 'react';

export type ChipType = 'light' | 'dark';

export type AppProps = {
  color: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  type: 'outlined' | 'filled';
  style: ChipType;
  disabled?: boolean;
  label: string;
};

const AppExample = React.forwardRef<HTMLAnchorElement, AppProps>(
  ({ children, type, disabled, label, style, color }, ref) => {
    return <div>exemplo</div>;
  }
);

export default AppExample;
