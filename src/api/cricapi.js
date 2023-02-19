const API_KEY = "46571a86-0610-4983-94d4-6e5ca22e464b";
const NEWS_API_KEY = "a5d61c9902d3447c84fc3867c7041b2a";

export const getMatchesInfo = () => {
  // const url = `https://cricapi.com/api/matches/${API_KEY}`;
  const url = `https://api.cricapi.com/v1/matches?apikey=${API_KEY}&offset=0`;

  return fetch(url)
    .then((res) => res.json())
    .catch((err) => console.log("Matchinfo: ", err));
};

export const getMatchScore = (id) => {
  // const url = `https://cricapi.com/api/cricketScore?apikey=${API_KEY}&unique_id=${id}`;
  const url = `https://api.cricapi.com/v1/currentMatches?apikey=${API_KEY}&offset=0`;

  return fetch(url)
    .then((res) => res.json())
    .catch((err) => console.log("Match Score: ", err));
};

export const getPlayerStat = (name) => {
  // const url = `https://cricapi.com/api/playerFinder?apikey=${API_KEY}&name=${name}`;
  const url = `https://api.cricapi.com/v1/players?apikey=${API_KEY}&offset=0&search=${name}`;

  return fetch(url)
    .then((res) => res.json())
    .catch((err) => console.log(`PlayerStat:${err}`));
};

export const getPlayerDesc = (id) => {
  // const url = `https://cricapi.com/api/playerStats?apikey=${API_KEY}&pid=${id}`;
  const url = `https://api.cricapi.com/v1/players_info?apikey=${API_KEY}&id=${id}`;

  return fetch(url)
    .then((res) => res.json())
    .catch((err) => console.log(`PlayeDesc:${err}`));
};

export const getNews = () => {
  const url = `https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=a5d61c9902d3447c84fc3867c7041b2a`;

  return fetch(url)
    .then((res) => res.json())
    .catch((error) => console.log(`NEWS:${error}`));
};
