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
          bottom: "30px",
          right: "30px",
          height: "30px",
          width: "30px",
          backgroundColor: "white",
        }}
        onClick={ScrollUp}
      >
        <ArrowCircleUpIcon
          color="primary"
          sx={{ height: "40px", width: "40px" }}
        />
      </IconButton>
    )
  );
};
export default BackToTop;
