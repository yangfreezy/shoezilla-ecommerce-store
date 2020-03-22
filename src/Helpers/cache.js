export const getCache = id => {
  return JSON.parse(localStorage.getItem(id));
};

export const insertCache = (id, value) => {
  return localStorage.setItem(id, JSON.stringify(value));
};
