$(function(){
  const RIOT_API_KEY = "705ff8f8-cfe0-4faa-87a5-2fac4227436b";
  
  // =====================================================
  // Get champion tags
  // =====================================================
  const tagssurl = 'https://global.api.pvp.net/api/lol/static-data/euw/v1.2/champion?champData=tags&api_key=' + RIOT_API_KEY;
  fetch(tagssurl)
  .then((resp) => resp.json()) // Transform the data into json
  .then(function(resp) {
    let championObjects = resp.data; // get the data
    // create title
    let title = createNode('h1');
    title.innerHTML = 'Fetch calls to Riot and champion.gg APIs ';
    let appContainer = document.querySelector('.title-wrapper');
    append(appContainer, title);
    // create the champion elements
    for (var champion in championObjects) {
      let champWrapper = document.querySelector('.wrapper');
      let championKey = championObjects[champion]["key"];
      let championName = championObjects[champion]["name"];
      let championTitle = championObjects[champion]["title"];
      let championTags = championObjects[champion]["tags"];
      // create the champ-container divs
      let champContainer = createNode('div');
      champContainer.className = 'champ-container card '+championKey;
      champContainer.dataset.champion = championKey;
      append(champWrapper, champContainer);
      // create the inner link
      let champLink = createNode('a');
      champLink.href = 'javascript:void(0);';
      append(champContainer, champLink);
      // create the name, title, tags elements
      let champName = createNode('p');
      champName.className = 'c-name';
      champName.innerHTML = championName;
      append(champLink, champName);
      let chamTitle = createNode('p');
      chamTitle.className = 'c-title';
      chamTitle.innerHTML = championTitle;
      append(champLink, chamTitle);
      let champTags = createNode('p');
      champTags.className = 'c-tags';
      champTags.innerHTML = championTags;
      append(champLink, champTags);
    }

    getImages();
    enableWinrate();
    TweenMax.staggerFrom('.champ-container', 0, { y: 70, opacity: 0, ease: Power4.easeIn, force3D: true }, 0.04);
  })
  .catch(function(error) {
    console.log('Failed to get tags: '+ error);
  });
  // =====================================================
  // Enable winrate click
  // =====================================================
  function enableWinrate(){
    $( ".champ-container" ).bind( "click", function() {
      const ggAPIKEY = 'b75e698a5c6c3955370e162ff9a35d3f';
      let champClicked = this.dataset.champion;
      // Get champions win rate
      const statsurl = 'http://api.champion.gg/stats/champs/' + champClicked + '?api_key=' + ggAPIKEY;
      fetch(statsurl)
      .then((resp) => resp.json())
      .then(function(resp) {
        let wrWrapper = document.querySelector('.winrate-wrapper');
        wrWrapper.className = 'winrate-wrapper';
        setTimeout(function() {
          let championKey = resp[0].key;
          let championWinPercent = resp[0].general.winPercent;

          document.querySelector('#winrate').innerHTML = '';
          let wrContent = createNode('h2');
          wrContent.innerHTML = `${championKey}: ${championWinPercent}% Win Rate`;
          append(document.querySelector('#winrate'), wrContent);
        }, 200);
        setTimeout(function() {
          document.querySelector('.winrate-wrapper').className += ' winrate-showing';
        }, 200);
      })
      .catch(function(error) {
        console.log('error: '+ error);
      });
    });
  }
  // =====================================================
  // Get champion images
  // =====================================================
  function getImages(){
    const imgsurl = 'https://global.api.pvp.net/api/lol/static-data/euw/v1.2/champion?champData=image&api_key=' + RIOT_API_KEY;
    fetch(imgsurl)
    .then((resp) => resp.json()) // Transform the data into json
    .then(function(resp) {
      let championObjects = resp.data; // get the data
      for (var champion in championObjects) { // iterate through objects
        let championKey = championObjects[champion]['key']; // 'Aatrox'
        let img = createNode('img');
        let overlay = createNode('div');
        overlay.className = 'overlay';
        img.className = 'champimg';
        let imgContainer = document.querySelector("."+ championKey+ " a");
        img.src = `http://ddragon.leagueoflegends.com/cdn/5.23.1/img/champion/${championKey}.png`;
        append(imgContainer, img);
        append(imgContainer, overlay);
      }
    })
    .catch(function(error) {
      console.log('error: '+ error);
    });
  }
  
});

function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}