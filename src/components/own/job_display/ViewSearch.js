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

  
<Dialog open={props.viewJob}
fullWidth
scroll="paper"

maxWidth="md"
aria-labelledby="scroll-dialog-title"
aria-describedby="scroll-dialog-description"
> 

{/* <Dialog open={true} fullWidth> */}
  <DialogTitle>
  <Box display="flex" justifyContent='space-between' alignItems="center">
  <div class='main_list_head'>
   Vrudit
      </div>
      <div>
      <IconButton><CloseIcon /></IconButton>
      </div>
    </Box>
    
  </DialogTitle>
  <DialogContent>
  
  

  </DialogContent>
  <DialogActions></DialogActions>
</Dialog>
);
};

// "proxy": "http://localhost:5000",
