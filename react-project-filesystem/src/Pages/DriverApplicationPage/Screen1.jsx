import { TextField, Grid, Typography, CardContent, Button } from "@mui/material";
import { useState } from "react";
import emailjs from '@emailjs/browser';

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
};

export const Screen1 = () => {
    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [Email, setEmail] = useState("");
    const [PhoneNumer, setPhoneNumber] = useState("");
    const [EmailCheck, setEmailCheck] = useState("");
    const [PhoneNumberCheck, setPhoneNumberCheck] = useState("");
    const [Compare, setCompare] = useState(false);

    console.log(FirstName, LastName);
    function SubmitHandler(event) {
        event.preventDefault();
        if (PhoneNumer === PhoneNumberCheck && Email === EmailCheck) {
            emailjs.sendForm('default_service', 'template_5muable', event.target, 'Bt5FJk_8UapAuvKNi')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
            event.target.reset();
        } else {
            setCompare(true);
            sleep(3000);
            setCompare(false);
        }
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
                    <Grid item xs={12} md={6}>
                        <TextField
                            name="form_FirstName"
                            color="red"
                            label="First Name"
                            placeholder=""
                            variant="outlined"
                            fullWidth
                            required
                            // value={name}
                            onChange={e => setFirstName(e.target.value)}
                        ></TextField>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            name="form_LastName"
                            color="red"
                            label="Last Name"
                            placeholder=""
                            variant="outlined"
                            fullWidth
                            required
                            onChange={e => setLastName(e.target.value)}
                        ></TextField>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            type='email'
                            name="form_Email"
                            color="red"
                            label="Email"
                            placeholder="@"
                            variant="outlined"
                            fullWidth
                            required
                            onChange={e => setEmail(e.target.value)}
                        ></TextField>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            type='email'
                            name="form_Email2"
                            color="red"
                            label="Enter your email again for validation"
                            placeholder="@"
                            variant="outlined"
                            fullWidth
                            required
                            onChange={e => setEmailCheck(e.target.value)}
                        ></TextField>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            type='tel'
                            name="form_Tel"
                            color="red"
                            label="Phone Number"
                            placeholder="+1"
                            variant="outlined"
                            fullWidth
                            required
                            onChange={e => setPhoneNumber(e.target.value)}
                        ></TextField>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            type='tel'
                            name="form_Tel2"
                            color="red"
                            label="Enter your number again for validation"
                            placeholder="+1"
                            variant="outlined"
                            fullWidth
                            required
                            onChange={ e => setPhoneNumberCheck(e.target.value)}
                        ></TextField>
                    </Grid>
                </Grid>
                {Compare === false && <Button type='submit'> Submit your application </Button>}
                {Compare === true && <Button disabled> Entered data not matching </Button> }
            </CardContent>
        </form>
    );
};