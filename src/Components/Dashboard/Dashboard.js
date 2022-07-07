import Chart from "../Chart/Chart";
import Featured from "../Featured/Featured";
import Sidebar from "../Sidebar/Sidebar";
import Topbar from "../Topbar/Topbar";
import Calendar from "react-calendar";
import "./dashboard.css";
import { useEffect, useState } from "react";

import axios from "axios";

let float = [
  {
    name: " Strater Package",
    color: "bg-danger",
    value: "progress-bar 60%",
  },
  {
    name: " Honeymoon Package",
    value: "40%",
    color: "progress-bar bg-warning",
  },
  {
    name: " Vacation Package",
    value: "30%",
    color: "progress-bar bg-primary",
  },
  {
    name: " Continental Package",
    value: "25%",
    color: " progress-bar bg-info",
  },
  {
    name: " Spring Package",
    value: "15%",
    color: "progress-bar bg-success",
  },
];

function Dashboard(props) {
  const [value, onChange] = useState(new Date());
  const [booking, setbooking] = useState([]);
  const [room, setroom] = useState([]);

  async function fetchAll() {
    try {
      let userData = await axios.get(
        "https://hotel-backend-deploy.herokuapp.com/bookings"
      );
      let roomData = await axios.get(
        "https://hotel-backend-deploy.herokuapp.com/rooms"
      );
      setbooking(userData.data);
      setroom(roomData.data);
    } catch (error) {}
  }
  useEffect(() => {
    fetchAll();
  }, []);

  return (
    <>
      <Sidebar />

      <Topbar />

      <div class="container-fluid">
        <div class="row  mt-5 ">
          <div className="col-lg-2 p-0"></div>
          <div className="col-lg-10 mt-4">
            <div className="row ms-4">
              <div class="col-xl-3   col-sm-8 mt-4 ">
                <div class="card booking cardd">
                  <div class="card-body">
                    <div class="booking-status  d-flex align-items-center">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="28"
                          height="20"
                          viewBox="0 0 28 20"
                        >
                          <path
                            d="M27,14V7a1,1,0,0,0-1-1H6A1,1,0,0,0,5,7v7a3,3,0,0,0-3,3v8a1,1,0,0,0,2,0V24H28v1a1,1,0,0,0,2,0V17A3,3,0,0,0,27,14ZM7,8H25v6H24V12a2,2,0,0,0-2-2H19a2,2,0,0,0-2,2v2H15V12a2,2,0,0,0-2-2H10a2,2,0,0,0-2,2v2H7Zm12,6V12h3v2Zm-9,0V12h3v2ZM4,17a1,1,0,0,1,1-1H27a1,1,0,0,1,1,1v5H4Z"
                            transform="translate(-2 -6)"
                            fill="var(--primary)"
                          ></path>
                        </svg>
                      </span>
                      <div class="ms-4">
                        <h5 class="mb-0 font-w600 text-primary">Total Rooms</h5>
                        <h5 class="mb-0 text-nowrap text-center mt-2">
                          {room.length}
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-xl-3 col-sm-8 mt-4">
                <div class="card booking cardd">
                  <div class="card-body">
                    <div class="booking-status d-flex align-items-center">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="28"
                          height="20"
                          viewBox="0 0 28 20"
                        >
                          <path
                            d="M27,14V7a1,1,0,0,0-1-1H6A1,1,0,0,0,5,7v7a3,3,0,0,0-3,3v8a1,1,0,0,0,2,0V24H28v1a1,1,0,0,0,2,0V17A3,3,0,0,0,27,14ZM7,8H25v6H24V12a2,2,0,0,0-2-2H19a2,2,0,0,0-2,2v2H15V12a2,2,0,0,0-2-2H10a2,2,0,0,0-2,2v2H7Zm12,6V12h3v2Zm-9,0V12h3v2ZM4,17a1,1,0,0,1,1-1H27a1,1,0,0,1,1,1v5H4Z"
                            transform="translate(-2 -6)"
                            fill="var(--primary)"
                          ></path>
                        </svg>
                      </span>
                      <div class="ms-4">
                        <h5 class="mb-0 font-w600 text-success">
                          Available Rooms
                        </h5>
                        <h5 class="mb-0 text-nowrap text-center mt-2">
                          {room.length - booking.length}
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-sm-8 mt-4">
                <div class="card booking cardd">
                  <div class="card-body">
                    <div class="booking-status d-flex align-items-center">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="28"
                          height="28"
                          viewBox="0 0 28 28"
                        >
                          <path
                            data-name="Path 1957"
                            d="M129.035,178.842v2.8a5.6,5.6,0,0,0,5.6,5.6h14a5.6,5.6,0,0,0,5.6-5.6v-16.8a5.6,5.6,0,0,0-5.6-5.6h-14a5.6,5.6,0,0,0-5.6,5.6v2.8a1.4,1.4,0,0,0,2.8,0v-2.8a2.8,2.8,0,0,1,2.8-2.8h14a2.8,2.8,0,0,1,2.8,2.8v16.8a2.8,2.8,0,0,1-2.8,2.8h-14a2.8,2.8,0,0,1-2.8-2.8v-2.8a1.4,1.4,0,0,0-2.8,0Zm10.62-7-1.81-1.809a1.4,1.4,0,1,1,1.98-1.981l4.2,4.2a1.4,1.4,0,0,1,0,1.981l-4.2,4.2a1.4,1.4,0,1,1-1.98-1.981l1.81-1.81h-12.02a1.4,1.4,0,1,1,0-2.8Z"
                            transform="translate(-126.235 -159.242)"
                            fill="var(--primary)"
                            fill-rule="evenodd"
                          ></path>
                        </svg>
                      </span>
                      <div class="ms-4">
                        <h5 class="mb-0 font-w600 text-warning">
                          Check In Rooms
                        </h5>
                        <h5 class="mb-0 text-nowrap text-center mt-2">
                          {booking.length}
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-sm-8 mt-4">
                <div class="card booking cardd">
                  <div class="card-body">
                    <div class="booking-status d-flex align-items-center">
                      <span>
                        <svg
                          id="_009-log-out"
                          data-name="009-log-out"
                          xmlns="http://www.w3.org/2000/svg"
                          width="28"
                          height="28"
                          viewBox="0 0 28 28"
                        >
                          <path
                            data-name="Path 1957"
                            d="M151.435,178.842v2.8a5.6,5.6,0,0,1-5.6,5.6h-14a5.6,5.6,0,0,1-5.6-5.6v-16.8a5.6,5.6,0,0,1,5.6-5.6h14a5.6,5.6,0,0,1,5.6,5.6v2.8a1.4,1.4,0,0,1-2.8,0v-2.8a2.8,2.8,0,0,0-2.8-2.8h-14a2.8,2.8,0,0,0-2.8,2.8v16.8a2.8,2.8,0,0,0,2.8,2.8h14a2.8,2.8,0,0,0,2.8-2.8v-2.8a1.4,1.4,0,0,1,2.8,0Zm-10.62-7,1.81-1.809a1.4,1.4,0,1,0-1.98-1.981l-4.2,4.2a1.4,1.4,0,0,0,0,1.981l4.2,4.2a1.4,1.4,0,1,0,1.98-1.981l-1.81-1.81h12.02a1.4,1.4,0,1,0,0-2.8Z"
                            transform="translate(-126.235 -159.242)"
                            fill="var(--primary)"
                            fill-rule="evenodd"
                          ></path>
                        </svg>
                      </span>
                      <div class="ms-4">
                        <h5 class="mb-0 font-w600 text-danger">
                          Reserved Rooms
                        </h5>
                        <h5 class="mb-0 text-nowrap text-center mt-2">5</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row   ms-4">
              <div className="charts">
                <Calendar
                  onChange={onChange}
                  className="cal shadow "
                  value={value}
                />
                <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
              </div>
              <div className="container-fluid mb-3">
                <div class="row ps-1  ">
                  <div class="col-lg-6 col-sm-8  mb-4">
                    <div class="card shadow ">
                      <div class="card-header py-3">
                        <h6 class="m-0 font-weight-bold text-secondary">
                          Top Selected Package
                        </h6>
                      </div>
                      <div class="card-body">
                        {float.map((e) => {
                          return (
                            <>
                              <h4 class="small font-weight-bold">
                                {e.name}
                                <span class="float-right"> {e.value}</span>
                              </h4>
                              <div class="progress mb-4">
                                <div
                                  class={e.color}
                                  role="progressbar"
                                  style={{ width: e.value }}
                                  aria-valuenow={e.value}
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                ></div>
                              </div>
                            </>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 ">
                    <Featured />
                  </div>
                </div>
                <div class="footer">
                  <div class="copyright text-center mt-3">
                    <p>
                      Copyright © Designed & Developed by{" "}
                      <a
                        href="https://digiacuity.com/"
                        target="_blank"
                        className="text-decoration-none digi me-2"
                        rel="noreferrer"
                      >
                        Digiacuity
                      </a>
                      2022
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
