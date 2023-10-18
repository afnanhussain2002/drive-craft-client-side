

const AddProduct = () => {
    const handleAddProduct = event =>{
        event.preventDefault()
        const form = event.target;
        const carName = form.car_name.value;
        const carPhoto = form.car_photo.value;
        const carModel = form.car_model.value;
        const carBrand = form.brand.value;
        const carPrice = form.car_price.value;
        const rating = form.rating.value;
        const carDescription = form.description.value;

        const carInfo = {carName, carPhoto, carModel, carBrand, carPrice, rating, carDescription}

        console.log(carInfo);



    }
    return (
        <>
        

<section className="bg-gray-100">
  <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
      <div className="lg:col-span-2 lg:py-12"> 
        <p className="max-w-xl text-lg">
          At the same time, the fact that we are wholly owned and totally
          independent from manufacturer and other group control gives you
          confidence that we will only recommend what is right htmlFor you.
        </p>

        <div className="mt-8">
          <a href="" className="text-2xl font-bold text-pink-600">
            0151 475 4450
          </a>

          <address className="mt-2 not-italic">
            282 Kevin Brook, Imogeneborough, CA 58517
          </address>
        </div>
      </div>

      <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
        <form onSubmit={handleAddProduct}  className="space-y-4">
          <div>
            <label className="sr-only" htmlFor="name">Car Name</label>
            <input
              className="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Car Name"
              type="text"
              id="car_name"
              name="car_name"
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
              />
            </div>

            <div>
              <label className="sr-only" htmlFor="phone">Car Model</label>
              <input
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Brand Name"
                type="text"
                id="model"
                name="car_model"
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
                value={'LEXUS'}
              />

              <label
                htmlFor="option3"
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
            ></textarea>
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
            >
              Add Product
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

export default AddProduct;