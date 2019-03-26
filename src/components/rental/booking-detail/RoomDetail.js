import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../actions';

class RoomDetail extends React.Component {

  componentWillMount(){
    const roomID = this.props.match.params.id;
    //call actions
    this.props.dispatch(actions.fetchBookingById(roomID));
  }

  render(){
    const room = this.props.room

      if(room.id){
        return(
        <div>
          <h2> This is detail page !!! id: {room.id} </h2>
          <h2> {room.title} </h2>
          <h2> {room.city} </h2>
        </div>
        )
    }else {
      return(
        <h2>Loading...</h2>
      )
    }

  }
}

function mapStateToProps(state){
  return{
    //after call actions then getting data from Provider redux and retore data to a object
    room: state.room.data
  }
}
//transfer data from mapStateToProps() to props in RoomDetail.js
export default connect(mapStateToProps)(RoomDetail)
