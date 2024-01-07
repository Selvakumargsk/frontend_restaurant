import React from "react";
import Layout from "./../components/Layout/Layout";
import { Link } from "react-router-dom";
import Banner from "../images/banner.jpeg";
import "../styles/HomeStyles.css";
import { ProductCard } from "../components/otherComponents/productCard";

const Home = () => {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="headerContainer">
          <h1>Food Website</h1>
          <p>Best Food In India</p>
          <Link to="/book">
            <button>Book Now</button>
          </Link>
        </div>
      </div>
      <ProductCard />
    </Layout>
  );
};

export default Home;
