const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', ()=> {
   it('returns a string description for valid breed, via callback', (done) => {
      fetchBreedDescription('Siberian', (err, description) => {
        // we expect no error for this scenario
        assert.equal(err, null);
        const expectDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors."
        // compare returned description
        assert.equal(expectDesc, description.trim());

        done();
      });
   });
   it('Return Null for invalid breed, via callback', (done) => {
      fetchBreedDescription('Clon', (err, description) => {
        assert.equal(description, null);
        done();
      })
   })
});