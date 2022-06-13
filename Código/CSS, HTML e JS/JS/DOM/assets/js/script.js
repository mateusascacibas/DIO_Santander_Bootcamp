function changeMode(){
    changeClass();
    changeText();
}

function changeText(){
    const mode = document.getElementById("page-title");
    const textBtn = document.getElementById("mode-selector");
    if(mode.textContent == "Dark Mode ON"){
        mode.innerHTML = "Light Mode ON";
        textBtn.innerHTML = "Dark Mode"

    }else{
        mode.innerHTML = "Dark Mode ON";
        textBtn.innerHTML = "Light Mode"
    }
    
}

function changeClass(){
    const button = document.getElementById('mode-selector');
    const h1 = document.getElementById('page-title');
    const footer = document.getElementsByTagName('footer')[0];
    const body = document.getElementsByTagName('body')[0];
    body.classList.toggle("dark-mode");
    button.classList.toggle("dark-mode");
    footer.classList.toggle("dark-mode");
    h1.classList.toggle("dark-mode");
}