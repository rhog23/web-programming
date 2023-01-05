window.onload = function () {
  mapboxgl.accessToken =
    "pk.eyJ1IjoibWFwYm94cmVjaXBlcyIsImEiOiJjd3RhQmlzIn0.Wx0fWGCo3gs6fzta5QrLfw";
  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/dark-v10",
    center: [104.03772037042502, 1.1292626952081588],
    zoom: 15,
  });

  map.on("load", () => {
    // Polygon
    map.addSource("batam-center", {
      type: "geojson",
      data: {
        type: "Feature",
        geometry: {
          type: "Polygon",
          coordinates: [
            [
              [104.03825587951002, 1.1293398125054352],
              [104.04140425740223, 1.1260557237418567],
              [104.04212317833691, 1.1256715470789516],
              [104.04295365597011, 1.1256715470789516],
              [104.0446765871784, 1.126154866098389],
              [104.0446765871784, 1.1267621129583603],
              [104.04471377274399, 1.1271834678484822],
              [104.04699448743747, 1.129885094808884],
              [104.04574257339408, 1.131248300119637],
              [104.04424275557909, 1.1334170345222674],
              [104.0435114394553, 1.133949923297564],
              [104.04287928483899, 1.1337020680654604],
              [104.03825587951002, 1.1293398125054352],
            ],
          ],
        },
      },
    });

    // Line
    map.addSource("line-1", {
      type: "geojson",
      data: {
        type: "Feature",
        geometry: {
          type: "LineString",
          coordinates: [
            [104.03524041851409, 1.129700305275307],
            [104.03594376640552, 1.128110436088079],
            [104.0322741252337, 1.1267040126208911],
            [104.03170838888587, 1.1267345870516294],
            [104.03103562133788, 1.1275753837620783],
            [104.0297512469275, 1.1307551218531984],
            [104.02915493023744, 1.133629112899854],
            [104.02715191776383, 1.136105634814058],
            [104.02774823445384, 1.1367018342163675],
            [104.02788584599745, 1.1371910233781648],
          ],
        },
      },
    });

    // Polygon layer
    map.addLayer({
      id: "batam-center",
      type: "fill",
      source: "batam-center",
      layout: {},
      paint: {
        "fill-color": "#a2d2ff",
        "fill-opacity": 0.5,
      },
    });

    // Line layer
    map.addLayer({
      id: "line-1",
      type: "line",
      source: "line-1",
      layout: {
        "line-join": "round",
        "line-cap": "round",
      },
      paint: {
        "line-color": "#a2d2ff",
        "line-width": 8,
      },
    });
  });
};
