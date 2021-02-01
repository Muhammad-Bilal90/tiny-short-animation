import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { GlobalContext } from "../State/GlobalState";
import useWebAnimations, { fadeInLeft, fadeInRight, fadeInDown, fadeInUp } from '@wellyshen/use-web-animations';
import "../assets/css/App.css";
import "../assets/css/uitilities.css";

const MembersInfo = () => {
    const { slug } = useParams();
    const { team } = useContext(GlobalContext);
    const members = team.filter((member) => member.slug === slug);

    const { ref: imageDiv } = useWebAnimations({...fadeInLeft});
    const { ref: infoDiv } = useWebAnimations({...fadeInDown});
    const { ref: descDiv } = useWebAnimations({...fadeInRight});
    const { ref: buttonDiv } = useWebAnimations({...fadeInUp});

    return (
        <div className="relative">
            <Link to="/">
                <h1 className="absolute text-white m-4 text-3xl cursor-pointer " style={{ zIndex:1 }}>X</h1>
            </Link>
            {members.map((member) => (
                <div key={member.id} className="w-full md:h-screen flex md:flex-row flex-col justify-center items-center">
                    <div className="lg:w-8/12 md:6/12 w-full md:h-full " ref={imageDiv}>
                        <div className="w-full h-full primary-bg flex justify-center item-center">
                            <img id="memberImage" src={member.image} alt="Member"/>
                        </div>
                    </div>
                    <div className="lg:w-4/12 md:6/12 w-full h-full flex items-center teamMemContent">
                        <div className="w-full h-full bg-white flex flex-col justify-center p-10 shadow-lg">
                            <div className="pt-2" ref={infoDiv}>
                                <h1 className="text-3xl font-semibold">{member.name}</h1>
                                <h1 className="text-xl primary-color">{member.depart}</h1>
                                <hr className="my-5" />
                            </div>
                            <div ref={descDiv}>
                                <h1 className=" text-gray-600">{member.description}</h1>
                                <h1 className=" text-gray-600">{member.description}</h1>
                            </div>
                            <button className="text=lg w-32 py-2 px-4 focus:outline-none primary-bg text-white rounded-md my-8 hover:bg-orange-600"
                            ref={buttonDiv}                            
                            >
                                Linkedin
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default MembersInfo;