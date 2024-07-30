import React, { useState } from "react";
import NewArrivals from "../../components/home/NewArrivals/NewArrivals";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const NewArrival = () => {
  const [prevLocation] = useState("");

  return (
    <div className="max-w-container mx-auto">
      <Breadcrumbs title="New Arrivals" prevLocation={prevLocation} />
      <div className="pb-10">
        <NewArrivals />
      </div>
    </div>
  );
};

export default NewArrival;