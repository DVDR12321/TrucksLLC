import React from "react";
import {
  TextField,
  Grid,
  Typography,
  CardContent,
  IconButton
} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useState } from "react";

export const Screen2 = () => {
 
  const [NewAdress, setNewAdress] = useState([{ Adress: '' }]);
  const [NewAccident, setNewAccident] = useState([{Date:'', Description:''}]);

  // ADRESS FIELD ******************************************
  function AddAdress() { 
    setNewAdress([...NewAdress, {Adress:''}]);
    //console.log(NewAdress);
  }
  
  function RemoveAdress(index1) {
    const list1 = [...NewAdress];
    list1.splice(index1, 1);
    setNewAdress(list1);
  }

  function AdressChange(e, index1) {
    const { name, value } = e.target;
    const list1 = [...NewAdress];
    //console.log(index1);
    list1[index1][name] = value;
    //console.log(list1);
    setNewAdress(list1);
    //console.log(NewAdress);
   }
// ACCIDENTS AND CITATIONS FIELD ******************************************
   function AddAccident() {
    setNewAccident([...NewAccident, {Date:'', Description:''} ]);
    console.log("state update on  add", NewAccident);
   }

   function RemoveAccident (index) {
    const list = [...NewAccident];
    list.splice(index, 1);
    setNewAccident(list);
    console.log("state update on remove", NewAccident);
   }

   function AccidentChange (e, index) {
    const {name, value} = e.target;
    let list = [...NewAccident];
    console.log("list update", list);
    list [index][name] = value;
    setNewAccident(list);
    console.log("stapte update on chage", NewAccident);
   }
  function SubmitHandler(event) {
    event.preventDefault();
  }
  
  return (
    <form onSubmit={SubmitHandler}>
      <CardContent>
       <Grid container spacing={2}>
        <Grid  item xs={12}>
          <Typography variant="h3" textAlign="center" color="rgb(255, 0, 0)">
            {" "}
            Drive for us
          </Typography>
          <Typography variant="body1" component="p" sx={{ margin: "1ch" }}>
            {" "}
            Send us aditional information so that we may expedite recruitment process for you !{" "}
          </Typography>
          <Typography variant="body3" component="p" sx={{ margin: "1ch" }}>
            {" "}
            * Symbol marks a required field  {" "}
          </Typography>
          <br></br>
        </Grid>
        <Grid item xs={12}> 
          {NewAdress.map((Adress, index1) => {
            return (
              <Grid container key={index1} >
                <Typography variant="body3" component="p" sx={{ margin: "1ch" }}>
                  {" "}
                  Add current and previous adresses of residence: {" "}
                </Typography>  
                <Grid item xs={10} md={10}>
                <TextField
                  name="Adress"
                  color="red"
                  label={"Adress " + index1.toString() }
                  placeholder="476 Alderwood Rd.
                  Seymour, IN 47274"
                  variant="outlined"
                  fullWidth
                  required
                  onChange = {(e) => AdressChange(e, index1)}
                ></TextField>
                </Grid>
                <Grid item xs={2} md={2}>
                  <IconButton aria-label="remove" color='red' onClick={ RemoveAdress }>
                    <RemoveIcon/>
                  </IconButton>
                </Grid>
              </Grid>
            );
          })
          }
          <IconButton aria-label="add" color='red' onClick={() => AddAdress() }>
            <AddIcon/>
          </IconButton>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1" component="p" sx={{ margin: "1ch" }}>
            {" "}
            Were you in any major Accidents in the past? If so please list the date with a brief description:
          </Typography>
        </Grid>
        {
        NewAccident.map((x, index)=>{
          return(
            <Grid container key={index}>
              <Grid item xs={12} md={3}>
                <TextField
                name="Date"
                type='date'
                variant="outlined"
                fullWidth
                required
                onChange={(e) => AccidentChange(e, index)}
                >
                </TextField>
            </Grid>
            <Grid item xs={12} md={8}>
                <TextField
                name="Description"
                type='Message'
                label="Description"  
                variant="outlined"
                fullWidth
                required
                onChange={(e) => AccidentChange(e, index)}
                >
                </TextField>
            </Grid>
            <IconButton aria-label="remove" color='red' onClick={ RemoveAccident }>
                    <RemoveIcon/>
            </IconButton>
          </Grid>
          );
        }
        )}
          <IconButton aria-label="add" color='red' onClick={() => AddAccident() }>
            <AddIcon/>
          </IconButton> 
        <Grid item xs={12}>
            <Typography variant="body1" component="p" sx={{ margin: "1ch" }}>
              {" "}
              Please list any tickets you may have received in the past:
            </Typography>
        </Grid>
        <Grid container >
              <Grid item xs={12} md={3}>
                <TextField
                name="Date"
                type='date'
                variant="outlined"
                fullWidth
                required
                >
                </TextField>
            </Grid>
            <Grid item xs={12} md={8}>
                <TextField
                name="Description"
                type='Message'
                label="Description"  
                variant="outlined"
                fullWidth
                required
                >
                </TextField>
            </Grid>
            <IconButton aria-label="remove" color='red' >
                    <RemoveIcon/>
            </IconButton>
        </Grid> 
        </Grid>   
      </CardContent>
    </form>
  );
};
