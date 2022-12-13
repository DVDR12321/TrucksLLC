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

  function AddHandle(e) { 
    setNewAdress([...NewAdress, {Adress:''}]);
    //console.log(NewAdress);
  }
  
  function RemoveHandle(index) {
    const list = [...NewAdress];
    list.splice(index, 1);
    setNewAdress(list);
  }

  function ChangeHandle(e, index) {
    const { name, value } = e.target;
    const list = [...NewAdress];
    console.log(index);
    list[index][name] = value;
    //console.log(list);
    setNewAdress(list);
    //console.log(NewAdress);
   }
  
  function SubmitHandler(event) {
    event.preventDefault();
  }
  return (
    <form onSubmit={SubmitHandler}>
      <CardContent>
        <Grid item xs={12}>
          <Typography variant="h3" textAlign="center" color="rgb(255, 0, 0)">
            {" "}
            Drive for us
          </Typography>
          <Typography variant="body1" component="p" sx={{ margin: "1ch" }}>
            {" "}
            Fill out the form, and our recuriting team will get back at you
            within a day!{" "}
          </Typography>
          <Typography variant="body3" component="p" sx={{ margin: "1ch" }}>
            {" "}
            * Symbol marks a required field{" "}
          </Typography>
        </Grid>
        <Grid container spacing={2}> 
          {NewAdress.map((Adress, index) => {
            return (
              <Grid  item xs={12} md={12}> 
                <TextField
                  key={Adress}
                  name="Adress"
                  color="red"
                  label="First Name"
                  placeholder=""
                  variant="outlined"
                  fullWidth
                  required
                  onChange = {(e) => ChangeHandle(e, index)}
                ></TextField>
                
                <IconButton aria-label="add" color='red' onClick={ RemoveHandle }>
                    <RemoveIcon/>
                </IconButton>
              </Grid>

            );
          })
          }
          <IconButton aria-label="add" color='red' onClick={(e) => AddHandle(e) }>
            <AddIcon/>
          </IconButton>
        </Grid>
      </CardContent>
    </form>
  );
};
