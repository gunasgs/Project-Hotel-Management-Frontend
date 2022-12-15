import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
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
        await axios.post("https://tired-hen-kit.cyclic.app/register", values);
        navigate("/");
      } catch (error) {
        console.log(error);
        alert("Something went wrong");
      }
    },
  });
  return (
    <section>
      <div class="px-4 pt-xl-3 px-md-5 text-center text-lg-start">
        <div class="container">
          <div class="row gx-lg-5 align-items-center">
            <div class="col-md-9 col-lg-6 col-xl-7">
              <img
                src="https://www.einfosoft.com/templates/admin/spiceangular/source/rtl/assets/images/pages/bg-02.png"
                class="img-fluid"
                alt="Sample"
              />
            </div>

            <div class="col-lg-6 col-xl-5 mt-xl-3">
              <div class="card">
                <div class="card-body py-4 px-md-5">
                  <form onSubmit={formik.handleSubmit}>
                    <div class="row g-3">
                      <div class="col-md-6 mb-3">
                        <div class="form-outline">
                          <label class="form-label">
                            First name<span className="important">*</span>
                          </label>
                          <input
                            type={"text"}
                            id="Firstname"
                            class="form-control "
                            onChange={formik.handleChange}
                            value={formik.values.Firstname}
                            required
                          />
                        </div>
                      </div>
                      <div class="col-md-6 mb-3">
                        <div class="form-outline">
                          <label class="form-label">
                            Last name<span className="important">*</span>
                          </label>
                          <input
                            type="text"
                            id="Lastname"
                            class="form-control "
                            onChange={formik.handleChange}
                            value={formik.values.Lastname}
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div class="form-outline mb-3">
                      <label class="form-label">
                        Email<span className="important">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        class="form-control  "
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        required
                      />
                    </div>

                    <div class="form-outline mb-3">
                      <label class="form-label">
                        Password<span className="important">*</span>
                      </label>
                      <input
                        type="password"
                        id="password"
                        class="form-control  "
                        required
                      />
                    </div>
                    <div class="form-outline mb-3">
                      <label class="form-label">
                        Confirm Password<span className="important">*</span>
                      </label>
                      <input
                        type="password"
                        id="password"
                        class="form-control "
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        required
                      />
                    </div>

                    <div className="col-lg-12">
                      <input
                        type={"submit"}
                        className="btn color-btn "
                        value="Sign up"
                      />
                      <p class="small fs-6 fw-bold mt-2 pt-1 mb-0">
                        Have an account already?
                        <Link to="/" class="color ms-2">
                          Log In
                        </Link>
                      </p>
                    </div>
                    <div class="divider d-flex align-items-center my-4">
                      <p class="text-center fw-bold mx-3 mb-0">Sign in with</p>
                    </div>
                    <div class="d-flex flex-row align-items-center justify-content-center">
                      <button
                        type="button"
                        class="btn color-btn btn-floating  mx-1"
                      >
                        <i class="bi bi-facebook"></i>
                      </button>

                      <button
                        type="button"
                        class="btn color-btn btn-floating mx-1"
                      >
                        <i class="bi bi-twitter"></i>
                      </button>

                      <button
                        type="button"
                        class="btn color-btn btn-floating mx-1"
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
