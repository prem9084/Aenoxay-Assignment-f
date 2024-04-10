import React from "react";
import { Link } from "react-router-dom";
const Dribble = () => {
  return (
    <div>
      <div style={{ marginTop: "5rem" }}>
        <div className="d-flex flex-row justify-content-around align-content-center w-75 m-auto cards">
          <div className="border p-3  rounded-5">
            <img
              src="https://miro.medium.com/v2/resize:fit:1400/1*BgUAEwIro7h6zBTYpkOIxg.jpeg"
              alt="job/image"
              height={"230rem"}
              width={"100%"}
            />
            <p className="mt-4 text-center">
              I am a designer looking to Share my Work
            </p>
            <input
              type="checkbox"
              name="lookingto"
              style={{ marginLeft: "8.5rem" }}
              className="inputs"
            />
          </div>

          <div className="border p-3 rounded-5 card">
            <img
              src="https://media.licdn.com/dms/image/D4D22AQGMttPElr5D4g/feedshare-shrink_800/0/1707860570763?e=2147483647&v=beta&t=IWv5gTiMrr7gb-gtMOFUldY1M4eiwRNpQvzT8EmfrMg"
              alt="job/image"
              height={"250rem"}
              width={"100%"}
            />
            <p className="mt-4 text-center">I'm looking to hire a desiger</p>
            <input type="checkbox" name="lookingto" />
          </div>

          <div className="border p-3 rounded-5 card">
            <img
              src="https://inspgr.id/app/uploads/2023/09/design-truf-feature.jpg"
              alt="job/image"
              height={"250rem"}
              width={"100%"}
              className="m-auto"
            />
            <p className="mt-4 text-center">
              I am looking for design inspiration
            </p>
            <input type="checkbox" name="lookingto" />
          </div>
        </div>
        <div className="text-center mt-5">
          <Link
            to={"/verify-email"}
            className="btn"
            style={{
              backgroundColor: "#ff3484",
              width: "15rem",
            }}
          >
            Finish
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dribble;
