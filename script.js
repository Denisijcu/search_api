// READ the giphy API docs: https://developers.giphy.com/
//declar our variables and select our elements
var giphy_endpoint = 'http://api.giphy.com/v1/gifs/search';
var API_KEY = '6c28uSZG48R3QecrE0sJSt9Q7kprICQH';

var searchForm = document.querySelector('#search-form');
var searchInput = document.querySelector("input");
var results = document.querySelector(".results");



// define our functions
function getGifs() {
  results.innerHTML = "";
  $.ajax({
    type: "GET",
    url: `${giphy_endpoint}?api_key=${API_KEY}&q=${searchInput.value}`,
    dataType: "json",
    success: function (data) {
      console.log(data);
      for (var i = 0; i < data.data.length; i++) {
        results.innerHTML += `
        <img class="" src="${data.data[i].images.preview_gif.url}">
       `;
      }
    },
    error: function (error) {
      console.log("There was an error");
    }
  })
}
// call our functions and add our event listeners
searchForm.addEventListener('submit', function (event) {

  event.preventDefault();
  getGifs();
});