import { useRef, useEffect, useState, useCallback } from 'react';

export function useScroll(cardSelector) {
    const scrollRef = useRef(null);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);
    const [cardWidth, setCardWidth] = useState(0);

    // Measure first card's bounding width
    const measureCardWidth = useCallback(() => {
        if (!scrollRef.current || !cardSelector) return;
        const firstCard = scrollRef.current.querySelector(cardSelector);
        if (firstCard) {
            const rect = firstCard.getBoundingClientRect();
            setCardWidth(rect.width + 10); // 16px for gap
        }
    }, [cardSelector]);

    useEffect(() => {
        const handleResize = () => measureCardWidth();

        // Ensure we measure after layout and assets are loaded
        window.addEventListener('resize', handleResize);
        window.addEventListener('load', handleResize);

        measureCardWidth(); // initial measure

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('load', handleResize);
        };
    }, [measureCardWidth]);

    // Scroll tracking
    const handleScroll = useCallback(() => {
        if (!scrollRef.current) return;
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        setIsBeginning(scrollLeft <= 0);
        setIsEnd(scrollLeft + clientWidth >= scrollWidth - 1);
    }, []);

    // Scroll exactly one card at a time
    const handlePrev = useCallback(() => {
        if (scrollRef.current && cardWidth) {
            const newScroll = scrollRef.current.scrollLeft - cardWidth;
            scrollRef.current.scrollTo({ left: newScroll, behavior: 'smooth' });
        }
    }, [cardWidth]);

    const handleNext = useCallback(() => {
        if (scrollRef.current && cardWidth) {
            const newScroll = scrollRef.current.scrollLeft + cardWidth;
            scrollRef.current.scrollTo({ left: newScroll, behavior: 'smooth' });
        }
    }, [cardWidth]);

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;

        el.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            el.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

    return { scrollRef, isBeginning, isEnd, handlePrev, handleNext };
}
