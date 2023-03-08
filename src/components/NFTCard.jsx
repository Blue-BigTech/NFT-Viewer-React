import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import NFTDetailModal from './NFTDetailModal';

export default function NFTCard({data}) {
  const {
    title,
    subtitle,
    img
  } = data;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  return (
    <React.Fragment>
      <Card sx={{ maxWidth: 350 }}>
        <CardActionArea onClick={handleOpen}>
          <CardMedia
            component="img"
            height="140"
            image={img}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {subtitle}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <NFTDetailModal open={open} handleClose={handleClose} data={data}/>
    </React.Fragment>
  );
}
