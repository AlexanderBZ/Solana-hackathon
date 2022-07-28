import React from "react";
import { Grid, Typography } from "@mui/material";
import Logo from "../../assets/logo.png";
import Logo2 from "../../assets/logo2.png";
import Ham from "../../assets/ham.png";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import "./index.css";
export default function Navbar() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      style={{
        textAlign: "center",
        backgroundColor: "black",
        height: "100vh",
        color: "#fff",
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Grid container>
        <Grid
          item
          xs={6}
          style={{
            height: "70px",
            alignItems: "center",
            display: "flex",
            paddingLeft: "15px",
          }}
        >
          <img src={Logo2} width={30} alt="" />
        </Grid>
        <Grid
          item
          xs={6}
          style={{
            height: "70px",
            alignItems: "center",
            display: "flex",
            paddingRight: "15px",
            justifyContent: "right",
          }}
        >
          <CloseIcon style={{ cursor: "pointer" }} />
        </Grid>
        <Grid item xs={12} style={{ paddingTop: "60px" }}>
          <Typography className="drawer-links">
            <a
              href={"https://instagram.com/viaKickback"}
              target="_blank"
              className="nav-links"
            >
              Instagram
            </a>
          </Typography>
        </Grid>
        <Grid item xs={12} style={{ paddingTop: "50px" }}>
          <Typography className="drawer-links">
            <a
              href={"https://twitter.com/viaKickback"}
              target="_blank"
              className="nav-links"
            >
              Twitter
            </a>
          </Typography>
        </Grid>
        <Grid item xs={12} style={{ paddingTop: "50px" }}>
          <Typography className="drawer-links">
            <a
              href={"https://discord.gg/5BrvrMxaJ2"}
              target="_blank"
              className="nav-links"
            >
              Discord
            </a>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
  return (
    <>
      <Grid container className="nav-container">
        <Grid item xs={8} md={6} sm={6} lg={6} className="nav-item-1">
          <img className="logo" src={Logo} alt="" />
        </Grid>
        <Grid item container xs={4} md={6} sm={6} className="nav-item-2">
          <Grid item xs={3} className="nav-item-text">
            <Typography>
              <a
                href={"https://instagram.com/viaKickback"}
                target="_blank"
                className="nav-links"
              >
                Instagram
              </a>
            </Typography>
          </Grid>
          <Grid item xs={3} className="nav-item-text">
            <Typography className="nav-links">
              <a
                href={"https://twitter.com/viaKickback"}
                target="_blank"
                className="nav-links"
              >
                Twitter
              </a>
            </Typography>
          </Grid>
          <Grid item xs={3} className="nav-item-text">
            <Typography className="nav-links">
              <a
                href={"https://discord.gg/5BrvrMxaJ2"}
                target="_blank"
                className="nav-links"
              >
                Discord
              </a>
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={6} md={6} sm={6} className="logo-2">
          <img width={40} src={Logo2} alt="" />
        </Grid>

        <Grid
          item
          xs={6}
          style={{
            justifyContent: "right",
            display: "flex",
            alignItems: "center",
          }}
        >
          {["left"].map((anchor) => (
            <React.Fragment key={anchor}>
              <Grid item xs={6} md={6} sm={6} className="hamburger">
                <img
                  onClick={toggleDrawer(anchor, true)}
                  className="ham"
                  src={Ham}
                  alt=""
                />
              </Grid>

              <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, true)}
              >
                {list(anchor)}
              </Drawer>
            </React.Fragment>
          ))}
        </Grid>
      </Grid>
    </>
  );
}
