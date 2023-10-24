import React from "react";
import cookie from "react-cookies";

function Dashboard() {
  return (
    <div>
      <div className="dash_board">
        <h1 className="title">
          {cookie.load("user")
            ? `Welcome to Etsy Family, ${cookie.load("user")}!`
            : "Explore one-of-a-kind finds from independent makers"}
        </h1>
 
      </div>
    </div>
  );
}

export default Dashboard;
