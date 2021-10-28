import React from "react";
import { makeStyles, withStyles } from "@material-ui/core";
import { TextField, Typography, Button, Grid, Box } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import Navbar from "./Navbar";
import image1 from "../images/trees.png";
import leaves from "../images/leaves.png";
const useStyles = makeStyles((theme) => ({
  form: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
    backgroundImage: `url(${image1})`,
    padding: "2rem 3rem",
    borderRadius: ".5rem",
    "& h5": {
      color: "#166ba8",
      fontFamily: "Nunito",
      textTransform: "Capitalize",
      fontWeight: "bold",
      marginBottom: "1rem",
    },
    "& input": {
      background: "#fff",
      "& fieldset": {
        borderColor: "#000",
      },
    },
    "& button": {
      background: "#166ba8",
    },
  },
  sendbutn: {
    marginTop: "1rem",
    color: "#fff",
    borderColor: "#166ba8",
  },
  conto: {},
}));
const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#166ba8",
    },
    "& label": {
      color: "#cacaca",
      fontFamily: "Nunito",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#e0e0e0",
      },
    },
    "& .MuiOutlinedInput-root:hover": {
      "& fieldset": {
        borderColor: "#166ba8",
      },
    },
    "& .MuiOutlinedInput-root:focus-visible": {
      "& fieldset": {
        outline: "none",
      },
    },
    "&.Mui-focused fieldset": {
      borderColor: "#000",
    },
  },
})(TextField);
const ContactMe = () => {
  const classes = useStyles();
  return (
    <Box component="div">
      <Navbar />
      <Grid container justifyContent="center" className={classes.conto}>
        <Box component="form" className={classes.form}>
          <Typography variant="h5">hire me / contact me...</Typography>

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
