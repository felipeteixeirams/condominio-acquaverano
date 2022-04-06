const body  = document.getElementById('body');
const title  = document.getElementById('title');
const contact = document.getElementById('contact');
const copyright  = document.getElementById('copyright');
const linkHost  = document.getElementById('link-host');
const linkConsult = document.getElementById('link-consult');


function changeBgDark() {
    body.style.backgroundColor = "var(--grey)";
    title.style.color = "var(--grey-light)";
    contact.style.color = "var(--grey-light)";
    copyright.style.color = "var(--grey-light)";
    linkHost.style.color = "var(--grey-light)";
    linkConsult.style.color = "var(--grey-light)";
}

function changeBgWhite() {
    body.style.backgroundColor = "var(--white)";
    title.style.color = "var(--grey-medium)";
    contact.style.color = "var(--grey-dark)";
    copyright.style.color = "var(--grey)";
    linkHost.style.color = "var(--grey)";
    linkConsult.style.color = "var(--grey)";
}