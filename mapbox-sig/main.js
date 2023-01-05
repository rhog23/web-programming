window.onload = function () {
  mapboxgl.accessToken =
    "pk.eyJ1IjoibWFwYm94cmVjaXBlcyIsImEiOiJjd3RhQmlzIn0.Wx0fWGCo3gs6fzta5QrLfw";
  const geojson = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: {
          title: "Jalan Dekat Maitreya",
          desc: "Jalan lebar",
          color: "#d90429",
        },
        geometry: {
          coordinates: [104.03566817658202, 1.1281124137391032],
          type: "Point",
        },
      },
      {
        type: "Feature",
        properties: {
          title: "Jalan depan Mahkota Raya",
          desc: "Jalannya kebagi 5",
          color: "#f77f00",
        },
        geometry: {
          coordinates: [104.03920571222812, 1.1306711651212566],
          type: "Point",
        },
      },
    ],
  };
  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/dark-v10",
    center: [104.03446700110115, 1.1312897724815876],
    zoom: 14.5,
    projection: "globe",
  });

  for (const marker of geojson.features) {
    new mapboxgl.Marker({
      color: marker.properties.color,
    })
      .setLngLat(marker.geometry.coordinates).setPopup(
        new mapboxgl.Popup().setHTML(
            `<h3>${marker.properties.title}</h3><p><strong>Keterangan:</strong>${marker.properties.desc}</p>`
        )
      )
      .addTo(map);
  }
};
