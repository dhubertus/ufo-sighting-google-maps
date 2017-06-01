const request = require('request')
const BASE_URL = 'https://ufo-api.herokuapp.com/api/sightings/'


function getPlaces(req, res, next) {
  request(BASE_URL + `location/bbox?bbox=-124.848974,24.396308,-66.885444,49.384358&limit=100&skip=${req.query.randomNumber}`,
  function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.send(body)
    }
  })
}

function nearPlaces(req, res, next) {
  request(BASE_URL + `location/near?lat=${req.query.lat}&lon=${req.query.lng}&radius=48280&limit=15&skip=0`,
  function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.send(body)
    }
  })
}

function rangePlaces(req, res, next) {
  request(BASE_URL + `search?from=${req.query.lower}/1/1&to=${req.query.upper}/1/1&skip=${req.query.randomNumber}`,
  function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.send(body)
    }
  })
}

module.exports = {
  getPlaces: getPlaces,
  nearPlaces: nearPlaces,
  rangePlaces: rangePlaces
};
