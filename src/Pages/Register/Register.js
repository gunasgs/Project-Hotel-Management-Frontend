import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  let navigate = useNavigate();
  let formik = useFormik({
    initialValues: {
      Firstname: "",
      Lastname: "",
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        await axios.post(
          "https://hotel-backend-deploy.herokuapp.com/register",
          values
        );
        navigate("/");
      } catch (error) {
        console.log(error);
        alert("Something went wrong");
      }
    },
  });
  return (
    <section class="">
      <div
        class="px-4 py-5 px-md-5 text-center text-lg-start"
        style={{ backgroundcolor: "hsl(0, 0%, 96%)" }}
      >
        <div class="container">
          <div class="row gx-lg-5 align-items-center">
            <div class="col-md-9 col-lg-6 col-xl-5">
              <img
                src="https://www.einfosoft.com/templates/admin/spiceangular/source/rtl/assets/images/pages/bg-02.png"
                class="img-fluid"
                alt="Sample"
              />
            </div>

            <div class="col-lg-6 mb-5 mb-lg-0">
              <div class="card">
                <div class="card-body py-5 px-md-5">
                  <form onSubmit={formik.handleSubmit}>
                    <div class="row">
                      <div class="col-md-6 mb-4">
                        <div class="form-outline">
                          <label class="form-label">First name</label>
                          <input
                            type={"text"}
                            id="Firstname"
                            class="form-control"
                            onChange={formik.handleChange}
                            value={formik.values.Firstname}
                          />
                        </div>
                      </div>
                      <div class="col-md-6 mb-4">
                        <div class="form-outline">
                          <label class="form-label">Last name</label>
                          <input
                            type="text"
                            id="Lastname"
                            class="form-control"
                            onChange={formik.handleChange}
                            value={formik.values.Lastname}
                          />
                        </div>
                      </div>
                    </div>

                    <div class="form-outline mb-4">
                      <label class="form-label">Email address</label>
                      <input
                        type="email"
                        id="email"
                        class="form-control"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                      />
                    </div>

                    <div class="form-outline mb-4">
                      <label class="form-label">Password</label>
                      <input
                        type="password"
                        id="password"
                        class="form-control"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                      />
                    </div>

                    <div className="col-lg-12 mt-3">
                      <input
                        type={"submit"}
                        className="btn btn-primary"
                        value="Sign up"
                      />
                      <p class="small fw-bold mt-3 pt-1 mb-0">
                        Have an account already?
                        <Link to="/" class="link-primary mx-2">
                          Log in
                        </Link>
                      </p>
                    </div>
                    <div class="divider d-flex align-items-center my-4">
                      <p class="text-center fw-bold mx-3 mb-0">
                        Or Sign Up With
                      </p>
                    </div>

                    <div class="d-flex flex-row mt-3  align-items-center justify-content-center">
                      <button
                        type="button"
                        class="btn btn-primary btn-floating  mx-1"
                      >
                        <i class="bi bi-facebook"></i>
                      </button>

                      <button
                        type="button"
                        class="btn btn-primary btn-floating mx-3"
                      >
                        <i class="bi bi-twitter"></i>
                      </button>

                      <button
                        type="button"
                        class="btn btn-primary btn-floating mx-1"
                      >
                        <i class="bi bi-linkedin"></i>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;
