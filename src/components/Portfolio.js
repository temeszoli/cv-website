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
            <h1 className='text-center my-5 text-4xl bg-blue-500 m-auto rounded py-2 mt-10'>Gyakorló projektem</h1>
            <p className="text-justify mb-2">A forráskód elérhető a <a href='https://github.com/temeszoli/coffee-house'>coffee-house</a> nevű public repositorymban. A kód letöltve nem futtatható, mert a firebase authentikációs apihoz tartozó configot nem töltöttem fel.</p>
            <p  className="text-justify mb-2">Ennek a weboldalnak a forráskódja a <a href="https://github.com/temeszoli/cv-website">cv-website</a> nevű repoban található.</p>
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