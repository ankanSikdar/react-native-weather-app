const weatherApi = async (cityName) => {
  if (cityName == null || cityName == "") {
    cityName = "Kolkata";
  }

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=ef9b226ebbd53541a328124335d8ad04`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return {
      cod: 503,
      message: "Check your Internet Connection",
    };
  }
};

export default weatherApi;
