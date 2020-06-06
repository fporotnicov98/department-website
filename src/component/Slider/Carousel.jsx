import React from 'react';
import Slider from "react-slick";
import style from './Slider.module.scss';
// import space1 from './../../asets/image/slider/1.jpg';
// import space2 from './../../asets/image/slider/2.jpg';
// import space3 from './../../asets/image/slider/3.jpg';
// import space4 from './../../asets/image/slider/4.jpg';
// import space5 from './../../asets/image/slider/5.jpg';
import logo from './../../asets/image/logo.png'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Carousel = (props) => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        pauseOnDotsHover: true,

    };
    return (
        <div className={style["wrapper"]}>
            <Slider {...settings}>
                {
                    props.posts.map((item, index) =>
                        <div key={index} className={style['item']}>
                            <div className={style['body']} /* style={{ background: `url(${logo})` }} */ ><img src={logo} alt="" /></div>
                            <div className={style['content']}>
                                <div className={style['news']}>
                                    <div className={style['title']}>{item.theme}</div>
                                    <div className={style['text']}>{item.newsText}</div>
                                </div>
                                <div className={style['footer']}>
                                    {/*  */}
                                    <div className={style['author']}>{item.author}</div>
                                    <div className={style['date']}>{item.newsDate}</div>
                                </div>
                            </div>

                        </div>
                    )
                }
                {/* <div className={style['item']}>
                    <div
                        className={style["carrousel_image"]}
                        style={{
                            background: `url(${space1})`
                        }}
                    />
                </div>
                <div className={style['item']}>
                    <div
                        className={style["carrousel_image"]}
                        style={{
                            background: `url(${space2})`
                        }}
                    />
                </div>
                <div className={style['item']}>
                    <div
                        className={style["carrousel_image"]}
                        style={{
                            background: `url(${space3})`
                        }}
                    />
                </div>
                <div className={style['item']}>
                    <div
                        className={style["carrousel_image"]}
                        style={{
                            background: `url(${space4})`
                        }}
                    />
                </div>
                <div className={style['item']}>
                    <div
                        className={style["carrousel_image"]}
                        style={{
                            background: `url(${space5})`
                        }}
                    />
                </div> */}
            </Slider>
        </div>
    );
};

export default Carousel; 