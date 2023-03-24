import axios from "axios";

export const getShoeDetails = async productId => {
  let res;
  try {
    res = await axios(
      `https://zappos1.p.rapidapi.com/products/detail?productId=${productId}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "zappos1.p.rapidapi.com",
          "x-rapidapi-key": process.env.REACT_APP_ZAPPOS_API_KEY,
        }
      }
    );
    if (!res.data.product) return;
    return res.data.product[0];
  } catch (err) {
    console.error(err);
  }
};
