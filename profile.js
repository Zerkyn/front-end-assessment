const color = document.querySelector('#color')
const place = document.querySelector('#place')
const ritual = document.querySelector('#ritual')

const colorBtn = () => {
    alert('Red')
}
const placeBtn = () => {
    alert('Germany')
}
const ritualBtn = () => {
    alert('drink morning coffee')
}

color.addEventListener('click', colorBtn)
place.addEventListener('click', placeBtn)
ritual.addEventListener('click', ritualBtn)