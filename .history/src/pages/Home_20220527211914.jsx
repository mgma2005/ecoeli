import Slider from "../Components/Slider";
import Announcement from "../Components/Announcement";
import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../pages/Navbar";
import Date from "../Components/Date";
import Formulario from "../Components/Formulario";
import Products from "../Components/Products";




const Home = () => {
  return (
    <div>
      <Date />
      <Announcement />
      <Navbar />
      
      <Slider />
      
      <Products />
      <Formulario />
      
      <Footer />
    </div>
  );
};

export default Home;
