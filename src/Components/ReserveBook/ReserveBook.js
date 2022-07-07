import React, { useRef } from "react";
import Sidebar from "../Sidebar/Sidebar";
import { useFormik } from "formik";
import axios from "axios";
import "./Reservebook.css";
import { useReactToPrint } from "react-to-print";

import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
// import Reservecustomers from './Reservecustomers';

function ReserveBook() {
  let navigate = useNavigate();
  const componentRef = useRef();
  const handleprint = useReactToPrint({
    content: () => componentRef.current,
  });
  let formik = useFormik({
    initialValues: {
      roomtype: "",
      roomnumber: "",
      status: "",
      advance: "",
      Noofguest: "",
      checkin: "",
      checkout: "",
      firstname: "",
      lastname: "",
      email: "",
      contactnumber: "",
      idtype: "",
      idnumber: "",
      address: "",
      city: "",
      state: "",
      pincode: "",
    },
    //     validate:(values)=>{
    // const errors={};
    // if(!values.roomtype){
    //   errors.roomtype ="Select   RooomType "
    // }
    // if(!values.roomnumber){
    //   errors.roomnumber ="Enter  Rooom Number "
    // }
    // return errors;
    //     },
    onSubmit: async (values) => {
      try {
        await axios.post(
          "https://project-hotel-management.herokuapp.com/booking",
          values
        );
      } catch (error) {}
    },
  });

  let buttonclickbook = (e) => {
    swal(" Room Added", {
      icon: "success",
      timer: 2000,
    });
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2 p-0">
            <Sidebar />
          </div>
          <div className="col-lg-10  mt-4 mb-3  ">
            <div className=" ms-5">
              <h2>Room Information</h2>
              <div className="container-fluid">
                <form class="row g-2 mt-2">
                  <div class="col-md-4">
                    <label for="roomnumber" class="form-label">
                      RoomNumber
                    </label>

                    <input
                      type="number"
                      autocomplete="off"
                      maxlength="3"
                      class="form-control"
                      id="roomnumber"
                      name="roomnumber"
                      onChange={formik.handleChange}
                      value={formik.values.roomnumber}
                      required
                    />
                    {/* <span  style={{color:"red"}}>{formik.errors.roomnumber}</span> */}
                  </div>
                  <div class="col-md-4">
                    <label for="roomtype" class="form-label">
                      RoomType
                    </label>
                    {/* <span  style={{color:"red"}}>*</span> */}

                    <select
                      id="roomtype"
                      name="roomtype"
                      onChange={formik.handleChange}
                      value={formik.values.roomtype}
                      class="form-select"
                      required
                    >
                      <option selected>-Select-</option>
                      <option>Single</option>
                      <option>Double</option>
                      <option>Triple</option>
                      <option>Family</option>
                    </select>
                    {/* <span  style={{color:"red"}}>{formik.errors.roomtype}</span> */}
                  </div>

                  <div class="col-md-4">
                    <label for="status" class="form-label">
                      Booking Status
                    </label>
                    <select
                      id="status"
                      name="status"
                      onChange={formik.handleChange}
                      value={formik.values.status}
                      class="form-select"
                    >
                      <option selected>-Select-</option>
                      <option>Reserved</option>
                      <option>Checked In</option>
                      <option>Checked Out</option>
                    </select>
                  </div>
                  <div class="col-md-3">
                    <label for="advance" class="form-label">
                      Advance
                    </label>
                    <input
                      type="number"
                      class="form-control"
                      placeholder="₹"
                      id="advance"
                      name="advance"
                      onChange={formik.handleChange}
                      value={formik.values.advance}
                    />
                  </div>
                  <div class="col-md-3">
                    <label for="noofguest" class="form-label">
                      No Of Guests
                    </label>
                    <select
                      id="noofguest"
                      name="noofguest"
                      onChange={formik.handleChange}
                      value={formik.values.noofguest}
                      class="form-select"
                    >
                      <option selected>-Select-</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                    </select>
                  </div>
                  <div class="col-md-3">
                    <label for="checkin" class="form-label">
                      Check In Date
                    </label>
                    <input
                      type="datetime-local"
                      class="form-control"
                      id="checkin"
                      name="checkin"
                      onChange={formik.handleChange}
                      value={formik.values.checkin}
                    />
                  </div>
                  <div class="col-md-3">
                    <label for="checkout" class="form-label">
                      Check Out Date
                    </label>
                    <input
                      type="datetime-local"
                      class="form-control"
                      id="checkout"
                      name="checkout"
                      onChange={formik.handleChange}
                      value={formik.values.checkout}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-10 mt-2 ">
            <div className="container-fluid">
              <h2 className="ms-4">Customer Detail</h2>

              <form class="row  ms-5 g-3 mt-2">
                <div class="col-md-6">
                  <label for="firstname" class="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="firstname"
                    name="firstname"
                    placeholder="First Name"
                    onChange={formik.handleChange}
                    value={formik.values.firstname}
                  />
                </div>
                <div class="col-md-6">
                  <label for="lastname" class="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="lastname"
                    placeholder="Last Name"
                    name="lastname"
                    onChange={formik.handleChange}
                    value={formik.values.lastname}
                  />
                </div>
                <div class="col-md-6">
                  <label for="email" class="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    placeholder="Email"
                    name="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />
                </div>
                <div class="col-md-6">
                  <label for="contactnumber" class="form-label">
                    Contact Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+91"
                    maxlength="10"
                    class="form-control"
                    id="contactnumber"
                    name="contactnumber"
                    onChange={formik.handleChange}
                    value={formik.values.contactnumber}
                  />
                </div>

                <div class="col-md-6">
                  <label for="idtype" class="form-label">
                    ID Type
                  </label>
                  <select
                    id="idtype"
                    name="idtype"
                    class="form-select"
                    onChange={formik.handleChange}
                    value={formik.values.idtype}
                  >
                    <option selected>Choose...</option>
                    <option>Aadhar Card</option>
                    <option>Driving license</option>
                  </select>
                </div>
                <div class="col-md-6">
                  <label for="idnumber" class="form-label">
                    ID Number
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="idnumber"
                    name="idnumber"
                    placeholder="Id Number"
                    onChange={formik.handleChange}
                    value={formik.values.idnumber}
                  />
                </div>
                <div class="col-12">
                  <label for="address" class="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="address"
                    name="address"
                    placeholder="Address"
                    onChange={formik.handleChange}
                    value={formik.values.address}
                  />
                </div>

                <div class="col-md-4">
                  <label for="city" class="form-label">
                    City
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="city"
                    name="city"
                    placeholder="City"
                    onChange={formik.handleChange}
                    value={formik.values.city}
                  />
                </div>
                <div class="col-md-4">
                  <label for="state" class="form-label">
                    State
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="state"
                    name="state"
                    placeholder="State"
                    onChange={formik.handleChange}
                    value={formik.values.state}
                  />
                </div>
                <div class="col-md-4">
                  <label for="pincode" class="form-label">
                    Pincode
                  </label>
                  <input
                    type="number"
                    class="form-control"
                    id="pincode"
                    name="pincode"
                    maxlength="6"
                    placeholder="Pincode"
                    onChange={formik.handleChange}
                    value={formik.values.pincode}
                  />
                </div>
              </form>
              <div class="col-12 mt-3 ms-4 py-3">
                <button
                  class="btn  btn-book px-5"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  Book Hotel
                </button>

                <div
                  class="modal fade ms-5"
                  id="exampleModal"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                      <div class=" listing">
                        <div class="p-3 bg-white border-bottom">
                          <main class="page payment-page">
                            <section class="payment-form dark">
                              <div class="container">
                                <div class="products">
                                  <div class=" bg-white">
                                    <div class=" d-flex flex-row-reverse">
                                      <span class=" p-3 btn  fs-3">
                                        <i
                                          class="bi bi-printer-fill"
                                          onClick={handleprint}
                                        ></i>
                                      </span>
                                    </div>
                                  </div>
                                  <div className="printt" ref={componentRef}>
                                    <div class="d-flex flex-row align-items-center justify-content-between">
                                      <h6 className="mx-auto fs-2">
                                        Hotel Title
                                      </h6>
                                    </div>
                                    <h3 class="title">Room Deatails</h3>
                                    <form onSubmit={formik.handleSubmit}>
                                      <div class="row g-3">
                                        <div class="col-md-4">
                                          <label
                                            for="roomnumber"
                                            class="form-label"
                                          >
                                            RoomNumber
                                          </label>
                                          <input
                                            type="number"
                                            autocomplete="off"
                                            maxlength="3"
                                            class="form-control"
                                            id="roomnumber"
                                            name="roomnumber"
                                            onChange={formik.handleChange}
                                            value={formik.values.roomnumber}
                                          />
                                        </div>
                                        <div class="col-md-4">
                                          <label
                                            for="roomtype"
                                            class="form-label"
                                          >
                                            RoomType
                                          </label>
                                          <select
                                            id="roomtype"
                                            name="roomtype"
                                            onChange={formik.handleChange}
                                            value={formik.values.roomtype}
                                            class="form-select"
                                          >
                                            <option selected>-Select-</option>
                                            <option>Single</option>
                                            <option>Double</option>
                                            <option>Triple</option>
                                            <option>Family</option>
                                          </select>
                                        </div>

                                        <div class="col-md-4">
                                          <label
                                            for="status"
                                            class="form-label"
                                          >
                                            Booking Status
                                          </label>
                                          <select
                                            id="status"
                                            name="status"
                                            onChange={formik.handleChange}
                                            value={formik.values.status}
                                            class="form-select"
                                          >
                                            <option selected>-Select-</option>
                                            <option>Reserved</option>
                                            <option>Checked In</option>
                                            <option>Checked Out</option>
                                          </select>
                                        </div>
                                        <div class="col-md-4">
                                          <label
                                            for="advance"
                                            class="form-label"
                                          >
                                            Advance
                                          </label>
                                          <input
                                            type="number"
                                            class="form-control"
                                            placeholder="$"
                                            id="advance"
                                            name="advance"
                                            onChange={formik.handleChange}
                                            value={formik.values.advance}
                                          />
                                        </div>
                                        <div class="col-md-4">
                                          <label
                                            for="checkin"
                                            class="form-label"
                                          >
                                            Check In Date
                                          </label>
                                          <input
                                            type="datetime-local"
                                            class="form-control"
                                            id="checkin"
                                            name="checkin"
                                            onChange={formik.handleChange}
                                            value={formik.values.checkin}
                                          />
                                        </div>
                                        <div class="col-md-4">
                                          <label
                                            for="checkout"
                                            class="form-label"
                                          >
                                            Check Out Date
                                          </label>
                                          <input
                                            type="datetime-local"
                                            class="form-control"
                                            id="checkout"
                                            name="checkout"
                                            onChange={formik.handleChange}
                                            value={formik.values.checkout}
                                          />
                                        </div>
                                      </div>
                                      <hr className="mt-4 text-dark" />

                                      <div class="card-details">
                                        <h3 class="title ">Customer Details</h3>
                                        <div className="row g-3">
                                          <div class="col-md-6">
                                            <label
                                              for="firstname"
                                              class="form-label"
                                            >
                                              First Name
                                            </label>
                                            <input
                                              type="text"
                                              class="form-control"
                                              id="firstname"
                                              name="firstname"
                                              onChange={formik.handleChange}
                                              value={formik.values.firstname}
                                            />
                                          </div>
                                          <div class="col-md-6">
                                            <label
                                              for="lastname"
                                              class="form-label"
                                            >
                                              Last Name
                                            </label>
                                            <input
                                              type="text"
                                              class="form-control"
                                              id="lastname"
                                              name="lastname"
                                              onChange={formik.handleChange}
                                              value={formik.values.lastname}
                                            />
                                          </div>
                                          <div class="col-md-6">
                                            <label
                                              for="email"
                                              class="form-label"
                                            >
                                              Email
                                            </label>
                                            <input
                                              type="email"
                                              class="form-control"
                                              id="email"
                                              name="email"
                                              onChange={formik.handleChange}
                                              value={formik.values.email}
                                            />
                                          </div>
                                          <div class="col-md-6">
                                            <label
                                              for="contactnumber"
                                              class="form-label"
                                            >
                                              Contact Number
                                            </label>
                                            <input
                                              type="tel"
                                              placeholder="+91"
                                              maxlength="10"
                                              class="form-control"
                                              id="contactnumber"
                                              name="contactnumber"
                                              onChange={formik.handleChange}
                                              value={
                                                formik.values.contactnumber
                                              }
                                            />
                                          </div>
                                          <div class="col-md-6">
                                            <label
                                              for="idtype"
                                              class="form-label"
                                            >
                                              ID Type
                                            </label>
                                            <select
                                              id="idtype"
                                              name="idtype"
                                              class="form-select"
                                              onChange={formik.handleChange}
                                              value={formik.values.idtype}
                                            >
                                              <option selected>
                                                Choose...
                                              </option>
                                              <option>Aadhar Card</option>
                                              <option>Driving license</option>
                                            </select>
                                          </div>
                                          <div class="col-md-6">
                                            <label
                                              for="idnumber"
                                              class="form-label"
                                            >
                                              ID Number
                                            </label>
                                            <input
                                              type="text"
                                              class="form-control"
                                              id="idnumber"
                                              name="idnumber"
                                              onChange={formik.handleChange}
                                              value={formik.values.idnumber}
                                            />
                                          </div>
                                          <div class="col-12">
                                            <label
                                              for="address"
                                              class="form-label"
                                            >
                                              Address
                                            </label>
                                            <input
                                              type="text"
                                              class="form-control"
                                              id="address"
                                              name="address"
                                              onChange={formik.handleChange}
                                              value={formik.values.address}
                                            />
                                          </div>

                                          <div class="col-md-4">
                                            <label
                                              for="city"
                                              class="form-label"
                                            >
                                              City
                                            </label>
                                            <input
                                              type="text"
                                              class="form-control"
                                              id="city"
                                              name="city"
                                              onChange={formik.handleChange}
                                              value={formik.values.city}
                                            />
                                          </div>
                                          <div class="col-md-4">
                                            <label
                                              for="state"
                                              class="form-label"
                                            >
                                              State
                                            </label>
                                            <input
                                              type="text"
                                              class="form-control"
                                              id="state"
                                              name="state"
                                              onChange={formik.handleChange}
                                              value={formik.values.state}
                                            />
                                          </div>
                                          <div class="col-md-4">
                                            <label
                                              for="pincode"
                                              class="form-label"
                                            >
                                              Pincode
                                            </label>
                                            <input
                                              type="number"
                                              class="form-control"
                                              id="pincode"
                                              name="pincode"
                                              onChange={formik.handleChange}
                                              value={formik.values.pincode}
                                            />
                                          </div>

                                          <div class="complete p-3 mt-2">
                                            <div class="text-center mt-4 mb-4">
                                              <button
                                                type="submit"
                                                class="btn btn-success booking"
                                                onClick={buttonclickbook}
                                                data-bs-dismiss="modal"
                                                aria-label="Close"
                                              >
                                                Complete Booking
                                              </button>

                                              <button
                                                type="button"
                                                class="ms-2 close btn btn-danger"
                                                data-dismiss="modal"
                                                aria-label="Close"
                                              >
                                                <span aria-hidden="true">
                                                  Cancel
                                                </span>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </form>
                                  </div>
                                </div>
                              </div>
                            </section>
                          </main>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReserveBook;
