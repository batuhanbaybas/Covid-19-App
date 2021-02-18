let url = "https://covid19.mathdro.id/api";
let urlCountries = `https://covid19.mathdro.id/api/countries/`;
let confirmed = document.querySelector("#confirmed");
let recovered = document.querySelector("#recovered");
let deaths = document.querySelector("#deaths");
let body = document.querySelector("#body");
let country = document.querySelector("#country");



const fetchCountry = fetch(urlCountries).then((response) => {
  return response.json();
});
const fetchdata = fetch(url).then((response) => {
  return response.json();
});
fetchdata.then((data) => {
  // Card Confirmed Data
  confirmed.innerHTML = `<h5 class="card-title text-center text-white">${data.confirmed.value}</h5>
    <h6 class="card-subtitle mb-2  text-center text-white">Global Hasta Sayısı</h6>`;
  //Card Recovered People Global Data
  recovered.innerHTML = `<h5 class="card-title text-center text-white">${data.recovered.value}</h5>
<h6 class="card-subtitle mb-2 text-center text-white">Global İyileşen Sayısı</h6>`;
  //Card Death People Data
  deaths.innerHTML = `<h5 class="card-title text-center text-white">${data.deaths.value}</h5>
<h6 class="card-subtitle mb-2 text-center text-white">Global ölüm sayısı</h6>`;
//Table Global Data
  body.innerHTML = `   
<th scope="row">+</th>
<td class ="bg-warning text-center">${data.confirmed.value}</td>
<td class ="bg-success text-center">${data.recovered.value}</td>
<td class="bg-danger text-center">${data.deaths.value}</td>
`;
});
fetchCountry.then((data) => {
  for (let i = 0; i < data.countries.length; i++) {
    const element = data.countries[i];
    const option = document.createElement("option");
    option.value = element.name;
    option.innerHTML = element.name;
    country.appendChild(option);
  }
});
ChangeDom =(event) => {
  var value = event.target.value;
  fetch(`${urlCountries}${value}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      confirmed.innerHTML = `<h5 class="card-title text-center text-white">${data.confirmed.value}</h5>
    <h6 class="card-subtitle mb-2  text-center text-white">${value} Toplam Hasta Sayısı </h6>`;
      //Card Country Recovered People Data
      recovered.innerHTML = `<h5 class="card-title text-center text-white">${data.recovered.value}</h5>
<h6 class="card-subtitle mb-2 text-center text-white">${value} Toplam İyilelen Sayısı  </h6>`;
      //Card Country Death People Data
      deaths.innerHTML = `<h5 class="card-title text-center text-white">${data.deaths.value}</h5>
<h6 class="card-subtitle mb-2 text-center text-white">${value} Toplam Ölüm Sayısı </h6>`;
      //Table Country Data
      body.innerHTML = `   
      <th scope="row">+</th>
      <td class ="bg-warning text-center">${data.confirmed.value}</td>
      <td class ="bg-success text-center">${data.recovered.value}</td>
      <td class="bg-danger text-center">${data.deaths.value}</td>
      `;
    });
}
country.addEventListener("change", (event) => {
  event.target.value;
  event.preventDefault();
  ChangeDom(event);
});
