import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import styles from '../styles/basic.module.css';
import { Container } from '@mui/system';

const basic = () => {
  return (
    <Container>
      <Grid container>
        <Grid item xs={12} md={6} lg={4}>
          <Paper>konok</Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Paper>konok</Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Paper>konok</Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default basic;
