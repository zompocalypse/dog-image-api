'use_strict';

//need submit listener
//fetch action to api
//render function

function renderResults(jsonData) {
  let htmlTemplate = [];
  for(let i = 0; i < jsonData.message.length; i++) {
    htmlTemplate.push(`
    <img src="${jsonData.message[i]}" alt="random dog image">
    `);
  }
  $('.results').html(htmlTemplate.join());
}

function getDogPics(num) {
  fetch(`https://dog.ceo/api/breeds/image/random/${num}`)
    .then(response => response.json())
    .then(responseJson => renderResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function handleDogFormSubmit() {
  $('.dog-images-form').submit(function(event) {
    event.preventDefault();
    let requestNumDogs = $('.js-dog-images-val').val();
    if (isNaN(requestNumDogs)) {
      requestNumDogs = 3;
    }
    getDogPics(requestNumDogs);
  });
}

$(handleDogFormSubmit);