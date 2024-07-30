import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  bestSellerOne,
  bestSellerTwo,
  bestSellerThree,
  bestSellerFour,
} from "../../../assets/images/index";

const BestSellers = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Our Bestsellers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          _id="1011"
          img={bestSellerOne}
          productName="Heart"
          price="500"
          color="Black"
          badge={true}
          des="An aesthetic Flowershaped pink Heart"
        />
        <Product
          _id="1012"
          img={bestSellerTwo}
          productName="Mixed Grafitti"
          price="550"
          color="Off-White"
          badge={false}
          des="A mix of logos of various top brands"
        />
        <Product
          _id="1013"
          img={bestSellerThree}
          productName="Wanted"
          price="300"
          color="Golden & White"
          badge={true}
          des="Wanted Message written for Monkey D. Luffy."
        />
        <Product
          _id="1014"
          img={bestSellerFour}
          productName="Omoni"
          price="300"
          color="Black"
          badge={false}
          des="Omoni written in a unique font style giving it an aesthetic look"
        />
      </div>
    </div>
  );
};

export default BestSellers;
