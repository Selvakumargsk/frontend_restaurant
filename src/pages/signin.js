import React from 'react';
import { Button, Container, Grid, Paper, TextField } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import ApiService from '../services/apiservice';
import Cookies from 'js-cookie';


const SignIn = () => {
  const [values, setValues] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if ((Object.keys(values).length < 2) || values.email === '' || values.password === '') {
      toast('please fill all the details to continue')
    } else {
      try {
        const response = await ApiService.post('/login', values);
        console.log(response);
        setLoading(true);
        if (response.status === 201) {
          setLoading(false);
          if(response.data.role === 'admin'){
            Cookies.set('adminId' , response.data.admin.id , {expires : 7});
            Cookies.set('token', response.data.token, { expires: 7 });        
          }else{
            Cookies.set('userId', response.data.user.id, { expires: 7 });        
            Cookies.set('token', response.data.token, { expires: 7 });        
          }
          navigate('/');
        } else {
          setLoading(false);
          toast.error(response.data.msg);
        }

      } catch (err) {
        toast.error(err?.response?.data?.msg);
      }
    }

  }

  const handleChange = (e) => {
    setValues((val) => ({ ...val, [e.target.name]: e.target.value }));
  }

  return (
    <Container component="main" maxWidth="md" className='h-screen flex justify-center items-center'>
      <Grid container className='flex flex-column h-[90vh] w-full items-center justify-center'>

        <Grid item xs={12} sm={6} md={6} component={Paper} elevation={6} square className='rounded-xl'>
          <div className='p-4 '>
            <h2>Sign In</h2>

            <form>
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                label="Email Address"
                name="email"
                onChange={handleChange}
                autoComplete="email"
              />

              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="password"
                label="Password"
                type="password"
                onChange={handleChange}
                autoComplete="current-password"
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                onClick={handleSubmit}
              >
                {loading ? <div className="spinner-border text-light" role="status">
                  <span className="sr-only"></span>
                </div> : 'Sign In'}
              </Button>
              <span className='flex justify-center mt-1'>First time user? <Link to='/register' className='font-bold no-underline'>Sign up here</Link></span>
            </form>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SignIn;
