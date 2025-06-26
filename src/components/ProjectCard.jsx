import React, { useState } from "react";
import { Card, Modal } from "react-bootstrap";

const ProjectCard = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
      <Card onClick={handleShow} style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://s3-ap-south-1.amazonaws.com/static.awfis.com/wp-content/uploads/2017/07/07184649/ProjectManagement.jpg"
        />
        <Card.Body>
          <Card.Title className="text-center">Project Name</Card.Title>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Project Details!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img
                className="img-fluid"
                src="https://s3-ap-south-1.amazonaws.com/static.awfis.com/wp-content/uploads/2017/07/07184649/ProjectManagement.jpg"
                alt=""
              />
            </div>
            <div className="col-lg-6">
              <h2>Project Name</h2>
              <p>
                <span className="fw-bold">Languages Used:</span>{" "}
                <span className="text-warning">HTML,CSS,JS</span>
              </p>
              <p>
                <span className="fw-bold">Project Over View:</span>Simple
                website for performing tasks like add multiplication divisin
                substraction
              </p>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="me-auto fs-2">
            <a href="">
              {" "}
              <i class="fa-brands fa-github"></i>
            </a>
            <a className="ms-3" href="">
              <i class="fa-solid fa-link"></i>
            </a>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ProjectCard;
