/* global require */
document.querySelector('#get-summoner').addEventListener('click', getSummoner);
console.log('key: 705ff8f8-cfe0-4faa-87a5-2fac4227436b');
function getSummoner(){
  console.log('getting summoner');
  var lol = require['lol-js'];
  console.log(lol);
  var lolClient = lol.client({
      apiKey: '705ff8f8-cfe0-4faa-87a5-2fac4227436b',
      cache: lol.redisCache({host: '127.0.0.1', port: 6379})
  });
  lolClient.getChampionById('na', 53, {champData: ['all']})
  .then(function (data) {
      console.log("Found ", data.name);
      lolClient.destroy();
  });
}
