import Lenis from 'lenis';
import Hero from './components/Hero';
import Ranking from './components/Ranking';
import { useEffect } from 'react';
import Screen from './components/Screen';
import Footer from './components/Footer';
import Downlaod from './components/Downlaod';

export default function App() {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 2.6,
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
            lenis.resize(); // Recalculate scroll size after full load
        };

        window.addEventListener('load', onLoad);

        return () => {
            window.removeEventListener('load', onLoad);
            lenis.destroy(); // Clean up
        };
    }, []);
    return (
        <main className="container h-screen max-w-[1440px] mx-auto w-full">
            <Hero />
            <Screen />
            <Ranking />
            <Downlaod />
            <Footer />
        </main>
    );
}
