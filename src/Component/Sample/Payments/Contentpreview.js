import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
function Contentpreview() {
  return (
    <Card style={{ backgroundColor: '#F5F5F5', borderBottom: (t) => `1px solid ${t.palette.divider}` }}>
    <CardContent>
      <Typography variant="h5" gutterBottom>
       Content preview
      </Typography>
      <Typography variant="body1" paragraph>
       Question 1
      </Typography>
      <Typography variant="body1" paragraph>
      Q: Hanoi is the capital of which countery and what is its population ?.
      </Typography>
      <Typography variant="body1">
      Q: Hanoi is the capital of which countery and what is its population ?.
      </Typography>
    </CardContent>
  </Card>
  )
}

export default Contentpreview