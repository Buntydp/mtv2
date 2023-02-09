/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable arrow-body-style */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/function-component-definition */
import React from 'react';
import { Box, Grid, Typography, makeStyles } from '@material-ui/core';
import { Button } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    border: '1px solid #e8e8e8',
    boxSizing: 'border-box',
    width: '100%',
    padding: '5px',

    cursor: 'pointer',
    transition: '.3s',

    '&:hover': {
      // boxShadow: '0px 5px 25px rgba(0 0 0 0.1)',
      boxShadow: '0px 5px 25px rgba(0 0 0 0.1)',
      borderLeft: '6px solid #00ab55'
      // borderRight: '3px solid #4D64E4',
      // borderTop: '1px solid #4D64E4',
      // borderBottom: '1px solid #4D64E4',
    }
  },
  companyName: {
    fontSize: '13.5px',
    backgroundColor: '#ebf9f1',
    // backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(0.75),
    borderRadius: '5px',
    display: 'inline-block',
    fontWeight: 600
  },
  skillChip: {
    margin: theme.spacing(0.5),
    padding: theme.spacing(0.75),
    fontSize: '14.5px',
    borderRadius: '5px',
    fontWeight: 600,
    backgroundColor: '#ebf9f1',
    color: '#fff'
  },
  btn:{
    backgroundColor: 'ebf9f1',
    border: '#00ab55',
  }
}));
const skills = ['JavaScript', 'Python', 'Data Science'];

export default (props) => {
  const classes = useStyles();
  return (
    <>
      
      <Box p={2} className={classes.wrapper}>
      
      <Grid container alignItems="center">
      <Grid item xs={1}>
      <img src={props.logo_url} alt="not"/>
      </Grid>

      <Grid item xs>
      <Typography variant="subtitle1">{props.job_title}</Typography>
      <Typography className={classes.companyName} variant="subtitle1">{props.com_name}</Typography>
      </Grid>

      <Grid item container xs direction="column" alignItems="flex-end">
      <Grid item><Typography mr={5} variant="caption">{props.com_type} | {props.location}</Typography></Grid>
      <Grid>
      
              <Box mt={2} mb={1.5} mr={1}>
                
                <Button onClick={props.open} variant="outlined">
                  Check
                </Button>
              </Box>
            </Grid>
      </Grid>



      </Grid>
      </Box>



    </>
  );
};




