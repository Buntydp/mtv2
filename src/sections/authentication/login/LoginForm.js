import * as Yup from 'yup';
import { useState, useRef } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useFormik, Form, FormikProvider } from 'formik';
// material
import {
  Link,
  Stack,
  Checkbox,
  TextField,
  IconButton,
  InputAdornment,
  FormControlLabel
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
// component
import Iconify from '../../../components/Iconify';

// ----------------------------------------------------------------------

export default function LoginForm() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const valid = useRef(false);

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    password: Yup.string().required('Password is required')
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      remember: true
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      console.log('api calling...');
      // fetch('https://final-project-apis.herokuapp.com/login', {
      fetch('https://flaskapi-eteq.onrender.com/login', {
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
          console.log('api op', res);
          console.log('api decision', res.decision);
          if (res.decision) {
            localStorage.setItem('token', values.email);
            // console.log('data', JSON.stringify({ data: res.data }));
            localStorage.setItem('data', JSON.stringify(res.data));
            navigate('/dashboard/app', { replace: true });
          } else {
            alert(`wrong credentialsr.`);
            // navigate('/login', { replace: true });
            window.location.reload();
          }
          // valid.current = res.decision;
          // console.log('updated', valid.current);
          // if (valid.current) {
          //   console.log('result', valid.current);
          //   localStorage.setItem('token', values.email);
          //   // console.log('insude if', valid.current);
          //   navigate('/dashboard/app', { replace: true });
          // } else {
          //   console.log('planning', values.email);
          //   alert(`Given ${values.email} Email is already exist.. Plaease use another.`);
          //   window.location.reload();
          //   // console.log('insude else', valid.current);
          //   // navigate('/register', { replace: true });
          // }
        });

      console.log('login...');
      // navigate('/dashboard/user', { replace: true });
      // navigate('/dashboard', { replace: true });
    }
  });

  const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } = formik;

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
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
                  <IconButton onClick={handleShowPassword} edge="end">
                    <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                  </IconButton>
                </InputAdornment>
              )
            }}
            error={Boolean(touched.password && errors.password)}
            helperText={touched.password && errors.password}
          />
        </Stack>

        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
          <FormControlLabel
            control={<Checkbox {...getFieldProps('remember')} checked={values.remember} />}
            label="Remember me"
          />

          <Link component={RouterLink} variant="subtitle2" to="#" underline="hover">
            Forgot password?
          </Link>
        </Stack>

        <LoadingButton
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          loading={isSubmitting}
        >
          Login.
        </LoadingButton>
      </Form>
    </FormikProvider>
  );
}
