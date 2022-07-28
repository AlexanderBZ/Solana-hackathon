import React from "react";
import { Grid, Typography, Button } from "@mui/material";
import "./index.css";
export default function Footer() {
  return (
    <>
      <Grid container>
        <Grid
          item
          container
          lg={3}
          md={3}
          sm={6}
          xs={6}
          className="footer-links-main"
        >
          <Grid item xs={12} style={{ textAlign: "center" }}>
            <Typography className="footer-links">Pages</Typography>
          </Grid>
          <Grid item xs={12} style={{ textAlign: "center" }}>
            <Typography className="footer-links-2">Home</Typography>
          </Grid>
          <Grid item xs={12} style={{ textAlign: "center" }}>
            <Typography className="footer-links-2">About</Typography>
          </Grid>
          <Grid item xs={12} style={{ textAlign: "center" }}>
            <Typography className="footer-links-2">Jobs Board</Typography>
          </Grid>
        </Grid>
        <Grid
          item
          container
          lg={3}
          md={3}
          sm={6}
          xs={6}
          style={{ height: "150px" }}
        >
          <Grid item xs={12} style={{ textAlign: "center" }}>
            <Typography className="footer-links">Social</Typography>
          </Grid>
          <Grid item xs={12} style={{ textAlign: "center" }}>
            <Typography className="footer-links-2">Twitter</Typography>
          </Grid>
          <Grid item xs={12} style={{ textAlign: "center" }}>
            <Typography className="footer-links-2">Discord</Typography>
          </Grid>
        </Grid>
        <Grid
          item
          container
          lg={6}
          md={6}
          xs={12}
          sm={12}
          className="footer-section-2"
        >
          <Grid item xs={12}>
            <Typography className="footer-item-2">
              Subscribe to our newsletter
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography className="footer-item-3">
              Sign up for our 60 Second Web3 daily email to stay up to date on
              <Typography className="footer-item-4">
                all things happening in Web3
              </Typography>
            </Typography>
          </Grid>
          <Grid
            item
            container
            style={{ display: "flex", alignItems: "center" }}
          >
            <Grid item lg={8} md={8} sm={12} xs={12} className="footer-search">
              <input
                lable="hello"
                className="input-feild"
                type="text"
                placeholder="Your email address"
              />
            </Grid>
            <Grid item lg={4} md={4} sm={12} xs={12} className="footer-search">
              <Button className="footer-btn">Get Started</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
