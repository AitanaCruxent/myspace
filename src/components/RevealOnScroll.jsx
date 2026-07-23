import { useEffect, useRef, useState } from "react";
import "../static/RevealOnScroll.css";

function RevealOnScroll({ children, className = "" }) {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={`reveal-on-scroll ${isVisible ? "is-visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
}

export default RevealOnScroll;