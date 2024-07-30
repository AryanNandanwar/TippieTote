import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  
  Virginia,
  UGH,
  Fruits,
  Bratz,

  
} from "../../../assets/images/index";

const SpecialOffers = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Special Offers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          _id="1101"
          img={Virginia}
          productName="Virginia Wolf Quote"
          price="300"
          color="Black"
          badge={true}
          des="Virginia Wolf quote saying for most of history Anonymous was a woman"
        />
        <Product
          _id="1102"
          img={UGH}
          productName="UGH Text"
          price="250"
          color="Black"
          badge={true}
          des="Simple text UGH."
        />
        <Product
          _id="1103"
          img={Fruits}
          productName="Fruits Design"
          price="250"
          color="White"
          badge={true}
          des="A maze alternating between pink coloured squares and fruits"
        />
        <Product
          _id="1104"
          img={Bratz}
          productName="Bratz Text"
          price="325"
          color="Red"
          badge={true}
          des="A unique coloured bag with a text bratz"
        />
      </div>
    </div>
  );
};

export default SpecialOffers;
