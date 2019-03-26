import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';

import {Header} from './shared/Header';
import RentalList from './components/rental/booking-list/RentalList';
import RoomDetail from './components/rental/booking-detail/RoomDetail';

import { init } from './reducers';

import './App.css';

// call init from ./reducers to get data
const store = init();

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
      <BrowserRouter>
      <div className="App">
        <Header />
          <div className="container">
            {/*default link by using Redirect ex: localhost:3030/roomlist */}
            <Route exact path="/" render={() => <Redirect to='/roomlist' />}/>
            <Route exact path="/roomlist" component={RentalList}/>
            <Route exact path="/roomlist/:id" component={RoomDetail}/>
          </div>
      </div>
      </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
