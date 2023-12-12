import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import tournamentIcon from './tournamenticon.svg'; // Adjust the path as needed
import AddIcon from '@mui/icons-material/Add';
const CreateTournament = () => {
    const [showForm, setShowForm] = useState(true);
    const [showLeaderboard, setShowLeaderboard] = useState(false);

    const handleBackClick = () => {
        // Handle back button click
        console.log('Back button clicked');
    };

    const handleCreateTournament = () => {
        // Handle create tournament button click
        console.log('Create Tournament button clicked');
        setShowForm(false);
        setShowLeaderboard(true);
    };

    const helperTextStyle = {
        fontSize: '16px', // Set your desired font size here
    };

    return (
        <Box p={3}>
            <Box display="flex" alignItems="center" justifyContent="center">
                <ArrowBackIcon onClick={handleBackClick} style={{ cursor: 'pointer' }} />
                <Typography sx={{ fontWeight: 'bold', textAlign: 'center' }}>
                    Create Tournament
                </Typography>
            </Box>

            <Divider sx={{ my: 5 }} />

            {showForm && (
                <Grid>
                    <TextField label="Name" fullWidth sx={{ m: 1 }} />
                    <TextField
                        label="Details"
                        fullWidth
                        multiline
                        rows={2}
                        sx={{ m: 1 }}
                    />

                    <TextField
                        label="Who can add to tournament"
                        sx={{ m: 1 }}
                        fullWidth
                        helperText={
                            <span style={helperTextStyle}>
                                Individuals can add events to the tournament. Add emails using comma separators. Specify just domain name, like herm.is, to allow anyone from the organization to add.
                            </span>
                        }
                    />

                    <Typography alignItems="center" style={{ fontWeight: 'bold' }}>Who can view this tournament:</Typography>

                    <RadioGroup col>
                        <FormControlLabel value="allCompany" control={<Radio />} label="All company members" />
                        <FormControlLabel value="eventParticipants" control={<Radio />} label="Event participants only" />
                    </RadioGroup>
                </Grid>
            )}

            {showLeaderboard && (
                <Box textAlign="center">
                    <img src={tournamentIcon} alt="Trophy" sx={{ width: 0.1, height: 0.1 }} />
                    <Typography  style={{ fontWeight: 'bold' }} mb={2}>
                        Tournament is empty
                    </Typography>
                    <Typography >
                        ( Add events to see leaderboard )
                    </Typography>
                    <Button variant="outlined" startIcon={<AddIcon />} sx={{mt:2}}>
                       ADD EXECUTED EVENT
                    </Button>
                </Box>
            )}

            {showForm && (
                <Box mt={3} display="flex" justifyContent="center">
                    <Button variant="contained" onClick={handleCreateTournament}>
                        NEXT: ADD EVENT
                    </Button>
                </Box>
            )}
        </Box>
    );
};

export default CreateTournament;
