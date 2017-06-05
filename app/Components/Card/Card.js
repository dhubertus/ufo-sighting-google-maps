import React from 'react'


export const Card = ({ id, city, state, summary, month, day, year, shape, url, moonPhase, visibility, precipitation, humidity, temperature, inHg, deleteFav, sameDay, history }) => {

  return(
    <div className='individual-card' >
      <h5>{ month + '/' + day + '/' + year }</h5>
      <h3>{ city + ', ' + state}</h3>
      <p><span className='summary'>Summary:</span> { ' ' + summary }</p>
      <a href={url} target='_blank'>Read More</a>
      <button onClick={() => sameDay(year, month, day, history)}>Same Day</button>
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
          <td>{ moonPhase || 'NA' }</td>
        </tr>
      </table>
      <button className='delete-btn' onClick={() => deleteFav(id)}>Delete</button>
    </div>
  )
}
