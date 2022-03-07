import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard() {
  return (
    <Card className='card' sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image="https://wallpapers-hub.art/wallpaper-images/179539.jpg"
          alt="crazy war"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
             Omar Fersi 
          </Typography>
          <Typography variant="body2" color="gray">
            welcome it's Mr fersi <br />
            this is my email : <br />
            omarfersi@gmail.com
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
