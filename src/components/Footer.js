import React from "react";
import {
  BottomNavigationAction,
  makeStyles,
  BottomNavigation,
} from "@material-ui/core";

import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import MailIcon from "@material-ui/icons/Mail";
const useStyle = makeStyles({
  root: {
    "& .MuiBottomNavigation-root": {
      minWidth: 0,
      maxWidth: 250,
    },
    "& .MuiSvgIcon-root": {
      fill: "tan",
      "&:hover": {
        fill: "tomato",
        fontSize: "1.8rem",
      },
    },
  },
});
const Footer = () => {
  const classes = useStyle();
  return (
    <div>
      <BottomNavigation width="auto" style={{ background: "#232" }}>
        <BottomNavigationAction
          className={classes.root}
          style={{ padding: "0" }}
          icon={<LinkedInIcon />}
        />
        <BottomNavigationAction
          className={classes.root}
          style={{ padding: "0" }}
          icon={<GitHubIcon />}
        />
        <BottomNavigationAction
          className={classes.root}
          style={{ padding: "0" }}
          icon={<MailIcon />}
        />
      </BottomNavigation>
    </div>
  );
};

export default Footer;
