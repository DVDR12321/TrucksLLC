import { IconButton } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";

const BackToTop = (props) => {
  const { BackToTopButton, setBackToTopButton } = props;
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true);
      } else setBackToTopButton(false);
    });
  }, []);

  const ScrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    BackToTopButton && (
      <IconButton
        sx={{
          position: "fixed",
          bottom: "50px",
          right: "50px",
          height: "50px",
          width: "50px",
        }}
        onClick={ScrollUp}
      >
        <ArrowCircleUpIcon
          color="primary"
          sx={{ height: "50px", width: "50px" }}
        />
      </IconButton>
    )
  );
};
export default BackToTop;
