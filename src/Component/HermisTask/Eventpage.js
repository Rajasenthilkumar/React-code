import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import PeopleIcon from '@mui/icons-material/People';
import DashboardIcon from '@mui/icons-material/Dashboard';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Divider from '@mui/material/Divider';
import AddIcon from '@mui/icons-material/Add';
const EventSummary = ({ events }) => {
    if (!events || events.length === 0) {
        return null; // Return null if there are no events
    }

    const boxStyle = {
        border: '1px solid #000',
        marginBottom:'10px'

    };
    const headerStyle = {
        backgroundColor: '#f0e1a6',
        fontWeight: 'bold',
        padding: '10px',
    };

    return (
        <div style={boxStyle} sx={{marginBottom :10}}>
            <div style={headerStyle}>Event ({events.length})</div>
            <div sx={{marginRight:20}}> 
            <Button variant="outlined"   startIcon={<AddIcon  sx={{ fontWeight: '800', color: '#D6A800' }} />}
                sx={{

                    borderColor: '#f5ca31',
                    margin:2,
                    width: '1100px',
                }}>
                ADD EXECUTED EVENT
            </Button>

         
            </div>
            {events.map((event, index) => (
                <Grid container spacing={2} key={index} sx={{ padding: 2 }}>
                    <Grid item xs={11}>
                        <Grid item xs={12}>
                            <Typography style={{ fontWeight: 'bold' }}>
                                {event.date} - {event.time} IST - {event.organizer}
                            </Typography>

                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs={2}>
                                <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                                    <PeopleIcon sx={{ marginRight: '4px' }} /> {event.attendees} Attendees
                                </Typography>
                            </Grid>
                            <Grid item xs={2}>
                                <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                                    <DashboardIcon sx={{ marginRight: '4px' }} /> {event.activities} Activities
                                </Typography>
                            </Grid>
                        </Grid>
                        <Divider sx={{ p: 0.5 }} />
                    </Grid>
                    <Grid item xs={1}>
                        <MoreVertIcon />
                    </Grid>

                </Grid>

            ))}

        </div>
    );
};

const App = () => {
    const eventDataArray = [
        {
            date: '4th Oct',
            time: '9:21 AM',
            organizer: 'Nandhini G',
            attendees: 2,
            activities: 5,
        },
        {
            date: '4th Oct',
            time: '9:21 AM',
            organizer: 'Nandhini G',
            attendees: 2,
            activities: 5,
        },
        {
            date: '4th Oct',
            time: '9:21 AM',
            organizer: 'Nandhini G',
            attendees: 2,
            activities: 5,
        },
        {
            date: '4th Oct',
            time: '9:21 AM',
            organizer: 'Nandhini G',
            attendees: 2,
            activities: 5,
        },
        // Add more eventData objects as needed
    ];

    return <EventSummary events={eventDataArray} />;
};

export default App;
