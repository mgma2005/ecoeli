import Slider from "../Components/Slider";
import Announcement from "../Components/Announcement";
import React from "react";
//import Footer from "../components/Footer";
import Navbar from "../pages/Navbar";
import Categories from "../Components/Categories";
//import Newsletter from "../components/Newsletter";
import Products from "../Components/Product";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Product />
    </div>
  );
};

export default Home;
