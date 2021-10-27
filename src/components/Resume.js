import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box } from "@material-ui/core";
import Navbar from "./Navbar";
import Image1 from "../images/resumeimage.jpg";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    backgroundImage: `url(${Image1})`,
    backgroundSize: "cover",
    fontFamily: "'Nunito' !important",
    // opacity: "0.5",
  },
  resp: {
    fontFamily: "Nunito",
  },
  resp1: {
    fontFamily: "Nunito",
    fontWeight: "700",
    color: "#686565",
    textTransform: "Capitalize",
  },
  resumehead: {
    marginBottom: "2rem",
    paddingTop: "1rem",
    fontFamily: "Nunito",
    color: "#fff",
    fontWeight: "bold",
    fontFamily: "'Nunito' !important",
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "0 auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid #f54a5c",
      right: "4px",
      top: "5rem",
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both",
    },
    [theme.breakpoints.up("md")]: {
      padding: "0 2rem",
      background: "#000000a6",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto",
      },
    },
  },
  timeLineItem: {
    padding: "1.5rem",
    borderBottom: "5px solid #f54a5c",
    position: "relative",
    background: "#fff",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute",
    },
    p: {
      fontFamily: "Nunito",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "#f64a5d #f64a5d transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)",
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "#fff",
        borderBottom: "5px solid #f54a5c",
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.6rem",
        borderColor: "transparent transparent #f54a5c #f54a5c",
      },
    },
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "7.3rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.3rem",
    background: "#f64a5d",
    color: "white",
    fontWeight: "700",
    lineHeight: 1,
    fontFamily: "Nunito",
    borderBottom: "2px solid white",
    padding: "0.5rem 0 0.5rem",
    "&:before": {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto",
        borderBottom: "2px solid #fff",
      },
      "&:nth-of-type(2n):before": {
        display: "none",
      },
    },
  },
  heading: {
    color: "red",
    padding: "3rem 0",
    textTransform: "uppercase",
  },
  subHeading: {
    color: "#f54a5c",
    padding: "0",
    textTransform: "uppercase",
    fontSize: "1.1rem",
    fontFamily: "Nunito",
    fontWeight: "700",
  },
}));

const Resume = () => {
  const classes = useStyles();
  return (
    <>
      <div className="resumetotal">
        <Navbar />
        <Box component="header" className={classes.mainContainer}>
          <Box component="div" className={classes.timeLine}>
            <Typography
              variant="h4"
              align="center"
              className={classes.resumehead}
            >
              Working Experience
            </Typography>
            <Typography
              variant="h2"
              className={`${classes.timeLineYear} ${classes.timeLineItem}`}
            >
              2016
            </Typography>
            <Box component="div" className={classes.timeLineItem}>
              <Typography
                variant="h5"
                align="center"
                className={classes.subHeading}
              >
                Junior Front End Developer
              </Typography>
              <Typography
                variant="body1"
                align="center"
                className={classes.resp1}
              >
                Way IT Solutions
              </Typography>
              <Typography
                varient="subtile1"
                align="center"
                className={classes.resp}
              >
                Designed template for websites and social media marketing
                campaigns using Adobe Photoshop.Developed responsive webpages
                using WordPress.Used HTML, CSS and JavaScript in creating
                responsive front end web applications
              </Typography>
            </Box>

            <Typography
              variant="h2"
              className={`${classes.timeLineYear} ${classes.timeLineItem}`}
            >
              2020
            </Typography>
            <Box component="div" className={classes.timeLineItem}>
              <Typography
                variant="h5"
                align="center"
                className={classes.subHeading}
              >
                Technology Associate
              </Typography>
              <Typography
                variant="body1"
                align="center"
                className={classes.resp1}
              >
                Indian School of Business
              </Typography>
              <Typography
                varient="subtile1"
                align="center"
                className={classes.resp}
              >
                Analyzed data with a demonstrated competence in Microsoft Excel,
                creating graphs, charts and handling data tables. Python
                scripting for data wrangling.
              </Typography>
            </Box>
            <Typography
              variant="h2"
              className={`${classes.timeLineYear} ${classes.timeLineItem}`}
            >
              2021
            </Typography>
            <Box component="div" className={classes.timeLineItem}>
              <Typography
                variant="h5"
                align="center"
                className={classes.subHeading}
              >
                Intern
              </Typography>
              <Typography
                variant="body1"
                align="center"
                className={classes.resp1}
              >
                Global Technology Corporation
              </Typography>
              <Typography
                varient="subtile1"
                align="center"
                className={classes.resp}
              >
                Developed a log analysis solution which extracts error messages
                from a log file.Assisted the head of human resources in handling
                ad-hoc tasks related to employee hiring and onboarding
                activities.Created User Stories on JIRA and assigned them to
                respective developers.
              </Typography>
            </Box>
          </Box>
        </Box>
        Hello from Resume component
      </div>
    </>
  );
};

export default Resume;
