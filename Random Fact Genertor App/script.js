let fact = document.getElementById("fact");
let btn = document.getElementById("generate-btn");

let options = {
  method: "GET",
  headers: { "X-Api-Key": apiKey },
};

let url = "https://api.api-ninjas.com/v1/facts?limit=1";

let generateQuote = () => {
  fetch(url)
  .then(data => data.json())
  .then((data) => {
      fact.innerText = data[0].fact
  })
}
// TODO : Error Here
btn.addEventListener("click", generateQuote);
window.addEventListener("load", generateQuote);
