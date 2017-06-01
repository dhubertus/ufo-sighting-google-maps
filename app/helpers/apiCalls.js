import { initialScrubber } from './initialScrubber'


export const handleRandomClick = (this) => {
  const randomNumber = Math.round(Math.random()*90000)

  fetch( `/api/places?randomNumber=${randomNumber}`, {
    method: 'GET'
  })
  .then(resp => resp.json())
  .then((obj) => {
    console.log(obj)
     const initialData = initialScrubber(obj)

    this.setState({ initialSightings: initialData,
                    viewing: initialData,
                    loading: false })
  })
}
