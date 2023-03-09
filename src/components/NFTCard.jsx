import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import NFTDetailModal from './NFTDetailModal';

export default function NFTCard({ data }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  return (
    <React.Fragment>
      <Card sx={{ maxWidth: 550 }}>
        <CardActionArea onClick={handleOpen}>
          <CardMedia
            className="img-zoom"
            component="img"
            height="250"
            image={data.media[0].gateway && data.media[0].gateway}
            alt={data.title && data.title}
          />
          <CardContent sx={{ display:"flex", backgroundColor: "#000", color:"white", height: "120px;", justifyContent: "center", alignItems: "center" }}>
            <Typography gutterBottom variant="h5" component="div">
              {data.title ? data.title : ""}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <NFTDetailModal open={open} handleClose={handleClose} data={data}/>
    </React.Fragment>
  );
}
