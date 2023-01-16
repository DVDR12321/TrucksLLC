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
  StyledLogo,
  StyledText,
} from "./StyledComponents";

const navigationLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "aboutus" },
  { name: "Apply", href: "apply" },
  { name: "For Drivers", href: "/drivers" },
  { name: "Q&A", href: "/q&a" },
  { name: "Contact", href: "/Contact" },
];

const AppHeader = () => {
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
      position="sticky"
      color="default"
      style={{
        display: showHeader ? "block" : "none",
      }}
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
                  href={item.href}
                  key={item.name}
                >
                  <StyledText>{item.name}</StyledText>
                </Link>
              ))}
            </StyledAppHeaderItems>
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
                  marginRight: 20,
                }}
                color="textPrimary"
                type="button"
                underline="none"
                href={item.href}
              >
                {item.name}
              </Link>
            </ListItem>
          ))}
        </List>
      </SwipeableDrawer>
    </StyledAppBar>
  );
};

export default AppHeader;
