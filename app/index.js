import React, { Component } from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom';
import { browserHistory, Route } from 'react-router';

import MapContainer from './Components/MapContainer/MapContainer'
import AsideContainer from './Components/AsideContainer/AsideContainer'
import { HeaderContainer } from './Components/HeaderContainer/HeaderContainer'
import { initialScrubber } from './helpers/initialScrubber.js'
import { nearScrubber } from './helpers/nearScrubber.js'
import stubbedData from './helpers/stubbedApiCall.js'
import Root from './Components/app.js'



render(
  <Router history={ browserHistory } >
    <Root />
  </Router>,
  document.getElementById('main'),
)
