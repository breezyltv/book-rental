import { FETCH_BOOKING,
         FETCH_BOOKING_BY_ID,
         FETCH_BOOKING_BY_ID_INIT } from '../actions/types';

//initial data before get data
const INITIAL_STATE = {
  rooms:{
    data: []
  },
  room: {
    data: []
  }
}

export const bookingReducer = (state = INITIAL_STATE.rooms, action) => {
  switch (action.type) {

    case FETCH_BOOKING:
      return {...state, data: action.rooms}

    default:
      return state;

  }
}

export const selectedRoomReducer = (state = INITIAL_STATE.room, action) => {
  switch (action.type) {

    case FETCH_BOOKING_BY_ID_INIT:
      return {...state, data: {}}

    case FETCH_BOOKING_BY_ID:
      // get data from action by FETCH_BOOKING_BY_ID
      //return Object.assign({}, state, {data: action.room});
      return {...state, data: action.room}
    default:
      return state;
  }
}
