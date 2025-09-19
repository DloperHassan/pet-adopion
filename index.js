

async function fastStart() {
    const weaterPromise = await fetch("https://api.weather.gov/gridpoints/MFL/110,50/forecast")
    const weateher = await weaterPromise.json()
    const outTemperature = weateher.properties.periods[5].temperature
    console.log('hello weather',outTemperature);
    console.log(weateher);
    
document.querySelector('#temperaturs').textContent=outTemperature
}

fastStart()
