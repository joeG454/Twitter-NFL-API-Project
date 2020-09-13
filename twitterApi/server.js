const express = require('express');
const path = require('path');
const app = express(),
      bodyParser = require("body-parser");
      port = 3080;

var Twit = require('twit');

var T = new Twit({
    consumer_key:         'mteOiqq5ry4cwx0ILqjhb09jO',
    consumer_secret:      'Ktf4VpU3BUiGNtof1VoUOfy9FuUuasCq7nPyp0tYSsfXVOWYiT',
    access_token:         '981005549872414720-wySM1EIMedw5F0aK8gGo5jYTXsA9lfj',
    access_token_secret:  'j1jEhKhbUvl54DPeUuo4lMLh91y4zwKw2IRl0JfA4D96h',
    timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
    strictSSL:            true,     // optional - requires SSL certificates to be valid.
});


(async () => {
    T.get('search/tweets', { q: '#Vikings since:2011-07-11', count: 10 }, function(err, data, response) {
        console.log(data)
    });
})();

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});