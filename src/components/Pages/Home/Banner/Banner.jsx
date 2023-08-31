import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="relative">
            <img src="https://i.ibb.co/Jn7XVKT/close-up-on-toy-car-with-easter-eggs-4.png" className="md:h-[700px] w-full" alt="" />
            <div className="absolute md:bottom-[15%] bottom-2 text-right  md:text-left right-2 w-1/2 md:right-28 md:w-1/4">
                <h1 className=" md:pb-10 text-xl md:text-3xl text-[#1C3F3A] uppercase">SkyExplorer 3000  The Ultimate 3D Rendering Airplane Toy!</h1>
                <h6 className="font-semibold md:text-lg text-[#1C3F3A] hidden md:flex">Project Overview</h6>
                <p className="text-[#1C3F3A] hidden lg:flex">Introducing our incredibly detailed 3D Rendering Airplane Toy – the perfect blend of imagination, fun, and aviation excitement! This meticulously crafted toy captures the essence of a real airplane, bringing a world of adventure to your child's playtime. Let their dreams take flight as they embark on endless journeys through the clouds with this extraordinary toy</p>
                <Link className="btn btn-primary rounded-sm  bg-[#1C3F3A] mt-5 md:mt-10 border-[#1C3F3A] hover:bg-[#59afa2]">Buy now</Link>
            </div>
        </div>
    );
};

export default Banner;