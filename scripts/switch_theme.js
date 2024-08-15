const switchButton = document.querySelector(".switch-theme__btn");
document.addEventListener("DOMContentLoaded", ()=>{
    if(localStorage.getItem("dark-theme")=='true') document.body.classList.add('dark');
})

switchButton.addEventListener("click", ()=>{
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) localStorage.setItem('dark-theme', true);
    else localStorage.setItem('dark-theme', false);
})

calculatorWidth = getComputedStyle(document.querySelector('.calculator')).width;

document.querySelector('.calculator').style.maxWidth = calculatorWidth;


