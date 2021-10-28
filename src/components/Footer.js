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
      fill: "#3d3636de",
      "&:hover": {
        fill: "#000000",
        fontSize: "1.8rem",
      },
    },
  },
});
const Footer = () => {
  const classes = useStyle();
  return (
    <div>
      <BottomNavigation width="auto" style={{ background: "#f2c351" }}>
        <BottomNavigationAction
          className={classes.root}
          style={{ padding: "0" }}
          icon={<LinkedInIcon />}
          variant="link"
          href="https://www.linkedin.com/in/akhilathota499"
        />
        <BottomNavigationAction
          className={classes.root}
          style={{ padding: "0" }}
          icon={<GitHubIcon />}
          variant="link"
          href="https://github.com/akhila499"
        />
        <BottomNavigationAction
          className={classes.root}
          style={{ padding: "0" }}
          icon={<MailIcon />}
          variant="link"
          href="mailto:myemailaddress@gmail.com"
        />
      </BottomNavigation>
    </div>
  );
};

export default Footer;
