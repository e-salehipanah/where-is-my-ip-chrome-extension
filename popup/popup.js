// TODO: add vue & npm
// TODO: add localization
// TODO: add lang selection
// TODO: add my email
// TODO: add readme.md
// TODO: add icon
// TODO: fix style
// TODO: add offline style
const countryContainer = document.querySelector(".country");
const loadingContainer = document.querySelector(".loading-container");
var requestOptions = {
  method: "GET",
};

loadingContainer.style.visibility = "visible";
const API_KEY = "5e62e6bc995f44cfa39e26096d2473a3";
fetch(`https://api.geoapify.com/v1/ipinfo?&apiKey=${API_KEY}`, requestOptions)
  .then((response) => response.json())
  .then(({ city, continent, country }) => {
      console.log(getNameLocale(country));
      countryContainer.innerHTML = getNameLocale(country)
      loadingContainer.style.visibility = "hidden";
  })
  .catch((error) => console.log("error", error));


  function getNameLocale({names}){
      return names["fa"]
  }