import React from "react";
import Navbar from "../components/navbar";
import Main from "../components/main";
import Footer from "../components/footer";

import { Container, Grid } from "@mui/material";
export default function Landing() {
  return (
    <div>
      <Grid style={{ backgroundColor: "black" }}>
        <Container style={{ maxWidth: "1440px" }}>
          <Navbar />

          <Main />
        </Container>

        <Grid
          style={{ width: "100%", height: "2px", backgroundColor: "#302C3F" }}
        ></Grid>
        <Container style={{ maxWidth: "1440px" }}>
          <Footer />
        </Container>
      </Grid>
    </div>
  );
}
