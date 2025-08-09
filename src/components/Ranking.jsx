import Button from '../components/common/Button';
import RankingSecond from '../components/RankingSecond';
import image1 from '../assets/mobile-icons/Frame-2.png';
import image2 from '../assets/mobile-icons/Frame-1.png';
import image3 from '../assets/mobile-icons/Frame.png';

import imageDesktop1 from '../assets/desktop-ranking/Frame-1.png';
import imageDesktop2 from '../assets/desktop-ranking/Frame-2.png';
import imageDesktop3 from '../assets/desktop-ranking/Frame.png';

const imageData = [image3, image2, image1];
const imageDesktopData = [imageDesktop3, imageDesktop1, imageDesktop2];
export default function Ranking() {
    return (
        <article className="max-w-[1440px] overflow-hidden  flex-col flex justify-start items-center w-full pt-10 px-5 md:pt-12 md:px-7 h-auto">
            <section className="w-full h-full lg:space-y-10 md:space-y-0 space-y-10 flex-col flex justify-center items-center">
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
                </figure>
            </section>
            <RankingSecond />
        </article>
    );
}
