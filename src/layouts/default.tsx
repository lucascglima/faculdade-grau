import React, { ReactNode } from 'react';
import Head from 'next/head';
import AppNavBar from '@/components/navbar/AppNavbar';
type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'Faculdade Grau' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <AppNavBar />
    </header>
    <main>{children}</main>
    <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer>
  </div>
);

export default Layout;
