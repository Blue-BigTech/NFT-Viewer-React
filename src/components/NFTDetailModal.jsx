import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import { styled } from '@mui/material/styles';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
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
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  function handleOnClose(){
    setExpanded(false);
    handleClose();
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
              avatar = { data.contract && data.contract.openSea && data.contract.openSea.imageUrl &&
                (
                  <Link href={`${data.contract.openSea.externalUrl}`} target="_blank">
                    <Avatar alt={data.contract.openSea.collectionName} src={data.contract.openSea.imageUrl} aria-label="recipe" />
                  </Link>
                )
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={data.contract && data.contract.openSea && data.contract.openSea.collectionName && data.contract.openSea.collectionName}
            />
            <CardMedia
              component="img"
              height="250"
              image={data.media[0].gateway && data.media[0].gateway}
              alt={data.title && data.title}
            />
            <CardContent sx={blackstyle}>
              <Typography variant="body2" color="white">
                {data.rawMetadata.description}
              </Typography>
            </CardContent>
            <CardActions disableSpacing sx={blackstyle}>
              <Link href={`https://opensea.io/assets/ethereum/${data.contract.address}/${data.tokenId}`} target="_blank">
                <IconButton aria-label="Buy" sx={{color:"white"}}>
                  <ShoppingCartIcon />
                </IconButton>
              </Link>
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
                {data.tokenType &&
                  (
                    <Box style={{ display: "flex", justifyContent: "space-between" }}>
                      <Box>TokenType:</Box>
                      <Box>{data.contract.tokenType}</Box>
                    </Box>
                  )
                }
                {data.title &&
                  (
                    <Box style={{ display: "flex", justifyContent: "space-between" }}>
                      <Box>Title:</Box>
                      <Box>{data.title}</Box>
                    </Box>
                  )
                }
                {data.tokenId &&
                  (
                    <Box style={{ display: "flex", justifyContent: "space-between" }}>
                      <Box>TokenId:</Box>
                      <Box>{data.tokenId}</Box>
                    </Box>
                  )
                }
                {data.contract && data.contract && data.contract.openSea && data.contract.openSea.floorPrice &&
                  (
                    <Box style={{ display: "flex", justifyContent: "space-between" }}>
                      <Box>Price:</Box>
                      <Box>
                        { data.contract.openSea.floorPrice } ETH
                      </Box>
                    </Box>
                  )
                }
                {data.contract && data.contract.address &&
                  (
                    <Box style={{ display: "flex", justifyContent: "space-between" }}>
                      <Box>Contract:</Box>
                      <Link href={`https://etherscan.io/address/${data.contract.address}`} target="_blank">
                        {
                          String(data.contract.address).substring(0, 6) +
                          "..." +
                          String(data.contract.address).substring(38)
                        }
                      </Link>
                    </Box>
                  )
                }
                {data.contract && data.contract && data.contract.openSea && data.contract.openSea.externalUrl &&
                  (
                    <Box style={{ display: "flex", justifyContent: "space-between" }}>
                      <Box>Site:</Box>
                      <Link href={`${data.contract.openSea.externalUrl}`} target="_blank">
                        { data.contract.openSea.externalUrl }
                      </Link>
                    </Box>
                  )
                }
              </CardContent>
            </Collapse>
          </Card>
        </Box>
      </Modal>
    </React.Fragment>
  );
}
