// capitalize the first leter of a string
//
export default str => {
  return str.replace(/\w\S*/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase();
  });
};
