function displaytime() {
    let clock = document.querySelector("#clock");
    let now = new Date();
    clock.textContent = now.toLocaleTimeString();
}
displaytime();
setInterval(displaytime, 1000);