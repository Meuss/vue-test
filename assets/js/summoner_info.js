(() => {
  const RIOT_API_KEY = '705ff8f8-cfe0-4faa-87a5-2fac4227436b';

  const summonerName = 'Gruyère';
  const summonerNamesURL = `https://global.api.pvp.net/api/lol/euw/v1.4/summoner/by-name/${summonerName}&api_key=${RIOT_API_KEY}`;
  fetch(summonerNamesURL)
    .then(resp => resp.json()) // Transform the data into json
    .then((resp) => {
      console.log(resp);
    },
    )
    /* eslint-disable */
    .catch((error) => {
      console.log(`Failed to get summoner name: ${error}`);
    })
    /* eslint-enable */
})();
