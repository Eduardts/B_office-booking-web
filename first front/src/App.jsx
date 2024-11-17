import { CssBaseline } from "@mui/material";
import { MainNavigation } from './pages/components/MainNavigation';
import classes from './pages/Root.module.css';
import { Home } from "./pages/Home";
import { Yourbooking } from "./pages/Yourbooking";
import { Selectnewbooking } from "./pages/Selectnewbooking";
import { Seatbooking } from "./pages/Seatbooking";
import { Parkingseat } from "./pages/Parkingseat";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Final } from "./pages/Final";


function RootLayout() {
  return (
    <>
      <MainNavigation />
      <main className={classes.content}>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/yourbooking" element={<Yourbooking />} /> 
          <Route path="/selectnewbooking" element={<Selectnewbooking />} />
          <Route path="/seatbooking" element={<Seatbooking />} /> 
          <Route path="/parkingseat" element={<Parkingseat />} /> 
          <Route path="/Final/:selected/:totalprice" element={<Final />} />
        </Routes>
      </main>
    </>
  );
}

function App() {
  return (
    <div>
        <CssBaseline />
          <Routes>
            <Route path="/*" element={<RootLayout />} />
          </Routes>
    </div>
  );
}





export default App;



