import React from 'react'
import { Card } from '../Card/Card'

export const CardContainer = (props) => {
  if(Object.keys(props.favorites).length) {


    const cardArray = Object.keys(props.favorites).map((key, i) => {
        console.log('card obj:',props.favorites[key]);
      return (
        <Card key={i} {...props.favorites[key]}/>
      )
    })

    return(
      <div id='card-container'>
        {cardArray}
      </div>
    )
  }

  return (
    <div>Add Some Favorites</div>
  )

}
