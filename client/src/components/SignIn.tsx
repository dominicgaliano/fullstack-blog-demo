import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
// import Checkbox from '@mui/material/Checkbox';
// import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useEffect } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { loginUser } from '../actions/authActions';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import LoginInput from '../types/LoginInput';
import Copyright from './Copyright';

const errorMessages = {
  email: {
    required: 'Email is Required',
    pattern: 'Invalid Email Address',
  },
  password: {
    required: 'Password is Required',
  },
};

export default function SignIn({ login }: { login: boolean }) {
  // redux utilities
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  // react router utilities
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/feed');
    }
  }, [navigate, dispatch, isAuthenticated]);

  // react-hook-form setup
  const { control, handleSubmit } = useForm<LoginInput>({ reValidateMode: 'onBlur' });

  const onSubmit: SubmitHandler<LoginInput> = async (loginInput) => {
    dispatch(loginUser(loginInput));
  };

  return (
    <>
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 1 }}>
          <Controller
            control={control}
            name="email"
            defaultValue=""
            rules={{
              required: true,
              pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
            }}
            render={({ field, fieldState: { error } }) => {
              return (
                <TextField
                  {...field}
                  type="email"
                  margin="normal"
                  fullWidth
                  label="Email"
                  error={error !== undefined}
                  // TODO: Fix this ts error
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-ignore
                  helperText={error ? errorMessages.email[error.type] : ''}
                />
              );
            }}
          />
          <Controller
            control={control}
            name="password"
            defaultValue=""
            rules={{
              required: true,
            }}
            render={({ field, fieldState: { error } }) => {
              return (
                <TextField
                  {...field}
                  type="password"
                  margin="normal"
                  fullWidth
                  label="Password"
                  error={error !== undefined}
                  // TODO: Fix this ts error
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-ignore
                  helperText={error ? errorMessages.email[error.type] : ''}
                />
              );
            }}
          />
          {/* <FormControlLabel */}
          {/*   control={<Checkbox value="remember" color="primary" />} */}
          {/*   label="Remember me" */}
          {/* /> */}
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Sign In
          </Button>
          <Grid container>
            {/* <Grid item xs> */}
            {/*   <Link href="#" variant="body2"> */}
            {/*     Forgot password? */}
            {/*   </Link> */}
            {/* </Grid> */}
            <Grid item>
              <Link href="login" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </>
  );
}
