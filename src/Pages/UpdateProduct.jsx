import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateProduct = () => {
    const loadCar = useLoaderData()
    const {carName, carDescription, carBrand, carModel, carPhoto, rating, carPrice,_id } = loadCar;

   
   
    const handleUpdateProduct = event =>{
        event.preventDefault()
        const form = event.target;
        const carName = form.car_name.value;
        const carPhoto = form.car_photo.value;
        const carModel = form.car_model.value;
        const carBrand = form.brand.value;
        const carPrice = form.car_price.value;
        const rating = form.rating.value;
        const carDescription = form.description.value;

        const carInfoUpdate = {carName, carPhoto, carModel, carBrand, carPrice, rating, carDescription}

        console.log(carInfoUpdate);

        fetch(`http://localhost:5000/products/${_id}`,{
            method:'PUT',
            headers:{
               'content-type':'application/json'
            },
            body:JSON.stringify(carInfoUpdate)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if (data.modifiedCount < 0) {
                Swal.fire({
                    title: 'Success',
                    text: 'Update Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
       

    }
    return (
        <>
        

<section className="bg-gray-100">
  <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
      <div className="lg:col-span-2 lg:py-12"> 
        <p className="max-w-xl text-lg">
        Welcome to our exclusive Add Car Collection product page, the ultimate destination for automotive enthusiasts and collectors alike. Whether you are a passionate car aficionado or an avid collector looking to expand your assemblage, our platform offers a seamless and intuitive experience for adding your prized automobiles to your collection.

Explore our user-friendly form designed specifically for effortlessly adding your treasured vehicles. With a simple and intuitive interface, you can now showcase every detail of your exceptional cars, from their make and model to their unique features and historical significance. Our streamlined process ensures that your cars are presented in their best light, allowing you to capture the essence and allure of each vehicle you add.

Enjoy the convenience of organizing your collection all in one place, enabling you to easily manage and track your inventory with precision. With our dedicated tools and comprehensive database, you can curate your collection to reflect your distinct taste and passion for automotive excellence.

        </p>

      
      </div>

      <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
        <form onSubmit={handleUpdateProduct}  className="space-y-4">
          <div>
            <label className="sr-only" htmlFor="name">Car Name</label>
            <input
              className="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Car Name"
              type="text"
              id="car_name"
              name="car_name"
              defaultValue={carName}
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="sr-only" htmlFor="email">Car PhotoURL</label>
              <input
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Photo URL"
                type="text"
                id="car_photo_url"
                name="car_photo"
                defaultValue={carPhoto}
              />
            </div>

            <div>
              <label className="sr-only" htmlFor="phone">Car Model</label>
              <input
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Car Model"
                type="text"
                id="model"
                name="car_model"
                defaultValue={carModel}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
            <div>
              <input
                className="peer sr-only"
                id="option1"
                type="radio"
                tabIndex="-1"
                name="brand"
                value={'Audi'}
                defaultChecked={carBrand}
              />

              <label
                htmlFor="option1"
                className="block w-full rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                tabIndex="0"
              >
                <span className="text-sm"> Audi </span>
              </label>
            </div>
            <div>
              <input
                className="peer sr-only"
                id="option2"
                type="radio"
                tabIndex="-1"
                name="brand"
                value={'BMW'}
                defaultChecked={carBrand}
              />

              <label
                htmlFor="option2"
                className="block w-full rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                tabIndex="0"
              >
                <span className="text-sm"> BMW </span>
              </label>
            </div>
            <div>
              <input
                className="peer sr-only"
                id="option3"
                type="radio"
                tabIndex="-1"
                name="brand"
                value={'Bugatti'}
                defaultChecked={carBrand}
              />

              <label
                htmlFor="option3"
                className="block w-full rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                tabIndex="0"
              >
                <span className="text-sm"> Bugatti </span>
              </label>
            </div>
            <div>
              <input
                className="peer sr-only"
                id="option4"
                type="radio"
                tabIndex="-1"
                name="brand"
                value={'Canoo'}
                defaultChecked={carBrand}
              />

              <label
                htmlFor="option4"
                className="block w-full rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                tabIndex="0"
              >
                <span className="text-sm"> Canoo </span>
              </label>
            </div>
            <div>
              <input
                className="peer sr-only"
                id="option5"
                type="radio"
                tabIndex="-1"
                name="brand"
                value={'Ferrari'}
                defaultChecked={carBrand}
              />

              <label
                htmlFor="option5"
                className="block w-full rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                tabIndex="0"
              >
                <span className="text-sm"> Ferrari </span>
              </label>
            </div>

          

            <div>
              <input
                className="peer sr-only"
                id="option6"
                type="radio"
                tabIndex="-1"
                name="brand"
                value={'LEXUS'}
                defaultChecked={carBrand}
              />

              <label
                htmlFor="option6"
                className="block w-full rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                tabIndex="0"
              >
                <span className="text-sm"> Lexus </span>
              </label>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="sr-only" htmlFor="email">Car Price</label>
              <input
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Car Price"
                type="number"
                id="price"
                name="car_price"
                defaultValue={carPrice}
              />
            </div>

            <div>
              <label className="sr-only" htmlFor="phone">Rating</label>
              <input
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Rating"
                type="number"
                id="brand"
                name="rating"
                defaultValue={rating}
              />
            </div>
          </div>
          <div>
            <label className="sr-only" htmlFor="message">Car Description</label>

            <textarea
              className="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Car Description"
              rows="8"
              id="description"
              name="description"
              defaultValue={carDescription}
            ></textarea>
          </div>

          <div className="mt-4">
            <button
             
              className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
            >
              Update Your Cars
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
        </>
    );
};

export default UpdateProduct;