const body  = document.getElementById('body');
const title  = document.getElementById('title');
const contact = document.getElementById('contact');
const copyright  = document.getElementById('copyright');

function changeBgDark() {
    body.style.backgroundColor = "#888888";
    title.style.color = "#eeeeee";
    contact.style.color = "#eeeeee";
    copyright.style.color = "#eeeeee";
}

function changeBgWhite() {
    body.style.backgroundColor = "#fff";
    title.style.color = "#333333";
    contact.style.color = "#333333";
    copyright.style.color = "#333333";
}
