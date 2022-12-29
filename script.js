// API URL: https://api.adviceslip.com/advice

let quoteID = document.querySelector(".quote-id");
let quoteBody = document.querySelector(".quote-body");

generateButton = document.querySelector(".generate-button");

const generateQuote = async () => {
    try {
        const response = await fetch('https://api.adviceslip.com/advice', {
            method: 'GET',
        }, [])
        const data = await response.json()
        return data
    } catch (error) {
        return console.error('error', error)
    }
}
const awaitQuote = async () => {
    let quote = await generateQuote();
    quoteID.innerHTML = quote.slip.id;
    quoteBody.innerHTML = quote.slip.advice;
}

generateButton.addEventListener('click', function () {
    awaitQuote();
});

window.onload = (event) => {
    awaitQuote();
};