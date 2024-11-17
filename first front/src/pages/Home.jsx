import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; //import { Link } from "react-router-dom"
// import Body from "/Body"

let data = [
  {
    id: "1",
    Title: "YOUR TODAY'S BOOKINGS'",
    Subtitle: "You don't have any bookings yet",
    Poster:
      ""
  },
  {
    id: "1",
    Title: "OFFICE OCCUPANCY",
    Subtitle: "You don't have any bookings yet",
    Poster:
      ""
  },
  {
    id: "1",
    Title: "YOUR SCHEDULER",
    Subtitle: "You don't have any events yet",
    Poster:
      ""
  },
];
function Home() {
  const [booking, setBooking] = useState(data);
//  useEffect(() => {
//    fetch(data)
//      .then((response) => response.json())
//      .then((json) => setBooking(json));
//  }, []);
  let navigate = useNavigate();

  return (
    <>
      <h2
        style={{
          width: "100%",
          backgroundColor: "purple",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "40px"
        }}
      >
        Traderium???
      </h2>
      <h1
        style={{
          width: "100%",
          backgroundColor: "grey",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "80px"
        }}
      >
        Welcome, "username"! It's "datetime" Have a nice day!
      </h1>
      <div
        style={{
          display: "flex",
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
              
              <div style={{ width: "70%" }}>
                <h5>{booking.Subtitle}</h5>
              </div>
              
              <img
                width="250px"
                height="80%"
                alt=""
              />
              <button
                onClick={() => navigate(`/Body`)}
                style={{
                  backgroundColor: "green",
                  height: "50px",
                  marginBottom: "5px",
                  borderRadius: "5px",
                  border: "none",
                  cursor: "pointer"
                }}
              >
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export { Home };

