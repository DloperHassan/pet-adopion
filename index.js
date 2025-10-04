const template  = document.querySelector('#pet-card-templet')
const  wrapper = document.createDocumentFragment()



async function fastStart() {
    const weaterPromise = await fetch("https://api.weather.gov/gridpoints/MFL/110,50/forecast")
    const weateher = await weaterPromise.json()
    const outTemperature = weateher.properties.periods[5].temperature
    console.log('hello weather',outTemperature);
    console.log(weateher);
    
document.querySelector('#temperaturs').textContent=outTemperature
}

fastStart() // fuction call 

async function petsArea() {
    const petsPromise = await fetch('https://learnwebcode.github.io/bootcamp-pet-data/pets.json')

    const ptetsA = await petsPromise.json()
    console.log(' data ache',ptetsA);
    ptetsA.forEach( (pet) => {
        const clone = template.content.cloneNode(true) 
        clone.querySelector('h3').textContent = pet.name
        wrapper.appendChild(clone)
    });
    document.querySelector('.list-Of-pets').appendChild(wrapper)
    
}

petsArea() // fuction call 







