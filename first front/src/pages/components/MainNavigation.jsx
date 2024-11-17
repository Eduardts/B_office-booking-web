import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from 'react-sidebar';
import { FaAtom, FaBars, FaHouseUser } from "react-icons/fa";
import { RiAppsLine } from "react-icons/ri";
import { GiOfficeChair } from "react-icons/gi";

class MainNavigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  render() {
    return (
      <Sidebar
        sidebar={
          <nav>
            <ul>
              <li>
                <Link to="/home"><FaHouseUser size={30} /></Link>
              </li>
              <li>
                <Link to="/yourbooking"><RiAppsLine size={30} /></Link>
              </li>
              <li>
                <Link to="/selectnewbooking"><GiOfficeChair size={30}/></Link>
              </li>
              <li>
                <Link to="/More"><FaBars size={30}/></Link>
              </li>
              <li>
                <Link to="/Seatbooking"><FaBars size={30}/></Link>
              </li>
            </ul>
          </nav>
        }
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        styles={{ sidebar: { background: "white" } }}
      >
        <button onClick={() => this.onSetSidebarOpen(true)}>
          <FaAtom size={30}/>
        </button>
      </Sidebar>
    );
  }
}

export { MainNavigation };

