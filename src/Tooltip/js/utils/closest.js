import { matches } from './matches';

/**
 * Ponyfill to get the closest parent element
 * @param {Element} element - child of parent to be returned
 * @param {String} parentSelector - selector to match the parent if found
 * @return {Element}
 */
export default function closest(el, selector) {
  if (Element.prototype.closest) {
    return el.closest(selector);
  }

  while (el) {
    if (matches.call(el, selector)) {
      return el;
    }
    el = el.parentElement;
  }

  return el;
}
