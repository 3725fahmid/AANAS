import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '../components/card';
import { Container } from '@mui/material';

export default function Home() {
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <Card />
        </Grid>
        <Grid item xs={12} md={12}>
          <Card />
        </Grid>
        <Grid item xs={12} md={12}>
          <Card />
        </Grid>
      </Grid>
    </Container>
  );
}
