import React from "react";
import "./Profile.css";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";

import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className="p-2" style={{ marginTop: "7rem" }}>
      <form
        style={{ border: "1px solid black" }}
        className="m-auto w-50 p-3 rounded form"
      >
        <h2>Welcome Let's Your Profile</h2>
        <p>Let other get know your better! You Can do these later</p>
        <h3 className="mt-5 fw-bold">Add an Avatar</h3>
        <div className="d-flex flex-row forms mt-3 profiles">
          <div className="profile-pic-container col-md-6">
            <div className="profile-pic-placeholder">
              <AddAPhotoIcon size="2x" />
            </div>
          </div>

          <div className="col-md-6 m-auto  p-3">
            <input
              type="file"
              accept="image/*"
              // className="file-input"
              className="btn btn-outline-info w-100"
              name="profilePic"
            />
          </div>
        </div>
        <div className="mt-5">
          <h6 className="fw-bold">Name</h6>
          <input type="text" className="w-100  form-control  mt-3" />
        </div>
        <div className="mt-5">
          <h6 className="fw-bold">Email</h6>
          <input type="email" className="w-100  form-control  mt-3" />
        </div>
        <div className="mt-5">
          <h6 className="fw-bold">Username</h6>
          <input type="text" className="w-100  form-control  mt-3" />
        </div>
        <div className="mt-5">
          <h2 className="fw-bold">Add Your Location</h2>
          <input
            type="text"
            placeholder="Enter Your Location"
            className="w-100  form-control  mt-3"
          />
        </div>

        <Link
          to={"/select-job-type"}
          type="submit"
          className="btn w-25 mt-5 "
          style={{ backgroundColor: "#ff3484" }}
        >
          Next
        </Link>
      </form>
    </div>
  );
};

export default Profile;
