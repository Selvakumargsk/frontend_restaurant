import React from "react";
import Layout from "./../components/Layout/Layout";
import { ProductCard } from "../components/otherComponents/productCard";
import { getAdminId } from "../services/sessionProvider";
import VerticalLayout from "../components/verticalLayout/verticalNav";

const Menu = () => {
  if(getAdminId()){
    return(
      <VerticalLayout>
        <ProductCard />
      </VerticalLayout>
    )
  }else{
  return (
    <Layout>
      <ProductCard />
    </Layout>
  );
}  
};

export default Menu;
