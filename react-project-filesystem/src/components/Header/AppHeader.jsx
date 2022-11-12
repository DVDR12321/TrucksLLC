import React from "react";
import logo from "../../assets/logo.png";
import { AppBar, Divider, Grid, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { StyledAppBarGrid, StyledAppHeaderItems, StyledLogo, StyledText as StyledButton } from "./StyledComponents";

const AppHeader = () => {
    const navItems = ['Home', 'Who we are', 'Where we are', 'Our fleet', 'Our reviews', 'Contact'];
    return (
        <AppBar position="sticky" elevation={0} style={{background: "white"}}>
            <StyledAppBarGrid container justifyContent="center" alignItems="center">
                <Grid item flex={1} container>
                    <StyledLogo src={logo} alt="logo"/>
                </Grid>
                <Grid item>
                    <StyledAppHeaderItems container direction="row" spacing={1}>
                    {navItems.map((item) => (
                         <Grid item>
                            <StyledButton>{item}</StyledButton>
                         </Grid>
                    ))}
                    </StyledAppHeaderItems>
                </Grid>
            </StyledAppBarGrid>
        </AppBar>
    );
}

export default AppHeader;