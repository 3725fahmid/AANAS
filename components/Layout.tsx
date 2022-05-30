import { Container } from '@mui/material';
import * as React from 'react';
import HEader from '../components/header';
import Footer from '../components/footer';

type Props = {
  children: JSX.Element;
};

const Layout = ({ children }: Props) => {
  return (
    <div>
      <HEader />
      <Container>{children}</Container>
      <Footer />
    </div>
  );
};

export default Layout;
