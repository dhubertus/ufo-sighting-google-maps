import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';

import MapContainer from './MapContainer'
import { initialScrubber } from '../../helpers/initialScrubber.js'
import stubbedData from '../../helpers/stubbedApiCall'
import { withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps'



describe('MapContiner', () => {
  test('it should have a google map container', () => {
    const mockData = initialScrubber(stubbedData)
    const wrapper = mount(<MapContainer
                              mapElement={ <div className='mapelement' /> }
                              containerElement={ <div className='containerElement'/> }
                              sightings={mockData}
                            />)
    const map = wrapper.find('button')
    console.log(map);
    // expect(GoogleMap).toBeDefined();
    // expect(Marker).toBeDefined();
  })
})
