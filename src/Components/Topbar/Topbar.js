import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSistrix, FaUserCircle } from "react-icons/fa";
import "./Topbar.css";
import { FiLogOut, FiUser } from "react-icons/fi";
function Topbar() {
  let navigate = useNavigate();
  let handleLogout = () => {
    window.localStorage.removeItem("myapptoken");
    navigate("/");
  };
  return (
    <>
      <nav class="navbar navbar-expand  d-flex justify-content-between   topbarr  content-wrapper ">
        <form>
          <div class="input-group">
            <input
              type="text"
              class="form-control  bg-light ms-1 search mt-2"
              placeholder="Search for..."
              aria-label="Search"
              aria-describedby="basic-addon2"
            />

            <button class="btn text-light btnn mt-2" type="button">
              <FaSistrix />
            </button>
          </div>
        </form>

        <div class="nav-item fs-4 ">
          <li class="nav-item dropdown header-profile ">
            <p class="nav-link1" data-bs-toggle="dropdown">
              <FaUserCircle className="usericon" />
            </p>
            <div class="dropdown-menu dropdown-menu-end">
              <Link to="/profile">
                <FiUser className="text-primary ms-3 me-2 fs-4 " /> Profile
              </Link>{" "}
              <button onClick={handleLogout} class="dropdown-item ai-icon">
                <FiLogOut className="text-danger fs-4 me-2" />
                <span class="ms-2">Logout </span>
              </button>
            </div>
          </li>
        </div>
        {/* <div class="nav-item fs-4 ">
          <button className="btn btn-outline-danger " onClick={handleLogout} >
            <i class="fas fa-sign-out-alt  fa-md mr-1 text-danger"></i>Logout
          </button>
        </div> */}
      </nav>
      <hr className="mt-0" style={{ color: "blueviolet" }} />
    </>
  );
}

export default Topbar;
