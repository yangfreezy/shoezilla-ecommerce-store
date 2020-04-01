/**
 * Makes a deep copy of an object, will consider using lodash in the future but this works for right now
 * @param {Object} object
 * @returns {Object} deep copy of the object
 **/

export const deepCopyObj = obj => {
  return JSON.parse(JSON.stringify(obj));
};
