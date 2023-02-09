import { useRef, useState, useEffect } from 'react';
import { Link as RouterLink, Navigate } from 'react-router-dom';
// material
import { alpha } from '@mui/material/styles';
import { Button, Box, Divider, MenuItem, Typography, Avatar, IconButton } from '@mui/material';
// components
import Iconify from '../../components/Iconify';
import MenuPopover from '../../components/MenuPopover';
//
import account from '../../_mocks_/account';

// ----------------------------------------------------------------------

const MENU_OPTIONS = [
  {
    label: 'Home',
    icon: 'eva:home-fill',
    linkTo: '/'
  },
  {
    label: 'Explore Jobs',
    icon: 'fa:wpexplorer',
    linkTo: '/dashboard/user'
  },
  {
    label: 'Salary Prediction',
    icon: 'fa6-solid:hand-holding-dollar',
    linkTo: '/dashboard/vrudit'
  }
];

// ----------------------------------------------------------------------

export default function AccountPopover() {
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);
  // const [data, setData] = useState();
  const data = useRef(false);

  // const data = JSON.parse(localStorage.getItem('data'));

  try {
    data.current = JSON.parse(localStorage.getItem('data'));
    console.log('data.data', data.current.FirstName);
    // JSON.parse(localStorage.getItem('data'));
  } catch {
    data.current = { FirstName: 'Vru', LastName: 'Pate', Email: 'vhasn' };
    // setData({ data: { FirstName: 'Vru', LastName: 'Pate', Email: 'vhasn' } });
    console.log('here is', data);
  }
  // useEffect(() => {
  //   console.log('its constructor of...');
  //   // const data = JSON.parse(localStorage.getItem('data'));
  //   console.log('data is:', data);
  //   // const token
  // }, []);

  // const valid = useRef();

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('data');
    setOpen(false);
    console.log('loguout...');
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton
        ref={anchorRef}
        onClick={handleOpen}
        sx={{
          padding: 0,
          width: 44,
          height: 44,
          ...(open && {
            '&:before': {
              zIndex: 1,
              content: "''",
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              position: 'absolute',
              bgcolor: (theme) => alpha(theme.palette.grey[900], 0.72)
            }
          })
        }}
      >
        <Avatar src={account.photoURL} alt="photoURL" />
      </IconButton>

      <MenuPopover
        open={open}
        onClose={handleClose}
        anchorEl={anchorRef.current}
        sx={{ width: 220 }}
      >
        <Box sx={{ my: 1.5, px: 2.5 }}>
          <Typography variant="subtitle1" noWrap>
            {data.current.FirstName} {data.current.LastName}
            {/* {account.displayName} */}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
            {data.current.Email}
            {/* {account.email} */}
          </Typography>
        </Box>

        <Divider sx={{ my: 1 }} />

        {MENU_OPTIONS.map((option) => (
          <MenuItem
            key={option.label}
            to={option.linkTo}
            component={RouterLink}
            onClick={handleClose}
            sx={{ typography: 'body2', py: 1, px: 2.5 }}
          >
            <Iconify
              icon={option.icon}
              sx={{
                mr: 2,
                width: 24,
                height: 24
              }}
            />

            {option.label}
          </MenuItem>
        ))}

        <Box sx={{ p: 2, pt: 1.5 }}>
          <RouterLink to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Button fullWidth color="inherit" variant="outlined" onClick={logout}>
              Logout
            </Button>
          </RouterLink>
        </Box>
      </MenuPopover>
    </>
  );
}
