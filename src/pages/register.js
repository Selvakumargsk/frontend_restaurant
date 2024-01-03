import React, { useState } from 'react';
import { Button, TextField, Container, Stepper, Step, StepLabel, Typography, Box } from '@mui/material';
import ApiService from '../services/apiservice';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const steps = ['Step 1: Email', 'Step 2: OTP', 'Step 3: Password'];

const RegisterForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleNext = async() => {
      if(activeStep === 0){
        try{
            const response = await ApiService.post('/createOtp' , {email});
            if(response.status === 201){
                setActiveStep((prevStep) => prevStep + 1);
            }else{
                toast.error('error occured');
            }
        }catch(err){
            toast.error(err.response.data.msg);
        }
    }else if(activeStep === 1){
        try{
            const response = await ApiService.post('/verify' , {email , otp});
            console.log(response);
            if(response.status === 200){
                setActiveStep((prevStep) => prevStep + 1);
            }else{
                toast.error('error occured');
            }

        }catch(err){
            toast.error('error occured'); 
        }
    }else{
        toast.error('some error occured , please try again');
    }
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = async() => {
    console.log('Form submitted');
    try{
        const response = await ApiService.post('/register' , {email , password , confirmPassword});
        if(response.status === 201){
            toast.success('registered successfully , please login to continue')
            navigate('/signin');
        }else{
            toast.error('error occured , please try again')
        }

    }catch(err){
        toast.error(err.response.data.msg);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box mt={8}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <div>
          {activeStep === steps.length ? (
            <div>
              <Typography variant="h5">Registration successful!</Typography>
            </div>
          ) : (
            <div>
              <Typography variant="h5">{steps[activeStep]}</Typography>
              <form>
                {activeStep === 0 && (
                  <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    label="Email Address"
                    autoFocus
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                )}
                {activeStep === 1 && (
                  <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    label="OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                  />
                )}
                {activeStep === 2 && (
                  <>
                    <TextField
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      label="Password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <TextField
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      label="Confirm Password"
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </>
                )}
                <Box mt={2}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={activeStep === steps.length - 1 ? handleSubmit : handleNext}
                  >
                    {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
                  </Button>
                  {activeStep !== 0 && (
                    <Button variant="outlined" color="primary" onClick={handleBack} style={{ marginLeft: '8px' }}>
                      Back
                    </Button>
                  )}
                </Box>
              </form>
            </div>
          )}
        </div>
      </Box>
    </Container>
  );
};

export default RegisterForm;
