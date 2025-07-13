import React from "react";
import { Link, useNavigate } from "react-router-dom";
import landingImg from "../assets/landingImg.png";
import ProjectCard from "../components/ProjectCard";
const Home = () => {

  const navigate =useNavigate();
  const onProjectClick=()=>{
    if(sessionStorage.getItem("token")){
      navigate("/projects");
    }else{
      alert("please login")
    }
  }
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

              {
                sessionStorage.getItem("token")?(
                  <Link to={"/dashboard"} className="btn btn-primary" >
                    manage your projects
                   </Link>
                ):(
              
              <Link to={"/login"} className="btn btn-warning">
                STARTS TO EXPLORE
              </Link>)
}
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
        <button onClick={onProjectClick} btn btn-link mt-5>
          Click here to view more Projects
        </button>
        <div className="text-center">
          <h1 className="my-5">Our Testimanials</h1>
          <div className="d-md-flex justify-content-around">
            <div style={{ width: "16rem" }} className="card text-center">
              <img
                className="img-fluid"
                src="https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-male-user-profile-vector-illustration-isolated-background-man-profile-sign-business-concept_157943-38764.jpg"
                alt=""
              />
              <div className="text-warning">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
                reiciendis cum ratione nam dolorum quas exercitationem.
              </p>
            </div>
            <div style={{ width: "16rem" }} className="card text-center">
              <img
                className="img-fluid"
                src="https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-male-user-profile-vector-illustration-isolated-background-man-profile-sign-business-concept_157943-38764.jpg"
                alt=""
              />
              <div className="text-warning">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
                reiciendis cum ratione nam dolorum quas exercitationem.
              </p>
            </div>
            <div style={{ width: "16rem" }} className="card text-center">
              <img
                className="img-fluid "
                src="https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-male-user-profile-vector-illustration-isolated-background-man-profile-sign-business-concept_157943-38764.jpg"
                alt=""
              />
              <div className="text-warning">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
                reiciendis cum ratione nam dolorum quas exercitationem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
