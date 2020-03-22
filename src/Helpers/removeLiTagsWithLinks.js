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
