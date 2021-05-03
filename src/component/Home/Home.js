import React from "react";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Gallery from "../Gallery/Gallery";
import GoogleMap from "../GoogleMap/GoogleMap";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Service from "../Service/Service";
import Todo from "../Todo/Todo";
import "./Home.css";

const Home = () => {
  return (
    <div id="home">
      <Navbar />
      <Header />
      <About />
      <Service />
      <Gallery />
      <Todo />
      <Contact />
      <Footer />
      <GoogleMap />
    </div>
  );
};

export default Home;
