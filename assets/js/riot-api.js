$(function(){
  var API_KEY = "705ff8f8-cfe0-4faa-87a5-2fac4227436b";

  $('#getchamps').click(function() {
    getChampions();
  });

  function getChampions(){
    // =====================================================
    // Ajax call: Get champion tags
    // =====================================================
    $.ajax({
      url: 'https://global.api.pvp.net/api/lol/static-data/euw/v1.2/champion?champData=tags&api_key=' + API_KEY,
      type: 'GET',
      dataType: 'json',
      data: {

      },
      success: function (resp) {
        console.log('json call worked');
        var response = JSON.stringify(resp, null, 2);

        var htmlText = '';
        $.each(resp.data, function(index, champion) {
          htmlText += '<div class="champ-container ' + champion.key + ' card">';
          htmlText += '<a href="javascript:void(0);">'
          htmlText += '<p class="c-name">' + champion.name + '</p>';
          htmlText += '<p class="c-title">' + champion.title + '</p>';
          htmlText += '<p class="c-tags">' + champion.tags + '</p>';
          htmlText += '</a>';
          htmlText += '</div>';
        });

        $('#response').append(htmlText);

      },
      error: function (XMLHttpRequest, textStatus, errorThrown) {
        console.log("error getting Summoner data!");
      }
    });
    // =====================================================
    // Ajax call: Get champion images
    // =====================================================
    $.ajax({
      url: 'https://global.api.pvp.net/api/lol/static-data/euw/v1.2/champion?champData=image&api_key=' + API_KEY,
      type: 'GET',
      dataType: 'json',
      data: {

      },
      success: function (resp) {
        console.log('json call 2 worked');
        var response = JSON.stringify(resp, null, 2);
        $.each(resp.data, function(index, champion) {
          var insertimg = $('.champ-container.' + champion.key + ' .c-name');
          $('<img class="champimg" src="http://ddragon.leagueoflegends.com/cdn/5.23.1/img/champion/' + champion.key + '.png">').insertAfter(insertimg);
          ;
        });

      },
      error: function (XMLHttpRequest, textStatus, errorThrown) {
        console.log("error getting Summoner data!");
      }
    });
    $('button').attr('disabled', 'disabled');
  }

});
