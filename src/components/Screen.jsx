import { useEffect, useRef, useState } from 'react';

import ScreenSlider from './ScreenSlider';
import screen1 from '../assets/screens-png/Screen-1.png';
import screen2 from '../assets/screens-png/Screen-2.png';
import screen3 from '../assets/screens-png/Screen-3.png';
import screen4 from '../assets/screens-png/Screen-4.png';
import screen5 from '../assets/screens-png/Screen-5.png';
import screen6 from '../assets/screens-png/Screen-6.png';
import ArrowNavigation from './common/ArrowNavigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const screenData = [
    {
        text: 'Zbieraj punkty w predykcjach przed i w trakcie meczu!',
        image: screen1,
    },
    {
        text: 'Stwórz swój profil i udowodnij, że jesteś piłkarskim Ekspertem!',
        image: screen2,
    },
    {
        text: 'Zapraszaj ziomków i pokaż im kto tu rządzi!',
        image: screen3,
    },
    {
        text: 'Walcz o zwycięstwo w rankingu ogólnym, klubowym i prywatnym!',
        image: screen4,
    },
    {
        text: 'Buduj historię Twoich wyników i osiągnięć!',
        image: screen5,
    },
    {
        text: 'Bądź na bieżąco z ciekawostkami i wynikami!',
        image: screen6,
    },
];

export default function Screen() {
    const swiperRef = useRef(null);
    const sectionRef = useRef(null);
    const [_activeIndex, setActiveIndex] = useState(0);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);
    const handleSlideChange = (swiper) => {
        setActiveIndex(swiper.realIndex);
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
    };

    const handlePrev = () => {
        if (swiperRef.current) swiperRef.current.slidePrev();
    };

    const handleNext = () => {
        if (swiperRef.current) swiperRef.current.slideNext();
    };

    // Set initial slide to 0 (left-aligned)
    useEffect(() => {
        if (swiperRef.current) {
            swiperRef.current.slideTo(0, 0);
            setActiveIndex(0);
            setIsBeginning(true);
            setIsEnd(swiperRef.current.isEnd);
        }
    }, []);
    return (
        <section className="max-w-[1400px] flex lg:space-y-6  space-y-3 flex-col container mx-auto pt-10 px-5  w-full  h-[100vh]">
            <div className="flex items-center h-1/6 md:px-5   lg:h-auto justify-between">
                <span className="text-[1rem] text-base font-medium leading-[1.5]">
                    Predykcje, ciekawostki i Wy, Eksperci:
                </span>
                <ArrowNavigation
                    gap={2}
                    isBeginning={isBeginning}
                    isEnd={isEnd}
                    handlePrev={handlePrev}
                    handleNext={handleNext}
                />
            </div>
            <div ref={sectionRef} className="w-full mx-auto  justify-center h-full   flex ">
                <Swiper
                    className="w-full mx-auto h-full"
                    modules={[Navigation]}
                    spaceBetween={10}
                    loop={false}
                    speed={300}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2, spaceBetween: 14 },
                        1024: { slidesPerView: 3 },
                    }}
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    slidesPerView={1.2}
                    initialSlide={0}
                    onSlideChange={handleSlideChange}
                >
                    {screenData.map((screen, index) => (
                        <SwiperSlide
                            className="flex h-full mx-auto w-full justify-center "
                            key={index}
                        >
                            <div className="flex h-full  justify-center">
                                <ScreenSlider data={screen} />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
