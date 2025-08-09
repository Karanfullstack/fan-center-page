import { useRef, useState, useEffect, useCallback } from 'react';

export function useScroll(scrollOffset = 200) {
    const scrollRef = useRef(null);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    const handleScroll = useCallback(() => {
        if (!scrollRef.current) return;
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        setIsBeginning(scrollLeft <= 0);
        setIsEnd(scrollLeft + clientWidth >= scrollWidth - 1);
    }, []);

    const scrollByOffset = useCallback(
        (offset) => {
            if (scrollRef.current) {
                scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
            }
        },
        [scrollRef]
    );

    const handlePrev = useCallback(() => {
        scrollByOffset(-scrollOffset);
    }, [scrollByOffset, scrollOffset]);

    const handleNext = useCallback(() => {
        scrollByOffset(scrollOffset);
    }, [scrollByOffset, scrollOffset]);

    useEffect(() => {
        handleScroll();
    }, [handleScroll]);

    return { scrollRef, isBeginning, isEnd, handlePrev, handleNext, handleScroll };
}
