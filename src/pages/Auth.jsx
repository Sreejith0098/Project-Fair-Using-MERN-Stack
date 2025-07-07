import React from "react";
import { useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { registerUser,loginUser } from "../services/allApi";
import Spinner from 'react-bootstrap/Spinner';
const Auth = ({ insideRegister }) => {
  const navigate = useNavigate()
  const [userData, setUserData] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const[loading,setLoading] = useState(false)

 const register = async () => {
  
  if(userData.email&& userData.password&& userData.userName){


try {
  
  let apiResult = await registerUser(userData)
  console.log(apiResult);
  if(apiResult.status==201){
    alert("successsfully added new user")
  }else{
    alert("something went wrong please contact admin")
  }
  
} catch (error) {
  console.error(error)
}

  }else{
    alert("please fill the form")
  }
 }

 const login =async()=>{
  if(userData.email && userData.password){
try {
  setLoading(true)
  let payload = {
    email:userData.email,
    password:userData.password
  }
  let apiResult = await loginUser(payload)
  console.log(apiResult);
  
  if(apiResult.status==200){
    sessionStorage.setItem("token",apiResult.data.token)
    sessionStorage.setItem("user",apiResult.data.userName)
    alert("login successful")
navigate("/")

  }else{
    alert("Invalid credentials please try again")
  }
  setLoading(false)
} catch (error) {
  console.error(error)
}
  }else{
    alert("please fill the form")
  }
 }

  return (
    <div
      style={{ minHeight: "100vh" }}
      className="d-flex align-items-center  justify-content-center"
    >
      <div className="container p-3 card">
        <div className="row align-items-center">
          <div className="col-lg-6 ms-0 ps-0">
            <img
              className="img-fluid w-75 "
              src="https://media.istockphoto.com/id/1281150061/vector/register-account-submit-access-login-password-username-internet-online-website-concept.jpg?s=612x612&w=0&k=20&c=9HWSuA9IaU4o-CK6fALBS5eaO1ubnsM08EOYwgbwGBo="
              alt=""
            />
          </div>
          <div className="col-lg-6">
            <h1>
              <i className="fa-brands fa-docker"></i> Project Fair
            </h1>
            <h3>Sign{insideRegister ? "in" : "up"}</h3>
            <Form>
              {insideRegister ? (
                <FloatingLabel
                  controlId="floatingInput"
                  label="Username"
                  className="mb-3"
                >
                  <Form.Control
                    onChange={(e) =>
                      setUserData({ ...userData, userName: e.target.value })
                    }
                    type="text"
                    placeholder="Username"
                  />
                </FloatingLabel>
              ) : (
                ""
              )}
              <FloatingLabel
                controlId="floatingInput"
                label="Email address"
                className="mb-3"
              >
                <Form.Control onChange={(e)=>setUserData({
                  ...userData,email:e.target.value
                })} type="email" placeholder="enter your email" />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInput"
                label="password"
                className="mb-3"
              >
                <Form.Control onChange={(e)=>setUserData({
                  ...userData,password:e.target.value
                })} type="password" placeholder="Password" />
              </FloatingLabel>
            </Form>
            {insideRegister ? (
              <div>
                <button onClick={register} className="btn btn-primary">Register</button>
                <p className="mt-2">
                  Existing user? Please click here to{" "}
                  <Link to={"/login"}> Login
                 
                  </Link>
                </p>
              </div>
            ) : (
              <div>
                <button onClick={login} className="btn btn-primary">Login
                {loading?  <Spinner animation="border" size="sm" />:""}
                </button>
                <p className="mt-2">
                  New user? Please click here to{" "}
                  <Link to={"/register"}> Register</Link>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
