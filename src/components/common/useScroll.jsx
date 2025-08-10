import { useRef, useEffect, useState, useCallback } from 'react';

export function useScroll(scrollOffset = 200) {
    const scrollRef = useRef(null);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    // Track scroll position for arrow disabling
    const handleScroll = useCallback(() => {
        if (!scrollRef.current) return;
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        setIsBeginning(scrollLeft <= 0);
        setIsEnd(scrollLeft + clientWidth >= scrollWidth - 1);
    }, []);

    // Arrow scroll
    const scrollByOffset = useCallback((offset) => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
        }
    }, []);

    const handlePrev = useCallback(
        () => scrollByOffset(-scrollOffset),
        [scrollByOffset, scrollOffset]
    );
    const handleNext = useCallback(
        () => scrollByOffset(scrollOffset),
        [scrollByOffset, scrollOffset]
    );

    // Drag with momentum
    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;

        let isDragging = false;
        let startX, scrollStart;
        let velocity = 0;
        let lastX, lastTime;
        let momentumId;

        const onMouseDown = (e) => {
            isDragging = true;
            startX = e.pageX;
            scrollStart = el.scrollLeft;
            lastX = e.pageX;
            lastTime = Date.now();
            velocity = 0;
            cancelAnimationFrame(momentumId);
            el.style.cursor = 'grabbing';
        };

        const onMouseMove = (e) => {
            if (!isDragging) return;
            const dx = e.pageX - startX;
            el.scrollLeft = scrollStart - dx;

            // Track velocity
            const now = Date.now();
            const dt = now - lastTime;
            if (dt > 0) {
                velocity = (e.pageX - lastX) / dt;
                lastX = e.pageX;
                lastTime = now;
            }
        };

        const onMouseUp = () => {
            isDragging = false;
            el.style.cursor = 'grab';

            // Momentum animation
            const momentum = () => {
                el.scrollLeft -= velocity * 20; // multiplier controls speed
                velocity *= 0.95; // friction
                if (Math.abs(velocity) > 0.01) {
                    momentumId = requestAnimationFrame(momentum);
                }
            };
            momentum();
        };

        el.style.cursor = 'grab';
        el.addEventListener('mousedown', onMouseDown);
        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseup', onMouseUp);
        el.addEventListener('scroll', handleScroll);

        handleScroll();

        return () => {
            el.removeEventListener('mousedown', onMouseDown);
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseup', onMouseUp);
            el.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

    return { scrollRef, isBeginning, isEnd, handlePrev, handleNext };
}
