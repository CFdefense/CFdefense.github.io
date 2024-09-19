// animations/floatUp.js

/**
 * Float up animation for elements.
 * @param {Element} element - The element to apply the animation to.
 * @param {number} height - The amount of translation on the y-axis.
 * @param {number} delay - The delay before starting the animation.
 * @param {boolean} isHome - Whether or not the animation is for the home page.
 */
export function floatUp(element, height = 8, delay = 200, isHome = false) {
    setTimeout(() => {
      element.classList.remove('opacity-0', `translate-y-${height}`);
      element.classList.add('opacity-100', 'translate-y-0');
    }, delay);
  }