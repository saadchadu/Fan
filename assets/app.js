

function myFunction() {
    var fan = document.getElementById("fan");
    var btn = document.getElementById("btn");
    fan.classList.toggle("ceiling-fan");
    btn.classList.toggle("red");
};

function myText() {
    var btn = document.querySelector('button');
    if (btn.innerHTML === "ON") {
        btn.innerHTML = "OFF";
    } else {
        btn.innerHTML = "ON";
    }
}
