import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  let navigate = useNavigate();
  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        let loginData = await axios.post(
          "https://hotel-backend-deploy.herokuapp.com/login",
          values
        );
        window.localStorage.setItem("myapptoken", loginData.data.token);
        navigate("/dashboard");
      } catch (error) {
        console.log(error);
        alert("Something went wrong");
      }
    },
  });
  return (
    <section class="vh-100">
      <div class="container-fluid h-custom">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-md-9 col-lg-6 col-xl-5">
            <img
              src="https://www.einfosoft.com/templates/admin/spiceangular/source/light/assets/images/pages/bg-01.png"
              class="img-fluid"
              alt="Sample"
            />
          </div>
          <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form onSubmit={formik.handleSubmit}>
              <div class="form-outline mb-4">
                <label class="form-label">Email address</label>
                <input
                  type={"email"}
                  name="email"
                  id="email"
                  class="form-control form-control-lg"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  placeholder="Enter a valid email address"
                  required
                />
              </div>

              <div class="form-outline mb-3">
                <label class="form-label">Password</label>
                <input
                  type={"password"}
                  className="form-control"
                  name="password"
                  id="password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  placeholder="Enter password"
                  required
                />
              </div>

              <div class="d-flex justify-content-between align-items-center">
                <div class="form-check mb-0">
                  <input
                    class="form-check-input me-2"
                    type="checkbox"
                    value=""
                    id="form2Example3"
                    required
                  />
                  <label class="form-check-label">Remember me</label>
                </div>
                <a href="#!" class="text-body">
                  Forgot password?
                </a>
              </div>

              <div class=" col-sm-12 text-center text-lg-start mt-4 pt-2">
                <input
                  type={"submit"}
                  class="btn btn-primary btn-lg"
                  style={{ paddingleft: "2.5rem", paddingright: "2.5rem" }}
                  value={"Login"}
                />

                <p class="small fw-bold mt-3 pt-1 mb-0">
                  Don't have an account?{" "}
                  <Link to="/register" class="link-primary">
                    Sign Up
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
