import * as React from 'react';

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

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
    return (
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
      >
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    );
  }
);

export default AppExample;
