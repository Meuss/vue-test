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
        'assets/images/Aatrox.png'
      ),
      new Post(
        'Ahri', 
        'assets/images/Ahri.png'
      ),
      new Post(
        'Akali', 
        'assets/images/Akali.png'
      ),
      new Post(
        'Amumu', 
        'assets/images/Amumu.png'
      ),
      new Post(
        'Anivia', 
        'assets/images/Anivia.png'
      ),
      new Post(
        'Annie', 
        'assets/images/Annie.png'
      ),
      new Post(
        'Ashe', 
        'assets/images/Ashe.png'
      ),
      new Post(
        'Blitzcrank', 
        'assets/images/Blitzcrank.png'
      ),
      new Post(
        'Brand',
        'assets/images/Brand.png'
      ),
      new Post(
        'Caitlyn',
        'assets/images/Caitlyn.png'
      ),
      new Post(
        'Cassiopeia',
        'assets/images/Cassiopeia.png'
      ),
      new Post(
        'Darius',
        'assets/images/Darius.png'
      ),
      new Post(
        'Dr Mundo',
        'assets/images/Dr_Mundo.png'
      ),
      new Post(
        'Draven',
        'assets/images/Draven.png'
      ),
      new Post(
        'Elise',
        'assets/images/Elise.png'
      ),
      new Post(
        'Ezreal',
        'assets/images/Ezreal.png'
      ),
      new Post(
        'Fiddlesticks',
        'assets/images/Fiddlestick.png'
      ),
      new Post(
        'Fiora',
        'assets/images/Fiora.png'
      ),
      new Post(
        'Fizz',
        'assets/images/Fizz.png'
      ),
      new Post(
        'Galio',
        'assets/images/Galio.png'
      ),
      new Post(
        'Garen',
        'assets/images/Garen.png'
      ),
      new Post(
        'Gragas',
        'assets/images/Gragas.png'
      ),
      new Post(
        'Hecarim',
        'assets/images/Hecarim.png'
      ),
      new Post(
        'Irelia',
        'assets/images/Irelia.png'
      ),
      new Post(
        'Janna',
        'assets/images/Janna.png'
      ),
      new Post(
        'Jarvan IV',
        'assets/images/Jarvan.png'
      ),
      new Post(
        'Jax',
        'assets/images/Jax.png'
      ),
      new Post(
        'Jayce',
        'assets/images/Jayce.png'
      ),
      new Post(
        'Karma',
        'assets/images/Karma.png'
      ),
      new Post(
        'Kassadin',
        'assets/images/Kassadin.png'
      ),
      new Post(
        'Katarina',
        'assets/images/Katarina.png'
      ),
      new Post(
        'Kayle',
        'assets/images/Kayle.png'
      ),
      new Post(
        'Kha\'zix',
        'assets/images/Khazix.png'
      ),
      new Post(
        'Kog\'maw',
        'assets/images/Kogmaw.png'
      ),
      new Post(
        'Lee Sin',
        'assets/images/Lee_sin.png'
      ),
      new Post(
        'Leona',
        'assets/images/Leona.png'
      ),
      new Post(
        'Lissandra',
        'assets/images/Lissandra.png'
      ),
      new Post(
        'Lucian',
        'assets/images/Lucian.png'
      ),
      new Post(
        'Lulu',
        'assets/images/Lulu.png'
      ),
      new Post(
        'Lux',
        'assets/images/Lux.png'
      ),
      new Post(
        'Malphite',
        'assets/images/Malphite.png'
      ),
      new Post(
        'Maokai',
        'assets/images/Maokai.png'
      ),
      new Post(
        'Master Yi',
        'assets/images/Master_Yi.png'
      ),
      new Post(
        'Miss Fortune',
        'assets/images/Miss_Fortune.png'
      ),
      new Post(
        'Mordekaiser',
        'assets/images/Mordekaiser.png'
      ),
      new Post(
        'Morgana',
        'assets/images/Morgana.png'
      ),
      new Post(
        'Nami',
        'assets/images/Nami.png'
      ),
      new Post(
        'Nasus',
        'assets/images/Nasus.png'
      ),
      new Post(
        'Nidalee',
        'assets/images/Nidalee.png'
      ),
      new Post(
        'Nocturne',
        'assets/images/Nocturne.png'
      ),
      new Post(
        'Nunu',
        'assets/images/Nunu.png'
      ),
      new Post(
        'Olaf',
        'assets/images/Olaf.png'
      ),
      new Post(
        'Orianna',
        'assets/images/Orianna.png'
      ),
      new Post(
        'Quinn',
        'assets/images/Quinn.png'
      ),
      new Post(
        'Rammus',
        'assets/images/Rammus.png'
      ),
      new Post(
        'Renekton',
        'assets/images/Renekton.png'
      ),
      new Post(
        'Rengar',
        'assets/images/Rengar.png'
      ),new Post(
        'Riven',
        'assets/images/Riven.png'
      ),
      new Post(
        'Ryze',
        'assets/images/Ryze.png'
      ),
      new Post(
        'Sejuani',
        'assets/images/Sejuani.png'
      ),
      new Post(
        'Shaco',
        'assets/images/Shaco.png'
      ),
      new Post(
        'Shen',
        'assets/images/Shen.png'
      ),
      new Post(
        'Shyvana',
        'assets/images/Shyvana.png'
      ),
      new Post(
        'Singed',
        'assets/images/Singed.png'
      ),
      new Post(
        'Sion',
        'assets/images/Sion.png'
      ),
      new Post(
        'Skarner',
        'assets/images/Skarner.png'
      ),
      new Post(
        'Sona',
        'assets/images/Sona.png'
      ),
      new Post(
        'Soraka',
        'assets/images/Soraka.png'
      ),
      new Post(
        'Swain',
        'assets/images/Swain.png'
      ),
      new Post(
        'Syndra',
        'assets/images/Syndra.png'
      ),
      new Post(
        'Talon',
        'assets/images/Talon.png'
      ),
      new Post(
        'Taric',
        'assets/images/Taric.png'
      ),
      new Post(
        'Teemo',
        'assets/images/Teemo.png'
      ),
      new Post(
        'Thresh',
        'assets/images/Thresh.png'
      ),
      new Post(
        'Tristana',
        'assets/images/Tristana.png'
      ),
      new Post(
        'Tryndamere',
        'assets/images/Tryndamere.png'
      ),
      new Post(
        'Twisted Fate',
        'assets/images/Twisted.png'
      ),
      new Post(
        'Twitch',
        'assets/images/Twitch.png'
      ),
      new Post(
        'Udyr',
        'assets/images/Udyr.png'
      ),
      new Post(
        'Varus',
        'assets/images/Varus.png'
      ),
      new Post(
        'Vayne',
        'assets/images/Vayne.png'
      ),
      new Post(
        'Veigar',
        'assets/images/Veigar.png'
      ),
      new Post(
        'Vi',
        'assets/images/Vi.png'
      ),
      new Post(
        'Viktor',
        'assets/images/Viktor.png'
      ),
      new Post(
        'Vladimir',
        'assets/images/Vladimir.png'
      ),
      new Post(
        'Volibear',
        'assets/images/Volibear.png'
      ),
      new Post(
        'Warwick',
        'assets/images/Warwick.png'
      ),
      new Post(
        'Wukong',
        'assets/images/Wukong.png'
      ),
      new Post(
        'Xerath',
        'assets/images/Xerath.png'
      ),
      new Post(
        'Xin Zhao',
        'assets/images/Xin_Zhao.png'
      ),
      new Post(
        'Yorick',
        'assets/images/Yorick.png'
      ),
      new Post(
        'Zac',
        'assets/images/Zac.png'
      ),
      new Post(
        'Zed',
        'assets/images/Zed.png'
      ),
      new Post(
        'Ziggs',
        'assets/images/Ziggs.png'
      ),
    ]
  },
  computed: {
    filteredList() {
      return this.champList.filter((post) => {
        return post.title.toLowerCase().includes(this.keyword.toLowerCase());
      });
    }
  }
});