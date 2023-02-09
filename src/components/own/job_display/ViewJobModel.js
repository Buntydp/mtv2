/* eslint-disable arrow-body-style */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/function-component-definition */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/order */
import React, { useRef, useEffect, useState } from 'react';
// import './abc.scss';
import Rating from '@mui/lab/Rating';
import { styled } from '@material-ui/core/styles';
// import { styled } from '@mui/material/styles';
import Paper from '@material-ui/core/Paper';
import Link from '@mui/material/Link';
// import Link from '@material-ui/core/Link';
// import ScriptTag from 'react-script-tag';

// import './Abc';
// import Dialog, { DialogProps } from '@mui/material/Dialog';
import {
  Box,
  Grid,
  FilledInput,
  Select,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  makeStyles,
  Typography,
  Button
  
} from '@material-ui/core';
import { IconButton } from '@mui/material';
import { Close as CloseIcon } from '@material-ui/icons';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 980,
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
    maxHeight: 300,
  },
  listSection: {
    backgroundColor: 'inherit',
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0,
  },
  items: {
    flexDirection:'column',
    textAlign: 'center',
  },
  subheader: {
    textAlign:'center',
    backgroundColor: 'white',
    fontSize: 'large',
  },
}));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  // color: theme.palette.text.secondary,
}));

export default (props)=>{

const classes = useStyles();

return(
// const [open, setOpen] = useState(false)

  
<>
<Dialog open={!!Object.keys(props.job).length}
onClose={props.closeModal} 
fullWidth
scroll="paper"

maxWidth="md"
aria-labelledby="scroll-dialog-title"
aria-describedby="scroll-dialog-description"
> 

{console.log(!!Object.keys(props.job).length)}
{/* <Dialog open={true} fullWidth> */}
  <DialogTitle>
  <Box display="flex" justifyContent='space-between' alignItems="center">
  <div class='main_list_head'>
    {/* <Box display="flex" justifyContent="space-between" alignItems="center"> */}
    {props.job.job_title} @ {props.job.com_name}
      {/* <IconButton> */}
      </div>
      <div>
      <IconButton onClick={props.closeModal}><CloseIcon /></IconButton>
      </div>
    </Box>
    
  </DialogTitle>
  <DialogContent>
  
  <List className={classes.root} subheader={<li />}>
    <li>
      <ul>
        <ListSubheader className={classes.subheader}>Salary Overview</ListSubheader>
        <ListItem className={classes.items}>
          <ListItemText>Highest Salary : ${props.job.sal_high} K/yr </ListItemText>
          <ListItemText>Average Salary : ${props.job.sal_med} K/yr </ListItemText>
          <ListItemText>Base Salary : ${props.job.sal_low} K/yr </ListItemText>
        </ListItem>
      </ul>
      
      <ul>
        <ListSubheader className={classes.subheader}>Rating</ListSubheader>
        <ListItem className={classes.items}>
          <ListItemText>Average Rating given by folks to the {props.job.com_name} for the post of {props.job.job_title}</ListItemText>
          <ListItemText><Rating name="half-rating-read" value={props.job.rating} precision={0.1} readOnly /></ListItemText>
          <ListItemText>{props.job.rating}</ListItemText>      
        </ListItem>
      </ul>
      <ul>
        <ListSubheader className={classes.subheader}>Company Overview</ListSubheader>
        <ListItem>
        
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}><Item><ListItemText>Company Size</ListItemText></Item></Grid><Grid item xs={6}><Item><ListItemText>{props.job.size}</ListItemText></Item></Grid><Grid item xs={6}><Item><ListItemText>Founded In</ListItemText></Item></Grid><Grid item xs={6}><Item><ListItemText>{props.job.f_year}</ListItemText></Item></Grid><Grid item xs={6}><Item><ListItemText>Company Type</ListItemText></Item></Grid><Grid item xs={6}><Item><ListItemText>{props.job.com_type}</ListItemText></Item></Grid>
        <Grid item xs={6}><Item><ListItemText>Industry</ListItemText></Item></Grid><Grid item xs={6}><Item><ListItemText>{props.job.industry}</ListItemText></Item></Grid><Grid item xs={6}><Item><ListItemText>Sector</ListItemText></Item></Grid><Grid item xs={6}><Item><ListItemText>{props.job.sector}</ListItemText></Item></Grid><Grid item xs={6}><Item><ListItemText>Revenue</ListItemText></Item></Grid><Grid item xs={6}><Item><ListItemText>{props.job.revenue}</ListItemText></Item></Grid>
        </Grid>
  
        </ListItem>
        <ListItem className={classes.items}>
          <ListItemText>CEO</ListItemText>
          <img src={props.job.ceo_photo} onError={event=>{
            event.target.src="/static/illustrations/user_not.png"
            event.onerror=null
          }} alt="Not Available"/>
          {/* <img src={props.ceo_photo} alt="Not Available"/> */}
          <ListItemText>{props.job.ceo_name}</ListItemText>
        </ListItem>
        <ListItem className={classes.items}><Link color="#00ab55" href={`https://${props.job.web_url}`} target='_blank' underline="hover">Visit {props.job.com_name} Website</Link></ListItem>
      </ul>
      <ul>
      <ListSubheader className={classes.subheader}>Company Location</ListSubheader>
        <ListItem>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}><Item><ListItemText>City</ListItemText></Item></Grid><Grid item xs={6}><Item><ListItemText>{props.job.location}</ListItemText></Item></Grid>
        <Grid item xs={6}><Item><ListItemText>Head Quarter</ListItemText></Item></Grid><Grid item xs={6}><Item><ListItemText>{props.job.hq}</ListItemText></Item></Grid>
        <Grid item xs={6}><Item><ListItemText>Pin-Point Location</ListItemText></Item></Grid><Grid item xs={6}><Item><ListItemText><Link color="#00ab55" href={`https://www.google.com/maps/search/?api=1&query=${props.job.lati},${props.job.lngi}`} target='_blank' underline="hover">{props.job.com_name} on Google Map</Link></ListItemText></Item></Grid>
        </Grid>
        </ListItem>
      </ul>
      <ul>
      <ListSubheader className={classes.subheader}>Description</ListSubheader>
        <ListItem>
        <Typography align='justify' gutterBottom paragraph='true' component="div">
        {props.job.desc}
      </Typography>
        </ListItem>
      </ul>
      <ul>
        <ListSubheader>Patel</ListSubheader>
        <ListItem>
          <ListItemText>Vrudit</ListItemText>
        </ListItem>
      </ul>
    </li>
  </List>
  
  

    {/* {Add('./Abc.js')} */}

  </DialogContent>
  <DialogActions></DialogActions>
</Dialog>

{/* <ScriptTag isHydrating={true} type="text/babel" src="./Abc.js" /> */}

</>
);
};

// "proxy": "http://localhost:5000",
