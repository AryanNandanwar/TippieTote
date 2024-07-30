import React, { useState } from "react";
import BestSeller from "../../components/home/BestSellers/BestSellers";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const BestSellers = () => {
  const [prevLocation] = useState("");

  return (
    <div className="max-w-container mx-auto">
      <Breadcrumbs title="Best Sellers" prevLocation={prevLocation} />
      <div className="pb-10">
        <BestSeller />
      </div>
    </div>
  );
};

export default BestSellers;