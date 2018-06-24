var sentiment = require('sentiment');
var _ = require('underscore');

module.exports = function (text) {
  var result = sentiment(text);
  result = _.pick(result, 'positive', 'negative'); 

  return result;
};