import Slider from "../Components/Slider";
import Announcement from "../Components/Announcement";
import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../pages/Navbar";
import Categories from "../Components/Categories";
import Newsletter from "../Components/Newsletter";
import Products from "../Components/Products";
import Formu from '../data/Formu';


const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Data />
      <Slider />
      <Categories />
      <Products />
      <Formu />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
