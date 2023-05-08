function getAddressFromCoordinates({latitude, longitude}) {
  return new Promise(resolve => {
    const url = `https://reverse.geocoder.ls.hereapi.com/6.2/reversegeocode.json?apiKey=${HERE_API_KEY}&mode=retrieveAddresses&prox=${latitude},${longitude}`;
    fetch(url)
      .then(res => res.json())
      .then(resJson => {
        // the response had a deeply nested structure :/
        if (
          resJson &&
          resJson.Response &&
          resJson.Response.View &&
          resJson.Response.View[0] &&
          resJson.Response.View[0].Result &&
          resJson.Response.View[0].Result[0]
        ) {
          resolve(resJson.Response.View[0].Result[0].Location.Address.Label);
        } else {
          resolve();
        }
      })
      .catch(e => {
        console.log('Error in getAddressFromCoordinates', e);
        resolve();
      });
  });
}

//https://revgeocode.search.hereapi.com/v1/revgeocode?at=48.2181679%2C16.3899064&lang=en-US&apiKey=o309Zrm9G1HpuXMO7BsxcYwjwyJhiOfuFb7opX383RQ
