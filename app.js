const generate = document.querySelector("#generate-btn");
generate.addEventListener("click", fetchQuote);
const quote = document.getElementById("quote");
const author = document.getElementById("author");
let api_url = "https://api.quotable.io/random";

async function fetchQuote(){
const response = await fetch(api_url);
let data = await response.json();
quote.innerText = data.content;
author.innerText = data.author;
}

const share = document.getElementById("share-btn");
share.addEventListener("click", threads);
function threads(){
    window.open("https://threads.net/intent/post?text=" + quote.innerText + "--by " + author.innerText, "Threads Window", "width=600", height="300")
}

const copyQ = document.getElementById("copy-btn");
share.addEventListener("click", copyQuote);
function copyQuote(){
    var copy = document.getElementById("copy-btn");
    copy.select();
    navigator.clipboard.writeText(copy.value);
    alert("Copied the text: " + copy.value);
}