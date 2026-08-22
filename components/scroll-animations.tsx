"use client";

import { animateOnScroll } from "@/lib/animations";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function ScrollAnimations() {
  const pathname = usePathname();

  useEffect(() => {
    const elements = document.querySelectorAll(".animate-on-scroll");

    if (!("IntersectionObserver" in window)) {
      animateOnScroll();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animated");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -80px", threshold: 0.08 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
