import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import NFTDetailModal from './NFTDetailModal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#00000000',
  border: '2px solid #00000000',
  boxShadow: 24,
  p: 4,
};

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
            className="img-zoom"
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
