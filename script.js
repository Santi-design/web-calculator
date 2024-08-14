const colors = {
    darkBody: "#111111",
    lightBody: "#eeeeee",
    lightCalculator: "#FFF0D2",
    darkCalculator: "#333333"
}

const button = document.querySelector(".switch-theme__btn");

const rootElement = document.documentElement;


button.addEventListener("click", ()=>{
    document.body.classList.toggle("dark");
})


