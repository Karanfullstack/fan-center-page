import React from 'react';
import ScreenSlider from './ScreenSlider';
import screen1 from '../assets/screens-png/Screen-1.png';
import screen2 from '../assets/screens-png/Screen-2.png';
import screen3 from '../assets/screens-png/Screen-3.png';
import screen4 from '../assets/screens-png/Screen-4.png';
import screen5 from '../assets/screens-png/Screen-5.png';
import screen6 from '../assets/screens-png/Screen-6.png';
import { useScroll } from './common/useScroll';
import ArrowNavigation from './common/ArrowNavigation';

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
    const { scrollRef, isBeginning, isEnd, handlePrev, handleNext, handleScroll } = useScroll();
    return (
        <section className="max-w-[1400px] flex  flex-col container mx-auto pt-10 px-5  w-full  h-[100dvh]">
            <div className="flex items-center h-1/6 justify-between">
                <span className="text-[1rem] text-base font-medium leading-[1.5]">
                    Predykcje, ciekawostki i Wy, Eksperci:
                </span>
                <ArrowNavigation
                    isBeginning={isBeginning}
                    isEnd={isEnd}
                    handlePrev={handlePrev}
                    handleNext={handleNext}
                />
            </div>
            <div
                ref={scrollRef}
                onScroll={handleScroll}
                className="w-full h-full overflow-y-scroll  hide-scrollbar scroll-smooth   gap-x-2.5 flex "
            >
                {screenData.map((screen, index) => (
                    <div className="" key={index}>
                        <ScreenSlider data={screen} />
                    </div>
                ))}
            </div>
        </section>
    );
}
