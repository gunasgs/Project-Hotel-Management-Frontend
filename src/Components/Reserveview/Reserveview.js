import axios from "axios";
import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./Reserveview.css";
import { Link, useParams } from "react-router-dom";
import swal from "sweetalert";

function Reserveview() {
  let params = useParams();
  const [view, setview] = useState({});
  const [booking, setbooking] = useState([]);
  // const [checkin, setcheckin] = useState(false)
  // const [checkout, setcheckout] = useState(true)

  async function fetchAll() {
    try {
      let bookingData = await axios.get(
        "https://project-hotel-management.herokuapp.com/bookings"
      );
      setbooking(bookingData.data);
    } catch (error) {}
  }

  let handleView = async (id) => {
    try {
      let view = await axios.get(
        `https://project-hotel-management.herokuapp.com/booking/${id}`
      );

      setview(view.data);
      fetchAll();
    } catch (err) {}
  };

  let handleDeletebooking = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .delete(
            `https://project-hotel-management.herokuapp.com/booking/${id}`
          )
          .then(() => {
            fetchAll();
          });

        swal(" Booking has been deleted!", {
          icon: "success",
        });
      } else {
        alert("Something went wrong");
      }
    });
  };
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

          <div className="col-10 mt-4 mb-5">
            <h1 class="h3 mb-2 text-gray-800 ms-5">Booked Details</h1>

            <div class="card shadow mb-4">
              <div class="card-body">
                <div class="table-responsive ms-5">
                  <table
                    class="table table-bordered"
                    id="dataTable"
                    width="100%"
                    cellspacing="0"
                  >
                    <thead class="text-center">
                      <tr>
                        <th>Room No</th>
                        <th>RoomType</th>
                        <th>Room Status</th>
                        <th>Check In</th>
                        <th>Check Out</th>
                        <th>Action</th>
                      </tr>
                    </thead>

                    <tbody>
                      {booking.map((e) => {
                        return (
                          <tr>
                            <td className="text-center">{e.roomnumber}</td>
                            <td>{e.roomtype}</td>
                            <td>{e.status} </td>
                            <td> {e.checkin}</td>
                            <td> {e.checkout}</td>

                            <td className="text-center">
                              <span>
                                {/* <Link   class="btn btn-success ms-3 bttn"   to={`/reserveviewpage/${e._id}`}  >
<i class="bi bi-eye-fill"></i>
</Link> */}

                                <button
                                  type="button"
                                  class="btn btn-success ms-3 bttn"
                                  onClick={() => handleView(e._id)}
                                  data-bs-toggle="modal"
                                  data-bs-target="#exampleModal"
                                >
                                  <i class="bi bi-eye-fill"></i>
                                </button>

                                <div
                                  class="modal fade"
                                  id="exampleModal"
                                  tabindex="-1"
                                  aria-labelledby="exampleModalLabel"
                                  aria-hidden="true"
                                >
                                  <div class="modal-dialog modal-lg">
                                    <div class="modal-content">
                                      <div class="modal-header">
                                        <h5
                                          class="modal-title"
                                          id="exampleModalLabel"
                                        >
                                          Room Details
                                        </h5>
                                        <button
                                          type="button"
                                          class="btn-close"
                                          data-bs-dismiss="modal"
                                          aria-label="Close"
                                        ></button>
                                      </div>
                                      <div class="modal-body">
                                        <div className="container-fluid ">
                                          <div class="row g-4 mb-5 mt-3 ">
                                            <div class="col-6">
                                              <div class="p-3 border bg-light">
                                                Room Number
                                              </div>
                                            </div>
                                            <div class="col-6">
                                              <div class="p-3 border bg-light">
                                                {view.roomnumber}
                                              </div>
                                            </div>
                                            <div class="col-6">
                                              <div class="p-3 border bg-light">
                                                Room Type
                                              </div>
                                            </div>
                                            <div class="col-6">
                                              <div class="p-3 border bg-light">
                                                {view.roomtype}
                                              </div>
                                            </div>
                                            <div class="col-6">
                                              <div class="p-3 border bg-light">
                                                Room Status
                                              </div>
                                            </div>
                                            <div class="col-6">
                                              <div class="p-3 border bg-light">
                                                {view.status}
                                              </div>
                                            </div>
                                            <div class="col-6">
                                              <div class="p-3 border bg-light">
                                                check In
                                              </div>
                                            </div>
                                            <div class="col-6">
                                              <div class="p-3 border bg-light">
                                                {view.checkin}
                                              </div>
                                            </div>
                                            <div class="col-6">
                                              <div class="p-3 border bg-light">
                                                Check Out
                                              </div>
                                            </div>
                                            <div class="col-6">
                                              <div class="p-3 border bg-light">
                                                {view.checkout}
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </span>
                              <span>
                                <button
                                  type="button"
                                  className="btn btn-danger ms-3 bttn"
                                  onClick={() => handleDeletebooking(e._id)}
                                >
                                  <i class="bi bi-trash3-fill"></i>
                                </button>
                              </span>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Reserveview;
