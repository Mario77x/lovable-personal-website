
/**
 * Smoothly scrolls to a target element
 * @param id The ID of the element to scroll to
 */
export const scrollTo = (id: string): void => {
  const element = document.getElementById(id);
  if (!element) return;
  
  window.scrollTo({
    top: element.offsetTop - 80, // Offset for the navbar height
    behavior: 'smooth'
  });
};

/**
 * Initializes reveal-on-scroll animations for elements with the reveal-on-scroll class
 */
export const initRevealAnimations = (): void => {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        // Only observe once
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all elements with the reveal-on-scroll class
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  revealElements.forEach(element => {
    observer.observe(element);
  });
};
