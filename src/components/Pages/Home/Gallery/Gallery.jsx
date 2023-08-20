
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

const Gallery = () => {
    return (

        <div className='container mx-auto pt-10'>
            <h1 className='text-center pb-10 text-3xl text-[#1C3F3A] uppercase'>PlayKid Gallery</h1>
            <Swiper
                spaceBetween={30}
                slidesPerView={5}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper "
            >
                <SwiperSlide>
                    <img src="https://i.ibb.co/7kQ8c7K/front-view-little-boy-playing-with-toy-planes-blue-floor.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/H4x8pwR/andrew-seaman-0-DDsn-K0-YKVU-unsplash.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/SNYnjnp/smiling-boy-playing-with-toy-plane.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/k4LKVBh/cute-little-children-playing-summer-park.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/Tt9gGxS/young-girl-ready-travel-vacation-with-toy-plane.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/mJRSWxV/little-girl-playing-with-toy-plane-field.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/rcchW8K/young-girl-raising-model-plane-looking-it-isolated-white-wall-with-copy-space.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/qRJhdtt/full-shot-mother-kid-playing-with-toys.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/GCCL8Dk/child-with-red-car.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/LPtcT9h/little-girl-playing-with-toys-living-room.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/x1z76CW/young-boy-playing-indoors-with-eco-toys.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/nb8mNcT/low-angle-car-race-siblings.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/gMBpr2g/mother-father-playing-with-daughter-home.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/jbxmRC8/daughter-helping-packing-boxes.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/ftkGgVC/child-having-fun-during-playtime.jpg" alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Gallery;