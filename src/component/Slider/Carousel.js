import React from 'react';
import Slider from "react-slick";
import style from './Slider.module.scss';
import space1 from './../../asets/image/slider/1.jpg';
import space2 from './../../asets/image/slider/2.jpg';
import space3 from './../../asets/image/slider/3.jpg';
import space4 from './../../asets/image/slider/4.jpg';
import space5 from './../../asets/image/slider/5.jpg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        pauseOnDotsHover: true, 
        
    };
    return (
        <div className={style["carrousel_wrapper"]}>
            <Slider {...settings}>
                <div>
                    <div
                        className={style["carrousel_image"]}
                        style={{
                            background: `url(${space1})`
                        }}
                    />
                </div>
                <div>
                    <div
                        className={style["carrousel_image"]}
                        style={{
                            background: `url(${space2})`
                        }}
                    />
                </div>
                <div>
                    <div
                        className={style["carrousel_image"]}
                        style={{
                            background: `url(${space3})`
                        }}
                    />
                </div>
                <div>
                    <div
                        className={style["carrousel_image"]}
                        style={{
                            background: `url(${space4})`
                        }}
                    />
                </div>
                <div>
                    <div
                        className={style["carrousel_image"]}
                        style={{
                            background: `url(${space5})`
                        }}
                    />
                </div>
            </Slider>
        </div>
    );
};

export default Carousel; 