import "./styles.css";
import { useState, useEffect } from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


interface OfficeProps {
  selected?: string;
  onHovered: (id: string | undefined) => void;
}

const Office = (props: OfficeProps) => {
  const [prevEl, setPrevEl] = useState<HTMLElement | undefined>(undefined);

useEffect(() => {
  if (props.selected) {
    if (prevEl) {
      prevEl.classList.remove("active");
      prevEl.onmouseleave = null; // remove previous event handler
    }

    let el = document.getElementById(props.selected);
    if (el) {
      el.classList.add("active");
      el.onmouseleave = () => {
        if (props.selected) {
          let currentEl = document.getElementById(props.selected);
          if (currentEl && currentEl.classList) {
            currentEl.classList.remove("active"); // add event handler
          }
        }
      }
      setPrevEl(el);
    }
  }
}, [props.selected, prevEl]);


  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="876"
      height="618"
      fill="none"
      viewBox="0 0 876 618"
    >
      <path fill="#fff" d="M0 0H876V618H0z"></path>
      <path fill="url(#pattern0)" d="M0 0H876V618H0z"></path>
      <path
        d="M35.5 34V282.5H227.5V196L167.5 130.5V34H35.5Z"
        strokeWidth="2"
        className="room kitchen"
        id="kitchen-1"
        onMouseEnter={() => props.onHovered("kitchen-1")}
        onMouseLeave={() => props.onHovered(undefined)}
      />

      <path
        className="room meeting"
        id="meeting-1"
        d="M174 296H36V574H174V296Z"
        stroke-width="2"
        onMouseEnter={() => props.onHovered("meeting-1")}
        onMouseLeave={() => props.onHovered(undefined)}
      />

      <path
        className="room meeting"
        id="meeting-2"
        d="M364.5 296H180V573.5H364.5V296Z"
        stroke-width="2"
        onMouseEnter={() => props.onHovered("meeting-2")}
        onMouseLeave={() => props.onHovered(undefined)}
      />

      <path
        className="room wc"
        id="wc-1"
        d="M732 196V282H836V196H732Z"
        stroke-width="2"
        onMouseEnter={() => props.onHovered("wc-1")}
        onMouseLeave={() => props.onHovered(undefined)}
      />

      <path
        className="room office"
        id="office-1"
        d="M835.5 296H369V574H835.5V296Z"
        stroke-width="2"
        onMouseEnter={() => props.onHovered("office-1")}
        onMouseLeave={() => props.onHovered(undefined)}
      />

      <defs>
        <pattern
          id="pattern0"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <use
            transform="scale(.00114 .00162)"
            xlinkHref="#image0_509_238"
          ></use>
        </pattern>
        <image
          id="image0_509_238"
          width="876"
          height="618"
          //xlinkhref
        ></image>
      </defs>
    </svg>
  );
};

export default function AnalyticsPage() {
 const [selected, setSelected] = useState<string | undefined>(undefined);

  return (
    <div className="App">
      <div className="rooms">
        <div className="calendar-container">
          <Calendar />
        </div>
        <h2>Cauta Birou</h2>
         <p className="tip">
          Planul etaj sau apartament.
        </p>
        <div>
          <b>Birou</b>
        </div>
        <div
          onMouseEnter={() => setSelected("office-1")}
          onMouseOut={() => setSelected(undefined)}
          className={`room-link ${selected === "office-1" ? "active" : ""}`}
        >
          <span
            className="square"
            style={{
              backgroundColor: "#3b82f6"
            }}
          ></span>
          Birou n°1
        </div>
        <br />
        <div>
          <b>Sala de reuniune</b>
        </div>
        <div
          onMouseEnter={() => setSelected("meeting-1")}
          onMouseOut={() => setSelected(undefined)}
          className={`room-link ${selected === "meeting-1" ? "active" : ""}`}
        >
          <span
            className="square"
            style={{
              backgroundColor: "#a229b6"
            }}
          ></span>
          Sala de reuniune n°1
        </div>
        <div
          onMouseEnter={() => setSelected("meeting-2")}
          onMouseOut={() => setSelected(undefined)}
          className={`room-link ${selected === "meeting-2" ? "active" : ""}`}
        >
          <span
            className="square"
            style={{
              backgroundColor: "#a229b6"
            }}
          ></span>
          Sala de reuniune n°2
        </div>
        <br />
        <div>
          <b>Comun</b>
        </div>
        <div
          onMouseEnter={() => setSelected("kitchen-1")}
          onMouseOut={() => setSelected(undefined)}
          className={`room-link ${selected === "kitchen-1" ? "active" : ""}`}
        >
          <span
            className="square"
            style={{
              backgroundColor: "#f43f5e"
            }}
          ></span>
          Bucatarie
        </div>
        <div
          onMouseEnter={() => setSelected("wc-1")}
          onMouseOut={() => setSelected(undefined)}
          className={`room-link ${selected === "wc-1" ? "active" : ""}`}
        >
          <span
            className="square"
            style={{
              backgroundColor: "#34d399"
            }}
          ></span>
          WC
        </div>
      </div>
      <Office
        selected={selected}
        onHovered={(id: string | undefined) => {
          setSelected(id);
        }}
      />
    </div>
  );
}



















