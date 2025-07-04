import React from "react";

const View = () => {
  
  return (
    <div>
      <div className="d-flex justify-content-between border rounded my-2">
        <h1>title</h1>
        <div>
          <button className="btn">
            {" "}
            <i className="fa-solid fa-pen-to-square"></i>
          </button>
          <button className="btn">
            {" "}
            <i className="fa-brands fa-github"></i>
          </button>
          <button className="btn text-danger">
            {" "}
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default View;
