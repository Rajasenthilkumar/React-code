import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import EventIcon from '@mui/icons-material/Event';
import { Bolt } from '@mui/icons-material';

const eventsData = [
    {
        title: 'HR TOURNAMENT',
        eventCount: 64,
        createdBy: 'me',
        creationDate: '07/03/2023',
    },
    {
        title: 'HR TOURNAMENT',
        eventCount: 64,
        createdBy: 'me',
        creationDate: '07/03/2023',
    },
    {
        title: 'HR TOURNAMENT',
        eventCount: 64,
        createdBy: 'me',
        creationDate: '07/03/2023',
    },
    {
        title: 'HR TOURNAMENT',
        eventCount: 64,
        createdBy: 'me',
        creationDate: '07/03/2023',
    },
    {
        title: 'HR TOURNAMENT',
        eventCount: 64,
        createdBy: 'me',
        creationDate: '07/03/2023',
    }, {
        title: 'HR TOURNAMENT',
        eventCount: 64,
        createdBy: 'me',
        creationDate: '07/03/2023',
    },
    {
        title: 'HR TOURNAMENT',
        eventCount: 64,
        createdBy: 'me',
        creationDate: '07/03/2023',
    },
    {
        title: 'HR TOURNAMENT',
        eventCount: 64,
        createdBy: 'me',
        creationDate: '07/03/2023',
    },
    {
        title: 'HR TOURNAMENT',
        eventCount: 64,
        createdBy: 'me',
        creationDate: '07/03/2023',
    }, {
        title: 'HR TOURNAMENT',
        eventCount: 64,
        createdBy: 'me',
        creationDate: '07/03/2023',
    },
    {
        title: 'HR TOURNAMENT',
        eventCount: 64,
        createdBy: 'me',
        creationDate: '07/03/2023',
    },
    

];

export default function BasicCard() {
    return (
        <Grid container rowSpacing={2} >
            {eventsData.map((event, index) => (
                <Grid item xs={6} key={index}>
                    <Card sx={{ maxWidth: 550, maxHeight: 180 ,backgroundColor: '#eaebf1'}}> 
                        <Grid container  alignItems="center">
                            <Grid item xs={11}>
                                <CardContent>
                                    <Typography  component="div" style={{ fontWeight: 'bold' }}>
                                        {event.title}
                                    </Typography>
                                    <Typography color="text.secondary" sx={{ display: 'flex', alignItems: 'center' }}>
                                        <EventIcon sx={{ marginRight: 1 }} />
                                        {event.eventCount} Events
                                    </Typography>
                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                        Created by {event.createdBy} on {event.creationDate}
                                    </Typography>
                                </CardContent>
                            </Grid>
                            <Grid item xs={1}>
                                <CardActions>
                                <ArrowForwardIosIcon sx={{ fontSize: 16 }} />
                                </CardActions>
                            </Grid>
                        </Grid>
                    </Card>

                </Grid>
            ))}
        </Grid>
    );
}
