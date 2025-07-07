import React from "react";
import Header from "../components/Header";
import Profile from "../components/Profile";
import Add from "../components/Add";
import View from "../components/View";

const Dashboard = () => {

  return (
    <>
      <Header insideDashboard={true} />
      <div className="row mt-3">
        <div className="col-lg-8">
          <h1>
            Welcome <span className="text-warning">User Name</span>
          </h1>
          <div>
            <div className="d-flex justify-content-between">
              <h3>All Projects</h3>
              <Add />
            </div>
            <View />
          </div>
        </div>
        <div className="col-lg-4">
          <Profile />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
