import React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import Box from '@mui/material/Box';

export default function footer() {
  return (
    <Box sx={{ width: 1000 }}>
      <BottomNavigation>This is footer</BottomNavigation>
    </Box>
  );
}

// import * as React from 'react';
// import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';
// import styles from '../styles/basic.module.css';
// import { Container } from '@mui/system';

// const basic = () => {
//   return (
//     <Container>
//       <Grid container>
//         <Grid item xs={12} md={6} lg={4}>
//           <Paper>konok</Paper>
//         </Grid>
//         <Grid item xs={12} md={6} lg={4}>
//           <Paper>konok</Paper>
//         </Grid>
//         <Grid item xs={12} md={6} lg={4}>
//           <Paper>konok</Paper>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// };

// export default basic;

/* <div className={style.menu_item}>
            <ul>
              <li>
                <Link href="/">
                  <a>
                    <HomeRoundedIcon sx={{ fontSize: 35 }} />
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/favorite">
                  <a>
                    <StarsRoundedIcon sx={{ fontSize: 35 }} />
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a>
                    <InfoRoundedIcon sx={{ fontSize: 35 }} />
                  </a>
                </Link>
              </li>
            </ul>
          </div> */
