import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const CardProdu = ({data} ) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
      <CardMedia component="img" height="160" image= {data.img} alt="brillo"/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.nombre}   
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {data.descripcion} | {data.color}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            $ {data.precio}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button size="small" color="primary">
          Añadir al carrito
        </Button>
      </CardActions>
    </Card>
  );
}

export default CardProdu;
