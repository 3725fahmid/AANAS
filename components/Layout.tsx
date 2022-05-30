import { Box } from '@mui/material';
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
      <Box sx={{ mt: 10, p: 0.5 }}>{children}</Box>
      <Footer />
    </div>
  );
};
export default Layout;
