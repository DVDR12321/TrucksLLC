import { Autocomplete, TextField } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
// WebKey : 85a1a1c4c94d781917fdf0ddb5bc09d49092c384

const PreviousEmployments = () => {
  const [name, setName] = useState("Trucks");
  const [CarrierData, setCarrierData] = useState({});
  let result = [];

  const HandleChange = (e) => {
    return setName(e.target.value);
  };
  useEffect(() => {
    fetch(
      `https://mobile.fmcsa.dot.gov/qc/services/carriers/name/${name
        .toString()
        .toUpperCase()}?webKey=85a1a1c4c94d781917fdf0ddb5bc09d49092c384`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => setCarrierData(data))
      .then(console.log(CarrierData)) // DOBRO 80
      .then(getEachItem(CarrierData));
  }, [name]);

  const getEachItem = (MyObject) => {
    Object.entries(MyObject).forEach(([key, value]) => {
      searchItem(key, value);
      //console.log(key, value);
    });
  };

  const searchItem = (id, item) => {
    Object.entries(item).forEach(([id, item]) => {
      if (typeof item === "object" && id !== "legalName: " && item !== null) {
        //console.log(id, item);
        searchItem(id, item);
      } else if (id === "legalName") {
        result.push(item);
        console.log(result);
      }
    });
  };
  return (
    <div>
      <Autocomplete
        options={result}
        renderInput={(params) => (
          <TextField
            {...params}
            onChange={(e) => {
              HandleChange(e);
            }}
            fullWidth
          ></TextField>
        )}
      />
    </div>
  );
};
export default PreviousEmployments;
