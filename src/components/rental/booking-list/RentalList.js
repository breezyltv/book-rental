import React from 'react';
import {RentalCard} from './RentalCard';
import { connect } from 'react-redux';

import * as actions from '../../../actions';

class RentalList extends React.Component {


  //make a item room and send data to RentalCard.js*/
  renderRentals(){
    return this.props.rooms.map((rooms, index) => {
      return (
        <RentalCard key={index}
                    rooms={rooms}
                    colNum='col-md-3 col-xs-6' />
      )
    });
  }


  componentWillMount(){
    //call actions and get data before render
    this.props.dispatch(actions.fetchBooking());
  }

  render(){
    return (
      <section id="rentalListing">
        <h1 className="page-title">Your Home All Around the World</h1>
        <div className="row">
          {this.renderRentals()}
        </div>
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
export default connect(mapStateToProps)(RentalList)
