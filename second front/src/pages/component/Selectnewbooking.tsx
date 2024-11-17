import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; //import { Link } from "react-router-dom"
//import Seatbooking from "./Seatbooking"
import europehouse from './europehouse.jpg';
import greencourt from './greencourt.jpeg';
import tandem from './tandem.jpeg';

let data = [
  {
    id: "1",
    Title: "Europe House",
    Poster: europehouse
  },
  {
    id: "2",
    Title: "Green Court",
    Poster: greencourt
  },
  {
    id: "3",
    Title: "Tandem",
    Poster: tandem
  },
];
function AlertPage() {
  const [booking, setBooking] = useState(data);
//  useEffect(() => {
//    fetch(data)
//      .then((response) => response.json())
//      .then((json) => setBooking(json));
//  }, []);
  let navigate = useNavigate();

  return (
    <>
      <div
        style={{
          display: "flex",
          //flexDirection: "row-reverse",
          gap: "40px",
          boxShadow: "1px 1px 1px 1px solid black",
          flexWrap: "wrap"
        }}
      >
        {booking.map((booking) => (
          <div>
            <div
              key={booking.id}
              style={{
                backgroundColor: "white",
                boxShadow: "1px 1px 1px 1px gray",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                borderRadius: "18px",
                justifyContent: "center",
                height: "300px",
                width: "300px",
                gap: "8px"
              }}
            >
              <div style={{ width: "80%" }}>
                <h3>{booking.Title}</h3>
              </div>

              <img
                width="250px"
                height="80%"
                src={booking.Poster}
                alt="not found"
              />
              <button
                onClick={() => {
                 console.log("Button clicked");
                 switch (booking.Title) {
                   case "Europe House":
                     navigate(`/Seatbooking`);
                     break;
                   case "Green Court":
                     navigate(`/Greenbooking`);
                     break;
                   case "Tandem":
                     navigate(`/Tandembooking`);
                     break;
                   default:
                     break;
                }
              }}
              style={{
                backgroundColor: "green",
                height: "50px",
                marginBottom: "5px",
                borderRadius: "5px",
                border: "none",
                cursor: "pointer"
              }}
              >
                BOOKING
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default AlertPage;


