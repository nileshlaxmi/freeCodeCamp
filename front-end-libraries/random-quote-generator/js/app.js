function quoteGen(){

$.get("https://random-quote-generator.herokuapp.com/api/quotes/", function(data){

  var dataLength = data.length;
  var randomNumber = Math.floor(Math.random() * dataLength);
  var newQuote = data[randomNumber].quote;
  var newQuoteAuthor = data[randomNumber].author;

  $('#quote').text(newQuote+" "+newQuoteAuthor);
  });
}

function twitter_click(){
  var tweet = $('#quote').text();
  if(tweet.length > 140){
    alert('Tweet should be less than 140 Chars');
  }
  else {
    var twtLink = 'http://twitter.com/home?status=' +encodeURIComponent(tweet);
    window.open(twtLink,'_blank');
  }
  console.log(tweet);
}
