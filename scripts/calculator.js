// const buttons = {
//     clean: document.getElementById('clean'),
//     parenthesis: document.getElementById('parenthesis'),
//     percentage: document.getElementById('percentage'),
//     division: document.getElementById('division'),
//     seven: document.getElementById('seven'),
//     eight: document.getElementById('eight'),
//     nine: document.getElementById('nine'),
//     multiply: document.getElementById('multiply'),
//     four: document.getElementById('four'),
//     five: document.getElementById('five'),
//     six: document.getElementById('six'),
//     subtract: document.getElementById('subtract'),
//     one: document.getElementById('one'),
//     two: document.getElementById('two'),
//     three: document.getElementById('three'),
//     add: document.getElementById('add'),
//     changeSign: document.getElementById('change-sign'),
//     zero: document.getElementById('zero'),
//     decimal: document.getElementById('decimal'),
//     equal: document.getElementById('equal')
// }

const displayBottom = document.querySelector(".display__bottom span");
const displayTop = document.querySelector(".display__top span");
const buttons = document.querySelectorAll(".calculator__body button");

const basicOperations = ['X', '+', '-', '/'];
const

buttons.forEach(button =>{
    button.addEventListener("click", ()=>{
        let pressed = button.textContent;
        if(displayBottom.textContent=="0" && !(basicOperations.includes(pressed))){ 
            displayBottom.textContent = !(pressed=="C") ? pressed : "0";
            displayTop.textContent = (pressed=="C") ? "" : displayTop.textContent; 
            return;
        }
        if(pressed=="C") {
            displayBottom.textContent="0";
            return;
        }
        if(basicOperations.includes(pressed)){
            displayTop.textContent += ` ${displayBottom.textContent} ${pressed}`;
            let result = eval(displayTop.textContent.toLowerCase());
            console.log(result);
            
            displayBottom.textContent = Number(displayTop.textContent)
            return;
        }
        if(pressed=="( )"){
            if ((displayBottom.textContent.includes("(")))  {
                displayBottom.textContent += ")";
                return;
            }
            // if(displayBottom.textContent[displayBottom.textContent.lenght-1])
        }
        displayBottom.textContent += pressed[0];
    });
})
