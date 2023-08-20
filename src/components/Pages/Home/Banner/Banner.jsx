import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="relative">
            <img src="https://i.ibb.co/r2hjfCy/close-up-on-toy-car-with-easter-eggs-3.png" className="md:h-[700px] w-full" alt="" />
            <div className="absolute bottom-[15%] -ml-2 left-28">
                <Link className="btn btn-primary rounded-3xl bg-[#1C3F3A] border-[#1C3F3A] hover:bg-[#59afa2]">Buy now</Link>
            </div>
        </div>
    );
};

export default Banner;