

const MyCartDetails = ({myCar}) => {
    const {carName, carDescription, carBrand, carModel, carPhoto, rating, carPrice,_id } = myCar

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
      <button  className='btn w-full mt-3'>Delete From Cart</button>
    </div>  
        </>
    );
};

export default MyCartDetails;