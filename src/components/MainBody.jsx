import { Box } from "@mui/material";
import React from "react";
import {
    Container,
    Grid
} from "@mui/material";
import NFTCard from "./NFTCard";
import { useAppContext } from "contexts/AppContext";

const MainBody = () => {
  const context = useAppContext();
  return (
    <Box sx={{margin:"114px 0 50px 0", padding : "0 10px"}}>
      <Container fixed sx={{padding : "50px 0"}}>
        <Grid container spacing={3}>
          {
            context.nfts.map((nft, index) => {
              return(
                <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                  <NFTCard data={nft} />
                </Grid>
              )
            })
          }
        </Grid>
      </Container>
    </Box>
  )
}

export default MainBody;