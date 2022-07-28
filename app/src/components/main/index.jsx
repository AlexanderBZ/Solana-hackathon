import React, { useEffect, useState } from "react";
import { Grid, Typography } from "@mui/material";
import MainImg from "../../assets/main.png";
import "./index.css";
import CandyMachine from "../../CandyMachine";

export default function Main() {
  const [walletAddress, setWalletAddress] = useState(null);

  const checkIfWalletIsConnected = async () => {
    try {
      const { solana } = window;

      if (solana) {
        if (solana.isPhantom) {
          console.log("Phantom wallet found!");
          const response = await solana.connect({ onlyIfTrusted: true });
          console.log(
            "Connected with Public Key:",
            response.publicKey.toString()
          );

          /*
           * Set the user's publicKey in state to be used later!
           */
          setWalletAddress(response.publicKey.toString());
        }
      } else {
        alert("Solana object not found! Get a Phantom Wallet 👻");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const connectWallet = async () => {
    const { solana } = window;

    if (solana) {
      const response = await solana.connect();
      console.log("Connected with Public Key:", response.publicKey.toString());
      setWalletAddress(response.publicKey.toString());
    }
  };

  const renderNotConnectedContainer = () => (
    <button className="mnt-button" onClick={connectWallet}>
      CONNECT TO WALLET
    </button>
  );

  useEffect(() => {
    const onLoad = async () => {
      await checkIfWalletIsConnected();
    };
    window.addEventListener("load", onLoad);
    return () => window.removeEventListener("load", onLoad);
  }, []);

  return (
    <>
      <Grid container className="main-container">
        <Grid item xs={12} md={6} lg={6} sm={12} className="display-none">
          <img className="main-image2" src={MainImg} alt="" />
        </Grid>
        <Grid
          item
          container
          xs={12}
          md={6}
          lg={6}
          sm={12}
          className="main-item-1"
        >
          <Grid item xs={12} style={{ textAlign: "center" }}>
            <Typography className="main-text-1">Join Kickback</Typography>
          </Grid>
          <Grid
            item
            xs={12}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Typography className="main-text-2">
              buy an NFT and join the fan community for exlusive perks
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            style={{ justifyContent: "center", display: "flex" }}
          >
            {!walletAddress && renderNotConnectedContainer()}
            {/* Check for walletAddress and then pass in walletAddress */}
            {walletAddress && <CandyMachine walletAddress={window.solana} />}
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          lg={6}
          sm={12}
          style={{ justifyContent: "center", display: "flex" }}
          className="dispplay-show"
        >
          <img className="main-image" src={MainImg} alt="" />
        </Grid>
      </Grid>
    </>
  );
}
