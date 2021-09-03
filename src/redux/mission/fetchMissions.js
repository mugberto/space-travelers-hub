const URL = 'https://api.spacexdata.com/v3/missions';

const fetchMissions = async () => {
  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };
  const response = await fetch(URL, requestOptions);
  const missions = await response.json();
  return missions;
};

export default fetchMissions;
