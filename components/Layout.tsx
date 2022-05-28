import { Container } from '@mui/material';
import * as React from 'react';
import HEader from '../components/header';

type Props = {
  children: JSX.Element;
};

const Layout = ({ children }: Props) => {
  return (
    <div>
      <HEader />
      <Container>{children}</Container>
    </div>
  );
};

export default Layout;
