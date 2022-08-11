import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Dashboard from "./Components/Dashboard/Dashboard";
import ReserveBook from "./Components/ReserveBook/ReserveBook";
import Reserveview from "./Components/Reserveview/Reserveview";
import Manageroooms from "./Components/ManageRooms/Manageroooms";
import Addrooms from "./Components/ManageRooms/Addrooms";

import Staff from "./Components/Staff/Staff";
import Maintenance from "./Components/Maintenance";
import AddStaff from "./Components/Staff/AddStaff";
import Profile from "./Pages/Profile/Profile";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>

        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/reservebook" element={<ReserveBook />} />
          <Route path="/reserveview" element={<Reserveview />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/managerooms" element={<Manageroooms />} />
          <Route path="/addrooms" element={<Addrooms />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/addstaff" element={<AddStaff />} />
          <Route path="/maintenance" element={<Maintenance />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
