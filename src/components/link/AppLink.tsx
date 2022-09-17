import * as React from 'react';
import Link from '@mui/material/Link';
import ChevronRightOutlined from '@mui/icons-material/ChevronRightOutlined';
import SvgIcon from '@mui/material/SvgIcon';
export type LinkType = 'light' | 'dark';
export type AppLinkProps = {
  color: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  style: LinkType;
  disabled?: boolean;
  label: string;
  href: string;
  click?: (event: React.MouseEvent<HTMLElement>) => void;
};

const AppLink = React.forwardRef<HTMLAnchorElement, AppLinkProps>(
  ({ href, disabled, label, style, color, click }, ref) => {
    const customLinkStyle = disabled
      ? `custom-link custom-disabled-link  body ${style}`
      : `custom-link body ${style}`;

    return (
      <Link
        href={href}
        underline="none"
        className={customLinkStyle}
        onClick={click}
      >
        {label}
        <ChevronRightOutlined fontSize="medium" className="custom-link-icon" />
      </Link>
    );
  }
);

export default AppLink;
