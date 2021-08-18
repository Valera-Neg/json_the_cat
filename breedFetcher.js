const request = require('request');
function fetchBreedDescription(breed, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (err, response, body) => {
    const data = JSON.parse(body);
    let description;
    !data.length ? description = null : description = data[0].description;
    callback(err, description);
  });
};
module.exports = { fetchBreedDescription };