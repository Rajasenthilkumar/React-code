import React from 'react';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Eventpage from './Eventpage';
import Leaderboardpage  from './Leaderboardpage'
function EventDetailsBox() {
    const boxStyle = {
        border: '1px solid #000', // Set your border style here
        // Adjust padding as needed
        marginBottom: '20px', // Adjust margin as needed
    };

    const headerStyle = {
        backgroundColor: '#f0e1a6', // Header background color
        padding: '10px', // Adjust padding as needed
        fontWeight: 'bold', // Optional: Make the header text bold
    };

    return (
        <div>
           
           
           
<Grid container spacing={6}>
  <Grid item xs={6}>
  <Grid item xs={12}>
  <div  style={boxStyle}> 
            <div style={headerStyle}>Details</div>
            <Grid sx={{ p: 1, display: 'flex' }}>

                <Grid item xs={4} className='leftside'>
                    Created by:
                </Grid>
                <Grid item xs={8} sx={{ marginLeft: '100px' }}>
                    <Chip
                        label={(
                            <Typography
                                variant='caption'
                                sx={{
                                    alignItems: 'center',
                                    display: 'flex',
                                    whiteSpace: 'normal',
                                    wordBreak: 'break-word',
                                }}
                            >
                                nandhini@herm.is
                            </Typography>
                        )}
                    />
                </Grid>
            </Grid>
            <Grid sx={{ p: 1, display: 'flex' }}>
                <Grid item xs={4} className='leftside'>
                    Data:
                </Grid>
                <Grid item xs={8} sx={{ marginLeft: '100px' }}>
                    <Typography>
                        3 rd  July 2023
                    </Typography>
                </Grid>
            </Grid>
            <Grid sx={{ p: 1, display: 'flex' }}>
                <Grid item xs={4} className='leftside'>
                    Host:
                </Grid>
                <Grid item xs={8} sx={{ marginLeft: '100px' }}>
                    <Chip
                        label={(
                            <Typography
                                variant='caption'
                                sx={{
                                    alignItems: 'center',
                                    display: 'flex',
                                    whiteSpace: 'normal',
                                    wordBreak: 'break-word',
                                }}
                            >
                                nandhini@herm.is
                            </Typography>
                        )}
                    />
                    <Chip
                        label={(
                            <Typography
                                variant='caption'
                                sx={{
                                    alignItems: 'center',
                                    display: 'flex',
                                    whiteSpace: 'normal',
                                    wordBreak: 'break-word',
                                }}
                            >
                                khushboo@herm.is
                            </Typography>
                        )}
                    />
                    <Chip
                        label={(
                            <Typography
                                variant='caption'
                                sx={{
                                    alignItems: 'center',
                                    display: 'flex',
                                    whiteSpace: 'normal',
                                    wordBreak: 'break-word',
                                }}
                            >
                                prathamesh@herm.is
                            </Typography>
                        )}
                    />
                </Grid>
            </Grid>
            <Grid sx={{ p: 1, display: 'flex' }}>

                <Grid item xs={4} className='leftside'>
                    Attendees:
                </Grid>
                <Grid item xs={8} sx={{ marginLeft: '100px' }}>
                    <Typography> 25</Typography>
                </Grid>
            </Grid>
            <Grid sx={{ p: 1, display: 'flex' }}>

                <Grid item xs={4} className='leftside'>
                    Activities Selected:
                </Grid>
                <Grid item xs={8} sx={{ marginLeft: '100px' }}>
                    <Typography>
                        27
                    </Typography>
                </Grid>
            </Grid>
            </div>
  </Grid>
  <Grid item xs={12}>
    
  <Eventpage/>
  </Grid>
   
  </Grid>
  <Grid item xs={6}>
  <Leaderboardpage/>
  </Grid>
 
</Grid>
        </div>
    );
}

export default EventDetailsBox;



