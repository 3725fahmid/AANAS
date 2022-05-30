import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { Container, IconButton, Typography } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function card() {
  return (
    <Container>
      <Card elevation={3}>
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
            animi dolor!
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}
