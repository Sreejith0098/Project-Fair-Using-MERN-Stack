import React from "react";
import { Link } from "react-router-dom";
import landingImg from "../assets/landingImg.png";
import ProjectCard from "../components/ProjectCard";
const Home = () => {
  return (
    <>
      <div
        style={{ minHeight: "100vh" }}
        className="d-flex justify-content-center align-items-center  shadow rounded"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 style={{ fontSize: "80px" }}>
                {" "}
                <i className="fa-brands fa-docker"></i> Project Fair
              </h1>
              <p style={{ textAlign: "justify" }}>
                One Stop Destination for all Software Development Projects.
                Where User can add and manage their projects. As well as access
                all projects available in our website... What are you waiting
                for!!!
              </p>
              <Link to={"/login"} className="btn btn-warning">
                STARTS TO EXPLORE
              </Link>
            </div>
            <div className="col-lg-6">
              <img src={landingImg} alt="landingImg" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
      <div className="text-center my-5">
        <h1>Explore Our Projects</h1>
        <marquee>
          <ProjectCard />
        </marquee>
        <button btn btn-link mt-5>
          Click here to view more Projects
        </button>
        <div className="text-center">
          <h1 className="my-5">Our Testimanials</h1>
          <div className="d-md-flex justify-content-around">
            <div style={{ width: "16rem" }} className="card text-center">
              <div>Icons</div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
                reiciendis cum ratione nam dolorum quas exercitationem.
                Exercitationem officiis praesentium maxime ea eos? Fugit
                officiis sunt quos alias fuga eum cumque.
              </p>
              <img className="img-fluid" src="" alt="" />
            </div>
            <div style={{ width: "16rem" }} className="card text-center">
              <div className="text-warning">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
                reiciendis cum ratione nam dolorum quas exercitationem.
                Exercitationem officiis praesentium maxime ea eos? Fugit
                officiis sunt quos alias fuga eum cumque.
              </p>
              <img className="img-fluid" src="" alt="" />
            </div>
            <div style={{ width: "16rem" }} className="card text-center">
              <div>Icons</div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
                reiciendis cum ratione nam dolorum quas exercitationem.
                Exercitationem officiis praesentium maxime ea eos? Fugit
                officiis sunt quos alias fuga eum cumque.
              </p>
              <img className="img-fluid" src="" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
