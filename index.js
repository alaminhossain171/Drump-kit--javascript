for (var i = 0; i < document.querySelectorAll('.drum').length; i++) {

    document.querySelectorAll('.drum')[i].addEventListener("click", function change() {
        // this.style.color = "green";
        makeSound(this.innerHTML);
        buttonAnimition(this.innerHTML);
    })



}

document.addEventListener("keypress", function keybord(event) {
    // console.log(event.key);
    makeSound(event.key);
    buttonAnimition(event.key);
})

function makeSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case "j":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case "k":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;
        case "l":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;

        default:
            console.log(this.innerHTML);


    }
}

function buttonAnimition(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function() { activeButton.classList.remove("pressed"); }, 100);
}

/*var i = 0;
while (i < document.querySelectorAll(".drum").length) {
    document.querySelectorAll(".drum")[i].addEventListener("click", clickDrumb);
    i++;
}

function clickDrumb() {
    alert("click korsos!");
}*/