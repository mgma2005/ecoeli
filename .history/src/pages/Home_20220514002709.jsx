import Slider from "../Components/Slider";
import Announcement from "../Components/Announcement";
import React from "react";
import <Footer></Footer> from "../components/Footer";
import Navbar from "../pages/Navbar";
import Categories from "../Components/Categories";
import Newsletter from "../Components/Newsletter";
import Products from "../Components/Products";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
