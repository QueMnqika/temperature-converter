let farenheit = document.querySelector('#Ferenheit')
let celcius = document.querySelector('#Calcius')
let convertBtn = document.querySelector('[type="button"]')
let clear = document.querySelector('[type="reset"')
let output = document.querySelector('#output')



convertBtn.addEventListener('click', () => {
    if (celcius.value != '') {
        let fareResults = (celcius.value + 32)*9/5
        output.innerHTML = '<h5>Results:</h5>'
        output.style.border = 'dotted'
        output.textContent = `Ferenheit Results: ${fareResults}`
    }
})
convertBtn.addEventListener('click', () => {
    if (farenheit.value != '') {
        let celcResults = (farenheit.value-32)*5/9
        output.innerHTML = '<h5>Results:</h5>'
        output.style.border = 'dotted'
        output.textContent = `Celcius Results: ${celcResults}`
    }
})

clear.addEventListener('click', () => {
    farenheit.value = ''
    output.textContent = ''
    output.style.border = 'none'
})
