import React from "react";
import Navbar from "../NAv/Navbar";
import Home from "../Home/Home";
import TicketBook from "../Book/TicketBook";
import Contact from "../../Components/Page Component/Contactpage/Contact";
import Map from "../Contact/Map";
import About from "../About us/About";
import Footer from "../Footer/Footer";

const PrivateHome = () => {
  return (
    <>
      <Navbar />
      <Home />

      <TicketBook />
      <Contact />
      <Map />
      {/* <Book/> */}
      <About />
      <Footer />
    </>
  );
};

export default PrivateHome;
