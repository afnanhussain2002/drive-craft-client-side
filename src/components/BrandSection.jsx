import { useContext, useEffect } from "react";
import { useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";

const BrandSection = () => {
  
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    fetch("/brands.json")
      .then((res) => res.json())
      .then((data) => setBrands(data));
  }, []);
  return (
    <>
    <h3 className="text-center text-black bg-slate-400 rounded-lg p-4 w-80 mx-auto text-5xl mt-8 dark:text-white">All Brands</h3>

    <div className="grid grid-cols-1 lg:grid-cols-3 ">
    {
        brands.map(brand => <div key={brand.brand} className="flex flex-col justify-center items-center  mx-auto my-8">
        <div
        
          
          ><img className="w-96 h-56 rounded-xl" src={brand.thumbnail} alt="" /></div>
        <div className="w-56 md:w-64 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden">
          <div className="py-2 text-center font-bold uppercase tracking-wide text-gray-800">
           {brand.brand}
          </div>
          <div className="flex items-center justify-center py-2 px-3 bg-gray-400">

            <Link to={`/${brand.brand}`}>
            <button className=" bg-gray-800 text-xs text-center text-white px-2 py-1 font-semibold rounded uppercase hover:bg-gray-700">
              Brand Details
            </button>
            </Link>
            
            
          </div>
        </div>
      </div>)
    }
    </div>
      
    </>
  );
};

export default BrandSection;
