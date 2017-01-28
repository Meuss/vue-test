import { apiKey } from './config';

export default function getSummoner() {
  const summoner = document.querySelector('#summoner-input').value;
  const url = `https://euw.api.pvp.net/api/lol/euw/v1.4/summoner/by-name/${summoner}?api_key=${apiKey}`;
  console.log(`getting summoner info: ${summoner}`);
  fetch(url)
  .then(resp => resp.json()) // Transform the data into json
  .then((resp) => {
    const summonerdata = resp.data;
    console.log(summonerdata);
  })
  .catch((error) => {
    console.log(error);
  });
}
