
let inputEl = document.getElementById("input-el") // Add inputfield to DOM
let convertBtn = document.getElementById("convert-btn") // Add convertbutton to DOM
let sumVolumeEl = document.getElementById("sum-volume-el") // Add output elements to DOM
let sumLengthEl = document.getElementById("sum-length-el") //
let sumMassEl = document.getElementById("sum-mass-el") //

const meterToFeet = 3.281 // set value to variable 
const literToGallon = 0.264 // 
const kilogramToPount = 2.204 //

convertBtn.addEventListener("click", function(){   // Add click addEventListener to btn for function
    let inputValue = inputEl.value // that takes the inputfield value

    sumLengthEl.textContent = `${inputValue} meters = ${inputValue * meterToFeet.toFixed(2)} feet | 
    ${inputValue * meterToFeet.toFixed(2)} feet = ${inputValue} meters`

    sumVolumeEl.textContent = `${inputValue} liters = ${inputValue * literToGallon.toFixed(2)} gallons | 
    ${inputValue * literToGallon.toFixed(2)} gallons = ${inputValue} liters`

    sumMassEl.textContent = `${inputValue} kilos = ${inputValue * kilogramToPount.toFixed(2)} pounds | 
    ${inputValue * kilogramToPount.toFixed(2)} pounds = ${inputValue} kilos`
}
) // and write literal strings that combine value from inputfield and value vars set to each unit 



// ** OLD CODE **

// convertBtn.addEventListener( "click", btnClicked) 

//     function btnClicked() {
//         console.log("Button is clicked, you are a pro!")
//         sumLength()
//         sumVolume()
//         sumMass()
//     }

//     function sumLength(){
//         let inputValue = inputEl.value
//         let multiOutput = inputValue * 3.281
//         sumLengthEl.textContent = `${inputValue} meters = ${multiOutput.toFixed(2)} feet | ${multiOutput.toFixed(2)} feet = ${inputValue} meters`
//     }

//     function sumVolume(){
//         let inputValue = inputEl.value
//         let multiOutput = inputValue * 0.264
//         sumVolumeEl.textContent = `${inputValue} liters = ${multiOutput.toFixed(2)} gallons | ${multiOutput.toFixed(2)} gallons = ${inputValue} liters`
//     }

//     function sumMass(){
//         let inputValue = inputEl.value
//         let multiOutput = inputValue * 2.204
//         sumMassEl.textContent = `${inputValue} kilos = ${multiOutput.toFixed(2)} pounds | ${multiOutput.toFixed(2)} pounds = ${inputValue} kilos`
//     }


 // // ** PSEUDOPROGRAM **

// // create an inputfield 
// // create a button that activates a onclick function x

// // write html.textcontent to output inputfield value to UI in all blocks 

// // create a variable that takes given value from inputfield x

// // write a function for length
// // that takes inputfield value multiplied by 3.281 feet

// // write a function for volume 
// // that takes inputfield value multiplied by 0.264 gallon

// // write a function for mass
// // that takes inputfield value multiplied by 2.204 pound

