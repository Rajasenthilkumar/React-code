import * as React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
export default function AddressForm() {
    return (
        <React.Fragment>
            <Grid container spacing={4}>
                <Grid item xs={12}>

                    <TextField label="Name" fullWidth id="outlined-size-normal" defaultValue="Aceme Introduction Trivia " />
                </Grid>

                <Grid item xs={12}>
                    <TextField label="Activity" fullWidth id="outlined-size-normal" defaultValue=" Trivia " />
                </Grid>
                <Grid item xs={12}>
                    <FormControl>

                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                        >
                            <FormControlLabel value="Add manually" control={<Radio />} label="Add manually" />
                            <FormControlLabel value="use spreadsheet" control={<Radio />} label="Use spreadsheet" />

                        </RadioGroup>
                    </FormControl>
                </Grid>
                
                <Grid item xs={12}>
                    <TextField label="Medium" fullWidth id="outlined-size-normal" defaultValue="Create automatically" />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}