const express = require('express');
const router = express.Router();
const Booking = require('../models/booking');

router.get('', function(req, res){
  Booking.find({},function(err, foundRooms){
    res.json(foundRooms)
  });
});

router.get('/:id', function(req, res){
  Booking.findById(req.params.id,function(err, foundRoomById){
    if(err){
      res.status(422).send({errors: [{title: 'ohh!!!',
                            detail: 'Could not find room with ID: ' + req.params.id}]});
    }
    res.json(foundRoomById);
  });
});

module.exports = router;
