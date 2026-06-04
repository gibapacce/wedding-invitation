/**
 * Smooth scroll to element by ID
 */
export const scrollToElement = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

/**
 * Get scroll progress as percentage
 */
export const getScrollProgress = (): number => {
  const windowHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrolled = (window.scrollY / windowHeight) * 100;
  return Math.min(scrolled, 100);
};

/**
 * Check if element is in viewport
 */
export const isElementInViewport = (
  element: HTMLElement
): boolean => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.bottom >= 0
  );
};

/**
 * Disable scroll
 */
export const disableScroll = () => {
  document.body.style.overflow = "hidden";
};

/**
 * Enable scroll
 */
export const enableScroll = () => {
  document.body.style.overflow = "auto";
};
