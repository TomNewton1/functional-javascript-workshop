function countWords(inputWords) {
  const initialValue = {};
  return inputWords.reduce((accumulatedResult, word) => {
    if (accumulatedResult[word]) {
      accumulatedResult[word] = accumulatedResult[word] + 1;
    } else {
      accumulatedResult[word] = 1;
    }

    return accumulatedResult;
  }, initialValue);
}

module.exports = countWords;
