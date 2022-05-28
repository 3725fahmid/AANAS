import { Container } from '@mui/material';
import * as React from 'react';
import HEader from '../components/header';

type Props = {
  children: JSX.Element;
};

const Layout = ({ children }: Props) => {
  return (
    <Container>
      <HEader />
      {children}
    </Container>
  );
};

export default Layout;
