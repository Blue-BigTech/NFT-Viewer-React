import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

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

const blackstyle = {
  backgroundColor : "#000",
  color : "white",
};

export default function NFTDetailModal({open, handleClose, data}) {
  const {
    title,
    subtitle,
    detail,
    more,
    img,
  } = data;
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  function handleOnClose(){
    handleExpandClick();
    handleClose();
  }

  function buy(){
    console.log("buy**************");
  }
  return (
    <React.Fragment>
      <Modal
        open={open}
        onClose={handleOnClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Card sx={{ maxWidth: 400 }}>
            <CardHeader
              sx={blackstyle}
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  R
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={title}
              subheader=<Typography color={'white'}>{subtitle}</Typography>
            />
            <CardMedia
              component="img"
              height="250"
              image={img}
              alt="Paella dish"
            />
            <CardContent sx={blackstyle}>
              <Typography variant="body2" color="white">
                {detail}
              </Typography>
            </CardContent>
            <CardActions disableSpacing sx={blackstyle}>
              <IconButton aria-label="Buy" onClick={buy} sx={{color:"white"}}>
                <ShoppingCartIcon />
              </IconButton>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon  sx={{color:"white"}}/>
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent sx={blackstyle}>
                <Typography paragraph>More:</Typography>
                <Typography style={{wordWrap: "break-word", color : "white"}}>
                  {more}
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Box>
      </Modal>
    </React.Fragment>
  );
}
