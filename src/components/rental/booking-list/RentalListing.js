import React from 'react';
import {RentalList} from './RentalList';
import { connect } from 'react-redux';

import * as actions from '../../../actions';

class RentalListing extends React.Component {


  componentWillMount(){
    //call actions and get data before render
    this.props.dispatch(actions.fetchBooking());
  }

  render(){
    return (
      <section id="rentalListing">
        <h1 className="page-title">Your Home All Around the World</h1>
        <RentalList rooms={this.props.rooms} />
      </section>
    )
  }
}

function mapStateToProps(state){
  return{
    //after call actions then getting data from Provider redux and retore data to a object
    rooms: state.rooms.data
  }
}
//transfer data from mapStateToProps() to props in RentalList.js
export default connect(mapStateToProps)(RentalListing)
