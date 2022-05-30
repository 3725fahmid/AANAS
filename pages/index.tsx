import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '../components/card';
import { Container } from '@mui/material';

export default function Home() {
  return (
    <div>
      <Container sx={{ mt: 15, p: 0.5 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12}>
            <Paper>
              <Card />
            </Paper>
          </Grid>
          <Grid item xs={12} md={12}>
            <Paper>
              <Card />
            </Paper>
          </Grid>
          <Grid item xs={12} md={12}>
            <Paper>
              <Card />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
