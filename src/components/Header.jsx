import React from "react";
import { Container, Navbar } from "react-bootstrap";

Container;
const Header = ({ insideDashboard }) => {
  return (
    <Navbar className=" position-sticky top-0 border shadow ">
      <Container className="d-flex">
        <div>
          <Navbar.Brand className="fs-3 fw-bold text-light" href="#home">
            <i className="fa-brands fa-docker"></i> Project Fair
          </Navbar.Brand>
        </div>
        {insideDashboard ? (
          <button className="btn fw-bold btn-link fs-5">
            Logout
            <i className="fa-solid fa-right-from-bracket"></i>
          </button>
        ) : (
          ""
        )}
      </Container>
    </Navbar>
  );
};

export default Header;
