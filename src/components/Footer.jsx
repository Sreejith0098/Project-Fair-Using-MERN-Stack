import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
          <div
        style={{ paddingLeft: "65px" }}
        className="bg-purple-500 w-full d-flex grid grid-cols-4 text-white  pt-6 pb-3"
      >
        <div className="col">
        <i  className="fa-brands  fa-docker"></i>{" "}
          <span style={{ fontSize: "22px" }} className="font-bold ">
            Project Fair
          </span>
          <p>
            designed and build with all the love in the world by Luminar team
            with the help of our contributers{" "}
          </p>
          <p>Code licenced Luminar docs CC BY 3.0.</p>
          <p>Currently v5.3.2</p>
        </div>
        <div  className="col ps-6 ">
          <h4 style={{ fontSize: "22px" }} className="font-bold">
            Links
          </h4>
          <p>
            {" "}
            <Link style={{textDecoration:'none'}} to={"/"}>Home Page</Link>
          </p>
          <p>
            {" "}
            <Link style={{textDecoration:'none'}} to={"/cart"}>Cart</Link>
          </p>
          <p>
            {" "}
            <Link style={{textDecoration:'none'}} to={"/wishlist"}>whishlist</Link>
          </p>
        </div>
        <div className="col ps-6">
          <h4 style={{ fontSize: "22px" }} className="font-bold">
            Guides
          </h4>
          <p>React</p>
          <p>Tailwind css</p>
          <p>React Router</p>
          <p>Redux</p>
        </div>
        <div className="col ps-6">
          <h4 style={{ fontSize: "22px" }} className="font-bold">
            Contact Us
          </h4>
          <div className="flex">
            <input
              className="bg-white rounded block mb-2 text-black p-1 text-center"
              type="text"
              placeholder="Enter your email here"
            />{" "}
            <span className=" font-bold mt-1">&rarr;</span>
          </div>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands ms-3 fa-facebook"></i>
          <i className="fa-brands ms-3 fa-instagram"></i>
          <i className="fa-brands ms-3 fa-github"></i>
          <i className="fa-solid ms-3 fa-phone"></i>{" "}
        </div>
      </div>
      <p className="pt-6 pb-6 bg-purple-500 w-full text-white text-center">
        Copy right{" "}
        <span style={{ fontSize: "24px", fontWeight: "bold" }}>&copy;</span>{" "}
        january 2025 batch,Daily Cart,Build with React Redux.
      </p>
    </div>
  )
}

export default Footer