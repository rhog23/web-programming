function initMap() {
  const lokasi = { lat: 1.133985, lng: 104.043427 };
  const map = new google.maps.StreetViewPanorama(
    document.getElementById("map"),
    {
      position: lokasi,
      pov: {
        heading: 45,
        pitch: 0,
      },
    }
  );

  map.setStreetView(streetView);

  window.initMap = initMap;
}
