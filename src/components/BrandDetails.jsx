import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import BrandsDetailsCard from "./BrandsDetailsCard";
import Carsol from "./Carsol";


const BrandDetails = () => {
    const [carBrands, setCarBrands] = useState([])
   const {brand} = useParams()
   const brandData = useLoaderData();
   useEffect(()=>{
      const findBrands = brandData?.filter( brands=> brands.carBrand === brand )
      setCarBrands(findBrands)

   },[brand,brandData])
  console.log(carBrands);
    return (
        <div className="container mx-auto">
            <div className="flex justify-center">
                <Carsol></Carsol>
            </div>
            <div className="flex gap-4 flex-col justify-center items-center w-full md:flex-row">
                {
                  carBrands?.map(cars => <BrandsDetailsCard key={cars._id} cars={cars}></BrandsDetailsCard>)  
                }
            </div>
            
        </div>
    );
};

export default BrandDetails;