var sentiment = require('sentiment');

module.exports = function (text) {
  var result = sentiment(text);

  if (result.score > 0)
    result.sentiment = "Positive";
  else if (result.score < 0)
    result.sentiment = "Negative";
  else
    result.sentiment = "Neutral";

  return result;
};