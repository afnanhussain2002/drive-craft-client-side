import { useLoaderData } from "react-router-dom";
import MyCartDetails from "../components/MyCartDetails";

const MyCart = () => {
    const loadData = useLoaderData()
   

    return (
        <div className="container mt-9 mx-auto grid grid-cols-1 gap-4 md:grid-cols-3">
        
           {
            loadData?.map(myCar =><MyCartDetails key={myCar._id} myCar={myCar}></MyCartDetails>)
           }
        </div>
    );
};

export default MyCart;