import React from "react";
import "./simple-container.css";

const Mycontainer = (props) => {
  const { Header, Body } = props;
  return (
    <div className="containerq">
      <h1 className="Header"> {Header} </h1>
      <div className="Separator"></div>
      <div className="Body"> {Body} </div>
    </div>
  );
};
export default Mycontainer;
