import { Autocomplete, TextField } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { debounce } from "lodash";
import { useMemo } from "react";
// WebKey : 85a1a1c4c94d781917fdf0ddb5bc09d49092c384

const PreviousEmployments = (props) => {
  const { state, setState, index } = props;
  const [keyword, setKeyword] = useState("");
  const [result, setResult] = useState([""]);

  const HandleChange = (e) => {
    setKeyword(e.target.value);
    let list = [...state.Company];
    const { name, value } = e.target;
    list[index][name] = value;
    setState((state) => ({
      ...state,
      Company: list,
    }));
  };

  const DebounceHandleChange = useMemo(() => debounce(HandleChange, 1500), []);

  useEffect(() => {
    fetch(
      `https://mobile.fmcsa.dot.gov/qc/services/carriers/name/${keyword}?webKey=85a1a1c4c94d781917fdf0ddb5bc09d49092c384`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setResult([""]);
        setPreviousEmployers(data.content);
        console.log(data);
      });
  }, [keyword]);

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
            name="Name"
            {...params}
            onChange={(e) => {
              DebounceHandleChange(e);
            }}
          ></TextField>
        )}
      />
    </div>
  );
};
export default PreviousEmployments;
