/**
 *  Deletes any list items with an "a" tag (they contain links to endpoints our app doesn't support)
 * @param {String} htmlString String of html (from Zappos API product description)
 * @returns {String} htmlStr new string of removed li tags with anchors inside them
 **/

export const removeLiTagsWithLinks = htmlString => {
  let htmlStr = htmlString;
  while (htmlStr.includes("<a")) {
    const aIndex = htmlStr.indexOf("<a");
    const start = htmlString.slice(0, aIndex).lastIndexOf("<li>");
    const end = htmlString.indexOf("</li>", aIndex) + 5;
    htmlStr = htmlString.slice(0, start) + htmlString.slice(end);
  }
  return htmlStr;
};
