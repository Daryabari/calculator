

let calculator = document.querySelector('.calculator');
let keys = calculator.querySelector(".box-bottom");
let display = document.querySelector(".box-top");





// khate 35 ye moshkeli dare ke jam nemishe
function result(n1, operator, n2) {

    if (operator === "addition") {
        return parseFloat(n1) + parseFloat(n2);

    }
    else if (operator === "subtraction") {
        return parseFloat(n1) - parseFloat(n2);
    }
    else if (operator === "multiplication") {
        return parseFloat(n1) * parseFloat(n2);
    }
    else if (operator === "division") {
        return parseFloat(n1) / parseFloat(n2);
    }

}

keys.addEventListener('click', e => {
    if (e.target.matches("button")) {
        let key = e.target;
        let action = key.dataset.action;
        let keyContent = key.textContent.trim();
        let displayedNum = display.textContent.trim();
     
                
        let previousKeyType = calculator.dataset.previousKeyType;

        if (!action) {
            if (displayedNum === '0' || previousKeyType === "operator") {
                display.textContent = keyContent;

            } else {

                display.textContent = displayedNum + keyContent;
                displayedNum = display.textContent;

            }
            calculator.dataset.previousKeyType = "number";

        }
        // dot operator
        else if (action === "decimal") {
            display.textContent = displayedNum + ".";
            calculator.dataset.previousKeyType = "decimal";
        }
        else if (action === "addition" || action === "subtraction" || action === "multiplication" || action === "division") {
            calculator.dataset.firstValue = displayedNum;
            calculator.dataset.operator = action;
            calculator.dataset.previousKeyType = "operator";
        }
        else if (action === "result") {
            let firstValue = calculator.dataset.firstValue;
            let operator = calculator.dataset.operator;
            let secondValue = displayedNum;
            display.textContent = result(firstValue, operator, secondValue);
            calculator.dataset.previousKeyType = "result";

        }
        else if (action === "reset") {
            display.textContent = 0;
            calculator.dataset.previousKeyType = "reset";
        }
        else if (action === "delet") {
            display.textContent = displayedNum.substring(0, displayedNum.length - 1);
        }
    }
});


const bbb = localStorage.getItem("theme");


if (bbb == "themeTwo") {
    document.body.classList.toggle("themeTwo");
    document.getElementById("inp2").checked = "checked"
}

else if (bbb == "themeThree") {
    document.body.classList.toggle("themeThree");
    document.getElementById("inp3").checked = "checked"
}

else {
    document.body.classList.toggle("themeOne");
    document.getElementById("inp1").checked = "checked"
}


var theme;

function changerOne() {
    document.body.classList.replace(document.body.classList, "themeOne");
    localStorage.clear();
    theme = "themeOne";
    localStorage.setItem("theme", theme);
}

function changerTwo() {
    document.body.classList.replace(document.body.classList, "themeTwo");
    localStorage.clear();
    theme = "themeTwo";
    localStorage.setItem("theme", theme);
}


function changerThree() {
    document.body.classList.replace(document.body.classList, "themeThree");
    localStorage.clear();
    theme = "themeThree";
    localStorage.setItem("theme", theme);
}





// be kari ke kardm deghat kardi?
//  be in kar migm clean code
//  refactoring ham migan albate man refactor nakardm
// ba in mozo ha to mohandesi narm afzar ashna mishi
// saligheyy nis va standard dare har zabani
// font ham barat doros kardm
// erad hay front ro kamel begir tak takesho
// shab neshonm bede man berm sare karm feln
// bashe refigh bye





