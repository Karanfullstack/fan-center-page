import React, { useEffect, useRef, useState, cloneElement } from 'react';

const animations = {
    fadeUp: {
        from: { opacity: 0, transform: 'translateY(20px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
        timingFunction: 'ease',
    },
    zoomIn: {
        from: { opacity: 0, transform: 'scale(0.8)' },
        to: { opacity: 1, transform: 'scale(1)' },
        timingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
    },
    elastic: {
        from: { opacity: 0, transform: 'scale(0.8)' },
        to: {
            opacity: 1,
            transform: 'scale(1)',
            transitionTimingFunction: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)', // elastic effect
        },
        timingFunction: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    },
    bubbleUp: {
        from: { opacity: 0, transform: 'translateY(40px) scale(0.5)' },
        to: { opacity: 1, transform: 'translateY(0) scale(1)' },
        timingFunction: 'ease-out',
    },
};

const AnimateOnView = ({
    children,
    parentClass = '',
    duration = 2000, // duration per image in ms
    initialDelay = 2000, // delay before first animation starts in ms
    animationType = 'elastic',
}) => {
    const containerRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    const anim = animations[animationType] || animations.fadeUp;

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // Wait initialDelay before setting visible true
                    setTimeout(() => {
                        setIsVisible(true);
                    }, initialDelay);

                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (containerRef.current) observer.observe(containerRef.current);

        return () => observer.disconnect();
    }, [initialDelay]);

    const animatedChildren = React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return child;

        // Delay each child by its index times duration
        const delay = isVisible ? index * duration : 0;

        const style = {
            opacity: isVisible ? anim.to.opacity : anim.from.opacity,
            transform: isVisible ? anim.to.transform : anim.from.transform,
            transitionProperty: 'opacity, transform',
            transitionDuration: `${duration}ms`,
            transitionTimingFunction: anim.timingFunction,
            transitionDelay: `${delay}ms`,
            ...(child.props.style || {}),
        };

        return cloneElement(child, { style });
    });

    return (
        <div ref={containerRef} className={parentClass}>
            {animatedChildren}
        </div>
    );
};

export default AnimateOnView;
