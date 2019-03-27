const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/configMongoDB');
const Booking = require('./models/booking');
const SampleDB = require('./SampleDB');

const bookingRoute = require('./routes/BookingRoute');


mongoose.connect(config.DB_URL, { useNewUrlParser: true }).then(()=>{

  console.log('Connected to MongoDB successfully :)');

  //push data to MongoDB
  const makeSampleDB = new SampleDB();
  makeSampleDB.seeDB();

});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const app = express();

// 'rooms' is Collection Name that is defined in booking.js Models
app.use('/api/v1/rooms', bookingRoute);

const PORT = process.env.PORT || 3001;


app.listen(PORT, function(){
  console.log('Server is running :)');
});
