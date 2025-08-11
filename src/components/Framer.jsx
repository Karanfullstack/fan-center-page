import { useEffect, useRef } from 'react';
import groupFootbal from '../assets/Group.svg';

export default function Framer() {
    const scrollRef = useRef(null);
    const sectionRef = useRef(null);

    // vh CSS var for mobile viewport height fix
    useEffect(() => {
        function setVh() {
            document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
        }
        setVh();
        window.addEventListener('resize', setVh);
        return () => window.removeEventListener('resize', setVh);
    }, []);

    // Scroll reset helper
    const resetScroll = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollTo({ top: 0, behavior: 'auto' });
        }
    };

    // Scroll reset on mount
    useEffect(() => {
        resetScroll();
    }, []);

    return (
        <div className="max-w-[1400px] w-full container mx-auto md:py-[7.5rem] lg:h-[100vh]  md:px-10 full h-[85vh]">
            <div className="h-[25vh] lg:h-[10vh]  "></div>
            <div
                ref={sectionRef}
                className="bg-black p-2  h-[60vh] md:h-[80%] lg:h-full justify-center font-hubot flex flex-col items-center  relative"
                style={{ scrollBehavior: 'auto' }}
            >
                <div
                    ref={scrollRef}
                    className="w-full   mb-40 lg:mb-0  flex justify-center items-center"
                    style={{ scrollBehavior: 'smooth' }}
                >
                    <div className="flex flex-col p-2 m-auto md:translate-y-[-25%]  lg:translate-y-[-20%] translate-y-[-10%] gap-4  justify-end items-center h-full w-full max-w-[1100px] relative">
                        <div
                            className="max-w-[225px] md:max-w-[372px] md:h-[90px] h-[59px] flex flex-col justify-center items-center   sticky bottom-[10vh] w-full  text-center p-3 bg-[#DBFD01] will-change-top"
                            style={{ transform: 'translateY(-4.6vh)' }}
                        >
                            <span className="text-[1.75rem] md:text-5xl leading-[1.5] font-bold   ">
                                “Wiedziałem!”
                            </span>

                            <div
                                className="bg-white absolute md:translate-y-[-50%] top-14 md:top-25 rounded-full max-w-[80px] h-[80px] w-full flex items-center justify-center overflow-hidden will-change-top"
                                style={{ transform: 'translateY(-200%)' }}
                            >
                                <img
                                    src={groupFootbal}
                                    alt="football"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        <div
                            delay={0.3}
                            className="max-w-[269px]  justify-center md:max-w-[450px] w-full md:h-[90px]  flex items-center h-[59px] sticky bottom-[9.4vh] z-30  text-center p-3 bg-white will-change-top"
                            style={{ transform: 'translateY(-2.4vh)' }}
                        >
                            <span className="text-[1.75rem] md:text-5xl leading-[1.5] font-bold">
                                “A nie mówiłem?”
                            </span>
                        </div>

                        <div
                            className=" flex md:mb-30 lg:mb-10 flex-col md:max-w-[520px] w-full md:h-[90px]  h-[59px]  justify-center items-center z-40 sticky bottom-[9vh] max-w-[309px]  text-center p-3 bg-[#DBFD01] will-change-top"
                            style={{ transform: 'translateY(0)' }}
                        >
                            <span className="text-[1.75rem] md:text-[3rem] leading-[1.5] font-bold">
                                “To było oczywiste!”
                            </span>

                            <div
                                className="md:w-[90vw] w-full absolute  -bottom-18 md:-bottom-20  flex justify-center items-center will-change-top"
                                style={{ transform: 'translateY(4vh)' }}
                            >
                                <span className="text-[1.7rem] md:text-5xl  h-[80px]  text-base font-bold text-center leading-[1.3]">
                                    Apka dla futbolowych Ekspertów.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
