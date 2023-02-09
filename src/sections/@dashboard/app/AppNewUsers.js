import { useState, useRef, useEffect } from 'react';
// material
import { alpha, styled } from '@mui/material/styles';
import { Card, Typography } from '@mui/material';
// utils
import { fShortenNumber } from '../../../utils/formatNumber';
// component
import Iconify from '../../../components/Iconify';

// ----------------------------------------------------------------------
// const TOTAL = useRef(0);
// const [showPassword, setShowPassword] = useState(false);

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  textAlign: 'center',
  padding: theme.spacing(5, 0),
  color: theme.palette.info.darker,
  backgroundColor: theme.palette.info.lighter
}));

const IconWrapperStyle = styled('div')(({ theme }) => ({
  margin: 'auto',
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  width: theme.spacing(8),
  height: theme.spacing(8),
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
  color: theme.palette.info.dark,
  backgroundImage: `linear-gradient(135deg, ${alpha(theme.palette.info.dark, 0)} 0%, ${alpha(
    theme.palette.info.dark,
    0.24
  )} 100%)`
}));

// ----------------------------------------------------------------------

// const TOTAL = 1352831;
// function TOTAL() {
// console.log('inside total');

// }

export default function AppNewUsers() {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    test();
  });

  async function test() {
    console.log('test');
    await fetch('https://final-project-apis.herokuapp.com/jobs')
      .then((res) => res.json())
      .then((res) => {
        console.log('number', res);
        setTotal(parseInt(res, 10));
        // console.log('useeffect...', parseInt(res, 10));
        // return 12;
      });
  }
  return (
    <RootStyle>
      <IconWrapperStyle>
        <Iconify icon="gridicons:multiple-users" width={30} height={30} />
        {/* <Iconify icon="ant-design:apple-filled" width={24} height={24} /> */}
      </IconWrapperStyle>
      {/* <Typography variant="h3">{my}</Typography> */}
      <Typography variant="h3">{total}</Typography>
      {/* <Typography variant="h3">{fShortenNumber(TOTAL.current)}</Typography> */}
      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        New Users
      </Typography>
    </RootStyle>
  );
}
