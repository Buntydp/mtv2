import * as Yup from 'yup';
import { useState, useRef } from 'react';
import { useFormik, Form, FormikProvider } from 'formik';
import { useNavigate, Navigate } from 'react-router-dom';
// material
import { Stack, TextField, IconButton, InputAdornment, Alert, Button } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// component
import Iconify from '../../../components/Iconify';

// ----------------------------------------------------------------------

export default function RegisterForm() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const valid = useRef();

  const RegisterSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('First name required'),
    lastName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Last name required'),
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    password: Yup.string().required('Password is required')
  });

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    },
    validationSchema: RegisterSchema,
    onSubmit: (values) => {
      console.log('api calling...', values);
      // fetch('https://final-project-apis.herokuapp.com/register', {
      fetch('https://flaskapi-eteq.onrender.com/register', {
        method: 'POST',
        body: JSON.stringify({
          content: values
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      })
        .then((res) => res.json())
        .then((res) => {
          console.log('ours', res.decision);
          valid.current = res.decision;
          console.log('updated chex', valid.current.decision);
          if (valid.current.decision) {
            // if (valid.current) {
            console.log('result', valid.current);
            localStorage.setItem('token', values.email);
            // console.log('attention', JSON.stringify(res.decision.data));
            // console.log('datas,.,.', JSON.stringify(res));
            localStorage.setItem('data', JSON.stringify(res.decision.data));
            // console.log('insude if', valid.current);
            navigate('/dashboard/app', { replace: true });
          } else {
            console.log('planning', values.email);
            alert(`Given ${values.email} Email is already exist.. Plaease use another.`);
            window.location.reload();
            // console.log('insude else', valid.current);
            // navigate('/register', { replace: true });
          }
        });

      console.log('login...');
      // if (valid.current) {
      //   console.log('insude if', valid.current);
      //   // navigate('/dashboard/app', { replace: true });
      // } else {
      //   console.log('insude else', valid.current);
      //   // navigate('/dashboard/vrudit', { replace: true });
      // }
    }
  });

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps } = formik;
  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <TextField
              fullWidth
              label="First name"
              {...getFieldProps('firstName')}
              error={Boolean(touched.firstName && errors.firstName)}
              helperText={touched.firstName && errors.firstName}
            />

            <TextField
              fullWidth
              label="Last name"
              {...getFieldProps('lastName')}
              error={Boolean(touched.lastName && errors.lastName)}
              helperText={touched.lastName && errors.lastName}
            />
          </Stack>

          <TextField
            fullWidth
            autoComplete="username"
            type="email"
            label="Email address"
            {...getFieldProps('email')}
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
          />

          <TextField
            fullWidth
            autoComplete="current-password"
            type={showPassword ? 'text' : 'password'}
            label="Password"
            {...getFieldProps('password')}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton edge="end" onClick={() => setShowPassword((prev) => !prev)}>
                    <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                  </IconButton>
                </InputAdornment>
              )
            }}
            error={Boolean(touched.password && errors.password)}
            helperText={touched.password && errors.password}
          />

          <LoadingButton
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            loading={isSubmitting}
          >
            Register
          </LoadingButton>
        </Stack>
      </Form>
    </FormikProvider>
  );
}
