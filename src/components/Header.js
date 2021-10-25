import React from 'react'
import {
  Typography,
  Avatar,
  Grid,
  Box
} from "@material-ui/core";
import avatar from "../avatar.png";
import Typed from "typed.js";
import { useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';



//css styles
const cssStyles = makeStyles(theme =>({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin:theme.spacing(1)
  },
  title:{
    color: "tomato"
  },
  total:{
    
    position:'absolute',
    top:"50%",
    left:'50%',
    transform:"translate(-50%,-50%)",
    width:"100vw",
    textAlign:"center",
    zIndex:1

  },
  sub:{
    color:"#fff"
  }
}));


const Header = () => {
  const el = useRef(null);
  const el2 = useRef(null);
  const classes = cssStyles();
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Akhila Thota"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 50,
      backSpeed: 100,
      backDelay: 100,
      loop: false
    });
    const typed2 = new Typed(el2.current, {
      strings: ["Web Developer", "Front-end Developer", "Fullstack Developer"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 50,
      backSpeed: 100,
      backDelay: 100,
      loop: true
    });

    // Destropying
    return () => {
      typed.destroy();
      typed2.destroy();
    };
  }, []);
  return (
    <>
      <Box className={classes.total}>
        <Grid container justify="center">
          <Avatar className={classes.avatar} src={avatar} alt="akhila"/>
        </Grid>
        <Typography className={classes.title}  variant="h4" >
          <span ref={el}></span>
        </Typography>
        <Typography className={classes.sub}>
        <span ref={el2}></span>
        </Typography>
      </Box>
    </>
  )
}

export default Header;
