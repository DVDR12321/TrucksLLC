import React from "react";
import { Snackbar } from "@mui/material";

const SnackBarComponent = (props) => {
  const { snackbar, setSnackbar, message, setMessage } = props;
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbar(false);
  };

  return (
    <div style={{ position: "fixed" }}>
      <Snackbar
        message={message}
        autoHideDuration={3000}
        open={snackbar}
        onClose={handleClose}
      ></Snackbar>
    </div>
  );
};

export default SnackBarComponent;
