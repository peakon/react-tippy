/**
 * Ponyfill to get the closest parent element
 * @param {Element} el - child of parent to be returned
 * @param {String} selector - selector to match the parent if found
 * @return {Element}
 */
export default function closest(el, selector) {
  var matchesFn;

  // find vendor prefix
  [
    'matches',
    'webkitMatchesSelector',
    'mozMatchesSelector',
    'msMatchesSelector',
    'oMatchesSelector'
  ].some(function(fn) {
    if (typeof document.body[fn] == 'function') {
      matchesFn = fn;
      return true;
    }
    return false;
  });

  var parent;

  // traverse parents
  while (el) {
    parent = el.parentElement;
    if (parent && parent[matchesFn](selector)) {
      return parent;
    }
    el = parent;
  }

  return null;
}
