const weatherApi = async (cityName = "Kolkata") => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=ef9b226ebbd53541a328124335d8ad04`
  );
  const data = await response.json();
  return data;
};

export default weatherApi;
