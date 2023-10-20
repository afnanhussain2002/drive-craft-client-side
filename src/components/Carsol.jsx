
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
const Carsol = () => {
    return (
        <Carousel autoPlay={true} width={1024}>
        <div>
            <img src="https://assets.autobuzz.my/wp-content/uploads/2020/03/06140636/bugatti-chiron-pur-sport-faster-in-corners-01.jpg" />
            
        </div>
        <div>
            <img src="https://www.hdcarwallpapers.com/walls/2017_lexus_nx_luxury_crossover-HD.jpg" />
            
        </div>
        <div>
            <img src="https://cdn.ferrari.com/cms/network/media/img/resize/649ec8bf437d870023cf534e-ferrari-models-menu-2023-cards-812-gts?width=1040&height=585" />
          
        </div>
        <div>
            <img src="https://modifiiedpowerwheels.com/wp-content/uploads/2020/05/bmw-x6-m-competition-in-alpine-white-with-sakhir-orange-interior-7.jpg" />
          
        </div>
        <div>
            <img src="https://tse3.mm.bing.net/th?id=OIP.xtbekaMdPkxohzinnNhT3QHaEK&pid=Api&P=0&h=220" />
          
        </div>
        <div>
            <img src="https://cdn.wccftech.com/wp-content/uploads/2020/12/canoo-mpdv-electric-van_100774839.jpg" />
          
        </div>
    </Carousel>
    );
};

export default Carsol;