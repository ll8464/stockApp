const searchCompany = document.getElementById("companySearch");
const displayResults = document.getElementById("results");
const companySubmit = document.getElementById("companySubmit");
const form = document.querySelector("#userinfo");

// companySubmit.addEventListener("click", () => {
//   //getData();
//   console.log(searchCompany);
// });

const getData = async () => {
  const formData = new FormData(form);
  const stockSymbol = getStringFormData(formData);

  const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${stockSymbol}&apikey=DPUSGVM6UOZPM9I9`;
  try {
    const response = await fetch(url, { headers: { "User-Agent": "request" } });
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.error();
    console.log(err);
  }
};

async function sendData() {
  // Associate the FormData object with the form element

  const formData = new FormData(form);

  try {
    const response = await fetch("/public/fetchTest.html", {
      method: "POST",

      headers: {
        //"Content-Type": "application/x-www-form-urlencoded",
        "Content-Type": "application/json",
      },
      // Set the FormData instance as the request body
      body: JSON.stringify({ formData }),
    });
    console.log(await response);
  } catch (e) {
    console.error(e);
  }
}

//Take over form submission

form.addEventListener("submit", (event) => {
  event.preventDefault();
  //sendData();
  getData();
});

//To Return the value from UserInput as a String
const getStringFormData = (formData) => {
  for (const value of formData.values()) {
    return value;
  }
};

//The below code works

// const myRequest = new Request(
//   "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=DPUSGVM6UOZPM9I9",
//   { headers: { "User-Agent": "request" } }
// );

// fetch(myRequest)
//   .then((response) => response.json())
//   .then((data) => {
//     let myString = JSON.stringify(data);
//     displayResults.textContent = myString;
//   })
//   .catch(console.error);
