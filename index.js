
let inputEl = document.getElementById("input-el")
let convertBtn = document.getElementById("convert-btn")
let sumVolumeEl = document.getElementById("sum-volume-el")
let sumLengthEl = document.getElementById("sum-length-el")
let sumMassEl = document.getElementById("sum-mass-el")

convertBtn.addEventListener( "click", btnClicked) 
const meterToFeet = 3.281
const literToGallon = 0.264 
const kilogramToPount = 2.204

    function btnClicked() {
        console.log("Button is clicked, you are a pro!")
        sumLength()
        sumVolume()
        sumMass()
    }
convertBtn.addEventListener("click", function(){ 
    let inputValue = inputEl.value

    function sumLength(){
        let inputValue = inputEl.value
        let multiOutput = inputValue * 3.281
        sumLengthEl.textContent = `${inputValue} meters = ${multiOutput.toFixed(2)} feet | ${multiOutput.toFixed(2)} feet = ${inputValue} meters`
    }
    sumLengthEl.textContent = `${inputValue} meters = ${inputValue * meterToFeet.toFixed(2)} feet | 
    ${inputValue * meterToFeet.toFixed(2)} feet = ${inputValue} meters`

    function sumVolume(){
        let inputValue = inputEl.value
        let multiOutput = inputValue * 0.264
        sumVolumeEl.textContent = `${inputValue} liters = ${multiOutput.toFixed(2)} gallons | ${multiOutput.toFixed(2)} gallons = ${inputValue} liters`
    }
    sumVolumeEl.textContent = `${inputValue} liters = ${inputValue * literToGallon.toFixed(2)} gallons | 
    ${inputValue * literToGallon.toFixed(2)} gallons = ${inputValue} liters`

    function sumMass(){
        let inputValue = inputEl.value
        let multiOutput = inputValue * 2.204
        sumMassEl.textContent = `${inputValue} kilos = ${multiOutput.toFixed(2)} pounds | ${multiOutput.toFixed(2)} pounds = ${inputValue} kilos`
    }
// create an inputfield 
// create a button that activates a onclick function
    sumMassEl.textContent = `${inputValue} kilos = ${inputValue * kilogramToPount.toFixed(2)} pounds | 
    ${inputValue * kilogramToPount.toFixed(2)} pounds = ${inputValue} kilos`
}
)

// write html.textcontent to output inputfield value to UI in all blocks 

// create a variable that takes given value from inputfield 

// write a function for length
// that takes inputfield value multiplied by 3.281 feet

// write a function for volume 
// that takes inputfield value multiplied by 0.264 gallon

// write a function for mass
// that takes inputfield value multiplied by 2.204 pound

