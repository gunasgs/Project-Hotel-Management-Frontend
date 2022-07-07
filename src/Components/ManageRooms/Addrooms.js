import SideBar from "../Sidebar/Sidebar";
import { useFormik } from "formik";
import axios from "axios";
import swal from "sweetalert";

function Addrooms() {
  let formik = useFormik({
    initialValues: {
      roomnumber: "",
      roomtype: "",
      checkin: "",
      checkout: "",
      rate: 0,
      status: "",
      ac: "",
    },
    onSubmit: async (values) => {
      try {
        await axios.post(
          "https://project-hotel-management.herokuapp.com/room",
          values
        );
      } catch (error) {}
    },
  });
  let buttonclick = (e) => {
    swal(" Room Added", {
      icon: "success",
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
                <h2>Add Room Deatils</h2>

                <form onSubmit={formik.handleSubmit}>
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
                        onChange={formik.handleChange}
                        value={formik.values.roomnumber}
                        class="form-control"
                      />
                    </div>
                  </div>
                  <div class="row g-3 mt-3">
                    <div class="col-2">
                      <label for="input" class="form-label">
                        Room type
                      </label>
                    </div>
                    <div class="col-4">
                      <select
                        onChange={formik.handleChange}
                        value={formik.values.roomtype}
                        class="form-select"
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
                  </div>

                  {/* <div class="row g-3 mt-3">
                    <div class="col-2">
                      <label for="checkin" class="col-form-label">
                        Check In
                      </label>
                    </div>
                    <div class="col-4">
                      <select
                        onChange={formik.handleChange}
                        value={formik.values.checkin}
                        class="form-select"
                        name="checkin"
                        id="checkin"
                        aria-label="Default select example"
                      >
                        <option selected>-select-</option>
                        <option>true</option>
                        <option>false</option>
                      </select>
                    </div>
                  </div>

                  <div class="row g-3 mt-3">
                    <div class="col-2">
                      <label for="checkout" class="col-form-label">
                        check Out
                      </label>
                    </div>
                    <div class="col-4">
                      <select
                        onChange={formik.handleChange}
                        value={formik.values.checkout}
                        class="form-select"
                        name="checkout"
                        id="checkout"
                        aria-label="Default select example"
                      >
                        <option selected>-select-</option>
                        <option>true</option>
                        <option>false</option>
                      </select>
                    </div>
                  </div> */}
                  {/* <div class="row g-3 mt-3">
                  <div class="col-2">
                    <label for="input" class="form-label">
                      Rate
                    </label>
                  </div>

                  <div class="col-4">
                    <input
                      type="text"
                      name="rate"
                      id="rate"
                      onChange={formik.handleChange}
                      value={formik.values.rate}
                      class="form-control"
                    />
                  </div>
</div> */}

                  <div class="row g-3 mt-3">
                    <div class="col-2">
                      <label for="inputPassword6" class="col-form-label">
                        status
                      </label>
                    </div>
                    <div class="col-4">
                      <select
                        name="status"
                        id="status"
                        onChange={formik.handleChange}
                        value={formik.values.status}
                        class="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>-select-</option>
                        <option>Reserved</option>
                        <option>Active</option>
                        <option>Booked</option>
                      </select>
                    </div>
                  </div>
                  <div class="row g-3 mt-3">
                    <div class="col-2">
                      <label for="ac" class="col-form-label">
                        Air Condition
                      </label>
                    </div>
                    <div class="col-4">
                      <select
                        name="ac"
                        id="ac"
                        onChange={formik.handleChange}
                        value={formik.values.ac}
                        class="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>-select-</option>
                        <option>AC</option>
                        <option>Non-AC</option>
                      </select>
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
}

export default Addrooms;
