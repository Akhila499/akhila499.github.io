import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  ListItem,
  IconButton,
  ListItemText,
  Avatar,
  Divider,
  List,
  Typography,
  Box,
  ListItemIcon,
} from "@material-ui/core";
import {
  ArrowBack,
  AssignmentInd,
  Home,
  Apps,
  ContactMail,
} from "@material-ui/icons";
import avatar from "../avatar.png";
import { makeStyles } from "@material-ui/core/styles";
import MobilRightMenuSlider from "@material-ui/core/Drawer";
import Footer from "./Footer";
import { calcEasing } from "tsparticles";
const cssStyles = makeStyles((theme) => ({
  menuSliderContainer: {
    width: 250,
    background: "#511",
    height: "100vh",
  },
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
  ListItem: {
    color: "tan",
  },
  logo: {
    padding: "0.5rem",
    fontWeight: "bolder",
    borderRadius: "0.3rem",
    border: "1px solid #fff",
  },
  arrow: {
    color: "#fff",
  },
  appbar: {
    background: "#23b5d3",
  },
}));
const menuItems = [
  {
    listIcon: <Home />,
    listText: "Home",
    listPath: "/",
  },
  {
    listIcon: <AssignmentInd />,
    listText: "Resume",
    listPath: "/resume",
  },
  {
    listIcon: <Apps />,
    listText: "Portfolio",
    listPath: "/portfolio",
  },
  {
    listIcon: <ContactMail />,
    listText: "Contact Me",
    listPath: "/contact",
  },
];

const Navbar = () => {
  const [state, setState] = useState({
    right: false,
  });
  const togglerSlider = (slider, open) => () => {
    setState({ ...state, [slider]: open });
  };
  const classes = cssStyles();
  const sideList = (slider) => (
    <Box
      className={classes.menuSliderContainer}
      component="div"
      onClick={togglerSlider(slider, false)}
    >
      <Avatar className={classes.avatar} src={avatar} alt="Akhila" />
      <Divider />
      <List>
        {menuItems.map((lsItem, key) => (
          <ListItem button key={key} component={Link} to={lsItem.listPath}>
            <ListItemIcon className={classes.ListItem}>
              {lsItem.listIcon}
            </ListItemIcon>
            <ListItemText
              className={classes.ListItem}
              primary={lsItem.listText}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <>
      <Box component="nav">
        <AppBar position="static" className={classes.appbar}>
          <Toolbar>
            <IconButton
              className={classes.arrow}
              onClick={togglerSlider("right", true)}
            >
              <ArrowBack />
            </IconButton>
            <Typography variant="h5" className={classes.logo}>
              AT
            </Typography>
            <MobilRightMenuSlider
              open={state.right}
              anchor="right"
              onClose={togglerSlider("right", false)}
            >
              {sideList("right")}
              <Footer />
            </MobilRightMenuSlider>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
