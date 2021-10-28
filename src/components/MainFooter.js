import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  foot: {
    minHeight: "100vh",
    color: "#f2c351",
    textAlign: "center",
    fontFamily: "Nunito",
    "& span": {
      position: "absolute",
      bottom: "1rem",
      left: "39%",
    },
  },
  foottext: {
    color: "",
  },
});
const MainFooter = () => {
  const classes = useStyles();
  return (
    <div className={classes.foot}>
      <Typography variant="title" className={classes.foottext}>
        &copy; 2021 Copy Rights Reserved by <b>Akhila</b>
      </Typography>
    </div>
  );
};

export default MainFooter;
