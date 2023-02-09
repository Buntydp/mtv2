/* eslint-disable react/no-unknown-property */
/* eslint-disable react/jsx-key */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable object-shorthand */
/* eslint-disable camelcase */
import React, { useState, useEffect, Component } from 'react';
import {
  Grid,
  Box,
  Button,
  Select,
  MenuItem,
  makeStyles,
  List,
  Table,
  TableRow,
  TableCell,
  Divider,
  Chip
} from '@mui/material';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@mui/material/CircularProgress';
import TextField from '@mui/material/TextField';
// import axios from 'axios';
// import { withStyles } from '@mui/material/styles';
// import './Form.css';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Iconify from '../../Iconify';
// import ViewJobModel from '../Job/ViewJobModel';
import jobdata from '../job_display/dummyData';
import ViewJobModel from '../job_display/ViewJobModel';
import JobCard from '../job_display/JobCard';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: '100%'
//   },
//   heading: {
//     fontSize: theme.typography.pxToRem(15),
//     fontWeight: theme.typography.fontWeightRegular
//   }
// }));

// const useStyles = (theme) => ({
//   wrapper: {
//     border: '1px solid #e8e8e8',
//     boxSizing: 'border-box',
//     width: '100%',
//     padding: '5px',

//     cursor: 'pointer',
//     transition: '.3s',

//     '&:hover': {
//       // boxShadow: '0px 5px 25px rgba(0 0 0 0.1)',
//       boxShadow: '0px 5px 25px rgba(0 0 0 0.1)',
//       borderLeft: '5px solid #00ab55'
//       // borderRight: '3px solid #4D64E4',
//       // borderTop: '1px solid #4D64E4',
//       // borderBottom: '1px solid #4D64E4',
//     }
//   },
//   companyName: {
//     fontSize: '13.5px',
//     backgroundColor: '#c8ffe0',
//     padding: theme.spacing(0.75),
//     borderRadius: '5px',
//     display: 'inline-block',
//     fontWeight: 600
//   },
//   skillChip: {
//     margin: theme.spacing(0.5),
//     padding: theme.spacing(0.75),
//     fontSize: '14.5px',
//     borderRadius: '5px',
//     fontWeight: 600,
//     backgroundColor: theme.palette.secondary.main,
//     // backgroundColor: theme.palette.secondary.main,
//     color: '#fff'
//   }
// });

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rating: '4.5',
      Company_Size: '501 to 1000 employees',
      Type_of_ownersip: 'Company - Private',
      Industry: 'Airlines',
      Sector: 'Travel & Tourism',
      Revenue: '$2 to $5 billion (USD)',
      state: 'IL',
      age: '20',
      Excel: '0',
      Visualisation: '1',
      ML: '1',
      ST: '0',
      RA: '1',
      LS: '0',
      CT: '1',
      com: '0',
      aws: '1',
      db: '0',
      ana: '1',
      job_simp: 'data scientist',
      Seniority: 'senior',
      data: jobdata,
      viewJob: '',
      text: 'Hold on..!',
      salary: '0',
      loading: false
    };
  }

  changeText = (text) => {
    this.setState({ text });
    this.setState({ loading: true });
  };

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // 12  nu niche che
  // "proxy": "http://localhost:5000",
  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    // fetch('http://192.168.56.1:5000/predict', {
    // fetch('https://final-project-apis.herokuapp.com/predict', {
    fetch('https://flaskapi-eteq.onrender.com/predict', {
      method: 'POST',
      body: JSON.stringify({
        content: this.state
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          data: data
        });
        console.log('real data');
        console.log(data);
        this.tester();
        this.setState({ loading: false });
      });
  };

  // eslint-disable-next-line class-methods-use-this
  tester = () => {
    console.log('its tester');
    // fetch('https://final-project-apis.herokuapp.com/pre', {
    fetch('https://flaskapi-eteq.onrender.com/pre', {
      method: 'POST',
      body: JSON.stringify({
        content: this.state
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
      .then((response) => response.json())
      .then((data) => this.setState({ salary: data }));
  };

  // tester = () => {
  //   console.log('its tester');
  //   return fetch('http://localhost:5000/salary')
  //     .then((response) => response.json())
  //     .then((data) => this.setState({ salary: data }));
  // };

  // eslint-disable-next-line class-methods-use-this
  disableAc(text) {
    // eslint-disable-next-line eqeqeq
    if (text == 'Check it Out..!') {
      // if (this.text.includes('it')) {
      return false;
    }
    return true;
  }

  // componentDidMount () {
  //   const script = document.createElement("script");
  //   script.src = './vjm.js';
  //   script.async = true;
  //   document.body.appendChild(script);
  // }

  render() {
    const { classes } = this.props;
    // const [data, setData]= useState([{}])
    const {
      loading,
      salary,
      text,
      viewJob,
      data,
      rating,
      Company_Size,
      Type_of_ownersip,
      Industry,
      Sector,
      Revenue,
      state,
      age,
      Excel,
      Visualisation,
      ML,
      ST,
      RA,
      LS,
      CT,
      com,
      aws,
      db,
      ana,
      job_simp,
      Seniority
    } = this.state;

    return (
      <div className="form">
        {/* <ViewJobModel  />   */}
        {/* <ViewJobModel  job={true} colseModel={()=>this.setState({viewJob:false})}/> */}
        {/* <ViewJobModel job={this.state.viewJob} closeModal={() => this.setState({ viewJob: '' })} /> */}
        {/* <ViewJobModel  job={viewJob} colseModel={()=>setViewJob({})}/> */}
        <ViewJobModel
          job={this.state.viewJob}
          closeModal={() =>
            this.setState({
              viewJob: ''
            })
          }
        />
        <form onSubmit={this.submitHandler} name="inquiry">
          {/* <form onSubmit={this.submitHandler} name="inquiry" action="/predict" method="POST"> */}
          {/* <form name="inquiry" action="." method="POST"> */}
          <div className="container">
            <br/>
            <center>
              <Typography>Please Enter correct information, So we can get closest number to your average salary.</Typography>
            </center>
            <br />
            <hr />
            <br></br>
            <center><Typography variant="h6">Profile Form</Typography></center><br />
            <div className="major">
              {/* <center> */}
              <Box
                border={1.9}
                borderColor="#00AB55"
                // display="flex"
                // justifyContent="center"
                // alignItems="center"
                borderRadius={1}
                padding={2}
                // fontSize={24}
              >
                <Table>
                  <TableRow>
                    <TableCell>
                      <TextField
                        id="outlined-number"
                        label="Rating"
                        name="rating"
                        type="number"
                        inputProps={{ step: '.1', max: 5 }}
                        // step={2}
                        // max="5"
                        helperText="Rating of Comapny"
                        value={rating}
                        onChange={this.changeHandler}
                      />
                    </TableCell>
                    {/* <label>
                <span>Rating</span>

                <input
                  type="number"
                  name="rating"
                  step="0.1"
                  size="15"
                  required
                  value={rating}
                  onChange={this.changeHandler}
                />
              </label> */}
                    {/* <br /> */}
                    <TableCell>
                      <FormControl sx={{ m: 1, minWidth: 280 }}>
                        <InputLabel id="demo-simple-select-helper-label">Company_Size</InputLabel>
                        <Select
                          name="Company_Size"
                          value={Company_Size}
                          label="Company_Size"
                          onChange={this.changeHandler}
                        >
                          <MenuItem value="501 to 1000 employees">501 to 1000 employees</MenuItem>
                          <MenuItem value="10000+ employees">10000+ employees</MenuItem>
                          <MenuItem value="1001 to 5000 employees">1001 to 5000 employees</MenuItem>
                          <MenuItem value="51 to 200 employees">51 to 200 employees</MenuItem>
                          <MenuItem value="5001 to 10000 employees">
                            5001 to 10000 employees
                          </MenuItem>
                        </Select>
                        <FormHelperText>With label + helper text</FormHelperText>
                      </FormControl>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <FormControl sx={{ m: 1, minWidth: 280 }}>
                        <InputLabel id="demo-simple-select-helper-label">Ownership</InputLabel>
                        <Select
                          name="Type_of_ownersip"
                          value={Type_of_ownersip}
                          label="Type of Ownersip"
                          onChange={this.changeHandler}
                        >
                          <MenuItem value="Company - Private">Company - Private</MenuItem>
                          <MenuItem value="Government">Government</MenuItem>
                          <MenuItem value="Non-profit Organisation">
                            Non-profit Organisation
                          </MenuItem>
                          <MenuItem value="Company - Public">Company - Public</MenuItem>
                          <MenuItem value="College / University">College / University</MenuItem>
                        </Select>
                        <FormHelperText>Type of Ownership</FormHelperText>
                      </FormControl>
                    </TableCell>
                    <TableCell>
                      <FormControl sx={{ m: 1, minWidth: 280 }}>
                        <InputLabel>Industry</InputLabel>
                        <Select
                          name="Industry"
                          value={Industry}
                          label="Industry"
                          onChange={this.changeHandler}
                        >
                          <MenuItem value="Aerospace & Defence">Aerospace & Defence</MenuItem>
                          <MenuItem value="Accounting">Accounting</MenuItem>
                          <MenuItem value="Advertising & Marketing">
                            Advertising & Marketing
                          </MenuItem>
                          <MenuItem value="Airlines">Airlines</MenuItem>
                          <MenuItem value="Architectural & Engineering Services">
                            Architectural & Engineering Services
                          </MenuItem>
                          <MenuItem value="Asphalt Product Manufacturing">
                            Asphalt Product Manufacturing
                          </MenuItem>
                          <MenuItem value="Audio/Visual">Audio/Visual</MenuItem>
                          <MenuItem value="Banks & Building Societies">
                            Banks & Building Societies
                          </MenuItem>
                          <MenuItem value="Biotech & Pharmaceuticals">
                            Biotech & Pharmaceuticals
                          </MenuItem>
                          <MenuItem value="Building & Construction">
                            Building & Construction
                          </MenuItem>
                          <MenuItem value="Computer Hardware & Software">
                            Computer Hardware & Software
                          </MenuItem>
                          <MenuItem value="Consumer Electronics & Appliance Shops">
                            Consumer Electronics & Appliance Shops
                          </MenuItem>
                          <MenuItem value="Cable, Internet & Telephone Providers">
                            Cable, Internet & Telephone Providers
                          </MenuItem>
                          <MenuItem value="Car Hire">Car Hire</MenuItem>
                          <MenuItem value="Charitable Foundations">Charitable Foundations</MenuItem>
                          <MenuItem value="Chemical Manufacturing">Chemical Manufacturing</MenuItem>
                          <MenuItem value="Consulting">Consulting</MenuItem>
                          <MenuItem value="Department, Clothing, & Shoe Shops">
                            Clothing & Shoe Shops
                          </MenuItem>
                          <MenuItem value="Energy">Energy</MenuItem>
                          <MenuItem value="Education Training Services">
                            Education Training Services
                          </MenuItem>
                          <MenuItem value="Electrical & Electronic Manufacturing">
                            Electrical & Electronic Manufacturing
                          </MenuItem>
                          <MenuItem value="Estate Agents">Estate Agents</MenuItem>
                          <MenuItem value="Fast-Food & Quick-Service Restaurants">
                            Fast-Food & Quick-Service Restaurants
                          </MenuItem>
                          <MenuItem value="Film Production & Distribution">
                            Film Production & Distribution
                          </MenuItem>
                          <MenuItem value="Food & Beverage Shops">Food & Beverage Shops</MenuItem>
                          <MenuItem value="Food & Drink Manufacturing	">
                            Food & Drink Manufacturing
                          </MenuItem>
                          <MenuItem value="Government Agencies">Government Agencies</MenuItem>
                          <MenuItem value="Health, Beauty & Fitness">
                            Health, Beauty & Fitness
                          </MenuItem>
                          <MenuItem value="Healthcare Product Manufacturing">
                            Healthcare Product Manufacturing
                          </MenuItem>
                          <MenuItem value="Hotel & Resorts">Hotel & Resorts</MenuItem>
                          <MenuItem value="IT Services">IT Services</MenuItem>
                          <MenuItem value="Industrial Manufacturing">
                            Industrial Manufacturing
                          </MenuItem>
                          <MenuItem value="Insurance Operators">Insurance Operators</MenuItem>
                          <MenuItem value="Logistics & Supply Chain">
                            Logistics & Supply Chain
                          </MenuItem>
                          <MenuItem value="Membership Organisations">
                            Membership Organisations
                          </MenuItem>
                          <MenuItem value="Motor Vehicle Parts & Accessories Shops">
                            Motor Vehicle Parts & Accessories Shops
                          </MenuItem>
                          <MenuItem value="Metal & Mineral Manufacturing">
                            Metal & Mineral Manufacturing
                          </MenuItem>
                          <MenuItem value="Museums, Zoos & Amusement Parks">
                            Museums, Zoos & Amusement Parks
                          </MenuItem>
                          <MenuItem value="News Outlets">News Outlets</MenuItem>
                          <MenuItem value="Oil & Gas Exploration & Production">
                            Oil & Gas Exploration & Production
                          </MenuItem>
                          <MenuItem value="Oil & Gas Services">Oil & Gas Services</MenuItem>
                          <MenuItem value="Pharmacies & Health Shops">
                            Pharmacies & Health Shops
                          </MenuItem>
                          <MenuItem value="Research & Development">Research & Development</MenuItem>
                          <MenuItem value="Religious Organisations">
                            Religious Organisations
                          </MenuItem>
                          <MenuItem value="Social Services">Social Services</MenuItem>
                          <MenuItem value="Sports & Recreation">Sports & Recreation</MenuItem>
                          <MenuItem value="Staffing & Outsourcing">Staffing & Outsourcing</MenuItem>
                          <MenuItem value="Stock Exchanges">Stock Exchanges</MenuItem>
                          <MenuItem value="Transportation Equipment Manufacturing">
                            Transportation Equipment Manufacturing
                          </MenuItem>
                          <MenuItem value="Telecommunications Services">
                            Telecommunications Services
                          </MenuItem>
                          <MenuItem value="Utilities">Utilities</MenuItem>
                          <MenuItem value="Vehicle Dealers">Vehicle Dealers</MenuItem>
                          <MenuItem value="Venture Capital & Private Equity">
                            Venture Capital & Private Equity
                          </MenuItem>
                          <MenuItem value="Video Game">Video Game</MenuItem>
                          <MenuItem value="Wholesale">Wholesale</MenuItem>
                        </Select>
                        <FormHelperText>Type of Industry</FormHelperText>
                      </FormControl>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <FormControl sx={{ m: 1, minWidth: 280 }}>
                        <InputLabel id="demo-simple-select-helper-label">Sector</InputLabel>
                        <Select
                          name="Sector"
                          value={Sector}
                          label="Sector"
                          onChange={this.changeHandler}
                        >
                          <MenuItem value="Retail">Retail</MenuItem>
                          <MenuItem value="Finance">Finance</MenuItem>
                          <MenuItem value="Accounting & Legal">Accounting & Legal</MenuItem>
                          <MenuItem value="Agriculture & Forestry">Agriculture & Forestry</MenuItem>
                          <MenuItem value="Arts, Entertainment & Recreation">
                            Arts, Entertainment & Recreation
                          </MenuItem>
                          <MenuItem value="Biotech & Pharmaceuticals">
                            Biotech & Pharmaceuticals
                          </MenuItem>
                          <MenuItem value="Building, Repair & Maintenance">
                            Building, Repair & Maintenance
                          </MenuItem>
                          <MenuItem value="Consumer Services">Consumer Services</MenuItem>
                          <MenuItem value="Education">Education </MenuItem>
                          <MenuItem value="Government">Government</MenuItem>
                          <MenuItem value="Healthcare">Healthcare</MenuItem>
                          <MenuItem value="Insurance">Insurance</MenuItem>
                          <MenuItem value="Manufacturing">Manufacturing</MenuItem>
                          <MenuItem value="Media">Media</MenuItem>
                          <MenuItem value="Non-Profits">Non-Profits</MenuItem>
                          <MenuItem value="Oil, Gas, Energy & Utilities">
                            Oil, Gas, Energy & Utilities
                          </MenuItem>
                          <MenuItem value="Restaurants, Pubs, Bars & Food Service">
                            Restaurants, Pubs, Bars & Food Service
                          </MenuItem>
                          <MenuItem value="Telecommunications">Telecommunications</MenuItem>
                          <MenuItem value="Transportation & Logistics">
                            Transportation & Logistics
                          </MenuItem>
                          <MenuItem value="Travel & Tourism">Travel & Tourism</MenuItem>
                          <MenuItem value="Property">Property</MenuItem>
                          <MenuItem value="Business Services">Business Services</MenuItem>
                          <MenuItem value="Aerospace & Defence">Aerospace & Defence</MenuItem>
                          <MenuItem value="Information Technology">Information Technology</MenuItem>
                        </Select>
                        <FormHelperText>Type of Sector</FormHelperText>
                      </FormControl>
                    </TableCell>
                    <TableCell>
                      <FormControl sx={{ m: 1, minWidth: 280 }}>
                        <InputLabel id="demo-simple-select-helper-label">Revenue</InputLabel>
                        <Select
                          name="Revenue"
                          value={Revenue}
                          label="Revenue"
                          onChange={this.changeHandler}
                        >
                          <MenuItem value="$2 to $5 billion (USD)">$2 to $5 billion (USD)</MenuItem>
                          <MenuItem value="$5 to $10 billion (USD)">
                            $5 to $10 billion (USD)
                          </MenuItem>
                          <MenuItem value="$25 to $50 million (USD)">
                            $25 to $50 million (USD)
                          </MenuItem>
                          <MenuItem value="$50 to $100 million (USD)">
                            $50 to $100 million (USD)
                          </MenuItem>
                          <MenuItem value="$100 to $500 million (USD)">
                            $100 to $500 million (USD)
                          </MenuItem>
                        </Select>
                        <FormHelperText>Revenue genearted by Entity.</FormHelperText>
                      </FormControl>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <FormControl sx={{ m: 1, minWidth: 280 }}>
                        <InputLabel id="demo-simple-select-helper-label">State</InputLabel>
                        <Select
                          name="state"
                          value={state}
                          label="state"
                          onChange={this.changeHandler}
                        >
                          <MenuItem value="CA">CA</MenuItem>
                          <MenuItem value="NM">New Mexico</MenuItem>
                          <MenuItem value="TX">TX</MenuItem>
                          <MenuItem value="FL">FL</MenuItem>
                          <MenuItem value="NY">NY</MenuItem>
                          <MenuItem value="AL">ALABAMA</MenuItem>
                          <MenuItem value="AZ">Arizona </MenuItem>
                          <MenuItem value="CO">Colorado</MenuItem>
                          <MenuItem value="CT">Connecticut</MenuItem>
                          <MenuItem value="DE">Delaware</MenuItem>
                          <MenuItem value="DC">District of Columbia</MenuItem>
                          <MenuItem value="GA">Georgia</MenuItem>
                          <MenuItem value="HI">Hawaii</MenuItem>
                          <MenuItem value="ID">Idaho</MenuItem>
                          <MenuItem value="IL">Illinois</MenuItem>
                          <MenuItem value="IN">Indiana</MenuItem>
                          <MenuItem value="IA">Iowa</MenuItem>
                          <MenuItem value="KS">Kansas</MenuItem>
                          <MenuItem value="KY">Kentucky</MenuItem>
                          <MenuItem value="LA">Louisiana</MenuItem>
                          <MenuItem value="ME">Maine</MenuItem>
                          <MenuItem value="MD">Maryland</MenuItem>
                          <MenuItem value="MA">Massachusetts</MenuItem>
                          <MenuItem value="MI">Michigan</MenuItem>
                          <MenuItem value="MN">Minnesota</MenuItem>
                          <MenuItem value="MS">Mississippi</MenuItem>
                          <MenuItem value="MO">Missouri</MenuItem>
                          <MenuItem value="MT">Montana</MenuItem>
                          <MenuItem value="NE">Nebraska</MenuItem>
                          <MenuItem value="NV">Nevada</MenuItem>
                          <MenuItem value="NH">New Hampshire</MenuItem>
                          <MenuItem value="NJ">New Jersey</MenuItem>
                          <MenuItem value="NC">North Carolina</MenuItem>
                          <MenuItem value="ND">North Dakota</MenuItem>
                          <MenuItem value="OH">Ohio</MenuItem>
                          <MenuItem value="OK">Oklahoma</MenuItem>
                          <MenuItem value="OR">Oregon</MenuItem>
                          <MenuItem value="PA">Pennsylvania </MenuItem>
                          <MenuItem value="RI">Rhode Island</MenuItem>
                          <MenuItem value="SC">South Carolina</MenuItem>
                          <MenuItem value="SD">South Dakota</MenuItem>
                          <MenuItem value="TN">Tennessee</MenuItem>
                          <MenuItem value="UT">Utha</MenuItem>
                          <MenuItem value="VT">Vermont</MenuItem>
                          <MenuItem value="VA">Virginia</MenuItem>
                          <MenuItem value="WA">Washington </MenuItem>
                          <MenuItem value="WV">West Virginia</MenuItem>
                          <MenuItem value="WI">Wisconsin</MenuItem>
                          <MenuItem value="WY">Wyoming</MenuItem>
                        </Select>
                        <FormHelperText>
                          Select any State of United States of America.
                        </FormHelperText>
                      </FormControl>
                    </TableCell>
                    <TableCell>
                      <FormControl sx={{ m: 1, minWidth: 280 }}>
                        <TextField
                          id="outlined-number"
                          label="Age"
                          name="age"
                          type="number"
                          inputProps={{ step: '1', max: 500 }}
                          // step={2}
                          // max="5"
                          helperText="Age of Comapny"
                          value={age}
                          onChange={this.changeHandler}
                        />
                      </FormControl>
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>
                      <FormControl sx={{ m: 1, minWidth: 150 }}>
                        <InputLabel id="demo-simple-select-helper-label">Position</InputLabel>
                        <Select
                          name="job_simp"
                          value={job_simp}
                          onChange={this.changeHandler}
                          label="Position"
                        >
                          <MenuItem value="data scientist">data scientist</MenuItem>
                          <MenuItem value="data engineer">data engineer</MenuItem>
                          <MenuItem value="manager">manager</MenuItem>
                          <MenuItem value="MLeng">ML Engineer</MenuItem>
                          <MenuItem value="analyst">Analyst</MenuItem>
                          <MenuItem value="consultant">consultant</MenuItem>
                          <MenuItem value="database engibeer">Database Engibeer</MenuItem>
                          <MenuItem value="junior engineer">Junior Engineer</MenuItem>
                          <MenuItem value="director">Director</MenuItem>
                          <MenuItem value="project manager">project manager</MenuItem>
                          <MenuItem value="software engineer">software engineer</MenuItem>
                          <MenuItem value="statistician">statistician</MenuItem>
                        </Select>
                      </FormControl>
                    </TableCell>
                    <TableCell>
                      <FormControl sx={{ m: 1, minWidth: 150 }}>
                        <InputLabel id="demo-simple-select-helper-label">Seniority</InputLabel>
                        <Select
                          name="Seniority"
                          value={Seniority}
                          onChange={this.changeHandler}
                          label="Seniority"
                        >
                          <MenuItem value="senior">senior</MenuItem>
                          <MenuItem value="junior">junior</MenuItem>
                          <MenuItem value="intern">intern</MenuItem>
                          <MenuItem value="na">na</MenuItem>
                        </Select>
                      </FormControl>
                    </TableCell>
                  </TableRow>
                </Table>
                <br></br>
                <Divider light={false}>
                  <Chip
                    absolute
                    variant="middle"
                    label="Please, Let us Know which skills you know ?"
                  />
                </Divider>
                <br></br>
                <Table>
                  <TableRow>
                    <TableCell>
                      <FormControl sx={{ m: 1, minWidth: 150 }}>
                        <InputLabel id="demo-simple-select-helper-label">Excel</InputLabel>
                        <Select
                          name="Excel"
                          value={Excel}
                          onChange={this.changeHandler}
                          label="Excel"
                        >
                          <MenuItem value="1">Yes</MenuItem>
                          <MenuItem value="0">No</MenuItem>
                        </Select>
                      </FormControl>
                    </TableCell>
                    <TableCell>
                      <FormControl sx={{ m: 1, minWidth: 150 }}>
                        <InputLabel id="demo-simple-select-helper-label">Visualisation</InputLabel>
                        <Select
                          name="Visualisation"
                          value={Visualisation}
                          onChange={this.changeHandler}
                          label="Visualisation"
                        >
                          <MenuItem value="1">Yes</MenuItem>
                          <MenuItem value="0">No</MenuItem>
                        </Select>
                      </FormControl>
                    </TableCell>
                    <TableCell>
                      <FormControl sx={{ m: 1, minWidth: 150 }}>
                        <InputLabel id="demo-simple-select-helper-label">ML</InputLabel>
                        <Select name="ML" value={ML} onChange={this.changeHandler} label="ML">
                          <MenuItem value="1">Yes</MenuItem>
                          <MenuItem value="0">No</MenuItem>
                        </Select>
                      </FormControl>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <FormControl sx={{ m: 1, minWidth: 150 }}>
                        <InputLabel id="demo-simple-select-helper-label">
                          Software Testing
                        </InputLabel>
                        <Select
                          name="ST"
                          value={ST}
                          onChange={this.changeHandler}
                          label="Software Testing"
                        >
                          <MenuItem value="1">Yes</MenuItem>
                          <MenuItem value="0">No</MenuItem>
                        </Select>
                      </FormControl>
                    </TableCell>
                    <TableCell>
                      <FormControl sx={{ m: 1, minWidth: 150 }}>
                        <InputLabel id="demo-simple-select-helper-label">Risk Analysis</InputLabel>
                        <Select
                          name="RA"
                          value={RA}
                          onChange={this.changeHandler}
                          label="Risk Analysis"
                        >
                          <MenuItem value="1">Yes</MenuItem>
                          <MenuItem value="0">No</MenuItem>
                        </Select>
                      </FormControl>
                    </TableCell>
                    <TableCell>
                      <FormControl sx={{ m: 1, minWidth: 150 }}>
                        <InputLabel id="demo-simple-select-helper-label">Leadership</InputLabel>
                        <Select
                          name="LS"
                          value={LS}
                          onChange={this.changeHandler}
                          label="Leadership"
                        >
                          <MenuItem value="1">Yes</MenuItem>
                          <MenuItem value="0">No</MenuItem>
                        </Select>
                      </FormControl>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <FormControl sx={{ m: 1, minWidth: 150 }}>
                        <InputLabel id="demo-simple-select-helper-label">
                          Critical Thinking
                        </InputLabel>
                        <Select
                          name="CT"
                          value={CT}
                          onChange={this.changeHandler}
                          label="Critical Thinking"
                        >
                          <MenuItem value="1">Yes</MenuItem>
                          <MenuItem value="0">No</MenuItem>
                        </Select>
                      </FormControl>
                    </TableCell>
                    <TableCell>
                      <FormControl sx={{ m: 1, minWidth: 150 }}>
                        <InputLabel id="demo-simple-select-helper-label">Communication</InputLabel>
                        <Select
                          name="com"
                          value={com}
                          onChange={this.changeHandler}
                          label="Communication"
                        >
                          <MenuItem value="1">Yes</MenuItem>
                          <MenuItem value="0">No</MenuItem>
                        </Select>
                      </FormControl>
                    </TableCell>
                    <TableCell>
                      <FormControl sx={{ m: 1, minWidth: 150 }}>
                        <InputLabel id="demo-simple-select-helper-label">aws</InputLabel>
                        <Select name="aws" value={aws} onChange={this.changeHandler} label="AWS">
                          <MenuItem value="1">Yes</MenuItem>
                          <MenuItem value="0">No</MenuItem>
                        </Select>
                      </FormControl>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <FormControl sx={{ m: 1, minWidth: 150 }}>
                        <InputLabel id="demo-simple-select-helper-label">Database</InputLabel>
                        <Select name="db" value={db} onChange={this.changeHandler} label="Database">
                          <MenuItem value="1">Yes</MenuItem>
                          <MenuItem value="0">No</MenuItem>
                        </Select>
                      </FormControl>
                    </TableCell>
                    <TableCell>
                      <FormControl sx={{ m: 1, minWidth: 150 }}>
                        <InputLabel id="demo-simple-select-helper-label">Analysis</InputLabel>
                        <Select
                          name="ana"
                          value={ana}
                          onChange={this.changeHandler}
                          label="Analysis"
                        >
                          <MenuItem value="1">Yes</MenuItem>
                          <MenuItem value="0">No</MenuItem>
                        </Select>
                      </FormControl>
                    </TableCell>
                  </TableRow>
                </Table>
                <Divider></Divider>

                <br />

                <center>

                  <Box>
                    <Button
                      type="submit"
                      variant="contained"
                      onClick={() => {
                        this.changeText('Check it Out..!');
                      }}
                      startIcon={<Iconify icon="la:search-dollar" width={30} height={30} />}
                      // startIcon={<Iconify icon="eva:plus-fill" />}
                    >
                      Predict
                    </Button>
                    {/* <Button
                    type="submit"
                    class="registration"
                    variant="outlined"
                    onClick={() => {
                      this.changeText('Check it Out..!');
                    }}
                  >
                    Predict
                  </Button> */}
                  </Box>
                  <br />
                  <Box component="div" sx={{ display: 'inline' }}>
                    ${salary} K
                  </Box>
                </center>  
              </Box>
            </div>

            {/* <button type="submit" class="registerbtn">Predict</button> */}
          </div>
        </form>
        <br />
        <div className="root">
          {loading && <CircularProgress style={{ color: '#00ab55', marginLeft: '50%' }} />}
          {!loading && (
            <Accordion disabled={this.disableAc(text)}>
              {/* <Accordion disabled={this.disableAc(text)}> */}
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography class="heading">{text}</Typography>
              </AccordionSummary>

              <AccordionDetails>
                <div class="box">
                  <div class="lists">
                    {data.map((job) => (
                      <JobCard open={() => this.setState({ viewJob: job })} key={job.id} {...job} />
                    ))}
                  </div>
                </div>
              </AccordionDetails>
            </Accordion>
          )}
        </div>
      </div>
    );
  }
}
// };
export default Form;
// export default withStyles(useStyles)(Form);
