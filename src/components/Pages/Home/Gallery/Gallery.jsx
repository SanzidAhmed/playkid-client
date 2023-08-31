
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

const Gallery = () => {
    return (

        <div className='container mx-auto pt-10 bg-white'>
            <h1 className='text-center pb-10 text-3xl text-[#1C3F3A] uppercase'>PlayKid Gallery</h1>
            <Swiper
                spaceBetween={30}
                slidesPerView={5}
                loop={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper "
            >
                <SwiperSlide>
                    <img src="https://i.ibb.co/WpX5g25/front-view-little-boy-playing-with-toy-planes-blue-floor.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/QpRtgZF/smiling-boy-playing-with-toy-plane.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/GRY2mBT/little-cute-boy-with-blonde-hair-blue-eyes-wearing-red-t-shirt-flying-blue-white-toy-plane-while-loo.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/d0pQChB/young-girl-ready-travel-vacation-with-toy-plane.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/LdKNqHz/little-girl-playing-with-toy-plane-field.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/Jrxh2WQ/european-mother-african-son-family-summer-park-people-plays-with-plane.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/LJkbh82/young-boy-playing-indoors-with-eco-toys.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/yFYd7GX/low-angle-car-race-siblings.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/7VxRTj6/child-with-red-car.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/gy4WFZH/full-shot-mother-kid-playing-with-toys.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/vLTz1Ln/daughter-helping-packing-boxes.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/Krpg01K/close-up-child-playing-her-room.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/NmvrGML/mother-father-playing-with-daughter-home.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/fX66d8t/little-baby-girl-playing-car-against-green-grass.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/3hNzyXm/family-sitting-home-near-christmas-tree.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/XXNHP0S/little-online-student-playing-with-toys.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/qJ8nsBd/two-toddlers-playing-with-balls-xylophone-sitting-floor-kindergarten.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/g6G5g3x/medium-shot-boy-playing-memory-game.jpg" alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Gallery;