function generateRandomValue() {
  // Generate a random number between 1 and 100
  const randomValue = (Math.random() * 0.98 + 0.01).toFixed(2);;
  const temperature = Math.floor(Math.random() * 16) + 30; //30-45
  const inclination = Math.floor(Math.random() * 21) + 50; //50-70
  // Set the value of the input box
  document.getElementById('moisture').value = randomValue;
  document.getElementById('temperature').value = temperature;
  document.getElementById('ndvi').value = randomValue;
  document.getElementById('rainfall').value = temperature;
  document.getElementById('inclination').value = inclination;

}

// Set an interval to generate a new random value every 2 seconds (2000 milliseconds)
setInterval(generateRandomValue, 3000);

function toggleMenu() {
  document.getElementById('sidebar').classList.toggle('active');
}