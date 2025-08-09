import Hero from './components/Hero';
import Ranking from './components/Ranking';

export default function App() {
    return (
        <main className="container  h-[100dvh] max-w-[1440px] mx-auto w-full">
            <Hero />
           
            <Ranking />
        </main>
    );
}
