window.onload = function () {
  mapboxgl.accessToken =
    "pk.eyJ1IjoicmF5bW9uZHN1dmVycyIsImEiOiJjbG9ndnpmNWcwNThyMnBvMmdlcjliZDljIn0.qIkjt-JRKHyqMe8DNZJ7ig";
  const geojson = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: {
          color: "#d90429",
          title: "Maha Vihara Duta Maitreya",
          description:
            "42HM+QVG, Komplek Maha Vihara Duta Maitreya Bukit Beruntung, Sungai Panas, Kec. Batam Kota, Kota Batam, Kepulauan Riau 29432",
        },
        geometry: {
          coordinates: [104.03429751928405, 1.1293566340207235],
          type: "Point",
        },
      },
      {
        type: "Feature",
        properties: {
          color: "#f77f00",
          title: "Alun-Alun Engku Putri",
          description:
            "43H3+CRQ, Jl. Engku Putri, Tlk. Tering, Kec. Batam Kota, Kota Batam, Kepulauan Riau 29444",
        },
        geometry: {
          coordinates: [104.05456841551239, 1.1286593922382622],
          type: "Point",
        },
      },
    ],
  };

  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v12",
    center: [104.03446700110115, 1.1312897724815876],
    zoom: 12.8,
  });

  // map.on("style.load", () => {});

  for (const marker of geojson.features) {
    new mapboxgl.Marker({
      color: marker.properties.color,
    })
      .setLngLat(marker.geometry.coordinates)
      .setPopup(
        new mapboxgl.Popup().setHTML(
          `<h3>${marker.properties.title}</h3><p><strong>Alamat:</strong> ${marker.properties.description}</p>`
        )
      )
      .addTo(map);
  }
};
