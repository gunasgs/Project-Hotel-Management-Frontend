import axios from "axios";
import SideBar from "../Sidebar/Sidebar";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import swal from "sweetalert";

function Staff() {
  const [staff, setstaff] = useState([]);
  const [view, setview] = useState({});
  const [edit, setedit] = useState(false);
  const [currentstaff, setcurrentstaff] = useState("");

  async function fetchAll() {
    try {
      let userData = await axios.get(
        "https://project-hotel-management.herokuapp.com/staff"
      );
      setstaff(userData.data);
    } catch (error) {}
  }
  let formik = useFormik({
    initialValues: {
      name: "",
      department: "",
      shift: "",
      date: "",
      contact: "",
    },
    onSubmit: async (values) => {
      try {
        if (edit) {
          await axios.put(
            `https://project-hotel-management.herokuapp.com/staffedit/${currentstaff}`,
            values
          );
          fetchAll();
        } else {
          await axios.post(
            "https://project-hotel-management.herokuapp.com/staff",
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
      let staffedit = await axios.get(
        `https://project-hotel-management.herokuapp.com/staffview/${id}`
      );
      formik.setValues({
        name: staffedit.data.name,
        department: staffedit.data.department,
        shift: staffedit.data.shift,
        date: staffedit.data.date,
        contact: staffedit.data.contact,
      });
      setcurrentstaff(staffedit.data._id);
      setedit(true);
    } catch (error) {
      alert("Something went wrong");
    }
  };

  let buttonclickedit = (e) => {
    swal(" Employee Updated", {
      icon: "success",
      timer: 2000,
    });
  };

  let handleView = async (id) => {
    try {
      let view1 = await axios.get(
        `https://project-hotel-management.herokuapp.com/staffview/${id}`
      );

      setview(view1.data);
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
          .delete(`https://project-hotel-management.herokuapp.com/staff/${id}`)
          .then(() => {
            fetchAll();
          });

        swal(" Employee has been deleted!", {
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
          <div className="col-lg-2  p-0">
            <SideBar />
          </div>

          <div className="col-lg-10 mt-4 mb-5">
            <div className="d-flex justify-content-between">
              <h1 class="h3 mb-2  ms-2">Employee Details</h1>
              <button className=" btn btn-success">
                <Link
                  to="/addstaff"
                  className="text-decoration-none text-light"
                >
                  Add Employee
                </Link>
              </button>
            </div>

            <div class="card  mb-4 mt-4 ms-1">
              <div class="card-body">
                <div class="table-responsive ">
                  <table
                    class="table table-bordered css-serial"
                    id="dataTable"
                    width="100%"
                    cellspacing="0"
                  >
                    <thead>
                      <tr>
                        <th> S.NO</th>
                        <th> Employee Name</th>
                        <th>Department</th>
                        <th>Shift</th>
                        <th>Joining Date</th>
                        <th>Change Shift</th>
                        <th>Contact</th>
                        <th>Action</th>
                      </tr>
                    </thead>

                    <tbody className="text-center">
                      {staff.map((user) => {
                        return (
                          <tr>
                            <td></td>
                            <td>{user.name}</td>

                            <td>{user.department}</td>
                            <td>{user.shift}</td>
                            <td>{user.date}</td>
                            <td>
                              <button class="btn btn-info text-light">
                                Change
                              </button>
                            </td>
                            <td>{user.contact}</td>
                            <td>
                              <button
                                type="button"
                                class="btn btn-primary  bttn"
                                onClick={() => handleEdit(user._id)}
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal1"
                              >
                                <i class="bi bi-pencil-fill"></i>
                              </button>
                              <div
                                class="modal fade"
                                id="exampleModal1"
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
                                        Employee Details
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
                                          <div class="row g-4 mb-2 mt-1 ">
                                            <div class="col-6">
                                              <div class="p-3 border  bg-light">
                                                <h5> Employee Name</h5>
                                              </div>
                                            </div>
                                            <div class="col-6">
                                              <input
                                                className="form-control p-3 border bg-light"
                                                name="name"
                                                id="name"
                                                type={"text"}
                                                onChange={formik.handleChange}
                                                value={formik.values.name}
                                              />
                                            </div>
                                            <div class="col-6">
                                              <div class="p-3 border bg-light">
                                                <h5>Department</h5>
                                              </div>
                                            </div>
                                            <div class="col-6">
                                              <select
                                                onChange={formik.handleChange}
                                                value={formik.values.department}
                                                class="form-select p-3 border bg-light"
                                                name="department"
                                                id="department"
                                                aria-label="Default select example"
                                              >
                                                <option selected>
                                                  -select-
                                                </option>
                                                <option>Manager</option>
                                                <option>Front Desk</option>
                                                <option>House Keeping</option>
                                              </select>
                                            </div>
                                            <div class="col-6">
                                              <div class="p-3 border bg-light">
                                                <h5>Shift</h5>
                                              </div>
                                            </div>
                                            <div class="col-6">
                                              <select
                                                name="shift"
                                                id="shift"
                                                onChange={formik.handleChange}
                                                value={formik.values.shift}
                                                class="form-select p-3 border bg-light"
                                                aria-label="Default select example"
                                              >
                                                <option selected>
                                                  -select-
                                                </option>

                                                <option>A</option>
                                                <option>B</option>
                                                <option>c</option>
                                              </select>
                                            </div>
                                            <div class="col-6">
                                              <div class="p-3 border bg-light">
                                                <h5>Date </h5>
                                              </div>
                                            </div>
                                            <div class="col-6">
                                              <input
                                                className="form-control p-3 border bg-light"
                                                name="date"
                                                id="date"
                                                type={"date"}
                                                onChange={formik.handleChange}
                                                value={formik.values.date}
                                              />
                                            </div>
                                            <div class="col-6">
                                              <div class="p-3 border bg-light">
                                                <h5> Contact</h5>
                                              </div>
                                            </div>
                                            <div class="col-6">
                                              <input
                                                className="form-control p-3 border bg-light"
                                                name="contact"
                                                id="contact"
                                                type={"number"}
                                                onChange={formik.handleChange}
                                                value={formik.values.contact}
                                              />
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
                                class="btn btn-warning text-light bttn"
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
                                        Employee Details
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
                                              <h5> Employee Name</h5>
                                            </div>
                                          </div>
                                          <div class="col-6">
                                            <div class="p-3 border bg-light">
                                              {view.name}
                                            </div>
                                          </div>
                                          <div class="col-6">
                                            <div class="p-3 border bg-light">
                                              <h5>Department</h5>
                                            </div>
                                          </div>
                                          <div class="col-6">
                                            <div class="p-3 border bg-light">
                                              {view.department}
                                            </div>
                                          </div>
                                          <div class="col-6">
                                            <div class="p-3 border bg-light">
                                              <h5>Shift</h5>
                                            </div>
                                          </div>
                                          <div class="col-6">
                                            <div class="p-3 border bg-light">
                                              {view.shift}
                                            </div>
                                          </div>
                                          <div class="col-6">
                                            <div class="p-3 border bg-light">
                                              <h5>Date </h5>
                                            </div>
                                          </div>
                                          <div class="col-6">
                                            <div class="p-3 border bg-light">
                                              {view.date}
                                            </div>
                                          </div>
                                          <div class="col-6">
                                            <div class="p-3 border bg-light">
                                              <h5> Contact</h5>
                                            </div>
                                          </div>
                                          <div class="col-6">
                                            <div class="p-3 border bg-light">
                                              {view.contact}
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
                                className="btn btn-danger  bttn"
                                onClick={() => handleDelete(user._id)}
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
      </div>
    </>
  );
}

export default Staff;
