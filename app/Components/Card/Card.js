import React from 'react'


export const Card = ({ city, state, summary, month, day, year, shape, url, moonPhase, visibility, precipitation, humidity, temperature, inHg }) => {

  return(
    <div className='individual-card' >
      <h5>{ month + '/' + day + '/' + year }</h5>
      <h3>{ city + ', ' + state}</h3>
      <p><span>Summary:</span> { ' ' + summary }</p>
      <a href={url} target='_blank'>Read More</a>
      <table>
        <tr>
          <th>Shape</th>
          <th>Temp</th>
          <th>Humidity</th>
          <th>Precip</th>
          <th>Visibility</th>
          <th>BarPress</th>
          <th>Moon-Phase</th>
        </tr>
        <tr>
          <td>{ shape }</td>
          <td>{ temperature + '°F'}</td>
          <td>{ humidity + '%'}</td>
          <td>{ precipitation + ' in'}</td>
          <td>{ visibility + ' miles' }</td>
          <td>{ Math.round(inHg*25.4) + ' mmHg' }</td>
          <td>{ moonPhase }</td>
        </tr>
      </table>
    </div>
  )
}