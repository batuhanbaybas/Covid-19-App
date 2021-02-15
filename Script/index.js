let url = "https://covid19.mathdro.id/api";
let urlCountries = `https://covid19.mathdro.id/api/countries/`;

const fetchCountry = fetch(urlCountries).then((response) => {
  return response.json();
});

const fetchdata = fetch(url).then((response) => {
  return response.json();
});
fetchdata.then((data) => {
  let confirmed = "";
  let recovered = "";
  let deaths = "";
  let body = "";
  //Cart Confirmed People Global Data
  confirmed += `<h5 class="card-title text-center text-white">${data.confirmed.value}</h5>
    <h6 class="card-subtitle mb-2  text-center text-white">Global Hasta Sayısı</h6>`;
  document.querySelector("#confirmed").innerHTML = confirmed;
  //Cart Recovered People Global Data
  recovered += `<h5 class="card-title text-center text-white">${data.recovered.value}</h5>
<h6 class="card-subtitle mb-2 text-center text-white">Global İyileşen Sayısı</h6>`;
  document.querySelector("#recovered").innerHTML = recovered;
  //Cart Death People Data
  deaths += `<h5 class="card-title text-center text-white">${data.deaths.value}</h5>
<h6 class="card-subtitle mb-2 text-center text-white">Global ölüm sayısı</h6>`;
  document.querySelector("#deaths").innerHTML = deaths;
  //Table Global Data
  body += `   
<th scope="row">+</th>
<td class ="bg-warning text-center">${data.confirmed.value}</td>
<td class ="bg-success text-center">${data.recovered.value}</td>
<td class="bg-danger text-center">${data.deaths.value}</td>
`;
  document.querySelector("#body").innerHTML = body;
});
fetchCountry.then((data) => {
  for (let i = 0; i < data.countries.length; i++) {
    const element = data.countries[i];
    const option = document.createElement("option");
    option.value = element.name;
    option.innerHTML = element.name;
    document.querySelector("#country").appendChild(option);
  }
});
function ChangeDom(event) {
  var value = event.target.value;
  fetch(`https://covid19.mathdro.id/api/countries/${value}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let confirmed = "";
      let recovered = "";
      let deaths = "";
      let body = "";
      confirmed += `<h5 class="card-title text-center text-white">${data.confirmed.value}</h5>
    <h6 class="card-subtitle mb-2  text-center text-white">${value} Toplam Hasta Sayısı </h6>`;
      document.querySelector("#confirmed").innerHTML = confirmed;
      //Cart Country Recovered People Data
      recovered += `<h5 class="card-title text-center text-white">${data.recovered.value}</h5>
<h6 class="card-subtitle mb-2 text-center text-white">${value} Toplam Hasta Sayısı  </h6>`;
      document.querySelector("#recovered").innerHTML = recovered;
      //Cart Country Death People Data
      deaths += `<h5 class="card-title text-center text-white">${data.deaths.value}</h5>
<h6 class="card-subtitle mb-2 text-center text-white">${value} Toplam Hasta Sayısı </h6>`;
      document.querySelector("#deaths").innerHTML = deaths;
      //Table Country Global Data
      body += `   
<th scope="row">+</th>
<td class ="bg-warning text-center">${data.confirmed.value}</td>
<td class ="bg-success text-center">${data.recovered.value}</td>
<td class="bg-danger text-center">${data.deaths.value}</td>
`;
      document.querySelector("#body").innerHTML = body;
    });
}
const selectElement = document.querySelector('#country')
selectElement.addEventListener("change", (event)=>{
  event.target.value;
  event.preventDefault();
  ChangeDom(event)
})