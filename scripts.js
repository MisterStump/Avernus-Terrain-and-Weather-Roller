
hideRollSections()

// buttons
let button_roll = document.getElementById("button_roll")
let button_clear = document.getElementById("button_clear")

// humidity section elements
let humidity_description = document.getElementById("humidity_description")
let humidity_table = document.getElementById("humidity_table")
let humidity_rollType = document.getElementById("humidity_rollType")
let humidity_rollResult = document.getElementById("humidity_rollResult")
let humidity_rollValue = document.getElementById("humidity_rollValue")
let humidity_effect = document.getElementById("humidity_effect")

// precipitation section elements
let precip_description = document.getElementById("precip_description")
let precip_table = document.getElementById("precip_table")
let precip_rollType = document.getElementById("precip_rollType")
let precip_rollResult = document.getElementById("precip_rollResult")
let precip_rollValue = document.getElementById("precip_rollValue")
let precip_effect = document.getElementById("precip_effect")

// wind section elements
let wind_description = document.getElementById("wind_description")
let wind_table = document.getElementById("wind_table")
let wind_rollType = document.getElementById("wind_rollType")
let wind_rollResult = document.getElementById("wind_rollResult")
let wind_rollValue = document.getElementById("wind_rollValue")
let wind_effect = document.getElementById("wind_effect")

//Add listener to buttons to trigger functions
button_roll.addEventListener("click", roll, false);
button_clear.addEventListener("click", clear, false);





//When roll button is clicked
function roll(){

    showRollSections()
}

//When clear button is clicked
function clear(){
    hideRollSections()
}


//Reveals all sections involving rolls
function showRollSections(){
    humidity_description.style.display = "block"
    precip_description.style.display = "block"
    wind_description.style.display = "block"
    humidity_table.style.display = "block"
    precip_table.style.display = "block"
    wind_table.style.display = "block"
}

//Hides all sections involving rolls
function hideRollSections(){
    humidity_description.style.display = "none"
    precip_description.style.display = "none"
    wind_description.style.display = "none"
    humidity_table.style.display = "none"
    precip_table.style.display = "none"
    wind_table.style.display = "none"
}







