

export const nearScrubber = (api) => {
  return api.sightings.reduce((acc, item) => {
    if(!acc[item.obj._id]) {
      acc[item.obj._id] = {}
      acc[item.obj._id].id = item.obj._id
      acc[item.obj._id].latitude = item.obj.loc[1]
      acc[item.obj._id].longitude = item.obj.loc[0]
      acc[item.obj._id].city = item.obj.city
      acc[item.obj._id].state = item.obj.state
      acc[item.obj._id].year = item.obj.date.slice(0,4)
      acc[item.obj._id].month = item.obj.date.slice(5,7)
      acc[item.obj._id].day = item.obj.date.slice(8,10)
      acc[item.obj._id].shape = item.obj.shape
      acc[item.obj._id].summary = item.obj.summary
      acc[item.obj._id].url = item.obj.url
      acc[item.obj._id].info = 'false'

    }
    return acc
  }, {})
}
