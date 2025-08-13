import React from "react";
import Box from "./Box";

const Products = () => {
  return (
    <div className="section">
      <Box productName="laptop" features="5" touchscreen="yes" price="$90" />
      <Box productName="tablet" features="4" touchscreen="yes" price="$80"/>
      <Box productName="phone" features="3" touchscreen="yes" price="$95"/>
      <Box productName="deskstop" features="5" touchscreen="no" price="$70"/>
    </div>
  );
};

export default Products;
