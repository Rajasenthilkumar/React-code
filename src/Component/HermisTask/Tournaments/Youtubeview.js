import React from 'react'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Grid';

function Youtubeview() {
  return (
    <div>
        
        <Typography sx={{ fontSize: 15 ,m:2 }} >
        HOW TO USE TOURNAMENTS
          </Typography>
        <Grid>
        <iframe width="360" height="300" src="https://www.youtube.com/embed/sa_87cJXbbI?si=etsJwVe9hYDChb5w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Grid>
    </div>
  )
}

export default Youtubeview