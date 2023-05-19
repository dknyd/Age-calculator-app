// CONSTANTS
    // Input containers
const containerDay = document.querySelector(".containerDay");
const containerMonth = document.querySelector(".containerMonth");
const containerYear = document.querySelector(".containerYear");

    // Inputs
const inputDay = document.querySelector(".inputDay");
const inputMonth = document.querySelector(".inputMonth");
const inputYear = document.querySelector(".inputYear");

    // Results
const resultDay = document.querySelector(".resultDay");
const resultMonth = document.querySelector(".resultMonth");
const resultYear = document.querySelector(".resultYear");

const iconArrow = document.querySelector(".iconArrow");

    // Current dates
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth() + 1; 
const currentDay = currentDate.getDate();


// CREATE ERROR MESSAGE FUCNTION
function inputError(element, message){
    element.style.border = "2px solid hsl(0, 100%, 67%)";
    element.parentNode.style.color = "hsl(0, 100%, 67%)";
    if (element.parentNode.childNodes.length < 6){
        const newParagraph = document.createElement("span");
        newParagraph.innerHTML = message;
        newParagraph.style.color = "hsl(0, 100%, 66%)";
        newParagraph.style.fontSize = "0.6rem";
        newParagraph.style.textTransform = "capitalize";
        newParagraph.classList.add("errorMessage");
        element.insertAdjacentElement('afterend', newParagraph);
    }
}

// CLEAR ERROR MESSAGE FUNCTION
function clearError(element) {
    element.style.border = "2px solid hsl(0, 0%, 86%)";
    element.style.color = "black";
    element.parentNode.style.color = "hsl(0, 1%, 44%)";
    let currentElementParentNode = element.parentNode;
    let currentElementSisterNodes = currentElementParentNode.childNodes;
    if (currentElementSisterNodes.length > 4){
        currentElementSisterNodes[4].remove();
    }
}


iconArrow.addEventListener("click", function() {
    let hasInputError = false;
    // Clear errors (in case one already exists from previous wrong input)
    clearError(inputDay);
    clearError(inputMonth);
    clearError(inputYear);

    // inputDay checks
    if (!inputDay.value){
        inputError(inputDay, "This field is required!");
        hasInputError = true;
    } else if (inputDay.value > 31 || inputDay.value < 1){
        inputError(inputDay, "Must be a valid day");
        hasInputError = true;
    } 

    // inputMonth checks
    if (!inputMonth.value){
        inputError(inputMonth, "This field is required!");
        hasInputError = true;
    } else if (inputMonth.value > 12 || inputMonth.value < 1){
        inputError(inputMonth, "Must be a valid Month");
        hasInputError = true;
    } else if (inputMonth.value === "1" || "01" && inputDay.value > 31){
        inputError(inputDay, "Must be a valid day");
        hasInputError = true;
    } else if (inputMonth.value === "2" || "02" && inputDay.value > 29){
        inputError(inputDay, "Must be a valid day");
        hasInputError = true;
    } else if (inputMonth.value === "3" || "03" && inputDay.value > 31){
        inputError(inputDay, "Must be a valid day");
        hasInputError = true;
    } else if (inputMonth.value === "4" || "04" && inputDay.value > 30){
        inputError(inputDay, "Must be a valid day");
        hasInputError = true;
    } else if (inputMonth.value === "5" || "05" && inputDay.value > 31){
        inputError(inputDay, "Must be a valid day");
        hasInputError = true;
    } else if (inputMonth.value === "6" || "06" && inputDay.value > 30){
        inputError(inputDay, "Must be a valid day");
        hasInputError = true;
    } else if (inputMonth.value === "7" || "07" && inputDay.value > 31){
        inputError(inputDay, "Must be a valid day");
        hasInputError = true;
    } else if (inputMonth.value === "8" || "08" && inputDay.value > 31){
        inputError(inputDay, "Must be a valid day");
        hasInputError = true;
    } else if (inputMonth.value === "9" || "09" && inputDay.value > 30){
        inputError(inputDay, "Must be a valid day");
        hasInputError = true;
    } else if (inputMonth.value === "10" && inputDay.value > 31){
        inputError(inputDay, "Must be a valid day");
        hasInputError = true;
    } else if (inputMonth.value === "11" && inputDay.value > 30){
        inputError(inputDay, "Must be a valid day");
        hasInputError = true;
    } else if (inputMonth.value === "12" && inputDay.value > 31){
        inputError(inputDay, "Must be a valid day");
        hasInputError = true;
    }

    // inputYear checks
    if (!inputYear.value){
        inputError(inputYear, "This field is required!");
        hasInputError = true;
    } else if (inputYear.value < 1){
        inputError(inputYear, "Must be a valid Year");
        hasInputError = true;
    } else if (inputYear.value > currentYear){
        inputError(inputYear, "Must be in the past");
        hasInputError = true;
    }

    

    // Calculation if inputfields are valid 
    const birthYear = inputYear.value;
    const birthMonth = inputMonth.value;
    const birthDay = inputDay.value;
        
    if (hasInputError === false){
        let yearsSinceBirth = currentYear - birthYear;
        let monthsSinceBirth = currentMonth - birthMonth;
        let daysSinceBirth = currentDay - birthDay;

        if (monthsSinceBirth < 0 || (monthsSinceBirth === 0 && daysSinceBirth < 0)) {
        yearsSinceBirth--;
        monthsSinceBirth += 12;
        }

        if (daysSinceBirth < 0) {
        const daysInPrevMonth = new Date(currentYear, currentMonth - 1, 0).getDate();
        daysSinceBirth += daysInPrevMonth;
        monthsSinceBirth--;
        }
        resultYear.innerHTML = `${yearsSinceBirth} `
        resultMonth.innerHTML = `${monthsSinceBirth} `
        resultDay.innerHTML = `${daysSinceBirth} `
        }
})