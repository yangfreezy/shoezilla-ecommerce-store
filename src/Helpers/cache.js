/**
 * Gets data from localStorage
 * @param {String} id id of item to get from localStorage
 * @returns {Object} item from localStorage
 **/

export const getCache = id => {
  return JSON.parse(localStorage.getItem(id));
};

/**
 * Sets data to localStorage
 * @param {String} id id of item to get from localStorage
 * @param {Object} value data to store in localStorage
 * @returns nothing
 **/

export const insertCache = (id, value) => {
  localStorage.setItem(id, JSON.stringify(value));
};
