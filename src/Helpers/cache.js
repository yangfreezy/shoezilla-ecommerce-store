export const getCache = id => {
  return JSON.parse(localStorage.getItem(id));
};

export const insertCache = (id, value) => {
  return localStorage.setItem(id, JSON.stringify(value));
};

export const mapShoesToCache = data => {
  return data.reduce((cache, shoe) => {
    cache[shoe.productId] = shoe;
    return cache;
  }, {});
};
