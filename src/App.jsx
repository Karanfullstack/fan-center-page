import Hero from './components/Hero';
import RankingSecond from './components/RankingSecond';
import SlidersRanking from './components/SlidersRanking';

export default function App() {
    return (
        <main className="container  h-[100dvh] max-w-[1440px] mx-auto w-full">
            <Hero />
            <RankingSecond />
            <SlidersRanking />
        </main>
    );
}
