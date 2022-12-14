import { TextField, Grid, Typography, CardContent, Button } from "@mui/material";
import emailjs from '@emailjs/browser';



function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
};

export const Screen1 = (props) => { 
    const{ state, setState } = props;
    window.onload = () => {
        const eInput = document.getElementById('echeck');
        const tInput = document.getElementById('tcheck');
        eInput.onpaste = e => e.preventDefault();
        tInput.onpaste = e => e.preventDefault();
    };

    function SubmitHandler(event) {
        event.preventDefault();
        if (state.PhoneNumber === state.PhoneNumberCheck && state.Email === state.EmailCheck) {
            emailjs.sendForm('default_service', 'template_5muable', event.target, 'Bt5FJk_8UapAuvKNi')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
                event.target.reset();
        } else {
            setState(state => ({ ...state, Compare: true }));
            console.log(state);
            sleep(3000);
            setState(state => ({ ...state, Compare: false }));
            console.log(state);
        }
    } 
    const HandleNameChange = (e) => {
        const { name, value } = e.target;
        setState(state=>({...state, [name]: value}));
        console.log(state);
    };

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
                            name="FirstName"
                            color="red"
                            label="First Name"
                            placeholder=""
                            variant="outlined"
                            fullWidth
                            required
                            onChange={e => HandleNameChange(e)}
                            value={state.FirstName}
                        ></TextField>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            name="LastName"
                            color="red"
                            label="Last Name"
                            placeholder=""
                            variant="outlined"
                            fullWidth
                            required
                            onChange={e => HandleNameChange(e)}
                            value={state.LastName}
                        ></TextField>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            type='email'
                            name="Email"
                            color="red"
                            label="Email"
                            placeholder="@"
                            variant="outlined"
                            fullWidth
                            required
                            onChange={e => HandleNameChange(e)}
                            value={state.Email}
                        ></TextField>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            id='echeck'
                            type='email'
                            name="EmailCheck"
                            color="red"
                            label="Enter your email again for validation"
                            placeholder="@"
                            variant="outlined"
                            fullWidth
                            required
                            onChange={e => HandleNameChange(e)}
                            value={state.EmailCheck}
                        ></TextField>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField  
                            type='tel'
                            name="PhoneNumber"
                            color="red"
                            label="Phone Number"
                            placeholder="+1"
                            variant="outlined"
                            fullWidth
                            required
                            onChange={e => HandleNameChange(e)}
                            value={state.PhoneNumber}
                        ></TextField>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            id='tcheck'
                            type='tel'
                            name="PhoneNumberCheck"
                            color="red"
                            label="Enter your number again for validation"
                            placeholder="+1"
                            variant="outlined"
                            fullWidth
                            required
                            onChange={e => HandleNameChange(e)}
                            value={state.PhoneNumberCheck}
                        ></TextField>
                    </Grid>
                </Grid>
                {state.Compare === false && <Button type='submit' fullWidth color='red'> Submit your application </Button>}
                {state.Compare === true && <Button disabled color='red'> Entered data not matching </Button> }
            </CardContent>
        </form>
    );
};