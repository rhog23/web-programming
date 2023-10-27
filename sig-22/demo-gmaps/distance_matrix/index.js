const coordKotaBatam = { lat: 1.088432509968259, lng: 104.01737292151186 };

const initMap = () => {
  const destination = { lat: 1.1529595882360315, lng: 104.05565512545859 };
  const directionsService = new google.maps.DirectionsService();
  const directionsRenderer = new google.maps.DirectionsRenderer();

  const map = new google.maps.Map(document.getElementById("map"), {
    center: coordKotaBatam,
    zoom: 10,
  });

  const request = {
    origins: [],
    destinations: [destination],
    travelMode: google.maps.TravelMode.DRIVING,
    unitSystem: google.maps.UnitSystem.METRIC,
    avoidHighways: false,
    avoidTolls: false,
  };

  //   retrieving user's current position
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      latitude = position.coords.latitude;
      longitude = position.coords.longitude;
      request.origins.push({
        lat: latitude,
        lng: longitude,
      });

      calculateAndDisplayRoute(
        latitude,
        longitude,
        request.destinations,
        directionsService,
        directionsRenderer
      );
    });

    document.getElementById("request").innerText = JSON.stringify(
      request,
      null,
      2
    );
  }

  directionsRenderer.setMap(map);

  //   initializing distance matrix service
  const dmservice = new google.maps.DistanceMatrixService();

  //   showing response
  dmservice.getDistanceMatrix(request).then((response) => {
    document.getElementById("response").innerText = JSON.stringify(
      response,
      null,
      2
    );
  });
};

const calculateAndDisplayRoute = (
  userLat,
  userLng,
  destination,
  directionsService,
  directionsRenderer
) => {
  directionsService
    .route({
      origin: {
        query: `${userLat}, ${userLng}`,
      },
      destination: {
        query: `${destination[0].lat}, ${destination[0].lng}`,
      },
      travelMode: google.maps.TravelMode.DRIVING,
    })
    .then((response) => {
      directionsRenderer.setDirections(response);
    })
    .catch((e) => window.alert(`Directions request failed due to ${e}`));
};

window.initMap = initMap;