const searchCompany = document.getElementById("companySearch");
const displayResults = document.getElementById("results");
const companySubmit = document.getElementById("companySubmit");
const form = document.querySelector("#userinfo");

const getData = async () => {
  const formData = new FormData(form);
  const stockSymbol = getStringFormData(formData);

  const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${stockSymbol}&apikey=DPUSGVM6UOZPM9I9`;
  try {
    const response = await fetch(url, { headers: { "User-Agent": "request" } });
    const data = await response.json();
    console.log(data);
    let arrDisplay = Object.values(data);
    displayResults.innerHTML = arrDisplay[1].toString();
  } catch (err) {
    console.error();
    console.log(err);
  }
};

//Take over form submission

form.addEventListener("submit", (event) => {
  event.preventDefault();
  getData();
});

//To Return the value from UserInput as a String
const getStringFormData = (formData) => {
  for (const value of formData.values()) {
    return value;
  }
};
