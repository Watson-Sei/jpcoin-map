import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Index from './components/Index';
import Map from './components/Map';

function App() {

  return (
    <React.Fragment>
      <AppBar position="static" style={{ backgroundColor: "white" }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" sx={{ mr: 2 }}>
            <img src={`${process.env.PUBLIC_URL}/japan.png`} alt="" />
          </IconButton>
          <Typography style={{ color: "black" }}>
            JPCoin Map
          </Typography>
        </Toolbar>
      </AppBar>
      <BrowserRouter>
        <Switch>
          <Route exact path='/map'>
            <Map />
          </Route>
          <Route path='/'>
            <Index />
          </Route>
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App;
