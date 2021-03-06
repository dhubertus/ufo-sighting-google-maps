## UFO Sightings - Do You Believe?
## Project Status
UFO Sightings is currently in development although the main funcionality has been completed. When searching for an interesting API that contains lat/long data, I came across plenty of polutant and/or green house gas type API's. Although important, its not the most entertaining data to parse through for weeks. When I came across the UFO Sightings API in an internet thread, I read a few claims and knew I found my data set which proved to be much larger then I could have imagined. I am always thinking of new functionality the user may want when diving into the wild world of UFO sightings. Next steps are to learn/add a form of data visualization (ie. chart.js, d3.js, victory.js) that can provide the user with data trends. Trends, such as, shapes viewed per decade, or number of sightings over time. Additionally I intend to add full responsiveness to the app as well.

If you're as skeptical as me or even if you believe, you'll enjoy parsing through these claims and wondering, 'What on Earth could they actually have seen?!?'

## Project Screen Shot
<img width="1273" alt="ufo-sighting copy" src="https://user-images.githubusercontent.com/25044263/27244243-e644414c-52a2-11e7-96fe-36943ee2fc3b.png">

## Installation and Setup Instructions
git clone --> npm install --> npm start 
## Reflection
  
  UFO Sightings was a two week long personal project built during my third module at Turing School of Software and Design. Project goals included using technologies learned up until this point and familiarizing myself with documentation for new features. I set out to learn how to implement the Google Maps API within a React application while also hitting other API's for data to display on the map and to experiment with other data visualization (ie. chart.js, d3.js, victory.js). I started this process by using the express boilerplate, then adding react and react-router-4.0.

  One of my main challenges was learning to handle CORS errors by fetching to the backend, where I learned pass user input as request object parameters, and could then make a unique request to the API based on the received user input. One unexpected obstacle was learning to implement the Google Maps API in React as google has made its implementation in vanilla javascript very straight forward. After searching for ways to accomplish this task I landed on the react-google-maps package which has decent documentation and allowed for me create a product I am pleased with. In total, the technologies I utilized in this project were React, React-Router 4.0, VanillaJS, JSX, and CSS. I used an express boilerplate to minimize time spent learning to build a backend and focus on the goals I had set for myself. In the future I would enjoy building out a backend from scratch to further understand its process.
     
## Resources
  Google Maps API: https://developers.google.com/maps/documentation/javascript <br/>
  React-Google-Maps: https://www.npmjs.com/package/react-google-maps <br/>
  UFO Sighting API: https://ufo-api.herokuapp.com/api#doc <br/>
  WeatherUndergroundAPI: https://www.wunderground.com/history <br/>
  Astronomical API: http://aa.usno.navy.mil/data/docs/api.php
