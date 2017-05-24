

export const initialScrubber = (api) => {
  return api.sightings.reduce((acc, obj) => {
    if(!acc[obj._id]) {
      acc[obj._id] = {}
      acc[obj._id].id = obj._id
      acc[obj._id].latitude = obj.loc[1]
      acc[obj._id].longitude = obj.loc[0]
      acc[obj._id].city = obj.city
      acc[obj._id].state = obj.state
      acc[obj._id].date = obj.date
      acc[obj._id].shape = obj.shape
      acc[obj._id].summary = obj.summary
    }
    return acc
  }, {})
}


// export const cleaner = data => data.results.reduce((acc, val) => {
//   if (!acc[val.title]) {
//     acc[val.title] = {
//       title: val.title,
//       overview: val.overview,
//       poster_path: `https://image.tmdb.org/t/p/w500${val.poster_path}`,
//       movie_id: val.id,
//       release_date: val.release_date,
//       vote_average: val.vote_average,
//     };
//   }
//   return acc;
// }, {});
