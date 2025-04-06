async function getWeather() {
    const location = document.getElementById("location").value;
    const apiKey = "fa59395961de446284760058252501";
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=yes`;
  
    if (location.trim() === "") {
      alert("Please enter a location.");
      return;
    }
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      if (data.error) {
        alert("Location not found. Please try again.");
        return;
      }
  
      // Update the UI with weather data
      document.getElementById("city-name").innerText = `${data.location.name}, ${data.location.country}`;
      document.getElementById("temperature").innerText = `Temperature: ${data.current.temp_c}°C`;
      document.getElementById("condition").innerText = `Condition: ${data.current.condition.text}`;
      document.getElementById("humidity").innerText = `Humidity: ${data.current.humidity}%`;
      document.getElementById("aqi").innerText = `Air Quality Index: ${data.current.air_quality.pm10}`;
  
      // Show the weather info section
      document.getElementById("weather-info").style.display = "block";
    } catch (error) {
      alert("An error occurred while fetching the weather data.");
      console.error(error);
    }
  }
  