// Utility to check if element is in viewport
export const isInViewport = (element: HTMLElement, offset = 100): boolean => {
  if (!element) return false;

  const rect = element.getBoundingClientRect();

  return (
    rect.top <=
      (window.innerHeight || document.documentElement.clientHeight) - offset &&
    rect.bottom >= 0 &&
    rect.left <=
      (window.innerWidth || document.documentElement.clientWidth) - offset &&
    rect.right >= 0
  );
};

// Adding animation classes to elements when they enter viewport
export const animateOnScroll = (): void => {
  const elements = document.querySelectorAll(".animate-on-scroll");

  elements.forEach((element) => {
    if (isInViewport(element as HTMLElement, 100)) {
      element.classList.add("animated");
    }
  });
};

// Parallax effect handler
export const handleParallax = (
  event: MouseEvent,
  element: HTMLElement,
  strength = 20
): void => {
  const rect = element.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  const mouseX = event.clientX;
  const mouseY = event.clientY;

  const offsetX = ((mouseX - centerX) / strength).toFixed(2);
  const offsetY = ((mouseY - centerY) / strength).toFixed(2);

  element.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
};

// Mouse tracking for subtle hover effects
export const initMouseTracking = () => {
  const trackElements = document.querySelectorAll(".track-mouse");

  window.addEventListener("mousemove", (event) => {
    trackElements.forEach((element) => {
      if (element instanceof HTMLElement) {
        handleParallax(event, element, 40);
      }
    });
  });

  // Return the cleanup function
  return () => {
    window.removeEventListener("mousemove", () => {});
  };
};
