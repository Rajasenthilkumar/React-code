import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import Contentpreview from './Contentpreview';

const currencies = [
  {
    value: 'USD',
    label: 'Google drive',
  },
  {
    value: 'EUR',
    label: 'Google drive 1',
  },
  {
    value: 'BTC',
    label: 'Google drive 2',
  },
  {
    value: 'JPY',
    label: 'Google drive 3',
  },
];

export default function PaymentForm() {
  const [showContentPreview, setShowContentPreview] = useState(false);

  const handleReadFileClick = () => {
    // Set the state to true to display the Contentpreview component
    setShowContentPreview(true);
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Enter URL of your spreadsheet
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField label="spreadsheet URL" fullWidth id="outlined-size-normal" defaultValue="Enter URL" />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id="outlined-select-currency-native"
            select
            label="Spreadsheet format"
            defaultValue="Trivia"
            SelectProps={{
              native: true,
            }}
          >
            {currencies.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
        </Grid>

        <Grid container alignItems="center" spacing={2}>
          <Grid item xs={6}>
            <Typography sx={{ padding: 2 }}>SEE SAMPLE FORMAT</Typography>
          </Grid>
          <Grid item xs={6} container justifyContent="flex-end">
            <Button
              variant="outlined"
              color="primary"
              sx={{
                backgroundColor: 'transparent',
                borderColor: '#c4c4c4',
                color: '#c4c4c4',
                margin: 2,
              }}
              onClick={handleReadFileClick}
            >
              READ FILE
            </Button>
          </Grid>
        </Grid>
      </Grid>

     
      {showContentPreview && <Contentpreview />}
    </React.Fragment>
  );
}
