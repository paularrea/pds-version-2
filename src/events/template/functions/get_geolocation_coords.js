const get_geolocation_coords = () => {
  let lat = 0
  let long = 0
  if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition( async function(position) {
          lat = await position.coords.latitude
          long = await position.coords.longitude
          // console.log({ latitude: lat, longitude: long });
      })
  }
  return {
    latitude: lat,
    longitude: long,
  };
} 

export default get_geolocation_coords;