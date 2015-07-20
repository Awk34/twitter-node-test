var Twitter = require('twitter');
var _ = require('lodash');

var client = new Twitter({
  consumer_key: 'Sm2Cs8riQjczGplGZDNovVh91',
  consumer_secret: 'wXXLjlkiaUAVhhCQLGsuUXAVohxz0RRhnfofxHzAYVWc31tCn9',
  access_token_key: '3185419395-r62cFxp8d7zSnPoSleaz41rZox0JKCn1l6NyOuy',
  access_token_secret: 'Hnz8Yr3m83fcySuWwSzvHrEAnznKkGkYsNMsDCvodUh4p'
});

client.stream('statuses/filter', {track: 'javascript'}, function(stream) {
  stream.on('data', function(tweet) {
    console.log(_.filter(_.words(tweet.text), function(word) {
      return word.length > 2;
    }));
  });

  stream.on('error', function(error) {
    throw error;
  });
});
