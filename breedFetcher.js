const request = require('request');
const breedFetcher = function(breed) {
  if (!breed) throw new Error('Breed is not defined');
    request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
      if (error) throw new Error('unsaccessful request');
      const data = JSON.parse(body);
      console.log(data);
      if (!data.length) throw new Error('breed not found');
      console.log(data[0].description);
  });
};
breedFetcher(process.argv[2]);