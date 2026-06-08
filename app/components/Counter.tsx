"use client";

import { useEffect, useRef, useState } from "react";

function useInView(threshold = 0.15) {
    const ref = useRef<HTMLSpanElement>(null);
    const [inView, setInView] = useState(false);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([e]) => {
                if (e.isIntersecting) {
                    setInView(true);
                    obs.disconnect();
                }
            },
            { threshold }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, []);
    return { ref, inView };
}

export function Counter({
    target,
    suffix = ""
}: {
    target: number;
    suffix?: string;
}) {
    const [count, setCount] = useState(0);
    const { ref, inView } = useInView();
    useEffect(() => {
        if (!inView) return;
        let start = 0;
        const step = Math.ceil(target / 60);
        const timer = setInterval(() => {
            start += step;
            if (start >= target) {
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(start);
            }
        }, 16);
        return () => clearInterval(timer);
    }, [inView, target]);
    return (
        <span ref={ref}>
            {count.toLocaleString()}
            {suffix}
        </span>
    );
}
