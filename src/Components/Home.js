import React, { useContext } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GlobalContext } from '../State/GlobalState';
import { Link } from "react-router-dom";
import useWebAnimations, { fadeInUp, fadeInDown, fadeIn } from "@wellyshen/use-web-animations";
import "../assets/css/uitilities.css";
import "../assets/css/App.css";

const Home = () => {
    const { team } = useContext(GlobalContext);

    const { keyframes, timing } = fadeInDown;
    const { ref: text1 } = useWebAnimations({
        keyframes,
        timing: {
            ...timing,
            delay: 1000,
            iterations: 1,
            easing: "ease-in-out",
        }
    });
    
    // const { ref: text2 } = useWebAnimations({...fadeInDownBig});

    const { keyframes: keytext2, timing: timingtext2 } = fadeIn;
    const { ref: text2 } = useWebAnimations({
      keyframes: keytext2,
      timing: {
        ...timingtext2,
        delay: 600,
        iterations: 1,
        easing: "ease-in-out",
      },
    });

    const {  ref: carousel } = useWebAnimations({...fadeInUp});

    const settings = {
        // className: "center",
        centerMode: true,
        infinite: true,
        slidesToShow: 3,
        speed: 500,
        arrows: false,
        focusOnSelect: true,
        autoplay: true,
        autoplaySpeed: 1700,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 1,
                },
            },
        ],
    }

    return (
        <div className=" w-full h-screen flex flex-col justify-between bg-gray-100 overflow-y-hidden ">
            <div></div>
            <div class="container mx-auto text-center">
                <div className="text-md text-orange-600 font-semibold  pb-2 " ref={text1}>
                    Our Team
                </div>
                <div class="text-4xl text-gray-700 leading-tight font-normal tracking-wide" ref={text2}>
                    Meet the Minds
                    <br />
                    shaping an Industry
                </div>
            </div>
            <div className="sldierMain w-full" ref={carousel}>
                <Slider {...settings}>
                    {team.map((member) => (
                        <div key={member.id} className=" focus:outline-none  ">
                            <Link to={`/${member.slug}`}>
                                <img id="teamImage" src={member.image} alt="Member" style={{
                                    display: "block",
                                    margin: "0 auto",
                                    cursor: "pointer",
                                }} />
                            </Link>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default Home;