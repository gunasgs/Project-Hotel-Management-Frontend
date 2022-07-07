import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";

function Reserveviewpage() {
  let params = useParams();
  const [view, setview] = useState({});
  async function fetchAll() {
    try {
      let view = await axios.get(
        `https://hotel-backend-deploy.herokuapp.com/bookings/${params.id}`
      );
      setview(view.data);
    } catch (err) {}
  }
  useEffect(() => {
    fetchAll();
  }, []);
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 p-0">
            <Sidebar />
          </div>
          <div className="col-9 mt-3 mb-5">
            <div class="container mt-5 ">
              <h1>Room Details</h1>
              <div class="row g-2 mt-3">
                <div class="col-6">
                  <div class="p-3 border bg-light">Room Number</div>
                </div>
                <div class="col-6">
                  <div class="p-3 border bg-light">{view.roomnumber}</div>
                </div>
                <div class="col-6">
                  <div class="p-3 border bg-light">Room Type</div>
                </div>
                <div class="col-6">
                  <div class="p-3 border bg-light">{view.roomtype}</div>
                </div>
                <div class="col-6">
                  <div class="p-3 border bg-light">Room Status</div>
                </div>
                <div class="col-6">
                  <div class="p-3 border bg-light">{view.status}</div>
                </div>
                <div class="col-6">
                  <div class="p-3 border bg-light">check In</div>
                </div>
                <div class="col-6">
                  <div class="p-3 border bg-light">{view.checkin}</div>
                </div>
                <div class="col-6">
                  <div class="p-3 border bg-light">Check Out</div>
                </div>
                <div class="col-6">
                  <div class="p-3 border bg-light">{view.checkout}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Reserveviewpage;
