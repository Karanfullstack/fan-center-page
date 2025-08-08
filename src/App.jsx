import Hero from './components/Hero';
import RankingSecond from './components/RankingSecond';

export default function App() {
    return (
        <main className="container h-[100dvh] max-w-[1440px] mx-auto w-full">
            <Hero />
            <RankingSecond />
        </main>
    );
}
