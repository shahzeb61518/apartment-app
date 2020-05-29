import React from 'react';

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { indigo } from '@material-ui/core/colors';

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Header from './Components/Common/Header'
import Main from './Components/Main'
import PropertyDetails from './Components/Pages/PropertyDetails'
import Offers from './Components/Pages/Offers'
import ListingStatistics from './Components/Pages/ListingStatistics'

import { MAIN_BLUE_BACKGROUND } from './Components/config/colors'
import './App.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1c59bd',
    },
    secondary: indigo
  },
  overrides: {
    MuiInput: {
      underline: {
        "&&&&:hover:before": {
          borderBottom: "1px solid rgba(0, 0, 0, 0.42)"
        }
      }
    }
  }
});

function App() {
  const loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  return (
    <div className="App">
      <Router  >
        <React.Suspense fallback={loading()}>
          <MuiThemeProvider theme={theme}>
            <div style={{ background: MAIN_BLUE_BACKGROUND }}>
              <br />
              <Header />
              <Switch>
                <Route exact path="/property-details" name="Property Details" render={props => <PropertyDetails {...props} />} />
                <Route exact path="/offers" name="Offers" render={props => <Offers {...props} />} />
                <Route exact path="/listing-statistics" name="Listing Statistics" render={props => <ListingStatistics {...props} />} />
                <Route exact path="/home" name="Property Details" render={props => <Main {...props} />} />
                <Redirect to='/home' />
              </Switch>
            </div>

          </MuiThemeProvider>
        </React.Suspense>
      </Router>
    </div>
  );
}

export default App;
