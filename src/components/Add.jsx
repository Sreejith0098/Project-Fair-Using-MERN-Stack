import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import placeholderImg from "../assets/placeholderImg.png";
const Add = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <button onClick={handleShow} className="btn btn-primary">
        <i class="fa-solid fa-plus"></i>Add Project
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={true}
        centered
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>My New Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row align-items-center">
            <div className="col-lg-5">
              <label>
                <input style={{ display: "none" }} type="file" name="" id="" />
                <img className="img-fluid" src={placeholderImg} alt="" />
              </label>
              <p className="text-warning fw-bold fs-6 text-center pt-2">
                Upload the following types (jpg,png,jpeg)here!!!
              </p>
            </div>
            <div className="col-lg-7">
              <FloatingLabel
                controlId="floatingInput"
                label="project title"
                className="mb-3"
              >
                <Form.Control type="text" placeholder="project title" />
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingInput"
                label="project languages"
                className="mb-3"
              >
                <Form.Control type="text" placeholder="project languages" />
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingInput"
                label="project overview"
                className="mb-3"
              >
                <Form.Control type="text" placeholder="project overview" />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInput"
                label="project github link"
                className="mb-3"
              >
                <Form.Control type="text" placeholder="project github link" />
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingInput"
                label="project live link"
                className="mb-3"
              >
                <Form.Control type="text" placeholder="project live link" />
              </FloatingLabel>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Add;
