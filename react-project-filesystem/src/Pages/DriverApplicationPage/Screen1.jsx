import { TextField, Grid, Typography, CardContent, Button } from "@mui/material";
import { useState } from "react";
import emailjs from '@emailjs/browser';


export const Screen1 = () => {
    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [isPending, setIsPending] = useState(false);

    function sleep(milliseconds) {
        var start = new Date().getTime();
        for (var i = 0; i < 1e7; i++) {
          if ((new Date().getTime() - start) > milliseconds){
            break;
          }
        }
      }
    console.log(FirstName, LastName);
    function SubmitHandler(event) {
        setIsPending(true);
        event.preventDefault();
        // emailjs.sendForm('default_service', 'template_5muable', event.target, 'Bt5FJk_8UapAuvKNi')
        // .then((result) => {
        //     console.log(result.text);
        // }, (error) => {
        //     console.log(error.text);
        // });
        sleep(2000);
        setIsPending(false);
        event.target.reset();
        };

    return (
      <form  onSubmit={ SubmitHandler}>
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
            <Grid item xs={12} md={6}>
                <TextField
                name = "from_FirstName"
                color="red"
                label="First Name"
                placeholder=""
                variant="outlined"
                fullWidth
                required
                // value={name}
                onChange = { e => setFirstName(e.target.value)}
                ></TextField>
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField
                name = "form_LastName"
                color="red"
                label="Last Name"
                placeholder=""
                variant="outlined"
                fullWidth
                required
                onChange = { e => setLastName(e.target.value)}
                ></TextField>
                </Grid>     
                </Grid>
                {!isPending && <Button type='submit'> Submit your application </Button>}
                {isPending && <Button type='submit' disabled> Submitting... </Button>}
            </CardContent>
        </form>  
    ); 
};
 