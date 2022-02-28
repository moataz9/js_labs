/**
 * Determine whether the current runtime environment is a browser
 */

function isBrowser() {
  return ![typeof window, typeof document].includes('undefined')
}

console.log(isBrowser())
