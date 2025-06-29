
let rollMasterData = {
    "humidity": rt_humidity,
    "precipitation": rt_precipitation,
    "wind": rt_wind,
    "elevation": rt_elevation,
    "composition": rt_composition,
    "river": rt_river
}

// buttons
let button_roll = document.getElementById("button_roll")
let button_clear = document.getElementById("button_clear")
//Add listener to buttons to trigger functions
button_roll.addEventListener("click", () => {roll()});
button_clear.addEventListener("click", () => {clear()});

//Populate descripotions, die types, etc
for (const dataLabel in rollMasterData){
    populateBasicRollBoxInfo(rollMasterData[dataLabel])
}

//Hide the roll sections at first
hideRollSections()



const headerSections = document.querySelectorAll("div.rbHeader")
for (const sect of headerSections){
    sect.addEventListener("click", () => {console.log("AAAA")});
}





//When roll button is clicked
function roll(){
    for (const name in rollMasterData){
        performRoll(rollMasterData[name])
    }
    
    

    
}

//When clear button is clicked
function clear(){
    hideRollSections()
}



function performRoll(rollTable){
    //Get a random (rolled) entry
    const roll = getRollDict(rollTable["die_type"], rollTable["rolls"])
    //Find section
    const name = rollTable["name"]
    const section = document.querySelector('div#' + name)
    //Update Roll
    const rollDiv = section.querySelector('div.rbRollResult div.rollBoxSectionBody')
    rollDiv.innerText = roll["result"]
    //Update Value
    const valueDiv = section.querySelector('div.rbRollValue div.rollBoxSectionBody')
    valueDiv.innerText = roll["dict"]["value"]
    //Update Effect
    const effectSect = section.querySelector('div.rbEffect')
    const effectDiv = section.querySelector('div.rbEffect div.rollBoxSectionBody')
    if ("effect" in roll["dict"]){
        //Effect: yes
        effectDiv.innerText = roll["dict"]["effect"]
        effectSect.style.display = "block"
    } else {
        //Effect: no
        effectDiv.innerText = ""
        effectSect.style.display = "none"
    }
}

function populateBasicRollBoxInfo(rollTable){
    const name = rollTable["name"]
    const section = document.querySelector('div#' + name)
    // Add description and make it visible
    if ("description" in rollTable){
        const descBox = section.querySelector('div.rbDesc')
        descBox.innerText = rollTable["description"]
        descBox.style.display = "block"
    }
    // Add die type
    const dieTypeBox = section.querySelector('div.rbDieType > div.rollBoxSectionBody')
    dieTypeBox.innerText = rollTable["die_type"]
}












//Rolls and returns a value for the given list of potential rolls. Returns a dict with roll result and dict
function getRollDict(dieType, dictList){
    const rollResult = getRandomInt(1, dieType)
    for (const dict of dictList){
        if (dict["start"] <= rollResult && dict["end"] >= rollResult){
            return {"result": rollResult, "dict": dict}
        }
    }
}

//Gets a random # betwene the 2 numbers provided (inclusive)
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



//Reveals all sections involving rolls
function showRollSections(){
    //humidity_description.style.display = "block"
}

//Hides all sections involving rolls
function hideRollSections(){
    const effectBoxList = document.getElementsByClassName("rbEffect")
    for (effectBox of effectBoxList){
        effectBox.style.display = "none"
    }
}







