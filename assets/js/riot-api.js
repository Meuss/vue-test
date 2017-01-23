$(function(){
  var API_KEY = "705ff8f8-cfe0-4faa-87a5-2fac4227436b";

  $('#getchamps').one("click", function() {
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
        $('button').attr('disabled', 'disabled');
        var response = JSON.stringify(resp, null, 2);

        var htmlSearch = '<h1>This is response body from Riot</h1>';
        htmlSearch += '<div class="search-wrapper">';
        htmlSearch += '<input type="text" v-model="keyword" placeholder="Search..">';
        htmlSearch += '<label>Search:</label>';
        htmlSearch += '</div>';

        $('#app2').append(htmlSearch);

        var htmlText = '<div class="wrapper">';
        $.each(resp.data, function(index, champion) {
          htmlText += '<div class="champ-container ' + champion.key + ' card" data-champion="' + champion.key + '">';
          htmlText += '<a href="javascript:void(0);">'
          htmlText += '<p class="c-name">' + champion.name + '</p>';
          htmlText += '<p class="c-title">' + champion.title + '</p>';
          htmlText += '<p class="c-tags">' + champion.tags + '</p>';
          htmlText += '</a>';
          htmlText += '</div>';
        });
        htmlText += '</div>';

        $('#app2').append(htmlText);
  
        getImages();

        $( ".champ-container" ).bind( "click", function() {
          // console.log($(this).data("champion"));
          var champClicked = $(this).data("champion");
          // Get champions win rate
          var ggAPIKEY = 'b75e698a5c6c3955370e162ff9a35d3f';
          $.ajax({
            url: 'http://api.champion.gg/stats/champs/' + champClicked + '?api_key=' + ggAPIKEY,
            type: 'GET',
            dataType: 'json',
            success: function (resp) {
              // console.log(resp);
              // console.log(resp[0].general.winPercent);
              $('.winrate-wrapper').removeClass('winrate-showing');
              
              setTimeout(function() {
                $('#winrate').empty();
                $('#winrate').prepend('<h2>'+ resp[0].key +' winrate: </h2>');
                $('#winrate').append(resp[0].general.winPercent +'%');
              }, 300);
              setTimeout(function() {
                $('.winrate-wrapper').addClass('winrate-showing');
              }, 300);
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
              console.log("error getting data 3!");
            }
          });
        });
      },
      error: function (XMLHttpRequest, textStatus, errorThrown) {
        console.log("error getting Summoner data!");
      }
    });
    // =====================================================
    // Ajax call: Get champion images
    // =====================================================
    function getImages(){
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
            $('<img class="champimg" src="http://ddragon.leagueoflegends.com/cdn/5.23.1/img/champion/' + champion.key + '.png"><div class="overlay"></div>').insertAfter(insertimg);
            ;
          });

        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
          console.log("error getting Summoner data!");
        }
      });
    }
    
  }
  
});
