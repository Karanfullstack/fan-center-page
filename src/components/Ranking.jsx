import Button from '../components/common/Button';
import RankingSecond from '../components/RankingSecond';
import image1 from '../assets/mobile-icons/Frame-2.png';
import image2 from '../assets/mobile-icons/Frame-1.png';
import image3 from '../assets/mobile-icons/Frame.png';

import imageDesktop1 from '../assets/desktop-ranking/Frame-1.png';
import imageDesktop2 from '../assets/desktop-ranking/Frame-2.png';
import imageDesktop3 from '../assets/desktop-ranking/Frame.png';
import SlidersRanking from './SlidersRanking';
import ArrowNavigation from './common/ArrowNavigation';
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const imageData = [image3, image2, image1];
const imageDesktopData = [imageDesktop3, imageDesktop1, imageDesktop2];
const prizes = [
    {
        rank: 1,
        amount: 500,
        currency: 'zł',
        description: 'Bon do wykorzystania w Media Expert',
    },
    {
        rank: 2,
        amount: 400,
        currency: 'zł',
        description: 'Karta podarunkowa Allegro',
    },
    {
        rank: 3,
        amount: 300,
        currency: 'zł',
        description: 'Voucher do Empik',
    },
    {
        rank: 4,
        amount: 200,
        currency: 'zł',
        description: 'Bon do wykorzystania w Media Markt',
    },
    {
        rank: 5,
        amount: 100,
        currency: 'zł',
        description: 'Doładowanie Google Play',
    },
    {
        rank: 6,
        amount: 50,
        currency: 'zł',
        description: 'Zniżka na Spotify Premium',
    },
    {
        rank: 7,
        amount: 25,
        currency: 'zł',
        description: 'Voucher do Biedronki',
    },
];
export default function Ranking() {
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

    return (
        <article className="max-w-[1440px] overflow-hidden  flex-col flex justify-start items-center w-full pt-10 px-5 md:pt-12 md:px-7 h-auto">
            <section className="w-full h-full lg:space-y-10 md:space-y-10 space-y-10 flex-col flex justify-center items-center">
                <figure className="flex justify-center h-1/3 md:h-1/4  md:w-full w-[22.07rem]  flex-col items-center">
                    {/* main heading and Dowload Buttton */}
                    <section className="w-full  space-y-6 h-full flex flex-col justify-start items-center">
                        <h2 className=" text-[2rem] md:text-[2.4rem] lg:text-[3rem] text-center text-base leading-[1.5] font-bold">
                            Wygraj niesamowite nagrody
                        </h2>
                        <Button />
                    </section>
                </figure>
                {/* product section */}
                <figure className="flex justify-start h-3/3 md:h-4/4 w-full space-y-5 flex-col  items-center">
                    <h2 className=" text-[1.750rem] text-center text-base leading-[1.5] font-bold">
                        Ranking miesięczny
                    </h2>

                    {/* image section */}

                    <section className="w-full lg:hidden md:w-[80%] flex  justify-start items-end overflow-hidden">
                        {imageData.map((image, index) => (
                            <img
                                className=" w-full  overflow-hidden object-contain  flex"
                                key={index}
                                src={image}
                                alt="award_images"
                            />
                        ))}
                    </section>

                    {/* desktop/laptop */}

                    <section className="overflow-hidden lg:flex hidden justify-center items-end w-full">
                        {imageDesktopData.map((image, index) => (
                            <img
                                className=" w-[20%]  object-contain  flex"
                                key={index}
                                src={image}
                                alt="award_images"
                            />
                        ))}
                    </section>

                    {/* sliders section	 */}

                    <section className="w-full mt-5 h-auto flex items-center justify-end">
                        <ArrowNavigation
                            isBeginning={isBeginning}
                            isEnd={isEnd}
                            handlePrev={handlePrev}
                            handleNext={handleNext}
                        />
                    </section>
                    <section
                        ref={sectionRef}
                        className="w-full mx-auto justify-center h-full   flex "
                    >
                        <Swiper
                            className="w-full mx-auto h-full"
                            modules={[Navigation]}
                            spaceBetween={10}
                            loop={false}
                            speed={300}
                            breakpoints={{
                                0: { slidesPerView: 2, spaceBetween: 10 },
                                640: { slidesPerView: 3, spaceBetween: 15 },
                                768: { slidesPerView: 4, spaceBetween: 15 },
                                770: { slidesPerView: 4.3, spaceBetween: 15 },
                                1024: { slidesPerView: 6.5, spaceBetween: 20 },
                            }}
                            onSwiper={(swiper) => {
                                swiperRef.current = swiper;
                            }}
                            slidesPerView={1.2}
                            initialSlide={0}
                            onSlideChange={handleSlideChange}
                        >
                            {prizes.map((prize, index) => (
                                <SwiperSlide
                                    className="flex h-full mx-auto w-full justify-center "
                                    key={index}
                                >
                                    <div className="flex h-full  justify-center">
                                        <SlidersRanking key={prize.rank} prize={prize} />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </section>
                </figure>
            </section>
            <RankingSecond />
        </article>
    );
}
