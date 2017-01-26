/* global TweenMax, Power4*/
$(() => {
  const RIOT_API_KEY = '705ff8f8-cfe0-4faa-87a5-2fac4227436b';

  // =====================================================
  // Get champion tags
  // =====================================================
  const tagssurl = `https://global.api.pvp.net/api/lol/static-data/euw/v1.2/champion?champData=tags&api_key=${RIOT_API_KEY}`;
  fetch(tagssurl)
  .then(resp => resp.json()) // Transform the data into json
  .then((resp) => {
    const championObjects = resp.data; // get the data
    // create title
    const title = createNode('h1');
    title.innerHTML = 'Fetch calls to Riot and champion.gg APIs ';
    const appContainer = document.querySelector('.title-wrapper');
    append(appContainer, title);
    // create the champion elements
    for (const champion in championObjects) {
      const champWrapper = document.querySelector('.wrapper');
      const championKey = championObjects[champion].key;
      const championName = championObjects[champion].name;
      const championTitle = championObjects[champion].title;
      const championTags = championObjects[champion].tags;
      // create the champ-container divs
      const champContainer = createNode('div');
      champContainer.className = `champ-container card ${championKey}`;
      champContainer.dataset.champion = championKey;
      append(champWrapper, champContainer);
      // create the inner link
      const champLink = createNode('a');
      champLink.href = 'javascript:void(0);';
      append(champContainer, champLink);
      // create the name, title, tags elements
      const champName = createNode('p');
      champName.className = 'c-name';
      champName.innerHTML = championName;
      append(champLink, champName);
      const chamTitle = createNode('p');
      chamTitle.className = 'c-title';
      chamTitle.innerHTML = championTitle;
      append(champLink, chamTitle);
      const champTags = createNode('p');
      champTags.className = 'c-tags';
      champTags.innerHTML = championTags;
      append(champLink, champTags);
    }

    getImages();
    enableWinrate();
    TweenMax.staggerFrom('.champ-container', 0, { y: 70, opacity: 0, ease: Power4.easeIn, force3D: true }, 0.04);
  })
  /*eslint-disable */
  .catch((error) => {
    console.log(`Failed to get tags: ${error}`);
  });
  /*eslint-enable */
  // =====================================================
  // Enable winrate click
  // =====================================================
  function enableWinrate() {
    $('.champ-container').bind('click', function () {
      const ggAPIKEY = 'b75e698a5c6c3955370e162ff9a35d3f';
      const champClicked = this.dataset.champion;
      // Get champions win rate
      const statsurl = `http://api.champion.gg/stats/champs/${champClicked}?api_key=${ggAPIKEY}`;
      fetch(statsurl)
      .then(resp => resp.json())
      .then((resp) => {
        const wrWrapper = document.querySelector('.winrate-wrapper');
        wrWrapper.className = 'winrate-wrapper';
        setTimeout(() => {
          const championKey = resp[0].key;
          const championWinPercent = resp[0].general.winPercent;

          document.querySelector('#winrate').innerHTML = '';
          const wrContent = createNode('h2');
          wrContent.innerHTML = `${championKey}: ${championWinPercent}% Win Rate`;
          append(document.querySelector('#winrate'), wrContent);
        }, 200);
        setTimeout(() => {
          document.querySelector('.winrate-wrapper').className += ' winrate-showing';
        }, 200);
      })
      /*eslint-disable */
      .catch((error) => {
        console.log(`error: ${error}`);
      });
      /*eslint-enable */
    });
  }
  // =====================================================
  // Get champion images
  // =====================================================
  function getImages() {
    const imgsurl = `https://global.api.pvp.net/api/lol/static-data/euw/v1.2/champion?champData=image&api_key=${RIOT_API_KEY}`;
    fetch(imgsurl)
    .then(resp => resp.json()) // Transform the data into json
    .then((resp) => {
      const championObjects = resp.data; // get the data
      for (const champion in championObjects) { // iterate through objects
        const championKey = championObjects[champion].key; // 'Aatrox'
        const img = createNode('img');
        const overlay = createNode('div');
        overlay.className = 'overlay';
        img.className = 'champimg';
        const imgContainer = document.querySelector(`.${championKey} a`);
        img.src = `http://ddragon.leagueoflegends.com/cdn/5.23.1/img/champion/${championKey}.png`;
        append(imgContainer, img);
        append(imgContainer, overlay);
      }
    })
    /*eslint-disable */
    .catch((error) => {
      console.log(`error: ${error}`);
    });
    /*eslint-enable */
  }
});

function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}
