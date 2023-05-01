import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import axios from 'axios'
import logo from '../../logo.svg';
import '../../App.css';
import img from '../../media/aiko.png'
import { AppBar, Avatar, Box, Paper, Tab, Tabs, TextField, Toolbar, Typography } from '@mui/material';
import './camera.css'

import PropTypes from 'prop-types';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Camera = () => {
  const [message, setMessage] = React.useState('');
  const [value, setValue] = React.useState(0);

  function handleClickButton(action) {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: action
    };
    console.log(requestOptions)
    const req = axios.post('http://127.0.0.1:8000/api/action', requestOptions)
    .then((resp) => {
      console.log(resp)
    }).catch((err) => {
      console.log(err)
    })
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    // , backgroundColor: "#85C1E9"
    <div style={{ padding: '1%' }}>
      <AppBar style={{ backgroundColor: '#bd6b2d'}}>
        <Toolbar>
          <h1 style={{ color: 'white' }}>Aiko Dashboard</h1>
        </Toolbar>
      </AppBar>
      
      <Box sx={{ flexGrow: 1 }} mt={13}>
        <Grid container spacing={2}>
          <Grid xs={1}></Grid>
          <Grid xs={7}>
            <div>
                <Card style={{ borderRadius: '20px', color: 'white', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0)', maxWidth: '100%', backgroundColor: 'lightgray' }}>
                  <h1 color='white' style={{ marginLeft:'2%'}}>Video Feed</h1>
                  <Paper sx={{ p: 2, maxHeight: '70vh', backgroundColor: 'lightgray' }}>
                    <center>
                      <img
                        src="http://127.0.0.1:8000/api/getfeed"
                        alt="Video"
                        style={{ minHeight: '35vh', width: '45vw', padding: "2%"}}
                      />
                    </center>
                  </Paper>
                </Card>
                {/* <img
                  src="http://127.0.0.1:8000/api/getfeed"
                  alt="Video"
                  style={{ height: '500px', width: '680px', padding: "2%"}}
                /> */}
            </div>
            {/* <center>
            </center> */}
          </Grid>
          {/* <Grid xs={6}>
            <div>
              <h1>Chat</h1>
              <Card style={{ borderRadius: '20px', backgroundColor: 'white', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0)', maxWidth: '90%', padding: '5%' }}>
                <Paper sx={{ p: 2, minHeight: '260px' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Avatar alt="Aiko" src={img} sx={{ mr: 2 }} />
                    <Typography variant="h6">Aiko</Typography>
                  </Box>
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="subtitle2">Aiko Message</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Avatar sx={{ mr: 2 }}>H</Avatar>
                    <Typography variant="h6">Human</Typography>
                  </Box>
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="subtitle2">Human Message</Typography>
                  </Box>
                </Paper>             
              </Card>
            </div>
          </Grid> */}
          <Grid xs={3}>
            <div>
              <h1 style={{ color : '#919294'}}>Choose Actions</h1>
              <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Move" {...a11yProps(0)} />
                    <Tab label="Voice" {...a11yProps(1)} />
                  </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                  <Card style={{ borderRadius: '20px', backgroundColor: 'white', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0)', maxWidth: '90%', padding: '5%' }}>
                    <CardActions sx={{}}>
                      <Button variant='outlined' color='primary' style={{ minWidth: '20%' }} onClick={(e) => {handleClickButton('dance')}}>Dance</Button>
                      <Button variant='outlined' style={{ minWidth: '20%' }} onClick={(e) => {handleClickButton('takepicture')}}>Take Picture</Button>
                    </CardActions>
                  </Card>
                </TabPanel>
                <TabPanel value={value} index={1}>
                <Card style={{ borderRadius: '20px', backgroundColor: 'white', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0)', maxWidth: '90%', padding: '5%' }}>
                    <CardActions sx={{}}>
                    <Button variant='outlined' style={{ minWidth: '20%' }} onClick={(e) => {handleClickButton('sing')}}>Sing</Button>
                  <Button variant='outlined' style={{ minWidth: '20%' }} onClick={(e) => {handleClickButton('laugh')}}>Laugh</Button>
                    </CardActions>
                  </Card>
                </TabPanel>
                
              </Box>
              {/* <Card style={{ borderRadius: '20px', backgroundColor: 'white', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0)', maxWidth: '90%', padding: '5%' }}>
                <CardActions sx={{}}>
                <Button variant='outlined' style={{ minWidth: '20%' }} onClick={(e) => {handleClickButton('dance')}}>Dance</Button>
                <Button variant='outlined' style={{ minWidth: '50%' }} onClick={(e) => {handleClickButton('wave')}}>Wave</Button>
                </CardActions>
                <CardActions sx={{}}>
                <Button variant='outlined' style={{ minWidth: '50%' }} onClick={(e) => {handleClickButton('sit')}}>Sit</Button>
                <Button variant='outlined' style={{ minWidth: '50%' }} onClick={(e) => {handleClickButton('stand')}}>Stand</Button>
                </CardActions>
                <CardActions sx={{}}>
                <Button variant='outlined' style={{ minWidth: '50%' }} onClick={(e) => {handleClickButton('sing')}}>Sing</Button>
                <Button variant='outlined' style={{ minWidth: '50%' }} onClick={(e) => {handleClickButton('talk')}}>Talk</Button>
                </CardActions>
              </Card> */}
            </div>
          </Grid>
          <Grid xs={1}></Grid>
          {/* <Grid xs={6}>
            <div>
              <h1>Logs</h1>
              <Card style={{ borderRadius: '20px', backgroundColor: 'white', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0)', maxWidth: '90%', padding: '5%' }}>
                <Paper sx={{ p: 2, minHeight: '265px', backgroundColor: 'black' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, color: 'white' }}>
                    <Typography variant="h6"> # Log Message</Typography>
                  </Box>
                </Paper>             
              </Card>
            </div>
          </Grid> */}
        </Grid>

      </Box>

      
    </div>
  );
};
export default Camera;