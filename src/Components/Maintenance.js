import React from "react";
import SideBar from "./Sidebar/Sidebar";

function Maintenance() {
  return (
    <>
      <div className="container-fluid ">
        <div className="row">
          <div className="col-3 p-0">
            <SideBar />
          </div>

          <div className="col-9 mt-4 mb-5 ">
            <div className="container-fluid mt-5">
              <div className="row">
                <h2>Maintenance Deatils</h2>

                <form>
                  <div class="row g-3 mt-4">
                    <div class="col-2">
                      <label for="input" class="form-label">
                        Room Number
                      </label>
                    </div>

                    <div class="col-4">
                      <input
                        type="text"
                        name="roomnumber"
                        id="roomnumber"
                        // onChange={formik.handleChange}
                        // value={formik.values.roomnumber}
                        class="form-control"
                      />
                    </div>
                  </div>
                  <div class="row g-3 mt-3">
                    <div class="col-2">
                      <label for="input" class="form-label">
                        Maintenance Type
                      </label>
                    </div>
                    <div class="col-4">
                      <select
                        name="type"
                        id="type"
                        // onChange={formik.handleChange}
                        // value={formik.values.status}
                        class="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>-select-</option>
                        <option>Water</option>
                        <option>Electrical </option>
                        <option>Bed</option>
                      </select>
                    </div>
                  </div>

                  <div class="row g-3 mt-3">
                    <div class="col-2">
                      <label for="inputPassword6" class="col-form-label">
                        Block From
                      </label>
                    </div>
                    <div class="col-4">
                      <input
                        type="date"
                        name="block"
                        id="block"
                        // onChange={formik.handleChange}
                        // value={formik.values.checkin}
                        class="form-control"
                      />
                    </div>
                  </div>

                  <div class="row g-3 mt-3">
                    <div class="col-2">
                      <label for="inputPassword6" class="col-form-label">
                        Block To
                      </label>
                    </div>
                    <div class="col-4">
                      <input
                        type="date"
                        name="block"
                        id="block"
                        // onChange={formik.handleChange}
                        // value={formik.values.checkout}
                        class="form-control"
                      />
                    </div>
                  </div>

                  <div class="row g-3 mt-3">
                    <div class="col-2">
                      <label for="inputPassword6" class="col-form-label">
                        Description
                      </label>
                    </div>
                    <div class="col-4">
                      <textarea
                        class="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                      ></textarea>
                    </div>
                  </div>

                  <div className="row">
                    <div class="col-6 text-center mt-5">
                      <button
                        type="submit"
                        // onClick={buttonclick}
                        class=" ms-5 btn btn-primary gap-2"
                      >
                        Submit
                      </button>
                      <button type="button" class="btn btn-warning gap-2 mx-5">
                        Reset
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
}

export default Maintenance;
