var Twitter = require('twitter');
var _ = require('lodash');

var client = new Twitter({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token_key: process.env.ACCESS_TOKEN_KEY,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET
});

client.stream('statuses/filter', {track: 'javascript'}, function(stream) {
  stream.on('data', function(tweet) {
    // console.log(tweet);
    console.log(_(tweet.text).words().filter(word => word.length > 2));
  });

  stream.on('error', error => throw error);
});
