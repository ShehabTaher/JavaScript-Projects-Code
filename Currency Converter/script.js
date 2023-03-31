let api = `https://v6.exchangerate-api.com/v6/2d206c1715ddabc7f80b2bd3/latest/USD`;

let fromDropDown = document.getElementById("from-currency-select");
let toDropDown = document.getElementById("to-currency-select");

//create dropdown from the currencies array
currencies.forEach((currency) => {
  const option = document.createElement("option");
  option.value = currency;
  option.text = currency;
  fromDropDown.add(option);
});

//Repeat same Thing for the other dropdown
currencies.forEach((currency) => {
  const option = document.createElement("option");
  option.value = currency;
  option.text = currency;
  toDropDown.add(option);
});

//Setting default values
fromDropDown.value = "USD";
toDropDown.value = "EGP";

let convertCurrency = () => {
  // Create References
  const amount = document.querySelector("#amount").value;
  const fromCurrency = fromDropDown.value;
  const toCurrency = toDropDown.value;

  // if amount input field is not empty
  if (amount.length != 0) {
    fetch(api)
        .then(res => res.json())
        .then(data => {
            let fromExchangeRate = data.conversion_rates[fromCurrency]
            let toExchangeRate = data.conversion_rates[toCurrency]
            const convertedAmount = (amount / fromExchangeRate) * toExchangeRate
            result.innerHTML = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`
        })
  } else {
    alert("Please fill in the amount");
  }
};
document
  .querySelector("#convert-button")
  .addEventListener("click", convertCurrency);
window.add("load", convertCurrency)