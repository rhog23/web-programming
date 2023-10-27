const coordKotaBatam = { lat: 1.088432509968259, lng: 104.01737292151186 };

const initMap = () => {
  const directionsService = new google.maps.DirectionsService();
  const directionsRenderer = new google.maps.DirectionsRenderer();

  const map = new google.maps.Map(document.getElementById("map"), {
    center: coordKotaBatam,
    zoom: 10,
  });

  directionsRenderer.setMap(map);

  const start = document.getElementById("start");
  const end = document.getElementById("end");

  const onChangeHandler = () => {
    calculateAndDisplayRoute(directionsService, directionsRenderer, start, end);
  };

  start.addEventListener("change", onChangeHandler);
  end.addEventListener("change", onChangeHandler);
};

const calculateAndDisplayRoute = (
  directionsService,
  directionsRenderer,
  start,
  end
) => {
  directionsService
    .route({
      origin: {
        query: start.value,
      },
      destination: {
        query: end.value,
      },
      travelMode: google.maps.TravelMode.DRIVING,
    })
    .then((response) => {
      directionsRenderer.setDirections(response);
    })
    .catch((e) => window.alert(`Directions request failed due to ${e}`));
};

window.initMap = initMap;
