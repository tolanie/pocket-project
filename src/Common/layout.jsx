import React from "react";
import Head from "./Head";
import { Navbar } from "./Navbar";
import { Outlet } from "react-router-dom";

import "./newLayout.css";

const layout = () => {
  return (
    <>
      <Head />
      {/* <section className="layout"> */}
      <section style={{display:"flex", flexDirection:"row"}}>
        <Navbar />
        <main className="main">
          <Outlet />
        </main>
      </section>
    </>
  );
};

export default layout;
