import SideBar from "../Sidebar/Sidebar";
import { useFormik } from "formik";
import axios from "axios";
import swal from "sweetalert";

function Addrooms() {
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
        await axios.post("https://tired-hen-kit.cyclic.app/room", values);
      } catch (error) {}
    },
  });
  let buttonclick = (e) => {
    swal(" Room Added", {
      icon: "success",
      timer: 3000,
    });
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 p-0">
            <SideBar />
          </div>

          <div className="col-10 ">
            <h2 className="mt-5 ms-3">Add Room Deatils</h2>
            <div className="container-fluid mt-5">
              <div className="row ms-5">
                <form onSubmit={formik.handleSubmit}>
                  <div class="row g-3 mt-2">
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
                        <option>Available</option>
                        <option>UnAvailable</option>
                      </select>
                    </div>
                  </div>
                  <div class="row g-3 mt-3">
                    <div class="col-2">
                      <label class="col-form-label">Features</label>
                    </div>
                    <div class="col-4">
                      <div class="form-check form-check-inline ">
                        <input
                          class="form-check-input "
                          type="checkbox"
                          id="features"
                          value="Wi-Fi"
                          onChange={formik.handleChange}
                        />
                        <label class="form-check-label">Wi-Fi</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="features"
                          value="AC"
                          onChange={formik.handleChange}
                        />
                        <label class="form-check-label">AC</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="features"
                          value="TV"
                          onChange={formik.handleChange}
                        />
                        <label class="form-check-label">TV</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="features"
                          value="Refrigerator"
                          onChange={formik.handleChange}
                        />
                        <label class="form-check-label">Refrigerator</label>
                      </div>
                    </div>
                  </div>
                  <div class="row g-3 mt-3">
                    <div class="col-2">
                      <label class="col-form-label">Price</label>
                    </div>
                    <div class="col-4">
                      <input
                        onChange={formik.handleChange}
                        value={formik.values.price}
                        class="form-control"
                        name="price"
                        id="price"
                        type="number"
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
}

export default Addrooms;
