const request = require('request')
const BASE_URL = 'https://ufo-api.herokuapp.com/api/sightings/location/bbox?bbox=-124.848974,24.396308,-66.885444,49.384358&limit=100&skip=0'

function getPlaces(req, res, next) {
  request(BASE_URL, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.send(body)
    }
  })
}

module.exports = {
  getPlaces: getPlaces
};
