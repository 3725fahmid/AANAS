import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '../components/card';
import { Container } from '@mui/material';

export default function Home() {
  //const [Nascards, setNasCards] = useState([]);

  // useEffect(() => {
  //   fetch('https://qissabd.herokuapp.com/api/user')
  //     .then((res) => res.json())
  //     .then((data) => setNasCards(data));
  // }, []);

  return (
    <div>
      <Container sx={{ position: 'relative', top: '3' }}>
        <Grid container spacing={3}>
          {/* {Nascards.map((Nascard) => (
            <Grid item key={Nascard.id} xs={12} md={6} lg={4}>
            <Paper>
              <Card Nascard={Nascard} />
            </Paper>
          </Grid>
          ))} */}

          <Grid item xs={12} md={6} lg={4}>
            <Paper>
              <Card />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Paper>
              <Card />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Paper>
              <Card />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
