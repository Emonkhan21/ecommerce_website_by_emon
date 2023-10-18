// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

// Importing Images for the slider
import Slider_1 from "../../assets/slide-01.jpg";
import Slider_2 from "../../assets/slide-02.jpg";
import Slider_3 from "../../assets/slide-03.jpg";

const SLIDER = () => {
    return (
        <div>
            <Swiper spaceBetween={50}
                slidesPerView={1}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,}}
                navigation={true} modules={[Navigation, Pagination, Autoplay]} pagination={true}  >


                <SwiperSlide> <img className='w-full h-[700px]' src={Slider_1} alt="Car" /> </SwiperSlide>
                <SwiperSlide> <img className='w-full h-[700px]' src={Slider_2} alt="Car" /> </SwiperSlide>
                <SwiperSlide> <img className='w-full h-[700px]' src={Slider_3} alt="Car" /> </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default SLIDER