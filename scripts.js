
let rollMasterData = {
    "humidity": rt_humidity,
    "precipitation": rt_precipitation,
    "wind": rt_wind,
    "elevation": rt_elevation,
    "composition": rt_composition,
    "river": rt_river,
    "riverAppearance": rt_river_appearance,
    "disaster": rt_disaster
}

// buttons
const button_roll = document.getElementById("button_roll")
const button_clear = document.getElementById("button_clear")
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
    rollDiv.innerHTML = roll["result"]
    //Update Value
    const valueDiv = section.querySelector('div.rbRollValue div.rollBoxSectionBody')
    valueDiv.innerHTML = roll["dict"]["value"]
    //Update Effect
    const effectSect = section.querySelector('div.rbEffect')
    const effectDiv = section.querySelector('div.rbEffect div.rollBoxSectionBody')
    if ("effect" in roll["dict"]){
        //Effect: yes
        effectDiv.innerHTML = roll["dict"]["effect"]
        effectSect.style.display = "block"
    } else {
        //Effect: no
        effectDiv.innerHTML = ""
        effectSect.style.display = "none"
    }
    //Hide or show conditional tables
    conditionalTables(name, roll)
}

function populateBasicRollBoxInfo(rollTable){
    const name = rollTable["name"]
    const section = document.querySelector('div#' + name)
    // Add description and make it visible
    if ("description" in rollTable){
        const descBox = section.querySelector('div.rbDesc')
        descBox.style.padding = "4px 14px"
        descBox.innerHTML = rollTable["description"]
        descBox.style.display = "block"
    }
    // Add die type
    const dieTypeBox = section.querySelector('div.rbDieType > div.rollBoxSectionBody')
    dieTypeBox.innerHTML = "d" + rollTable["die_type"]
}

// Will showor hide specific rollTables if they are conditional
// Based off of the "subtable" field
function conditionalTables(name, roll){
    //River Appearance
    if (name=="river"){
        const raDiv = document.querySelector("#riverAppearance")
        if ("subroll" in roll["dict"]){
            raDiv.style.display = "grid"
        } else {
            raDiv.style.display = "none"
        }
    }
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
    // Effect section
    const effectBoxList = document.getElementsByClassName("rbEffect")
    for (effectBox of effectBoxList){
        effectBox.style.display = "none"
    }
    //Roll result values
    for (const name in rollMasterData){
        //Find section
        //const name = rollTable["name"]
        const section = document.querySelector('div#' + name)
        //Clear Roll
        const rollDiv = section.querySelector('div.rbRollResult div.rollBoxSectionBody')
        rollDiv.innerHTML = ""
        //Clear Value
        const valueDiv = section.querySelector('div.rbRollValue div.rollBoxSectionBody')
        valueDiv.innerHTML = ""
        //Clear Effect
        const effectDiv = section.querySelector('div.rbEffect div.rollBoxSectionBody')
        effectDiv.innerHTML = ""
    }
    //Conditional section - River Appearance
    const raDiv = document.querySelector("#riverAppearance")
    raDiv.style.display = "none"

}







