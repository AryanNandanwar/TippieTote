import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const Journal = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  useEffect(() => {
    setPrevLocation(location.state.data);
  }, [location]);
  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Customize" prevLocation={prevLocation} />
      <div className="pb-10">
        <h1 className="max-w-[600px] text-base text-lightText mb-2">
          <span className="text-primeColor font-semibold text-lg">Tippie Tote</span>{" "}
          
        </h1>
        <Link to="/shop">
          <button className="w-52 h-10 bg-primeColor text-white hover:bg-black duration-300">
            Continue Shopping
          </button>
        </Link>
      </div>
      <p>In Order to purchase a Customized Tote Bag Message Tippie Tote on instagram with your specifications.</p>
      <a
  href="https://www.instagram.com/tippie.tote/"
  style={{ textDecoration: 'underline', color: 'blue' }}
>
  Tippie Tote
</a>

    </div>
  );
};

export default Journal;
