/* eslint-disable camelcase */
import { filter } from 'lodash';
import { sentenceCase } from 'change-case';
import { useState } from 'react';
import { Link as RouterLink, Navigate } from 'react-router-dom';
// material
import {
  Card,
  Table,
  Stack,
  Avatar,
  Button,
  Link,
  TableRow,
  TableBody,
  TableCell,
  Container,
  Typography,
  TableContainer,
  TablePagination,
  IconButton
} from '@mui/material';
import {
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  makeStyles,
  List,
  ListItem,
  ListSubheader,
  ListItemText,
  Grid,
  styled,
  Paper
} from '@material-ui/core';
import { Close as CloseIcon } from '@material-ui/icons';
import Rating from '@mui/lab/Rating';
// components
import Page from '../components/Page';
import Label from '../components/Label';
import Scrollbar from '../components/Scrollbar';
import Iconify from '../components/Iconify';
import SearchNotFound from '../components/SearchNotFound';
import { UserListHead, UserListToolbar, UserMoreMenu } from '../sections/@dashboard/user';
//
// import USERLIST from '../_mocks_/user';
import USERLIST from '../_mocks_/ns.json';
// import ViewSearch from '../components/own/job_display/ViewSearch';

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: 'name', label: 'Job Post', alignRight: false },
  { id: 'company', label: 'Company Name', alignRight: false },
  // { id: 'role', label: 'Role', alignRight: false },
  // { id: 'isVerified', label: 'Verified', alignRight: false },
  // { id: 'status', label: 'Status', alignRight: false },
  { id: '' }
];

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 980,
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
    maxHeight: 300
  },
  listSection: {
    backgroundColor: 'inherit'
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0
  },
  items: {
    flexDirection: 'column',
    textAlign: 'center'
  },
  subheader: {
    textAlign: 'center',
    backgroundColor: 'white',
    fontSize: 'large'
  }
}));
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center'
  // color: theme.palette.text.secondary,
}));

// ----------------------------------------------------------------------

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function applySortFilter(array, comparator, query) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  if (query) {
    return filter(array, (_user) => _user.name.toLowerCase().indexOf(query.toLowerCase()) !== -1);
  }
  return stabilizedThis.map((el) => el[0]);
}

export default function User() {
  const [page, setPage] = useState(0);
  const [order, setOrder] = useState('asc');
  const [selected, setSelected] = useState([]);
  const [orderBy, setOrderBy] = useState('name');
  const [filterName, setFilterName] = useState('');
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [viewJob, setViewJob] = useState(false);
  const [nom, setNom] = useState('default');
  const [com, setCom] = useState('bydefault');
  const [id, setId] = useState(0);
  const [rat, setRat] = useState(0);
  const [ms, setMs] = useState(0);
  const [as, setAs] = useState(0);
  const [hs, setHs] = useState(0);
  const [location, setLocation] = useState('us');
  const [lati, setLati] = useState(0);
  const [langi, setLangi] = useState(0);
  const [hq, setHq] = useState('us');
  const [fy, setFy] = useState(2000);
  const [ind, setInd] = useState('abc');
  const [sec, setSec] = useState('a');
  const [size, setSize] = useState('a');
  const [type, setType] = useState('a');
  const [rev, setRev] = useState('a');
  const [cname, setCname] = useState('a');
  const [cphoto, setPhoto] = useState('a');
  const [web, setWeb] = useState('a');
  const [desc, setDesc] = useState('a');

  const classes = useStyles();

  function clicked() {
    setViewJob(true);
  }

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = USERLIST.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleFilterByName = (event) => {
    setFilterName(event.target.value);
  };

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - USERLIST.length) : 0;

  const filteredUsers = applySortFilter(USERLIST, getComparator(order, orderBy), filterName);

  const isUserNotFound = filteredUsers.length === 0;

  if (true) {
    const token = localStorage.getItem('token');
    if (token == null) {
      return <Navigate to="/login" />;
    }
  }

  return (
    <>
      {/* <ViewSearch /> */}
      <Dialog
        open={viewJob}
        onClose={() => setViewJob(false)}
        fullWidth
        scroll="paper"
        maxWidth="md"
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        {/* <Dialog open={true} fullWidth> */}
        <DialogTitle>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <div className="main_list_head">
              {/* <Box display="flex" justifyContent="space-between" alignItems="center"> */}
              {nom} @ {com}
              {/* <IconButton> */}
            </div>
            <div>
              <IconButton onClick={() => setViewJob(false)}>
                <CloseIcon />
              </IconButton>
            </div>
          </Box>
        </DialogTitle>
        <DialogContent>
          <List className={classes.root} subheader={<li />}>
            <li>
              <ul>
                <ListSubheader className={classes.subheader}>Salary Overview</ListSubheader>
                <ListItem className={classes.items}>
                  <ListItemText>Highest Salary : ${hs} K/yr </ListItemText>
                  <ListItemText>Average Salary : ${as} K/yr </ListItemText>
                  <ListItemText>Base Salary : ${ms} K/yr </ListItemText>
                </ListItem>
              </ul>

              <ul>
                <ListSubheader className={classes.subheader}>Rating</ListSubheader>
                <ListItem className={classes.items}>
                  <ListItemText>
                    Average Rating given by folks to the {com} for the post of {nom}
                  </ListItemText>
                  <ListItemText>
                    <Rating name="half-rating-read" value={rat} precision={0.1} readOnly />
                  </ListItemText>
                  <ListItemText>{rat}</ListItemText>
                </ListItem>
              </ul>
              <ul>
                <ListSubheader className={classes.subheader}>Company Overview</ListSubheader>
                <ListItem>
                  <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6}>
                      <Item>
                        <ListItemText>Company Size</ListItemText>
                      </Item>
                    </Grid>
                    <Grid item xs={6}>
                      <Item>
                        <ListItemText>{size}</ListItemText>
                      </Item>
                    </Grid>
                    <Grid item xs={6}>
                      <Item>
                        <ListItemText>Founded In</ListItemText>
                      </Item>
                    </Grid>
                    <Grid item xs={6}>
                      <Item>
                        <ListItemText>{fy}</ListItemText>
                      </Item>
                    </Grid>
                    <Grid item xs={6}>
                      <Item>
                        <ListItemText>Company Type</ListItemText>
                      </Item>
                    </Grid>
                    <Grid item xs={6}>
                      <Item>
                        <ListItemText>{type}</ListItemText>
                      </Item>
                    </Grid>
                    <Grid item xs={6}>
                      <Item>
                        <ListItemText>Industry</ListItemText>
                      </Item>
                    </Grid>
                    <Grid item xs={6}>
                      <Item>
                        <ListItemText>{ind}</ListItemText>
                      </Item>
                    </Grid>
                    <Grid item xs={6}>
                      <Item>
                        <ListItemText>Sector</ListItemText>
                      </Item>
                    </Grid>
                    <Grid item xs={6}>
                      <Item>
                        <ListItemText>{sec}</ListItemText>
                      </Item>
                    </Grid>
                    <Grid item xs={6}>
                      <Item>
                        <ListItemText>Revenue</ListItemText>
                      </Item>
                    </Grid>
                    <Grid item xs={6}>
                      <Item>
                        <ListItemText>{rev}</ListItemText>
                      </Item>
                    </Grid>
                  </Grid>
                </ListItem>
                <ListItem className={classes.items}>
                  <ListItemText>CEO</ListItemText>
                  <img
                    src={cphoto}
                    onError={(event) => {
                      event.target.src = '/static/illustrations/user_not.png';
                      event.onerror = null;
                    }}
                    alt="Not Available"
                  />
                  {/* <img src={props.ceo_photo} alt="Not Available"/> */}
                  <ListItemText>{cname}</ListItemText>
                </ListItem>
                <ListItem className={classes.items}>
                  <Link color="#00ab55" href={`https://${web}`} target="_blank" underline="hover">
                    Visit {com} Website
                  </Link>
                </ListItem>
              </ul>
              <ul>
                <ListSubheader className={classes.subheader}>Company Location</ListSubheader>
                <ListItem>
                  <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6}>
                      <Item>
                        <ListItemText>City</ListItemText>
                      </Item>
                    </Grid>
                    <Grid item xs={6}>
                      <Item>
                        <ListItemText>{location}</ListItemText>
                      </Item>
                    </Grid>
                    <Grid item xs={6}>
                      <Item>
                        <ListItemText>Head Quarter</ListItemText>
                      </Item>
                    </Grid>
                    <Grid item xs={6}>
                      <Item>
                        <ListItemText>{hq}</ListItemText>
                      </Item>
                    </Grid>
                    <Grid item xs={6}>
                      <Item>
                        <ListItemText>Pin-Point Location</ListItemText>
                      </Item>
                    </Grid>
                    <Grid item xs={6}>
                      <Item>
                        <ListItemText>
                          <Link
                            color="#00ab55"
                            href={`https://www.google.com/maps/search/?api=1&query=${lati},${langi}`}
                            target="_blank"
                            underline="hover"
                          >
                            {com} on Google Map
                          </Link>
                        </ListItemText>
                      </Item>
                    </Grid>
                  </Grid>
                </ListItem>
              </ul>
              <ul>
                <ListSubheader className={classes.subheader}>Description</ListSubheader>
                <ListItem>
                  <Typography align="justify" gutterBottom paragraph="true" component="div">
                    {desc}
                  </Typography>
                </ListItem>
              </ul>
            </li>
          </List>
        </DialogContent>
        <DialogActions />
      </Dialog>
      <Page title="Search | MTV">
        <Container>
          <Stack direction="column" alignItems="center" justifyContent="space-between" mb={5}>
            <Typography variant="h3" gutterBottom>
              Search Your Job.
            </Typography>
            <br />
            <Box
              border={1.9}
              borderColor="#00AB55"
              display="flex"
              justifyContent="center"
              alignItems="center"
              borderRadius={7}
              padding={2}
            >
              <div>
                For searching any job vaccancy, Please enter the keyword in the below box. For
                prediction of average salary click{' '}
                <Link component={RouterLink} underline="hover" to="/dashboard/vrudit">
                  here
                </Link>
                .
              </div>
            </Box>
          </Stack>

          <Card>
            <UserListToolbar
              numSelected={selected.length}
              filterName={filterName}
              onFilterName={handleFilterByName}
            />

            <Scrollbar>
              <TableContainer sx={{ minWidth: 800 }}>
                <Table>
                  <UserListHead
                    order={order}
                    orderBy={orderBy}
                    headLabel={TABLE_HEAD}
                    rowCount={USERLIST.length}
                    numSelected={selected.length}
                    onRequestSort={handleRequestSort}
                    onSelectAllClick={handleSelectAllClick}
                  />
                  <TableBody>
                    {filteredUsers
                      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                      .map((row) => {
                        const {
                          id,
                          name,
                          role,
                          com_name,
                          logo_url,
                          isVerified,
                          rating,
                          location,
                          sal_med,
                          sal_high,
                          sal_low,
                          lati,
                          lngi,
                          hq,
                          f_year,
                          industry,
                          sector,
                          size,
                          com_type,
                          revenue,
                          ceo_name,
                          ceo_photo,
                          web_url,
                          desc
                        } = row;
                        const isItemSelected = selected.indexOf(name) !== -1;

                        return (
                          <TableRow
                            hover
                            key={id}
                            tabIndex={-1}
                            role="checkbox"
                            selected={isItemSelected}
                            aria-checked={isItemSelected}
                          >
                            <TableCell padding="checkbox">
                              {/* <Checkbox
                              checked={isItemSelected}
                              onChange={(event) => handleClick(event, name)}
                            /> */}
                            </TableCell>
                            <TableCell component="th" scope="row" padding="none">
                              <Stack direction="row" alignItems="center" spacing={2}>
                                <Avatar alt={name} src={logo_url} />
                                <Typography variant="subtitle2" noWrap>
                                  {name}
                                </Typography>
                              </Stack>
                            </TableCell>
                            <TableCell align="left">{com_name}</TableCell>
                            <TableCell align="right">
                              <Button
                                onClick={() => {
                                  setNom(name);
                                  setId(id);
                                  setRat(rating);
                                  setCom(com_name);
                                  setMs(sal_low);
                                  setAs(sal_med);
                                  setHs(sal_high);
                                  setLocation(location);
                                  setLati(lati);
                                  setLangi(lngi);
                                  setHq(hq);
                                  setFy(f_year);
                                  setInd(industry);
                                  setSec(sector);
                                  setSize(size);
                                  setType(com_type);
                                  setRev(revenue);
                                  setCname(ceo_name);
                                  setPhoto(ceo_photo);
                                  setWeb(web_url);
                                  setDesc(desc);
                                  clicked();
                                }}
                              >
                                Check
                              </Button>
                            </TableCell>
                            {/* <TableCell align="left">{role}</TableCell>
                          <TableCell align="left">{isVerified ? 'Yes' : 'No'}</TableCell> */}
                            {/* <TableCell align="left">
                            <Label
                              variant="ghost"
                              color={(status === 'banned' && 'error') || 'success'}
                            >
                              {sentenceCase(status)}
                            </Label>
                          </TableCell>

                          <TableCell align="right">
                            <UserMoreMenu />
                          </TableCell> */}
                          </TableRow>
                        );
                      })}
                    {emptyRows > 0 && (
                      <TableRow style={{ height: 53 * emptyRows }}>
                        <TableCell colSpan={6} />
                      </TableRow>
                    )}
                  </TableBody>
                  {isUserNotFound && (
                    <TableBody>
                      <TableRow>
                        <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
                          <SearchNotFound searchQuery={filterName} />
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  )}
                </Table>
              </TableContainer>
            </Scrollbar>

            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={USERLIST.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Card>
        </Container>
      </Page>
    </>
  );
}
