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
class Post {
  constructor(title, img) {
    this.title = title;
    this.img = img;
  }
}

const app = new Vue({
  el: '#app',
  data: {
    keyword: '',
    champList: [
      new Post(
        'Aatrox', 
        'assets/images/small/Aatrox.jpg'
      ),
      new Post(
        'Ahri', 
        'assets/images/small/Ahri.jpg'
      ),
      new Post(
        'Akali', 
        'assets/images/small/Akali.jpg'
      ),
      new Post(
        'Amumu', 
        'assets/images/small/Amumu.jpg'
      ),
      new Post(
        'Anivia', 
        'assets/images/small/Anivia.jpg'
      ),
      new Post(
        'Annie', 
        'assets/images/small/Annie.jpg'
      ),
      new Post(
        'Ashe', 
        'assets/images/small/Ashe.jpg'
      ),
      new Post(
        'Blitzcrank', 
        'assets/images/small/Blitzcrank.jpg'
      ),
      new Post(
        'Brand',
        'assets/images/small/Brand.jpg'
      ),
      new Post(
        'Caitlyn',
        'assets/images/small/Caitlyn.jpg'
      ),
      new Post(
        'Cassiopeia',
        'assets/images/small/Cassiopeia.jpg'
      ),
      new Post(
        'Darius',
        'assets/images/small/Darius.jpg'
      ),
      new Post(
        'Dr Mundo',
        'assets/images/small/Dr_Mundo.jpg'
      ),
      new Post(
        'Draven',
        'assets/images/small/Draven.jpg'
      ),
      new Post(
        'Elise',
        'assets/images/small/Elise.jpg'
      ),
      new Post(
        'Ezreal',
        'assets/images/small/Ezreal.jpg'
      ),
      new Post(
        'Fiddlesticks',
        'assets/images/small/Fiddlestick.jpg'
      ),
      new Post(
        'Fiora',
        'assets/images/small/Fiora.jpg'
      ),
      new Post(
        'Fizz',
        'assets/images/small/Fizz.jpg'
      ),
      new Post(
        'Galio',
        'assets/images/small/Galio.jpg'
      ),
      new Post(
        'Gragas',
        'assets/images/small/Gragas.jpg'
      ),
      new Post(
        'Hecarim',
        'assets/images/small/Hecarim.jpg'
      ),
      new Post(
        'Irelia',
        'assets/images/small/Irelia.jpg'
      ),
      new Post(
        'Janna',
        'assets/images/small/Janna.jpg'
      ),
      new Post(
        'Jarvan IV',
        'assets/images/small/Jarvan.jpg'
      ),
      new Post(
        'Jax',
        'assets/images/small/Jax.jpg'
      ),
      new Post(
        'Jayce',
        'assets/images/small/Jayce.jpg'
      ),
      new Post(
        'Karma',
        'assets/images/small/Karma.jpg'
      ),
      new Post(
        'Katarina',
        'assets/images/small/Katarina.jpg'
      ),
      new Post(
        'Kayle',
        'assets/images/small/Kayle.jpg'
      ),
      new Post(
        'Kha\'zix',
        'assets/images/small/Khazix.jpg'
      ),
      new Post(
        'Kog\'maw',
        'assets/images/small/Kogmaw.jpg'
      ),
      new Post(
        'Lee Sin',
        'assets/images/small/Lee_sin.jpg'
      ),
      new Post(
        'Leona',
        'assets/images/small/Leona.jpg'
      ),
      new Post(
        'Lissandra',
        'assets/images/small/Lissandra.jpg'
      ),
      new Post(
        'Lucian',
        'assets/images/small/Lucian.jpg'
      ),
      new Post(
        'Lulu',
        'assets/images/small/Lulu.jpg'
      ),
      new Post(
        'Lux',
        'assets/images/small/Lux.jpg'
      ),
      new Post(
        'Malphite',
        'assets/images/small/Malphite.jpg'
      ),
      new Post(
        'Maokai',
        'assets/images/small/Maokai.jpg'
      ),
      new Post(
        'Master Yi',
        'assets/images/small/Master_Yi.jpg'
      ),
      new Post(
        'Miss Fortune',
        'assets/images/small/Miss_Fortune.jpg'
      ),
      new Post(
        'Mordekaiser',
        'assets/images/small/Mordekaiser.jpg'
      ),
      new Post(
        'Morgana',
        'assets/images/small/Morgana.jpg'
      ),
      new Post(
        'Nami',
        'assets/images/small/Nami.jpg'
      ),
      new Post(
        'Nasus',
        'assets/images/small/Nasus.jpg'
      ),
      new Post(
        'Nidalee',
        'assets/images/small/Nidalee.jpg'
      ),
      new Post(
        'Nocturne',
        'assets/images/small/Nocturne.jpg'
      ),
      new Post(
        'Nunu',
        'assets/images/small/Nunu.jpg'
      ),
      new Post(
        'Olaf',
        'assets/images/small/Olaf.jpg'
      ),
      new Post(
        'Orianna',
        'assets/images/small/Orianna.jpg'
      ),
      new Post(
        'Quinn',
        'assets/images/small/Quinn.jpg'
      ),
      new Post(
        'Rammus',
        'assets/images/small/Rammus.jpg'
      ),
      new Post(
        'Renekton',
        'assets/images/small/Renekton.jpg'
      ),
      new Post(
        'Rengar',
        'assets/images/small/Rengar.jpg'
      ),new Post(
        'Riven',
        'assets/images/small/Riven.jpg'
      ),
      new Post(
        'Ryze',
        'assets/images/small/Ryze.jpg'
      ),
      new Post(
        'Sejuani',
        'assets/images/small/Sejuani.jpg'
      ),
      new Post(
        'Shaco',
        'assets/images/small/Shaco.jpg'
      ),
      new Post(
        'Shen',
        'assets/images/small/Shen.jpg'
      ),
      new Post(
        'Shyvana',
        'assets/images/small/Shyvana.jpg'
      ),
      new Post(
        'Singed',
        'assets/images/small/Singed.jpg'
      ),
      new Post(
        'Sion',
        'assets/images/small/Sion.jpg'
      ),
      new Post(
        'Skarner',
        'assets/images/small/Skarner.jpg'
      ),
      new Post(
        'Sona',
        'assets/images/small/Sona.jpg'
      ),
      new Post(
        'Soraka',
        'assets/images/small/Soraka.jpg'
      ),
      new Post(
        'Swain',
        'assets/images/small/Swain.jpg'
      ),
      new Post(
        'Syndra',
        'assets/images/small/Syndra.jpg'
      ),
      new Post(
        'Talon',
        'assets/images/small/Talon.jpg'
      ),
      new Post(
        'Taric',
        'assets/images/small/Taric.jpg'
      ),
      new Post(
        'Teemo',
        'assets/images/small/Teemo.jpg'
      ),
      new Post(
        'Thresh',
        'assets/images/small/Thresh.jpg'
      ),
      new Post(
        'Tristana',
        'assets/images/small/Tristana.jpg'
      ),
      new Post(
        'Tryndamere',
        'assets/images/small/Tryndamere.jpg'
      ),
      new Post(
        'Twisted Fate',
        'assets/images/small/Twisted.jpg'
      ),
      new Post(
        'Twitch',
        'assets/images/small/Twitch.jpg'
      ),
      new Post(
        'Udyr',
        'assets/images/small/Udyr.jpg'
      ),
      new Post(
        'Varus',
        'assets/images/small/Varus.jpg'
      ),
      new Post(
        'Vayne',
        'assets/images/small/Vayne.jpg'
      ),
      new Post(
        'Veigar',
        'assets/images/small/Veigar.jpg'
      ),
      new Post(
        'Vi',
        'assets/images/small/Vi.jpg'
      ),
      new Post(
        'Viktor',
        'assets/images/small/Viktor.jpg'
      ),
      new Post(
        'Vladimir',
        'assets/images/small/Vladimir.jpg'
      ),
      new Post(
        'Volibear',
        'assets/images/small/Volibear.jpg'
      ),
      new Post(
        'Warwick',
        'assets/images/small/Warwick.jpg'
      ),
      new Post(
        'Wukong',
        'assets/images/small/Wukong.jpg'
      ),
      new Post(
        'Xerath',
        'assets/images/small/Xerath.jpg'
      ),
      new Post(
        'Xin Zhao',
        'assets/images/small/Xin_Zhao.jpg'
      ),
      new Post(
        'Yorick',
        'assets/images/small/Yorick.jpg'
      ),
      new Post(
        'Zac',
        'assets/images/small/Zac.jpg'
      ),
      new Post(
        'Zed',
        'assets/images/small/Zed.jpg'
      ),
      new Post(
        'Ziggs',
        'assets/images/small/Ziggs.jpg'
      ),
    ],
    champListAPI: [
    ]
  },
  computed: {
    filteredList() {
      return this.champList.filter((post) => {
        return post.title.toLowerCase().includes(this.keyword.toLowerCase());
      });
    },
    filteredListAPI() {
      return this.champListAPI.filter((post) => {
        return post.title.toLowerCase().includes(this.keyword.toLowerCase());
      });
    }
  }
});

const app2 = new Vue({
  el: '#app2',
  data: {
    keyword: '',
    champListAPI: [
    ]
  },
  computed: {
    filteredListAPI() {
      return this.champListAPI.filter((post) => {
        return post.title.toLowerCase().includes(this.keyword.toLowerCase());
      });
    }
  }
});
