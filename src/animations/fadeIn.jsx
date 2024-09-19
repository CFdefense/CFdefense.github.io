// animations/fadeIn.js

/**
 * Apply fade-in animation to elements with a specific delay and stagger effect.
 * @param {NodeListOf<Element>} elements - The elements to apply the animation to.
 * @param {number} delay - The initial delay before starting the animation (in ms).
 * @param {number} stagger - The stagger delay between each element's animation (in ms).
 */
export function fadeIn(elements, delay = 2000, stagger = 100) {
    elements.forEach((item, index) => {
      setTimeout(() => {
        item.classList.remove('opacity-0', 'translate-y-4');
        item.classList.add('opacity-100', 'translate-y-0');
      }, delay + (stagger * index));
    });
  }
  