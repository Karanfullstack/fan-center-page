import Lenis from 'lenis';
import Hero from './components/Hero';
import Ranking from './components/Ranking';
import { useEffect } from 'react';
import Screen from './components/Screen';
import Footer from './components/Footer';
import Downlaod from './components/Downlaod';
import Framer from './components/Framer';

export default function App() {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1,
            easing: (t) => t,
            smoothWheel: false,
            smoothTouch: true,
            touchMultiplier: 2,
        });

        const raf = (time) => {
            lenis.raf(time);
            requestAnimationFrame(raf);
        };

        requestAnimationFrame(raf);

        const onLoad = () => {
            lenis.resize();
        };

        window.addEventListener('load', onLoad);

        return () => {
            window.removeEventListener('load', onLoad);
            lenis.destroy();
        };
    }, []);
    return (
        <main className="container h-screen max-w-[1440px] mx-auto w-full">
            <Hero />
            <Framer />
            <Screen />
            <Ranking />
            <Downlaod />
            <Footer />
        </main>
    );
}
