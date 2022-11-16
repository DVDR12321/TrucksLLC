import React from "react";
import Mycontainer from "../references/simple-container";
import "./offers.css";

const Offers = () => {
  return (
    <Mycontainer
      Header="What we offer"
      Body={
        <p className="list">
          <li>24 hours Dispatch</li>
          <li>Fleet Monitoring Systems</li>
          <li>Know where your load is any given time</li>
          <li>Well maintained fleet</li>
          <li>Responsible drivers</li>
        </p>
      }
    ></Mycontainer>
  );
};
export default Offers;
