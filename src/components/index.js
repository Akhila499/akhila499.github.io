import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Particles from "react-particles-js";
import { makeStyles } from "@material-ui/styles";
import MainFooter from "./MainFooter";
const useStyles = makeStyles({
  particleCanva: {
    position: "absolute",
  },
});
const Home = () => {
  const classes = useStyles();

  return (
    <>
      <Navbar />
      <Header />
      <Particles
        canvasClassName={classes.particleCanva}
        params={{
          particles: {
            number: {
              value: 45,
              density: {
                enable: true,
                value_area: 900,
              },
            },
            shape: {
              type: "circle",
              stroke: {
                width: 1,
                color: "tomato",
              },
            },
          },
        }}
      />
      <div>
        <MainFooter />
      </div>
    </>
  );
};

export default Home;
