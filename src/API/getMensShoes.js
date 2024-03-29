import axios from "axios";

export const getMensShoes = async () => {
  let res;
  try {
    res = await axios(
      "https://zappos1.p.rapidapi.com/products/list?page=1&limit=30",
      {
        method: "POST",
        headers: {
          "x-rapidapi-host": "zappos1.p.rapidapi.com",
          "x-rapidapi-key": process.env.REACT_APP_ZAPPOS_API_KEY,
          "content-type": "application/json",
          accept: "application/json",
        },
        data: [
          {
            facetField: "zc1",
            values: ["Shoes"]
          },
          {
            facetField: "zc2",
            values: ["Sneakers & Athletic Shoes"]
          },
          {
            facetField: "zc3",
            values: ["Lifestyle Sneakers"]
          },
          {
            facetField: "txAttrFacet_Gender",
            values: ["Men"]
          }
        ]
      }
    );
    if (!res.data) {
      return console.err(res);
    }
    return res.data.results;
  } catch (err) {
    console.error(err);
  }
};
