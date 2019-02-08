var quoteArr = ['You can do anything, but not everything.',
                'Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.',
                'You miss 100 percent of the shots you never take.',
                'Courage is not the absence of fear, but rather the judgement that something else is more important than fear.',
                'You must be the change you wish to see in the world.',
                'When hungry, eat your rice; when tired, close your eyes. Fools may laugh at me, but wise men will know what I mean.',
                'The third-rate mind is only happy when it is thinking with the majority. The second-rate mind is only happy when it is thinking with the minority. The first-rate mind is only happy when it is thinking.',
                'To the man who only has a hammer, everything he encounters begins to look like a nail.',
                'We are what we repeatedly do; excellence, then, is not an act but a habit.',
                'A wise man gets more use from his enemies than a fool from his friends.',
                'Do not seek to follow in the footsteps of the men of old; seek what they sought.',
                ' Everyone is a genius at least once a year. The real geniuses simply have their bright ideas closer together.',
                'What we think, or what we know, or what we believe is, in the end, of little consequence. The only consequence is what we do.',
                'The real voyage of discovery consists not in seeking new lands but seeing with new eyes.',
                'Work like you don’t need money, love like you’ve never been hurt, and dance like no one’s watching',
                'Try a thing you haven’t done three times. Once, to get over the fear of doing it. Twice, to learn how to do it. And a third time, to figure out whether you like it or not.',
                'Even if you’re on the right track, you’ll get run over if you just sit there.',
                'People often say that motivation doesn’t last. Well, neither does bathing – that’s why we recommend it daily.'
               ];

var authors = ['—David Allen',
               '—Antoine de Saint-Exupéry',
               '—Wayne Gretzky',
               '—Ambrose Redmoon',
               '—Gandhi',
               '—Lin-Chi',
               '—A. A. Milne',
               '—Abraham Maslow',
               '—Aristotle',
               '—Baltasar Gracian',
               '—Basho',
               '—Georg Christoph Lichtenberg',
               '—John Ruskin',
               '—Marcel Proust',
               '—Unknown Author',
               '—Virgil Garnett Thomson',
               '—Will Rogers',
               '—Zig Ziglar',
              ];
window.addEventListener('load',newQuote);
function newQuote(){
  var randomNumber = Math.floor(Math.random()*(quoteArr.length));
 $(".message").html(quoteArr[randomNumber]);
  $("#author").html(authors[randomNumber]);
}
$(document).ready(function(){
  $("#newQuote").on("click",newQuote);
  $('#tweet').click(function() {
    window.open('https://twitter.com/intent/tweet?text=' + $('#text').text() + " " + $('#author').text());
  });
});