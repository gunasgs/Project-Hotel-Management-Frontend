import React, { useEffect } from "react";
import "./Profile.css";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";

function Profile() {
  let user = { Firstname: "user", email: "user@gmail.com" };
  return (
    <div className="profile-container">
      <div className="back">
        <Link to={"/dashboard"}>
          <IoMdArrowRoundBack className="back-icon fs-1" />
        </Link>
      </div>

      <div className="cover-pic ">
        <img
          className=" cover-bg"
          src="https://source.unsplash.com/1300x350/?nature,technology"
          alt="cover-pic"
        />
        <img
          className="user-pic "
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
          alt="user-pic"
        />
      </div>
      <h4 className="  mt-1">Name :{user.Firstname} </h4>
      <h4 className=" mt-1">Email:{user.email} </h4>
    </div>
  );
}

export default Profile;
