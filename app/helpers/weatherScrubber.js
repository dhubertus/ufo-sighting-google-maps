
export const weatherScrubber = (obj) => {
  return obj.history.dailysummary.reduce((acc, dataObj) => {
    acc.inHg = dataObj.maxpressurei
    acc.humidity = dataObj.maxhumidity
    acc.temperature = dataObj.meantempi
    acc.visibility = dataObj.meanvisi
    acc.precipitation = dataObj.precipi

    return acc
  }, {})
}
