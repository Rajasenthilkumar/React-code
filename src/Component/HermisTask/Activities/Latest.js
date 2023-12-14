import React from 'react';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import Divider from '@mui/material/Divider';

function Latest() {
  // Define an array of data
  const data = [
    {
      imageUrl: 'https://dzkqr8d3sax4r.cloudfront.net/app_assets/funtivity_portal_icons/icon_funtivityPortal_activities.svg',
      title: 'Endangered species of Africa Subcontinent',
      question: 'And The Question Is ...',
      category: 'Science and nature',
      status: 'New',
    },
    {
      imageUrl: 'https://dzkqr8d3sax4r.cloudfront.net/app_assets/funtivity_portal_icons/icon_funtivityPortal_activities.svg',
      title: 'Endangered species of Africa Subcontinent',
      question: 'And The Question Is ...',
      category: 'Science and nature',
      status: 'New',
    },
    // Add more data sets as needed
  ];

  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>
          <Grid container spacing={2} sx={{ bgcolor: '#f5f5f5', borderBottom: '1px solid #cc9e00' }}>
            <Grid item xs={1}>
              <img src={item.imageUrl} alt={`Image ${index + 1}`} />
            </Grid>
            <Grid item xs={9}>
              <Typography>{item.title}</Typography>
              <Typography style={{ display: 'inline' }}>{item.question}</Typography>
              <Typography style={{ display: 'inline' }}>{item.category}</Typography>
            </Grid>
            <Grid item xs={2}>
              {item.status}
            </Grid>
          </Grid>
        </div>
      ))}
    </div>
  );
}

export default Latest;
