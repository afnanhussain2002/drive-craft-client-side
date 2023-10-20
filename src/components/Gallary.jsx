import React from 'react';

const Gallary = () => {
    return (
        <section className="text-gray-600 body-font mt-9">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="flex justify-center w-full mb-20 flex-wrap">
      <h1 className="text-center text-5xl sm:text-5xl   font-medium title-font text-white lg:w-1/3 lg:mb-0 mb-4">Gallary Of Cars</h1>
     
    </div>
    <div className="flex flex-wrap md:-m-2 -m-1">
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://s1.cdn.autoevolution.com/images/news/gallery/canoo-is-subject-of-an-extensive-investigation-by-the-sec_1.jpg"/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://s1.cdn.autoevolution.com/images/news/gallery/all-new-audi-a4-allroad-quattro-available-from-44750-with-20-and-30-engines_15.jpg"/>
        </div>
        <div className="md:p-2 p-1 w-full">
          <img alt="gallery" className="w-full h-full object-cover object-center block" src="https://media.autoexpress.co.uk/image/private/s--tNmZnmDy--/v1563182806/autoexpress/2018/08/01_37.jpg"/>
        </div>
      </div>
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-full">
          <img alt="gallery" className="w-full h-full object-cover object-center block" src="https://wallpaperaccess.com/full/3541951.jpg"/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://www.hdcarwallpapers.com/walls/2017_lexus_nx_luxury_crossover-HD.jpg"/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://modifiiedpowerwheels.com/wp-content/uploads/2020/05/bmw-x6-m-competition-in-alpine-white-with-sakhir-orange-interior-7.jpg"/>
        </div>
      </div>
    </div>
  </div>
</section>
    );
};

export default Gallary;