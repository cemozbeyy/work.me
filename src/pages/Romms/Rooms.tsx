import React, { useState } from "react";

import "../Romms/Rooms.scss";
import { Room } from "../../core/rooms";

const Rooms: React.FC<{}> = () => {
  const roomList: Room[] = [
    { no: 1, id: 1123213, name: "Oda 1" },
    { no: 2, id: 3123122, name: "Oda 2" },
    { no: 3, id: 33211145, name: "Oda 3" },
    // Diğer odaları buraya ekleyin...
  ];
  return (
    <div className="room-list-container">
      {roomList.map((room) => (
        <div key={room.id} className="room-item">
          <span className="room-no">{room.no} -) </span>
          <span className="room-name">{room.name}</span>
          <span className="room-id"> id: {room.id}</span>
        </div>
      ))}
    </div>
  );
};

export default Rooms;
