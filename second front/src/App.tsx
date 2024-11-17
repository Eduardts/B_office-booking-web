import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./Login";
import { Signup } from "./Signup";
import { Forgotpassword } from "./Forgotpassword";
//import { Installation } from "./pages/installation/InstallationPage";
import MainLayout from "./components/layout/MainLayout";
import { routes } from "./routes";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {routes}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

//        <Route path="/" element={<Login />} />
//        <Route path="/signup" element={<Signup />} />
//        <Route path="/forgotpassword" element={<Forgotpassword />} />
