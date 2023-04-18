import { slideArray } from "../data/portfolio-content";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


export default function Portfolio(){
    return(
        <div className="portfolio-container w-1/2 m-auto mb-20">
            <h1 className='text-center my-5 text-4xl bg-blue-500 m-auto rounded py-2 mt-10'>Practice project</h1>
            <p className="text-justify mb-2">The source code is available at the repository called <a href='https://github.com/temeszoli/coffee-house'>coffee-house</a>. The code won't run if you decide to download it and install the node modules because the config of the authentication api what I used was added to the .gitignore file because of security reasons. I didn't deploy it and I'm not planning to do it either, it's just for practice and to showcase how I am coding right now.</p>
            <p  className="text-justify mb-2">The source of this page is at the repository called <a href="https://github.com/temeszoli/cv-website">cv-website</a>. I've deployed it with netlify.</p>
                    <Swiper
                pagination={{
                type: "fraction",
                }}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper rounded"
            >
                {slideArray.map(slide => (
                   <SwiperSlide key={slide.id}><img src={slide.img} alt='coffeehouse-project' /></SwiperSlide> 
                ))}
            </Swiper>

        </div>
    );
}