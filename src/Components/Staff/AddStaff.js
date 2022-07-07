import React from "react";

import SideBar from "../Sidebar/Sidebar";
import { useFormik } from "formik";
import axios from "axios";
import swal from "sweetalert";

const AddStaff = () => {
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
        await axios.post(
          "https://hotel-backend-deploy.herokuapp.com/staff",
          values
        );
      } catch (error) {}
    },
  });
  let buttonclick = (e) => {
    swal(" Employee Added", {
      icon: "success",
      timer: 3000,
    });
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-3 p-0">
            <SideBar />
          </div>

          <div className="col-9 ">
            <div className="container-fluid mt-5">
              <div className="row">
                <h2>Add Employee Deatils</h2>

                <form onSubmit={formik.handleSubmit}>
                  <div class="row g-3 mt-4">
                    <div class="col-2">
                      <label for="name" class="form-label">
                        Employee Name
                      </label>
                    </div>

                    <div class="col-4">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                        class="form-control"
                      />
                    </div>
                  </div>
                  <div class="row g-3 mt-3">
                    <div class="col-2">
                      <label for="department" class="form-label">
                        Department
                      </label>
                    </div>
                    <div class="col-4">
                      <select
                        onChange={formik.handleChange}
                        value={formik.values.department}
                        class="form-select"
                        name="department"
                        id="department"
                        aria-label="Default select example"
                      >
                        <option selected>-select-</option>
                        <option>Manager</option>
                        <option>Front Desk</option>
                        <option>House Keeping</option>
                      </select>
                    </div>
                  </div>

                  <div class="row g-3 mt-3">
                    <div class="col-2">
                      <label for="shift" class="col-form-label">
                        Shift
                      </label>
                    </div>
                    <div class="col-4">
                      <select
                        name="shift"
                        id="shift"
                        onChange={formik.handleChange}
                        value={formik.values.shift}
                        class="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>-select-</option>

                        <option>A</option>
                        <option>B</option>
                        <option>c</option>
                      </select>
                    </div>
                  </div>
                  <div class="row g-3 mt-3">
                    <div class="col-2">
                      <label for="date" class="col-form-label">
                        Joining Date
                      </label>
                    </div>
                    <div class="col-4">
                      <input
                        type="date"
                        name="date"
                        id="date"
                        onChange={formik.handleChange}
                        value={formik.values.date}
                        class="form-control"
                      />
                    </div>
                  </div>

                  <div class="row g-3 mt-4">
                    <div class="col-2">
                      <label for="contact" class="form-label">
                        Contact
                      </label>
                    </div>

                    <div class="col-4">
                      <input
                        type="number"
                        name="contact"
                        id="contact"
                        onChange={formik.handleChange}
                        value={formik.values.contact}
                        class="form-control"
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div class="col-6 text-center mt-5">
                      <button
                        type="submit"
                        onClick={buttonclick}
                        class=" ms-5 btn btn-primary gap-2"
                      >
                        Submit
                      </button>
                      <button type="button" class="btn btn-warning gap-2 mx-5">
                        Cancel
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddStaff;
