var request = require('request');
var cheerio = require('cheerio');
var titles = []
request('http://www.reddit.com/r/exmormon', function(err, resp,body){
  if(!err&& resp.statusCode == 200){
      var $ = cheerio.load(body);
      $('.title').each(function(){
        var title = $('.title').text();
        titles.push(title);
      })

      console.log(titles[0]);
  }
})
