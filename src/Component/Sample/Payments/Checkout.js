import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Initialdraft from './Initialdraft';
import Nextdraft from './Nextdraft';
import Publish from './Publish';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const steps = ['Draft', 'Draft', 'Publish'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <Initialdraft />;
    case 1:
      return <Nextdraft />;
    case 2:
      return <Publish />;
    default:
      throw new Error('Unknown step');
  }
}

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <React.Fragment>
      <Box
        display="flex"
        alignItems="center"
        sx={{
          textAlign: 'center',
          p: 2,
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <ArrowBackIcon onClick={handleBack} />
        <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
          Create Custom Content
        </Typography>
      </Box>
      <Container maxWidth="md" sx={{ mb: 4 }}>
        <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel
                StepIconComponent={({ active, completed }) => (
                  <div
                    style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      backgroundColor: active ? '#FFC900' : '#dedede',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#fff', // You may want to set a color for the icon/text inside the circle
                    }}
                  >
                    {completed ? '✔' : index + 1}
                  </div>
                )}
              >
                {label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length ? (
          <React.Fragment></React.Fragment>
        ) : (
          <React.Fragment>
            {getStepContent(activeStep)}
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button
                variant="contained"
                onClick={handleNext}
                sx={{ mt: 3, ml: 1, backgroundColor: '#FFC900', width: '100%', color: 'black' }}
              >
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </Box>
          </React.Fragment>
        )}
      </Container>
    </React.Fragment>
  );
}
