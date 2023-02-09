import {
  Container,
  Divider,
  Hidden,
  IconButton,
  Link,
  List,
  ListItem,
  SwipeableDrawer,
  Toolbar,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import MenuIcon from "@mui/icons-material/Menu";

import logo from "../../assets/logo.png";
import {
  StyledAppBar,
  StyledAppHeaderItems,
  StyledButton,
  StyledInstagramIcon,
  StyledLink,
  StyledLogo,
  StyledMenuItem,
  StyledSideMenuItem,
  StyledWhatsAppIcon,
} from "./StyledComponents";
import { useLocation } from "react-router-dom";

const navigationLinks = [
  { name: "Home", route: "/" },
  { name: "About", route: "/aboutus" },
  { name: "For Drivers", route: "/drivers" },
  { name: "Q&A", route: "/q&a" },
  { name: "Contact", route: "/Contact" },
  { name: "Apply", route: "/apply" },
];

const AppHeader = () => {
  const location = useLocation();
  const path = location.pathname;
  const [open, setOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  const controlNavbar = () => {
    if (window.scrollY > 80) {
      setShowHeader(true);
    } else {
      setShowHeader(false);
    }
  };

  return (
    <StyledAppBar
      className={`${showHeader ? "fade-in" : ""}`}
      position="sticky"
      color="default"
    >
      <Container>
        <Toolbar disableGutters>
          <StyledLogo src={logo} alt="logo" />
          <Hidden smDown>
            <StyledAppHeaderItems>
              {navigationLinks.map((item) => (
                <Link
                  style={{
                    marginRight: 35,
                  }}
                  color="textPrimary"
                  variant="button"
                  underline="none"
                  href={item.route}
                  key={item.name}
                >
                  <StyledMenuItem
                    className={path === item.route ? "active" : ""}
                  >
                    {item.name === "Apply" ? (
                      <StyledButton variant="contained">
                        {item.name}
                      </StyledButton>
                    ) : (
                      item.name
                    )}
                  </StyledMenuItem>
                </Link>
              ))}
            </StyledAppHeaderItems>
            <StyledLink
              href="https://www.instagram.com/trucks.llc/"
              target="_blank"
            >
              <StyledInstagramIcon> </StyledInstagramIcon>
            </StyledLink>
            <StyledLink href="" target="_blank">
              <StyledWhatsAppIcon> </StyledWhatsAppIcon>
            </StyledLink>
            <StyledMenuItem> +1 312 466 11 01 </StyledMenuItem>
          </Hidden>
          <Hidden smUp>
            <StyledAppHeaderItems>
              <IconButton onClick={() => setOpen(true)}>
                <MenuIcon />
              </IconButton>
            </StyledAppHeaderItems>
          </Hidden>
        </Toolbar>
      </Container>
      <SwipeableDrawer
        anchor="right"
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
      >
        <div
          onClick={() => setOpen(false)}
          onKeyPress={() => setOpen(false)}
          role="button"
          tabIndex={0}
        >
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          {navigationLinks.map((item) => (
            <ListItem key={item.name}>
              <Link
                style={{
                  marginRight: 40,
                }}
                color="textPrimary"
                type="button"
                underline="none"
                href={item.route}
              >
                <StyledSideMenuItem
                  className={path === item.route ? "active" : ""}
                >
                  {item.name}
                </StyledSideMenuItem>
              </Link>
            </ListItem>
          ))}
        </List>
      </SwipeableDrawer>
    </StyledAppBar>
  );
};

export default AppHeader;
