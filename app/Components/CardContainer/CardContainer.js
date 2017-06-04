import React from 'react'
import { Card } from '../Card/Card'

export const CardContainer = (props) => {

  console.log(props);
  if(Object.keys(props.favorites).length) {


    const cardArray = Object.keys(props.favorites).map((key, i) => {
      return (
        <Card key={i}
              deleteFav={props.deleteFav}
              {...props.favorites[key]}
        />
      )
    })

    return(
      <div id='card-container'>
        {cardArray}
      </div>
    )
  }

  return (
    <div id='no-favs'>Add Some Favorites</div>
  )

}
