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