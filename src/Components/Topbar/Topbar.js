import React from "react";
import { useNavigate } from "react-router-dom";
import { FaSistrix, FaUserCircle } from "react-icons/fa";
import "./Topbar.css";

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
              class="form-control bg-light ms-3 search mt-2"
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
            <a
              class="nav-link1"
              href="javascript:void(0);"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <FaUserCircle className="usericon" />
            </a>
            <div class="dropdown-menu dropdown-menu-end">
              <a class="dropdown-item ai-icon">
                <svg
                  id="icon-user2"
                  xmlns="http://www.w3.org/2000/svg"
                  class="text-primary"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                <span class="ms-2">Profile </span>
              </a>

              <button onClick={handleLogout} class="dropdown-item ai-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="text-danger"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                  <polyline points="16 17 21 12 16 7"></polyline>
                  <line x1="21" y1="12" x2="9" y2="12"></line>
                </svg>
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
