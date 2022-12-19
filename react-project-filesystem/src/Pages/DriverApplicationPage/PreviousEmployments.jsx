import { Autocomplete, TextField } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
// WebKey : 85a1a1c4c94d781917fdf0ddb5bc09d49092c384

const PreviousEmployments = () => {
  const [name, setName] = useState([""]);
  const [CarrierData, setCarrierData] = useState({});
  const [result, setResult] = useState([""]);
  const a = ["123"];
  let r = [];

  const HandleChange = (e) => {
    return setName(e.target.value);
  };

  useEffect(() => {
    fetch(
      `https://mobile.fmcsa.dot.gov/qc/services/carriers/name/${name.toString()}?webKey=85a1a1c4c94d781917fdf0ddb5bc09d49092c384`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => setCarrierData(data))
      .then(console.log(CarrierData))
      .then(getEachItem(CarrierData));
  }, [name]);

  const getEachItem = (MyObject) => {
    Object.entries(MyObject).forEach(([key, value]) => {
      searchItem(key, value);
      setResult(r);
      console.log(result);
    });
  };

  const searchItem = (id, item) => {
    Object.entries(item).forEach(([id, item]) => {
      if (typeof item === "object" && id !== "legalName" && item !== null) {
        searchItem(id, item);
      } else if (id === "legalName") {
        r.push(item);
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
