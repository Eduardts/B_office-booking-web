import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

type Room = {
  id: string;
  reserved: boolean;
};

interface OfficeProps {
  selected?: string;
  onHovered: (id: string | undefined) => void;
}

const Office = (props: OfficeProps) => {
  const [rooms, setRooms] = useState<Room[]>(
    [
      { id: 'wc-1', reserved: false },
      { id: 'office-1', reserved: false },
    ]
  );
  const [selected, setSelected] = useState<string[]>([]);
  const [totalprice, setTotalPrice] = useState<number>(0);
  const navigate = useNavigate();

  const toggleReservation = (id: string) => {
    setRooms(rooms.map(room => (room.id === id ? { ...room, reserved: !room.reserved } : room)));
    
    if (selected.includes(id)) {
      setSelected(selected.filter(roomId => roomId !== id));
      setTotalPrice(totalprice - 10); // assuming each room costs $10
    } else {
      setSelected([...selected, id]);
      setTotalPrice(totalprice + 10);
    }
  };

  useEffect(() => {
    if (props.selected) {
      let el = document.getElementById(props.selected);
      if (el) {
        el.classList.add("active");
        el.onmouseleave = () => {
          if (props.selected) {
            let currentEl = document.getElementById(props.selected);
            if (currentEl && currentEl.classList) {
              currentEl.classList.remove("active");
            }
          }
        }
      }
    }
  }, [props.selected]);

  return (
    <>
      <div>
        <div>
          {rooms.map((room) => (
            <button key={room.id} onClick={() => toggleReservation(room.id)} style={{ backgroundColor: room.reserved ? 'red' : 'green' }}>
              Room {room.id}
            </button>
          ))}
        </div>
        <div className="sidebar">
          {selected.length !== 0 && (
            <>
              <div className="room-price">
                <div className="room-select">
                  <h1 className="rooms-select">ROOM:{selected.toString()}</h1>
                </div>
                <div className="totalprice">
                  <h1 className="price">
                    price:{"$"}
                    {totalprice}
                  </h1>
                </div>
              </div>
              <button
                className="continue"
                onClick={() => navigate(`/Final/${selected}/${totalprice}`)}
              >
                continue
              </button>
            </>
          )}
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="876"
        height="618"
        fill="none"
        viewBox="0 0 876 618"
      >
        {rooms.map((room) => (
          <path
            key={room.id}
            className={`room ${room.id}`}
            id={room.id}
            d={room.id === 'wc-1' ? "M732 196V282H836V196H732Z" : "M835.5 296H369V574H835.5V296Z"}
            stroke-width="2"
            onMouseEnter={() => props.onHovered(room.id)}
            onMouseLeave={() => props.onHovered(undefined)}
            onClick={() => toggleReservation(room.id)}
            style={{ fill: room.reserved ? 'red' : 'green' }}
          />
        ))}
      </svg>
    </>
  );
}


export default Office;
