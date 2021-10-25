import React from "react";
import { makeStyles, withStyles } from "@material-ui/core";
import { TextField, Typography, Button, Grid, Box } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import Navbar from "./Navbar";

const useStyles = makeStyles((theme) => ({
  form: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
  },
  sendbutn: {
    marginTop: "1rem",
    color: "tomato",
    borderColor: "tomato",
  },
}));
const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "red",
    },
    "& label": {
      color: "tan",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "tan",
      },
    },
    "& .MuiOutlinedInput-root:hover": {
      "& fieldset": {
        borderColor: "tan",
      },
    },

    "&.Mui-focused fieldset": {
      borderColor: "tan",
    },
  },
})(TextField);
const ContactMe = () => {
  const classes = useStyles();
  return (
    <Box component="div">
      <Navbar />
      <Grid container justifyContent="center">
        <Box component="form" className={classes.form}>
          <Typography
            variant="h5"
            style={{
              color: "tomato",
              textTransform: "uppercase",
              textAlign: "center",
            }}
          >
            hire or contact me...
          </Typography>

          <InputField
            fullWidth={true}
            label="Name"
            variant="outlined"
            margin="dense"
            inputProps={{ style: { color: "white" } }}
            size="medium"
          />
          <br />
          <InputField
            fullWidth={true}
            label="Email"
            variant="outlined"
            inputProps={{ style: { color: "white" } }}
            margin="dense"
          />
          <br />
          <InputField
            fullWidth={true}
            label="Message"
            variant="outlined"
            inputProps={{ style: { color: "white" } }}
            margin="dense"
          />
          <br />
          <Button
            variant="outlined"
            fullWidth={true}
            endIcon={<SendIcon />}
            className={classes.sendbutn}
          >
            Contact Me
          </Button>
        </Box>
      </Grid>
    </Box>
  );
};

export default ContactMe;
