import Slider from "../Components/Slider";
import Announcement from "../Components/Announcement";
import React from "react";
import Categori
//import Footer from "../components/Footer";
import Navbar from "../pages/Navbar";
import Categories from "../Components/Categoryitem";
//import Newsletter from "../components/Newsletter";
//import Products from "../components/Products";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
            
    </div>
  );
};

export default Home;
