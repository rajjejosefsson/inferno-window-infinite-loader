// Credit: preact-compat - https://github.com/developit/preact-compat :)
export function shallowDiffers(a, b): boolean {
  let i;

  for (i in a) {
    if (!(i in b)) {
      return true;
    }
  }

  for (i in b) {
    if (a[i] !== b[i]) {
      return true;
    }
  }
  return false;
}
