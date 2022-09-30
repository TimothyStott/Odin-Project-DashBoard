function addTransition(){
    const toggleText = document.querySelectorAll(".transitional-text");
    toggleText.forEach(text => text.classList.toggle("reduce-to-zero"));
}


const imgClick = document.getElementById("transition-click");
imgClick.addEventListener('click', addTransition);