import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import CustomNavbar from "./Compoents/Navbar";
import UserDetails from "./Compoents/UserDetails";
import Alert from "./Compoents/Alert";
import {useSelector} from "react-redux";
import AdminDashboard from "./Pages/AdminDashboard";


function App() {
  const msg=useSelector(state=>state.msg)
 
  return (
    <BrowserRouter>
      <CustomNavbar />
     {msg &&<Alert />} 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-user" element={<AdminDashboard />} />
        <Route path="/:id" element={<UserDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
