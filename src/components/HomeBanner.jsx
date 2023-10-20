import Login from "../Pages/Login";



const HomeBanner = () => {
    return (
        <>
            <div className="hero h-[600px]" style={{backgroundImage: 'url(https://www.bmwusa.com/content/dam/bmwusa/common/homepage/fmas/2023-10/desktop/BMW-EV-Donation-Fall-Homepage-FMA-Desktop.jpg)'}}>
    
  <div className="hero-overlay bg-opacity-60"></div>

  <div className="hero-content flex-col justify-between text-center text-neutral-content md:flex-row">
    <div className="max-w-md text-left">
      <h1 className="mb-5 text-5xl font-bold">Find Your Dream Ride at DriveCraft</h1>
      <p className="mb-5">Discover a diverse selection of top-quality vehicles tailored to your preferences at DriveCraft. With our seamless browsing experience and expert guidance, finding the perfect car has never been easier.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
    <div className="">
   
    </div>
  </div>
</div>
        </>
    );
};

export default HomeBanner;