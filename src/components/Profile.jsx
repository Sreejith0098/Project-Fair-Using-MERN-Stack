import React from "react";
import { useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import avatar from "../assets/avatar.png";
import { FloatingLabel, Form } from "react-bootstrap";

const Profile = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-around align-items-center text-warning">
        <h2>Profile</h2>
        <button onClick={() => setOpen(!open)} className=" btn text-warning ">
          <i className="fa-solid fs-4 fa-caret-down"></i>
        </button>
      </div>
      <Collapse in={open}>
        <div className="card m-2">
          <div className="text-center p-3 ">
            <label>
              <input style={{ display: "none" }} type="file" name="" id="" />
              <img className="img-fluid w-25" src={avatar} alt="" />
            </label>
            <FloatingLabel
              controlId="floatingInput"
              label="User github link"
              className="mb-3 mt-2"
            >
              <Form.Control type="text" placeholder="User github link" />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="User linkedin link"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="User linkedin link" />
            </FloatingLabel>
            <button className="btn btn-warning w-100 text-light fw-bold">
              Update
            </button>
          </div>
        </div>
      </Collapse>
    </div>
  );
};

export default Profile;
