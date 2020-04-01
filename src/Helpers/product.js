/**
 * Increments the product size
 * @param {String} direction either "decrease" or "increase"
 * @param {String} size product size state used to update UI
 * @param {Function} setSize sets product size state
 * @returns undefined
 **/

export const incrementSize = (direction, size, setSize) => {
  switch (direction) {
    case "decrease":
      if (+size === 6) return;
      setSize(String(+size - 0.5));
      return;
    case "increase":
      if (+size === 12.5) return;
      setSize(String(+size + 0.5));
      return;
    default:
      return;
  }
};
