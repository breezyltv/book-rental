import React from 'react';
import { Link } from 'react-router-dom'

export function RentalCard(props) {

  const room = props.rooms
  const id = '/roomlist/' + room.id

  return(
    <div className={props.colNum}>
      <Link to={id}>
        <div className="card bwm-card">
          <img className="card-img-top" src={room.image} alt=""></img>
          <div className="card-block">
            <h6 className="card-subtitle">{room.shared ? 'shared' : 'whole'} {room.category} &#183; {room.city}</h6>
            <h4 className="card-title">{room.title}</h4>
            <p className="card-text">${room.dailyRate} per Night &#183; Free Cancelation</p>
          </div>
        </div>
      </Link>
    </div>
  )
}
