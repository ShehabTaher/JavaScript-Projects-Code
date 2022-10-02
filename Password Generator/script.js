const display = document.querySelector("input"),
button = document.querySelector("button"),
copyBtn = document.querySelector("span.far"),
copyActive = document.querySelector("span.fas");
let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
button.onclick = () => {
    let i ,
    randomPassword = "";
    copyActive.style.display = "none";
    copyBtn.style.display = "block";
    for ( i = 0; i < 16; i++) {
        randomPassword = randomPassword + chars.charAt(
            Math.floor(Math.random() * chars.length)
        );
    }
    display.value = randomPassword;
}
function copy(){
    copyBtn.style.display = "none";
    copyActive.style.display = "block";
    display.select();
    document.execCommand("copy");
}
