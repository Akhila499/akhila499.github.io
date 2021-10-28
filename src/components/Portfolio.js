import React from "react";
import Navbar from "./Navbar";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import Link from "@material-ui/core/Link";

import project1 from "../images/bg.jpg";
import project2 from "../images/bg.jpg";
import project3 from "../images/project3.png";
import project4 from "../images/bg.jpg";
import leaves from "../images/leaves.png";
const useStyles = makeStyles({
  portfolio_main: {
    background: "#234",
    height: "100%",
    backgroundImage: `url(${leaves})`,
    position: "relative",
  },
  port_card: {
    maxWidth: 345,
    margin: "3rem",
    padding: "0.5rem",
    border: "1px solid #e6e6e6",
    background: "#f1f6e5",
    "& button": {
      height: "48vh",
      border: "1px solid #e6e6e6",
      background: "#fff",
      "& img": {
        height: "12rem",
      },
    },
  },
  porthead: {
    fontFamily: "Nunito",
    color: "#8aac27",
    fontWeight: "bold",
  },
  portp: {
    fontFamily: "Nunito",
  },
  portgit: {
    display: "block",
    position: "absolute",
    bottom: "0.5rem",
    right: "0.5rem",
    color: "#8aac27",
  },
  portbody: {
    padding: "16px 16px 16px 16px",
  },
  portheading: {
    fontFamily: "Nunito",
    color: "#8aac27",
    fontWeight: "bold",
    marginTop: "2rem",
    fontSize: "3rem",
  },
});

const Portfolio = () => {
  const classes = useStyles();
  return (
    <div>
      <Box component="div" className={classes.portfolio_main}>
        <Navbar />
        <Typography variant="h4" align="center" className={classes.portheading}>
          Portfolio
        </Typography>
        <Grid container justifyContent="center" alignItems="center">
          {/* Project 1 */}
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.port_card}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="140"
                  image={project1}
                />
                <CardContent className={classes.portbody}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    className={classes.porthead}
                  >
                    CIAO
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    className={classes.portp}
                  >
                    Ciao is a virtual platform to gather a group and send
                    appreciations via email to a recipient. <br />
                    Tech Stack: React, Express, Axios, PostgreSQL,
                    ReactBootstrap, Node
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link
                    href="https://github.com/Akhila499/Ciao"
                    className={classes.link}
                    target="_blank"
                  >
                    <GitHubIcon className={classes.portgit} />
                  </Link>
                </CardActions>
              </CardActionArea>
            </Card>
          </Grid>
          {/* Project 2 */}
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.port_card}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 2"
                  height="140"
                  image={project2}
                />
                <CardContent className={classes.portbody}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    className={classes.porthead}
                  >
                    Scheduler
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    className={classes.portp}
                  >
                    React based project to create meetings for students to
                    connect with mentors in real-time.
                    <br />
                    Tech Stack: React, Axios, Classnames, Normalize, Storybook
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link
                    href="https://github.com/Akhila499/scheduler"
                    className={classes.link}
                    target="_blank"
                  >
                    <GitHubIcon className={classes.portgit} />
                  </Link>
                </CardActions>
              </CardActionArea>
            </Card>
          </Grid>
          {/* Project 1 */}
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.port_card}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="140"
                  image={project3}
                />
                <CardContent className={classes.portbody}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    className={classes.porthead}
                  >
                    Tweeter
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    className={classes.portp}
                  >
                    Twitter clone powered by AJAX. User can be able to post a
                    tweet.
                    <br />
                    Tech Stack: Express, jQuery, Node
                    <br />
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link
                    href="https://github.com/Akhila499/tweeter"
                    className={classes.link}
                    target="_blank"
                  >
                    <GitHubIcon className={classes.portgit} />
                  </Link>
                </CardActions>
              </CardActionArea>
            </Card>
          </Grid>
          {/* Project 1 */}
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.port_card}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="140"
                  image={project4}
                />
                <CardContent className={classes.portbody}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    className={classes.porthead}
                  >
                    TinyApp
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    className={classes.portp}
                  >
                    TinyApp is a full stack web application built with Node and
                    Express that allows users to shorten long URLs
                    <br />
                    Tech Stack: Express, Node
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link
                    href="https://github.com/Akhila499/tinyapp"
                    className={classes.link}
                    target="_blank"
                  >
                    <GitHubIcon className={classes.portgit} />
                  </Link>
                </CardActions>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Portfolio;
