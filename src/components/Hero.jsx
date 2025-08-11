import Navbar from './Navbar';
import BgVector from '../assets/bg-vector.svg';
import AppIcon from '../assets/App-Icon.svg';
import BgVectorMobile from '../assets/Vector-mobile.png';
import Jersey from '../assets/animation/lp-jersey.json';
import Lottie from 'lottie-react';

import { useNavigate } from 'react-router-dom';
import TextAnimate from './common/TextToAnimate';
export default function Hero() {
    const navigate = useNavigate();
    return (
        <section className="h-[100vh] w-full ">
            <header>
                <Navbar />
            </header>

            {/* Hero Section */}
            <article className="flex flex-col relative h-[calc(100dvh-90px)]  w-full  justify-start items-center">
                <div
                    style={{ backgroundImage: `url(${BgVectorMobile})` }}
                    className={'w-full md:hidden   absolute h-full bg-no-repeat bg-contain bg-top'}
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/100" />
                </div>

                <div
                    style={{ backgroundImage: `url(${BgVector})` }}
                    className={
                        'w-full hidden lg:w-[68%] lg:bg-contain md:block absolute h-full bg-no-repeat bg-contain bg-top'
                    }
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/100" />
                </div>

                {/* main content */}

                <section className="p-base z-10 h-full  md:mt-10 w-full flex-col space-y-4 flex font-hubot-semicondensed  text-base  ">
                    <figure className="flex md:justify-start flex-grow justify-center items-center flex-col space-y-6">
                        <div className="flex w-full  justify-center  items-center">
                            <Lottie
                                animationData={Jersey}
                                loop={true}
                                className="max-w-[clamp(130px,10vw,210px)]  h-auto w-full  md:max-w-[clamp(190px,7vw,210px)]
                                lg:max-w-[clamp(140px,4vw,180px)]"
                                autoplay={true}
                            />
                        </div>
                        <div className="flex justify-center items-center">
                            <h2 className="text-[clamp(1.25rem,1vw,1.30rem)] font-medium leading-[1.5] md:text-[clamp(1.9rem,1.5vw,2rem)] lg:text-[clamp(1.3rem,1.3vw,1.5rem)] text-base text-center">
                                Nie ma farta. Jest tylko wiedza!
                            </h2>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <div className="text-[clamp(1rem,calc(1.9rem),5rem)] text-center font-bold  leading-[1.5] md:text-[clamp(3.5rem,7.5vw,6rem)] md:break-words  lg:text-[clamp(4rem,1vw,5rem)]">
                                <div className="lg:hidden">
                                    <TextAnimate>
                                        <p>Udowodnij, że wiesz więcej</p>
                                        <p>niż reszta i zgarnij nagrody!</p>
                                    </TextAnimate>
                                </div>
                                <div className="hidden md:hidden lg:block">
                                    <TextAnimate>
                                        <h1>Udowodnij, że wiesz więcej </h1>
                                        <h1>niż reszta i zgarnij nagrody!</h1>
                                    </TextAnimate>
                                </div>
                            </div>
                        </div>
                    </figure>

                    <div
                        onClick={() => navigate('/#download-section')}
                        className="max-w-[clamp(320px,20vw,356px)] hover:cursor-pointer space-x-3 w-full lg:mb-0 mb-2 md:max-w-[min(500px,70%)]  mx-auto items-center bg-[#232323] flex h-16 md:h-[5rem] lg:h-[4rem] px-2 md:px-2 lg:max-w-[clamp(422px,3vw,490px)] "
                    >
                        <img
                            className="w-auto md:w-full md:max-w-[4rem] lg:max-w-[3rem] h-auto"
                            src={AppIcon}
                            alt="app icon"
                        />
                        <span className="text-[clamp(0.878rem,2vw,1.2rem)] md:text-[clamp(1.2rem,2vw,1.2rem)] text-[#F6F6F6] font-medium leading-[1.5] lg:text-[clamp(1rem,1vw,1.2rem)] ">
                            Pobierz apkę FOOVA FC i pokaż kto tu rządzi.
                        </span>
                    </div>
                </section>
            </article>
        </section>
    );
}
