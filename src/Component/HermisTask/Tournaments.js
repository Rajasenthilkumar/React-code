import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import tournamentIcon from './tournamenticon.svg'; // Adjust the path as needed
import Grid from '@mui/material/Grid';
import ErrorIcon from '@mui/icons-material/Error';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import Viewtournament from './Viewtournament';
import Youtubeview from './Youtubeview';
import Createnewtournament from './Createnewtournament';
import Header from './Header'
export default function FixedContainer() {
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleCreateTournament = () => {
    setIsButtonClicked(true);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Header/>
      <Container fixed>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container>
            <Grid item xs={12} container alignItems="center" sx={{ mt: 2 }}>
              <Typography variant="h6">Tournaments </Typography>
              <Tooltip title='Boost attendee engagement with the tournament, featuring cumulative scores from executed events!'>
                <ErrorIcon sx={{ marginLeft: '20px' }} />
              </Tooltip>
            </Grid>

            <Grid container alignItems="center" item xs={10}>
              <Typography
                sx={{
                  fontWeight: '400',
                  textAlign: 'left',
                  opacity: '0.7',
                }}
              >
                Tournaments are dynamic and exciting competitions that consist of a group of executed events.
                <br />
                Each event contributes to a cumulative leaderboard.
              </Typography>
            </Grid>

            <Grid item xs={2}>
              <img src={tournamentIcon} alt="Trophy" sx={{ width: 0.1, height: 0.1 }} />
            </Grid>

            <Grid item xs={12}>
              <button
                variant="contained"
                onClick={handleCreateTournament}
                style={{
                  backgroundColor: '#ffc700',
                  height: '30px',
                  borderColor: '#ffc700',
                }}
              >
                CREATE NEW TOURNAMENT
              </button>
            </Grid>

            <Grid item xs={12} sx={{ mt: 2 }}>
              {isButtonClicked && <Createnewtournament />}
            </Grid>

            <Grid item xs={12} sx={{ mt: 2 }}>
              <Viewtournament />
            </Grid>

            <Grid>
              <Youtubeview />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
}
