import { FETCH_BOOKING,
         FETCH_BOOKING_BY_ID,
         FETCH_BOOKING_BY_ID_INIT } from './types';

const rooms = [{
  id: "1",
  title: "Central Apartment",
  city: "New York",
  street: "Times Sqaure",
  category: "apartment",
  image: "http://via.placeholder.com/350x250",
  bedrooms: 3,
  description: "Very nice apartment",
  dailyRate: 34,
  shared: false,
  createdAt: "24/12/2017"
},
{
  id: "2",
  title: "Central Apartment 2",
  city: "San Francisco",
  street: "Main street",
  category: "condo",
  image: "http://via.placeholder.com/350x250",
  bedrooms: 2,
  description: "Very nice apartment",
  dailyRate: 12,
  shared: true,
  createdAt: "24/12/2017"
},
{
  id: "3",
  title: "Central Apartment 3",
  city: "Bratislava",
  street: "Hlavna",
  category: "condo",
  image: "http://via.placeholder.com/350x250",
  bedrooms: 2,
  description: "Very nice apartment",
  dailyRate: 334,
  shared: true,
  createdAt: "24/12/2017"
},
{
  id: "4",
  title: "Central Apartment 4",
  city: "Berlin",
  street: "Haupt strasse",
  category: "house",
  image: "http://via.placeholder.com/350x250",
  bedrooms: 9,
  description: "Very nice apartment",
  dailyRate: 33,
  shared: true,
  createdAt: "24/12/2017"
}];

export const fetchBooking = () => {
  return {
    // send action type to reducers
    type: FETCH_BOOKING,
    rooms: rooms
  }
}

export const fetchBookingById = (roomID) => {

  //send request to server using redux thunk async await
  return function(dispatch){

    //init data before store other data
    dispatch(fetchBookingByIdInit());

    setTimeout(() => {
      const room = rooms.find((room) => {return room.id === roomID});
      dispatch(fetchBookingByIdSuccess(room));
    }, 1000);
  }

}

const fetchBookingByIdInit = () => {
  return{
    type: FETCH_BOOKING_BY_ID_INIT
  }
}

const fetchBookingByIdSuccess = (room) => {
  return{
    type: FETCH_BOOKING_BY_ID,
    room
  }
}
