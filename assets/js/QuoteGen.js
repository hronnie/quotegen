function genQuote() {
    var randNum = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').innerHTML = quotes[randNum]["quoteText"].concat("<BR>\/", quotes[randNum]["author"]);
}
