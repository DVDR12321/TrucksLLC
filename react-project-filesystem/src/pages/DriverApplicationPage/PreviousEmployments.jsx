import { Autocomplete, TextField } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { debounce } from "lodash";
import { useMemo } from "react";
import { StyledSearchContainer } from "./StyledComponents";
import CircularProgress from "@mui/material/CircularProgress";

const PreviousEmployments = (props) => {
  const { state, setState, index } = props;

  const [open, setOpen] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false && open);

  //update keyword and set state
  const HandleChange = (e) => {
    if (e.target.value !== "") {
      setKeyword(e.target.value);
    }
    let list = [...state.Company];
    const { name, value } = e.target;
    list[index][name] = value;
    setState((state) => ({
      ...state,
      Company: list,
    }));
  };

  // wait before setting keyword, applying search and updating state ( HandleChange )
  const DebounceHandleChange = useMemo(() => debounce(HandleChange, 500), []);

  // fill the "result" array with fetched data
  const setPreviousEmployersName = (data) => {
    data.forEach((element) => {
      setResult((oldResult) => [...oldResult, element.carrier.legalName]);
    });
  };
  const setPreviousEmployersDOTNumber = (data) => {
    setResult([data.carrier.legalName]);
    setLoading(false && open);
  };

  // search database
  useEffect(() => {
    setLoading(true && open);
    if (isNaN(keyword) && keyword !== "") {
      fetch(
        `https://mobile.fmcsa.dot.gov/qc/services/carriers/name/${keyword}?webKey=85a1a1c4c94d781917fdf0ddb5bc09d49092c384`
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setResult([]);
          setPreviousEmployersName(data.content);
          setLoading(false && open);
        })
        .catch((response) => {
          setLoading(false && open);
        });
    } else if (keyword !== "") {
      fetch(
        `https://mobile.fmcsa.dot.gov/qc/services/carriers/${Number(
          keyword
        )}?webKey=85a1a1c4c94d781917fdf0ddb5bc09d49092c384`
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          if (data !== null) {
            setPreviousEmployersDOTNumber(data.content);
            console.log(result);
          }
        })
        .catch((response) => {
          setLoading(false && open);
          console.log(response);
        });
    }
  }, [keyword]);

  // remove loading spinner if the field is empty
  // useEffect(() => {
  //   if (
  //     result === [] ||
  //     result === [""] ||
  //     result === [null] ||
  //     result === null
  //   ) {
  //     setLoading(false && open);
  //   }
  // }, [result]);

  return (
    <StyledSearchContainer>
      <Autocomplete
        options={result}
        onOpen={() => {
          setOpen(true);
        }}
        onClose={() => {
          setOpen(false);
        }}
        renderInput={(params) => (
          <TextField
            label="Search"
            name="Name"
            {...params}
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <React.Fragment>
                  {loading ? (
                    <CircularProgress color="inherit" size={20} />
                  ) : (
                    ""
                  )}
                  {params.InputProps.endAdornment}
                </React.Fragment>
              ),
            }}
            onChange={(e) => {
              DebounceHandleChange(e);
            }}
          ></TextField>
        )}
      />
    </StyledSearchContainer>
  );
};
export default PreviousEmployments;
