import SideBar from "../Sidebar/Sidebar";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";

import swal from "sweetalert";

function Manageroooms() {
  const [view, setview] = useState({});
  const [rooms, setrooms] = useState([]);

  const [edit, setedit] = useState(false);
  const [currentroom, setcurrentroom] = useState("");

  async function fetchAll() {
    try {
      let userData = await axios.get("https://tired-hen-kit.cyclic.app/rooms");
      setrooms(userData.data);
    } catch (error) {}
  }
  let formik = useFormik({
    initialValues: {
      roomnumber: "",
      roomtype: "",

      price: "",
      status: "",
      features: "",
    },
    onSubmit: async (values) => {
      try {
        if (edit) {
          await axios.put(
            `https://tired-hen-kit.cyclic.app/roomsedit/${currentroom}`,
            values
          );
          swal(" Room Updated", {
            icon: "success",
            timer: 2000,
          });
          fetchAll();
        } else {
          await axios.post("https://tired-hen-kit.cyclic.app/room", values);
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
        `https://tired-hen-kit.cyclic.app/roomsview/${id}`
      );
      formik.setValues({
        roomnumber: roomedit.data.roomnumber,
        roomtype: roomedit.data.roomtype,
        features: roomedit.data.features,
        price: roomedit.data.price,

        status: roomedit.data.status,
      });
      setcurrentroom(roomedit.data._id);
      setedit(true);
    } catch (error) {
      alert("Something went wrong");
    }
  };

  let handleView = async (id) => {
    try {
      let view = await axios.get(
        `https://tired-hen-kit.cyclic.app/roomsview/${id}`
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
          .delete(`https://tired-hen-kit.cyclic.app/rooms/${id}`)
          .then(() => {
            fetchAll();
          });

        swal(" Rooms has been deleted!", {
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
          <div className="col-2  p-0">
            <SideBar />
          </div>

          <div className="col-10 ">
            <div class="card-body ">
              <div className="d-flex justify-content-between mb-2">
                <h2 className=" ms-2">Room Deatils</h2>{" "}
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
                      <th>Status</th>
                      <th>Features</th>
                      <th>price</th>
                      <th>Action</th>
                    </tr>
                  </thead>

                  <tbody className="text-center">
                    {rooms.map((user) => {
                      return (
                        <tr>
                          <td>{user.roomnumber}</td>
                          <td>{user.roomtype}</td>
                          <td>{user.status}</td>

                          <td>{user.features}</td>
                          <td>{user.price}</td>
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
                                            <div class="p-2 border  ">
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
                                              class="form-control  p-2 border "
                                            />
                                          </div>
                                          <div class="col-6">
                                            <div class="p-2 border ">
                                              <h5> Room type</h5>
                                            </div>
                                          </div>
                                          <div class="col-6">
                                            <select
                                              onChange={formik.handleChange}
                                              value={formik.values.roomtype}
                                              class="form-select  p-2 border "
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
                                            <div class="p-2 border text-center">
                                              <label class="form ">
                                                <h5>Features</h5>
                                              </label>
                                            </div>
                                          </div>
                                          <div class="col-6 p-2 border text-center ">
                                            <div class="form-check form-check-inline mt-2 ">
                                              <input
                                                class="form-check-input "
                                                type="checkbox"
                                                id="features"
                                                value="Wi-Fi"
                                                onChange={formik.handleChange}
                                              />
                                              <label class="form-check-label">
                                                Wi-Fi
                                              </label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                              <input
                                                class="form-check-input"
                                                type="checkbox"
                                                id="features"
                                                value="AC"
                                                onChange={formik.handleChange}
                                              />
                                              <label class="form-check-label">
                                                AC
                                              </label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                              <input
                                                class="form-check-input"
                                                type="checkbox"
                                                id="features"
                                                value="TV"
                                                onChange={formik.handleChange}
                                              />
                                              <label class="form-check-label">
                                                TV
                                              </label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                              <input
                                                class="form-check-input"
                                                type="checkbox"
                                                id="features"
                                                value="Refrigerator"
                                                onChange={formik.handleChange}
                                              />
                                              <label class="form-check-label">
                                                Refrigerator
                                              </label>
                                            </div>
                                          </div>
                                          <div class="col-6">
                                            <div class="p-2 border text-center">
                                              <label>
                                                <h5>Price</h5>
                                              </label>
                                            </div>
                                          </div>
                                          <div class="col-6 ">
                                            <input
                                              onChange={formik.handleChange}
                                              value={formik.values.price}
                                              class="form-control p-2 mt-2 border "
                                              name="price"
                                              id="price"
                                              type="number"
                                            />
                                          </div>

                                          <div class="col-6">
                                            <div class="p-2 border">
                                              <h5> status</h5>
                                            </div>
                                          </div>
                                          <div class="col-6">
                                            <select
                                              name="status"
                                              id="status"
                                              onChange={formik.handleChange}
                                              value={formik.values.status}
                                              class="form-select  p-2 border "
                                              aria-label="Default select example"
                                            >
                                              <option selected>-select-</option>

                                              <option className="text-success">
                                                Available
                                              </option>
                                              <option className="text-danger">
                                                UnAvailable
                                              </option>
                                            </select>
                                          </div>
                                        </div>

                                        <div className="form-group mt-2">
                                          <input
                                            type={"submit"}
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
                              class="btn btn-warning  bttn text-light"
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
                                          <div class="p-3 border text-center">
                                            Room Number
                                          </div>
                                        </div>
                                        <div class="col-6">
                                          <div class="p-3 border text-center">
                                            {view.roomnumber}
                                          </div>
                                        </div>
                                        <div class="col-6">
                                          <div class="p-3 border text-center">
                                            Room Type
                                          </div>
                                        </div>
                                        <div class="col-6">
                                          <div class="p-3 border text-center">
                                            {view.roomtype}
                                          </div>
                                        </div>
                                        <div class="col-6">
                                          <div class="p-3 border text-center">
                                            Room Status
                                          </div>
                                        </div>
                                        <div class="col-6">
                                          <div class="p-3 border text-center">
                                            {view.status}
                                          </div>
                                        </div>
                                        <div class="col-6">
                                          <div class="p-3 border text-center">
                                            Features
                                          </div>
                                        </div>
                                        <div class="col-6">
                                          <div class="p-3 border text-center">
                                            {view.features}
                                          </div>
                                        </div>
                                        <div class="col-6">
                                          <div class="p-3 border text-center">
                                            Price
                                          </div>
                                        </div>
                                        <div class="col-6">
                                          <div class="p-3 border text-center">
                                            {view.price}
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
