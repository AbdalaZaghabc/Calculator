//Abdala Zaghab
//Caclulator program


const displayCalc = document.getElementById("screen");

//Gets the input from the user.
function appendNumber(input){

    displayCalc.value += input;
}

// Clear
function deleteNum(){

    displayCalc.value = displayCalc.value.slice(0,-1);
}

//Clears the screen
function clearScreen(){
    
displayCalc.value= ""
}


// Calculate the result
function calculate(){
    
    let result = displayCalc.value;
    try{
        
        result = eval(displayCalc.value);

        if(result % 1 == 0)
            {
            displayCalc.value = result;
            }
        else{
            result= result.toFixed(5);
            displayCalc.value = result;
        }
        
        
    }
    catch {
        displayCalc.value= "Error";
    }
    
}


function negativePlusSign() {

    if (displayCalc.value.charAt(0) === '-') {
        displayCalc.value = displayCalc.value.slice(1);
    } 
    else {
        displayCalc.value = '-' + displayCalc.value;
    }
}

function percentage(){

    displayCalc.value= displayCalc.value / 100
}