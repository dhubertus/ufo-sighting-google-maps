

export const initialScrubber = (api) => {
  return api.sightings.reduce((acc, obj) => {
    if(!acc[obj._id]) {
      acc[obj._id] = {}
      acc[obj._id].id = obj._id
      acc[obj._id].latitude = obj.loc[1]
      acc[obj._id].longitude = obj.loc[0]
      acc[obj._id].city = obj.city
      acc[obj._id].state = obj.state
      acc[obj._id].year = obj.date.slice(0,4)
      acc[obj._id].month = obj.date.slice(5,7)
      acc[obj._id].shape = obj.shape
      acc[obj._id].summary = obj.summary
    }
    return acc
  }, {})
}
