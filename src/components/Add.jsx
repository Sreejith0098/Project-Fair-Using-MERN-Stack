import React, { useEffect } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import placeholderImg from "../assets/placeholderImg.png";
const Add = () => {
  const [show, setShow] = useState(false);
  const [validImage, setValidImg] = useState(true);
  const [previewUrl, setPreviewUrl] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [projectData, setProjectData] = useState({
    title: "",
    language: "",
    overView: "",
    gitLink: "",
    liveLink: "",
    projectImg: "",
  });

  useEffect(() => {
    if (
      projectData.projectImg.type == "image/png" ||
      projectData.projectImg.type == "image/jpg" ||
      projectData.projectImg.type == "image/jpeg"
    ) {
      //valid image
      setValidImg(true);
      setPreviewUrl(URL.createObjectURL(projectData.projectImg));
    } else {
      //invalid imagae
      setValidImg(false);
    }
  }, [projectData.projectImg]);

  const onAddClick = () => {
    // console.log(projectData);
    if (
      projectData.title &&
      projectData.language &&
      projectData.overView &&
      projectData.gitLink &&
      projectData.liveLink &&
      projectData.projectImg
    ) {
      try {
        const reqBody = new FormData();
        reqBody.append("title", projectData.title);
        reqBody.append("language", projectData.language);
        reqBody.append("overView", projectData.overView);
        reqBody.append("gitLink", projectData.gitLink);
        reqBody.append("liveLink", projectData.liveLink);
        reqBody.append("projectImg", projectData.projectImg);

        const token = sessionStorage.getItem("token")

        
        if(token){
          let headers = {
            "Content-Type" : "multipart/form-data",
            "Authorization": `Bearer ${token}`
          }
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("please fill the form");
    }
  };
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
                <input
                  onChange={(e) =>
                    setProjectData({
                      ...projectData,
                      projectImg: e.target.files[0],
                    })
                  }
                  style={{ display: "none" }}
                  type="file"
                  name=""
                  id=""
                />
                <img
                  className="img-fluid"
                  src={previewUrl ? previewUrl : placeholderImg}
                  alt=""
                />
              </label>
              {!validImage ? (
                <p className="text-warning fw-bold fs-6 text-center pt-2">
                  Upload the following types (jpg,png,jpeg)here!!!
                </p>
              ) : (
                ""
              )}
            </div>
            <div className="col-lg-7">
              <FloatingLabel
                controlId="floatingInput"
                label="project title"
                className="mb-3"
              >
                <Form.Control
                  onChange={(e) =>
                    setProjectData({ ...projectData, title: e.target.value })
                  }
                  type="text"
                  placeholder="project title"
                />
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingInput"
                label="project languages"
                className="mb-3"
              >
                <Form.Control
                  onChange={(e) =>
                    setProjectData({ ...projectData, language: e.target.value })
                  }
                  type="text"
                  placeholder="project languages"
                />
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingInput"
                label="project overview"
                className="mb-3"
              >
                <Form.Control
                  onChange={(e) =>
                    setProjectData({ ...projectData, overView: e.target.value })
                  }
                  type="text"
                  placeholder="project overview"
                />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInput"
                label="project github link"
                className="mb-3"
              >
                <Form.Control
                  onChange={(e) =>
                    setProjectData({ ...projectData, gitLink: e.target.value })
                  }
                  type="text"
                  placeholder="project github link"
                />
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingInput"
                label="project live link"
                className="mb-3"
              >
                <Form.Control
                  onChange={(e) =>
                    setProjectData({ ...projectData, liveLink: e.target.value })
                  }
                  type="text"
                  placeholder="project live link"
                />
              </FloatingLabel>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button disabled={!validImage} onClick={onAddClick} variant="primary">
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Add;
