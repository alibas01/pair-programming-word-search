const wordSearch = (letters, word) => {
  const verticalArray = transpose(letters).map((ls) => ls.join(""));
  const horizontalJoin = letters.map((ls) => ls.join(""));
  for (let l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  for (let x of verticalArray) {
    if (x.includes(word)) return true;
  }
  return false;
};

const transpose = function(matrix) {
  let output = [];

  for (const row in matrix[0]) {
    //0,1
    let arr = [];
    for (const col in matrix) {
      //0,1,2
      arr.push(matrix[col][row]);
    }
    output.push(arr);
  }

  return output;
};

module.exports = wordSearch;
