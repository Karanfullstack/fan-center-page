import Glasses from '../assets/FOOVA-LP-cards/okularki-card.png';
import Stadium from '../assets/FOOVA-LP-cards/stadion-card.png';
import Puchar from '../assets/FOOVA-LP-cards/puchar-card.png';
import Pilka from '../assets/FOOVA-LP-cards/pilka-card.png';
import Lottie from 'lottie-react';
import StickMan from '../assets/animation/lp-boy.json';
import DownloadApple from '../assets/downloadapple.svg';
import DownloadPlay from '../assets/downloadplay.svg';
import { useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import AnimateOnView from './common/MotionAct';
export default function Downlaod() {
    const containerRef = useRef(null);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (location.hash === '#download-section') {
            requestAnimationFrame(() => {
                if (containerRef.current) {
                    const element = containerRef.current;
                    const targetPosition = element.getBoundingClientRect().top + window.pageYOffset;
                    const startPosition = window.pageYOffset;
                    const distance = targetPosition - startPosition;
                    const duration = 1200; // in ms
                    let start = null;

                    function step(timestamp) {
                        if (!start) start = timestamp;
                        const progress = timestamp - start;
                        const percent = Math.min(progress / duration, 1);
                        window.scrollTo(0, startPosition + distance * percent);
                        if (progress < duration) {
                            requestAnimationFrame(step);
                        }
                    }

                    requestAnimationFrame(step);
                }
            });
        }
        navigate(location.pathname, { replace: true });
    }, [location.hash, navigate, location.pathname]);
    return (
        <section
            ref={containerRef}
            id="download-section"
            className="max-w-[1400px]  flex-col relative flex items-center justify-center w-full  h-[100dvh]"
        >
            <div className="w-full hidden md:block lg:hidden sm:hidden h-[10vh]"></div>
            <figure className="max-w-full md:space-y-7 lg:space-y-0 lg:gap-0 gap-4 pt-26  lg:w-[1200px] lg:h-full  md:w-[800px]  flex flex-col h-[700px] md:h-[850px]  justify-center items-center w-full">
                <div className="w-full flex lg:pt-10  relative h-[340px]   items-center justify-center  ">
                    <Lottie
                        animationData={StickMan}
                        loop={true}
                        className="object-contain lg:w-[25%]  md:w-[50%] w-[60%]"
                        autoplay={true}
                    />

                    <AnimateOnView
                        initialDelay={220}
                        duration={1000}
                        parentClass="absolute lg:-top-30 lg:left-12  md:-top-40 -top-15 left-0 md:max-w-[140px]  max-w-[85px]"
                    >
                        <img className="h-auto w-auto" src={Stadium} alt="stadium" />
                    </AnimateOnView>

                    <AnimateOnView
                        initialDelay={320}
                        duration={1000}
                        parentClass="absolute lg:-top-20 lg:right-30 md:-top-49 -top-20 right-0 md:max-w-[140px] max-w-[85px]"
                    >
                        <img className="h-auto w-auto" src={Puchar} alt="stadium" />
                    </AnimateOnView>

                    <AnimateOnView
                        initialDelay={420}
                        duration={1000}
                        parentClass=" absolute  lg:-bottom-40 md:-bottom-10 bottom-10 left-0 md:max-w-[140px] max-w-[85px]"
                        animationClass="fade-in-up"
                    >
                        <img className="h-auto w-auto" src={Pilka} alt="stadium" />
                    </AnimateOnView>

                    <AnimateOnView
                        initialDelay={520}
                        duration={1000}
                        parentClass="absolute lg:-bottom-34 md:-bottom-10 bottom-5 right-0 md:max-w-[140px] max-w-[85px]"
                    >
                        <img className="h-auto w-auto" src={Glasses} alt="stadium" />
                    </AnimateOnView>
                </div>
                <div className="flex flex-col  lg:gap-5 gap-3 md:gap-4 justify-center items-center">
                    <h2 className="text-base md:text-[3.5rem] lg:text-[4rem]  text-[2.5rem] font-bold leading-[1.5]">
                        Dawaj do gry!
                    </h2>
                    <p className="font-medium  text-base leading-[1.5] text-xl">
                        Pobierz aplikację:
                    </p>

                    <div className="flex gap-3 mt-1  items-center w-full lg:max-w-[20vw]  md:max-w-[40vw] max-w-[42vw] h-full  justify-center">
                        <img
                            className="hover:cursor-pointer"
                            onClick={() =>
                                window.open(
                                    'https://apps.apple.com/us/app/foova-fc/id6748235923',
                                    '_blank'
                                )
                            }
                            src={DownloadApple}
                            alt="Download on the App Store"
                        />
                        <img
                            className="hover:cursor-pointer"
                            onClick={() =>
                                window.open(
                                    'https://play.google.com/store/apps/details?id=org.foova',
                                    '_blank'
                                )
                            }
                            src={DownloadPlay}
                            alt="Get it on Google Play"
                        />
                    </div>
                </div>
            </figure>
        </section>
    );
}
