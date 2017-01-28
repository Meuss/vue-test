/* global TweenMax, Power4*/
$(() => {
  const RIOT_API_KEY = '705ff8f8-cfe0-4faa-87a5-2fac4227436b';
  const buttonGetChampions = document.querySelector('#getchampions');
  buttonGetChampions.addEventListener('click', getChampionGrid);
  // =====================================================
  // Get champion tags
  // =====================================================
  function getChampionGrid() {
    buttonGetChampions.disabled = true;
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
        // destructuring object (es6)
        const { key, name, title: description, tags } = championObjects[champion];
        const champMarkup = `
        <div class="champ-container card ${key}" data-champion="${key}">
          <a href="javascript:void(0);">
            <p class="c-name">${name}</p>
            <p class="c-title">${description}</p>
            <p class="c-tags">${tags}</p>            
        `;
        document.querySelector('.wrapper').innerHTML += champMarkup;
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
  }

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
    .then(resp => resp.json())
    .then((resp) => {
      const championObjects = resp.data;
      for (const champion in championObjects) {
        const key = championObjects[champion].key;
        const image = championObjects[champion].image.full;
        const imgContainer = document.querySelector(`.${key} a`);
        const imageMarkup = `
          <img class="champimg" src="http://ddragon.leagueoflegends.com/cdn/7.1.1/img/champion/${image}">
          <div class="overlay"></div>
        `;
        document.querySelector(`.${key} a`).innerHTML += imageMarkup;
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
