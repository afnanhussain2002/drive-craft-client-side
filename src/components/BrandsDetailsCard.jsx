import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const BrandsDetailsCard = ({cars}) => {
      
    const {carName, carDescription, carBrand, carModel, carPhoto, rating, carPrice,_id } = cars || {};
    const handleAddToCart = () =>{
      console.log(cars);
      fetch('http://localhost:5000/cart',{
        method:'POST',
        headers:{
            'content-type': 'application/json'
        },
        body:JSON.stringify(cars)
       })
       .then(res =>res.json())
       .then(data =>{
        console.log(data);
         if (data.insertedId) {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Car is added on Add to Cart',
                showConfirmButton: false,
                timer: 1500
              })
         }
       })
      
    }
    if (cars) {
        return (
            <>
                <div className="card w-96 bg-base-100 shadow-xl">
      <figure><img className='h-56 w-full' src={carPhoto} alt={carName} /></figure>
      <div className="card-body">
        <h2 className="card-title">
          {carName}
          <div className="badge badge-secondary">{carModel}</div>
        </h2>
      
        <p>{carDescription.slice(0,200)}... <span className='font-extrabold underline'>Details</span></p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{carBrand}</div> 
          <div className="badge badge-outline">${carPrice}</div>
        </div>
        <div className="rating">
      <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
      <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
      <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
      <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
      <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
    </div>
      </div>
      <Link to={`/update/${_id}`}>
      <button className='btn w-full'>Edit</button>
      </Link>
      <button onClick={handleAddToCart} className='btn w-full mt-3'>Add To Cart</button>
    </div>
            </>
        );
    }
    return <h3 className='text-5xl text-white text-center'>No Data Found!</h3>;
    }
 

export default BrandsDetailsCard;