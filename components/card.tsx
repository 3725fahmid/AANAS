import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { Container, IconButton, Typography } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Paper from '@mui/material/Paper';

export default function card() {
  return (
    <Container
      sx={{
        bgcolor: 'text.disabled',
        boxShadow: 3,
        // bgcolor: (theme) =>
        //   theme.palette.mode === 'dark' ? '#101010' : '#fff',
        // color: (theme) =>
        //   theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
        borderRadius: 3,
      }}
    >
      <Card elevation={3} sx={{ borderRadius: 5 }}>
        <CardHeader
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          title="Fahmidhaan"
          subheader="student"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
            aperiam illum numquam voluptates. Nostrum rerum fugit a unde odio
            magni, suscipit numquam consectetur vitae id molestiae incidunt eos,
            animi dolor! Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Ratione quo doloremque necessitatibus esse ipsum eos, eius hic
            cum ex reprehenderit. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Fugiat aperiam illum numquam voluptates. Nostrum
            rerum fugit a unde odio magni, suscipit numquam consectetur vitae id
            molestiae incidunt eos, animi dolor! Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Ratione quo doloremque necessitatibus
            esse ipsum eos, eius hic cum ex reprehenderit. Lorem ipsum dolor,
            sit amet consectetur adipisicing elit. Fugiat aperiam illum numquam
            voluptates. Nostrum rerum fugit a unde odio magni, suscipit numquam
            consectetur vitae id molestiae incidunt eos, animi dolor! Lorem
            ipsum dolor, sit amet consectetur adipisicing elit. Ratione quo
            doloremque necessitatibus esse ipsum eos, eius hic cum ex
            reprehenderit. Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Fugiat aperiam illum numquam voluptates. Nostrum rerum fugit a
            unde odio magni, suscipit numquam consectetur vitae id molestiae
            incidunt eos, animi dolor! Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Ratione quo doloremque necessitatibus esse ipsum
            eos, eius hic cum ex reprehenderit.
          </Typography>
        </CardContent>
        <Paper>konok</Paper>
      </Card>
    </Container>
  );
}
