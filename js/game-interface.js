

$(document).ready(function(){
  $('#showPhrase').click(function() {
    var input = $('#phrase').val();
    $('#phrase').val("");
    $('.showPhrase').text('Translation:' + input + ".");
    $.post('http://api.funtranslations.com/translate/dothraki.json?text=' + input).then(function(response) {
      $('.showTranslation').append(response.contents.translated);
    });
  });
});
