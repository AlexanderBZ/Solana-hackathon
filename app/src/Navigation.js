import React from "react";
import "./Navigation.css";

export default function Navigation() {
  return (
    <div className="navigation">
      <a href={""}>
        <h1>Kickback</h1>
      </a>
      <div className="inside">
        <a
          href={"https://twitter.com/viaKickback"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>Twitter</p>
        </a>
        <a
          href={"https://discord.gg/5BrvrMxaJ2"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>Discord</p>
        </a>
      </div>
    </div>
  );
}
