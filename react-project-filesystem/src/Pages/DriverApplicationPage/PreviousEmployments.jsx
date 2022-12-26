import { Autocomplete, TextField } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { debounce } from "lodash";
import { useMemo } from "react";
// WebKey : 85a1a1c4c94d781917fdf0ddb5bc09d49092c384

const PreviousEmployments = () => {
  const [name, setName] = useState("");
  const [result, setResult] = useState([""]);

  const HandleChange = (e) => {
    setName(e.target.value);
  };
  const DebounceHandleChange = useMemo(() => debounce(HandleChange, 2000), []);

  useEffect(() => {
    fetch(
      `https://mobile.fmcsa.dot.gov/qc/services/carriers/name/${name}?webKey=85a1a1c4c94d781917fdf0ddb5bc09d49092c384`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setResult([""]);
        setPreviousEmployers(data.content);
        console.log(data);
      });
  }, [name]);

  const setPreviousEmployers = (data) => {
    data.forEach((element) => {
      setResult((oldResult) => [...oldResult, element.carrier.legalName]);
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
              DebounceHandleChange(e);
            }}
            fullWidth
          ></TextField>
        )}
      />
    </div>
  );
};
export default PreviousEmployments;
