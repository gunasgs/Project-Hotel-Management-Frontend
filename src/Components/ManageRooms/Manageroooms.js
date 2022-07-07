import SideBar from "../Sidebar/Sidebar";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";

import swal from "sweetalert";

function Manageroooms() {
  const [view, setview] = useState({});
  const [rooms, setrooms] = useState([]);
  const [checkin, setcheckin] = useState(false);
  const [checkout, setcheckout] = useState(true);
  const [edit, setedit] = useState(false);
  const [currentroom, setcurrentroom] = useState("");

  async function fetchAll() {
    try {
      let userData = await axios.get(
        "https://hotel-backend-deploy.herokuapp.com/rooms"
      );
      setrooms(userData.data);
    } catch (error) {}
  }
  let formik = useFormik({
    initialValues: {
      roomnumber: "",
      roomtype: "",
      checkin: "",
      checkout: "",
      rate: "",
      status: "",
      ac: "",
    },
    onSubmit: async (values) => {
      try {
        if (edit) {
          await axios.put(
            `https://hotel-backend-deploy.herokuapp.com/roomsedit/${currentroom}`,
            values
          );
          fetchAll();
        } else {
          await axios.post(
            "https://hotel-backend-deploy.herokuapp.com/room",
            values
          );
          fetchAll();
        }
      } catch (error) {
        alert("Something went wrong");
      }
    },
  });

  let handleEdit = async (id) => {
    try {
      let roomedit = await axios.get(
        `https://hotel-backend-deploy.herokuapp.com/roomsview/${id}`
      );
      formik.setValues({
        roomnumber: roomedit.data.roomnumber,
        roomtype: roomedit.data.roomtype,
        checkin: roomedit.data.checkin,
        checkout: roomedit.data.checkout,
        rate: roomedit.data.rate,
        status: roomedit.data.status,
        ac: roomedit.data.ac,
      });
      setcurrentroom(roomedit.data._id);
      setedit(true);
    } catch (error) {
      alert("Something went wrong");
    }
  };

  let buttonclickedit = (e) => {
    swal(" Room Updated", {
      icon: "success",
      timer: 2000,
    });
  };

  let handleView = async (id) => {
    try {
      let view = await axios.get(
        `https://hotel-backend-deploy.herokuapp.com/roomsview/${id}`
      );

      setview(view.data);
      fetchAll();
    } catch (err) {}
  };

  let handleDelete = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .delete(`https://hotel-backend-deploy.herokuapp.com/rooms/${id}`)
          .then(() => {
            fetchAll();
          });

        swal(" Rooms has been deleted!", {
          icon: "success",
          timer: 3000,
        });
      } else {
        alert("Something went wrong");
      }
    });
  };

  let handlein = (e) => {
    setcheckin(e);
    setcheckout(!e);
  };

  let handlein2 = (ee) => {
    setcheckout(ee);
    setcheckin(!ee);
  };
  useEffect(() => {
    fetchAll();
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 me-5 p-0">
            <SideBar />
          </div>

          <div className="col-9  ">
            <div className="container-fluid">
              <h2 className="mt-3">Room Deatils</h2>
              <div className="row">
                <div className="col-4 mt-2">
                  <div class="row   align-items-center">
                    <div class="col-6 ">
                      <label for="inputPassword6" class="col-form-label fs-6">
                        Room status
                      </label>
                    </div>
                    <div class="col-6">
                      <select
                        class="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>-select-</option>
                        <option>Available</option>
                        <option>Booked</option>
                        <option>Occupied</option>
                        <option>Reservation</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-4 mt-2">
                  <div class="row align-items-center">
                    <div class="col-6">
                      <label for="inputPassword6" class="col-form-label">
                        Room type
                      </label>
                    </div>
                    <div class="col-6">
                      <select
                        class="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>-select-</option>
                        <option value="1">Single</option>
                        <option value="2">Double</option>
                        <option value="3">Family</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className=" d-grid gap-1 col-2 ms-4 mt-2">
                  <button className="btn btn-outline-primary btn-md ">
                    Submit
                  </button>
                </div>
                <div className="col-4 mt-3">
                  <div class="row  align-items-center">
                    <div class="col-6">
                      <label for="input" class="col-form-label">
                        Check In
                      </label>
                    </div>
                    <div class="col-6">
                      <input
                        type="date"
                        id="inputPassword6"
                        class="form-control"
                        aria-describedby="passwordHelpInline"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-4 mt-3">
                  <div class="row  align-items-center">
                    <div class="col-6">
                      <label for="inputPassword6" class="col-form-label">
                        Check Out
                      </label>
                    </div>
                    <div class="col-6">
                      <input
                        type="date"
                        id="inputPassword6"
                        class="form-control"
                        aria-describedby="passwordHelpInline"
                      />
                    </div>
                  </div>
                </div>
                <div className="d-grid gap-1 col-2 mt-3 ms-4">
                  <button className=" btn btn-outline-warning btn-md ">
                    Reset
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-1">
          <div className="col-2 me-5"></div>

          <div className="col-9 ">
            <div class="card-body ">
              <div className="d-flex justify-content-end mb-2">
                <button className=" btn btn-success">
                  <Link
                    to="/addrooms"
                    className="text-decoration-none text-light"
                  >
                    Add Room
                  </Link>
                </button>
              </div>
              <div class="table-responsive mt-4">
                <table
                  class="table table-bordered"
                  id="dataTable"
                  width="100%"
                  cellspacing="0"
                >
                  <thead className="text-center">
                    <tr>
                      <th>Room No</th>
                      <th>Room Type</th>
                      <th>Booking Status</th>
                      <th>Check In</th>
                      <th>Check Out</th>
                      <th>Action</th>
                    </tr>
                  </thead>

                  <tbody className="text-center">
                    {rooms.map((user) => {
                      return (
                        <tr>
                          <td>{user.roomnumber}</td>
                          <td>{user.roomtype}</td>
                          {/* <td>{user.checkin}{user.checkin ? <button>checkin</button>:<button>checkout</button>}</td>
                       
                        {console.log(user.checkin)} */}
                          <td>{user.status}</td>
                          <td>
                            {checkin ? (
                              <button className="btn btn-success">
                                checkin
                              </button>
                            ) : (
                              <button
                                className="btn btn-warning"
                                onClick={() => handlein(user.checkin)}
                              >
                                Checkout
                              </button>
                            )}
                          </td>
                          <td>
                            {checkout ? (
                              <button className="btn btn-success">
                                checkin
                              </button>
                            ) : (
                              <button
                                className="btn btn-warning"
                                onClick={() => handlein2(user.checkout)}
                              >
                                Checkout
                              </button>
                            )}
                          </td>

                          <td>
                            <button
                              type="button"
                              class="btn btn-primary  bttn"
                              onClick={() => handleEdit(user._id)}
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModalroom"
                            >
                              <i class="bi bi-pencil-fill"></i>
                            </button>
                            <div
                              class="modal fade"
                              id="exampleModalroom"
                              tabindex="-1"
                              aria-labelledby="exampleModalLabel"
                              aria-hidden="true"
                            >
                              <div class="modal-dialog modal-lg">
                                <div class="modal-content ">
                                  <div class="modal-header ">
                                    <h5
                                      class="modal-title "
                                      id="exampleModalLabel1"
                                    >
                                      Room Deatils
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
                                      <form onSubmit={formik.handleSubmit}>
                                        <div class="row g-4 mb-5 mt-3 ">
                                          <div class="col-6">
                                            <div class="p-3 border  bg-light">
                                              <h5> Room Number</h5>
                                            </div>
                                          </div>
                                          <div class="col-6">
                                            <input
                                              type="text"
                                              name="roomnumber"
                                              id="roomnumber"
                                              onChange={formik.handleChange}
                                              value={formik.values.roomnumber}
                                              class="form-control  p-3 border bg-light"
                                            />
                                          </div>
                                          <div class="col-6">
                                            <div class="p-3 border bg-light">
                                              <h5> Room type</h5>
                                            </div>
                                          </div>
                                          <div class="col-6">
                                            <select
                                              onChange={formik.handleChange}
                                              value={formik.values.roomtype}
                                              class="form-select  p-3 border bg-light"
                                              name="roomtype"
                                              id="roomtype"
                                              aria-label="Default select example"
                                            >
                                              <option selected>-select-</option>
                                              <option>Single</option>
                                              <option>Double</option>
                                              <option>Family</option>
                                            </select>
                                          </div>
                                          <div class="col-6">
                                            <div class="p-3 border bg-light">
                                              <h5>Check In</h5>
                                            </div>
                                          </div>
                                          <div class="col-6">
                                            <input
                                              type="date"
                                              name="checkin"
                                              id="checkin"
                                              onChange={formik.handleChange}
                                              value={formik.values.checkin}
                                              class="form-control  p-3 border bg-light"
                                            />
                                          </div>
                                          <div class="col-6">
                                            <div class="p-3 border bg-light">
                                              <h5>Check Out </h5>
                                            </div>
                                          </div>
                                          <div class="col-6">
                                            <input
                                              type="date"
                                              name="checkout"
                                              id="checkout"
                                              onChange={formik.handleChange}
                                              value={formik.values.checkout}
                                              class="form-control  p-3 border bg-light"
                                            />
                                          </div>
                                          <div class="col-6">
                                            <div class="p-3 border bg-light">
                                              <h5> status</h5>
                                            </div>
                                          </div>
                                          <div class="col-6">
                                            <select
                                              name="status"
                                              id="status"
                                              onChange={formik.handleChange}
                                              value={formik.values.status}
                                              class="form-select  p-3 border bg-light"
                                              aria-label="Default select example"
                                            >
                                              <option selected>-select-</option>
                                              <option className="text-warning">
                                                Reserved
                                              </option>
                                              <option className="text-success">
                                                Active
                                              </option>
                                              <option className="text-danger">
                                                Booked
                                              </option>
                                            </select>
                                          </div>

                                          <div class="col-6">
                                            <div class="p-3 border bg-light">
                                              <h5> Air Condition </h5>
                                            </div>
                                          </div>
                                          <div class="col-6">
                                            <select
                                              name="ac"
                                              id="ac"
                                              onChange={formik.handleChange}
                                              value={formik.values.ac}
                                              class="form-select  p-3 border bg-light"
                                              aria-label="Default select example"
                                            >
                                              <option selected>-select-</option>
                                              <option>AC</option>
                                              <option>Non-AC</option>
                                            </select>
                                          </div>
                                        </div>
                                        <div className="form-group mt-2">
                                          <input
                                            type={"submit"}
                                            onClick={buttonclickedit}
                                            className="btn btn-primary"
                                            value="Update"
                                            data-bs-dismiss="modal"
                                            aria-label="Close"
                                          />
                                          <button
                                            type="button"
                                            value="cancel"
                                            class="btn btn-danger ms-3"
                                            data-bs-dismiss="modal"
                                            aria-label="Close"
                                          >
                                            Cancel
                                          </button>
                                        </div>
                                      </form>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <button
                              type="button"
                              class="btn btn-warning  bttn"
                              onClick={() => handleView(user._id)}
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
                                <div class="modal-content ">
                                  <div class="modal-header ">
                                    <h5
                                      class="modal-title "
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
                                          <div class="p-3 border  bg-light">
                                            <h5> Room Number</h5>
                                          </div>
                                        </div>
                                        <div class="col-6">
                                          <div class="p-3 border bg-light">
                                            {view.roomnumber}
                                          </div>
                                        </div>
                                        <div class="col-6">
                                          <div class="p-3 border bg-light">
                                            <h5>Room Type</h5>
                                          </div>
                                        </div>
                                        <div class="col-6">
                                          <div class="p-3 border bg-light">
                                            {view.roomtype}
                                          </div>
                                        </div>
                                        <div class="col-6">
                                          <div class="p-3 border bg-light">
                                            <h5>Room Status</h5>
                                          </div>
                                        </div>
                                        <div class="col-6">
                                          <div class="p-3 border bg-light">
                                            {view.status}
                                          </div>
                                        </div>
                                        <div class="col-6">
                                          <div class="p-3 border bg-light">
                                            <h5>Check In </h5>
                                          </div>
                                        </div>
                                        <div class="col-6">
                                          <div class="p-3 border bg-light">
                                            {view.checkin}
                                          </div>
                                        </div>
                                        <div class="col-6">
                                          <div class="p-3 border bg-light">
                                            <h5> Check Out</h5>
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

                            <button
                              type="button"
                              onClick={() => handleDelete(user._id)}
                              className="btn btn-danger  bttn"
                            >
                              <i class="bi bi-trash3-fill"></i>
                            </button>
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
    </>
  );
}

export default Manageroooms;
