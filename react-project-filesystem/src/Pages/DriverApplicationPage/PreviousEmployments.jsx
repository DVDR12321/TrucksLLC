import { Autocomplete, TextField } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
// 85a1a1c4c94d781917fdf0ddb5bc09d49092c384

const PreviousEmployments = () => {
  const [name, setName] = useState();
  return (
    <div>
      {useEffect(() => {
        fetch(
          "https://mobile.fmcsa.dot.gov/qc/services/carriers/2530313?webKey=85a1a1c4c94d781917fdf0ddb5bc09d49092c384"
        )
          .then((response) => {
            return response.json();
          })
          .then((data) => setName(data));
      }, [])}
      {console.log(name)}
      <TextField value={name.content.carrier.dotNumber}></TextField>
    </div>
  );
};
export default PreviousEmployments;
