import { TextField } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
// 85a1a1c4c94d781917fdf0ddb5bc09d49092c384

const PreviousEmployments = () => {
  const [name, setName] = useState("");
  const [CarrierData, setCarrierData] = useState({});

  const HandleChange = (e) => {
    return setName(e.target.value);
  };
  return (
    <div>
      <TextField
        onChange={(e) => {
          HandleChange(e);
        }}
      ></TextField>
      {useEffect(() => {
        fetch(
          `https://mobile.fmcsa.dot.gov/qc/services/carriers/name/${name.toString()}?webKey=85a1a1c4c94d781917fdf0ddb5bc09d49092c384`
        )
          .then((response) => {
            return response.json();
          })
          .then((data) => console.log(data));
        // .then((data) => setCarrierData(data))
        // .then(console.log(CarrierData));
      }, [name])}
    </div>
  );
};
export default PreviousEmployments;
