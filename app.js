const api_url = "https://api.quotable.io/random";

const generate = document.querySelector("#generate-btn");
generate.addEventListener("click", fetchQuote);
async function fetchQuote() {
    const quote = document.getElementById("quote");
    const author = document.getElementById("author");
    const response = await fetch(api_url);
    const data = await response.json();
    quote.innerText = data.content;
    author.innerText = data.author;
}
fetchQuote();

const share = document.getElementById("share-btn");
share.addEventListener("click", shareQuote);
function shareQuote() {
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerText + "--by " + author.innerText, "_blank")
}

const copy = document.getElementById("copy-btn");
copy.addEventListener("click", copyQuote);
async function copyQuote() {
    const target = document.getElementById("quote-container").innerText;
    if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(target);
    }
    alert("Copied the text: " + target);
}
