const map = L.map("map").setView([40.7128, -74.006], 13); // Default to New York City
let userLocationMarker, destinationMarker, routeLayer, distanceLabel;
let userLocation;

// Add OpenStreetMap tiles
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: "&copy; OpenStreetMap contributors",
}).addTo(map);

// Function to get user's current location
function getUserLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        userLocation = [position.coords.latitude, position.coords.longitude];
        map.setView(userLocation, 13);

        // Place a marker at the user's location
        if (userLocationMarker) {
          map.removeLayer(userLocationMarker);
        }
        userLocationMarker = L.marker(userLocation)
          .addTo(map)
          .bindPopup("Your Location")
          .openPopup();
      },
      (error) => {
        console.error("Error getting user location:", error);
        alert(
          "Unable to retrieve your location. Please allow location access."
        );
      }
    );
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}

// Call function to get user's location
getUserLocation();

// Function to calculate and display route
async function calculateRoute(destinationLatLng, profile) {
  if (!userLocation) {
    alert("User location not set. Please try again.");
    return;
  }

  // Construct the OSRM API URL using the selected travel mode (profile)
  const osrmUrl = `https://router.project-osrm.org/route/v1/${profile}/${userLocation[1]},${userLocation[0]};${destinationLatLng.lng},${destinationLatLng.lat}?overview=full&geometries=geojson`;

  console.log(`Fetching route with profile: ${profile}`);
  console.log(`OSRM URL: ${osrmUrl}`);

  try {
    const response = await fetch(osrmUrl);
    const data = await response.json();

    if (data.routes && data.routes.length > 0) {
      const route = data.routes[0];
      const routeCoordinates = route.geometry.coordinates.map((coord) => [
        coord[1],
        coord[0],
      ]);
      const distanceInKm = (route.distance / 1000).toFixed(2); // Convert meters to kilometers and format to 2 decimal places

      // Remove existing route and distance label if any
      if (routeLayer) {
        map.removeLayer(routeLayer);
      }
      if (distanceLabel) {
        map.removeLayer(distanceLabel);
      }

      // Draw the route on the map
      routeLayer = L.polyline(routeCoordinates, {
        color: "blue",
        weight: 5,
      }).addTo(map);

      // Add a label showing the distance near the middle of the route
      const midPointIndex = Math.floor(routeCoordinates.length / 2);
      const midPoint = routeCoordinates[midPointIndex];
      distanceLabel = L.marker(midPoint, {
        icon: L.divIcon({
          html: `<div class="font-sans absolute bg-white w-120 p-1 rounded-sm">Distance: ${distanceInKm} km</div>`,
        }),
      }).addTo(map);

      // Fit map bounds to the route
      map.fitBounds(routeLayer.getBounds());
    } else {
      alert("No route found. Please try a different location.");
    }
  } catch (error) {
    console.error("Error fetching route data:", error);
    alert("An error occurred while fetching route data.");
  }
}

// Event listener for "Get Directions" button
document
  .getElementById("getDirectionsButton")
  .addEventListener("click", async () => {
    const destination = document.getElementById("destinationInput").value;

    if (!destination) {
      alert("Please enter a destination.");
      return;
    }

    const profile = document.getElementById("profileSelect").value;

    // Log the selected travel mode to confirm selection
    console.log(`Selected travel mode: ${profile}`);

    // Using a basic geocoding API to get the destination's coordinates (You can use services like OpenCage, Mapbox, or Nominatim)
    const geocodeUrl = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
      destination
    )}&format=json&limit=1`;

    try {
      const response = await fetch(geocodeUrl);
      const results = await response.json();

      if (results && results.length > 0) {
        const destinationLatLng = {
          lat: parseFloat(results[0].lat),
          lng: parseFloat(results[0].lon),
        };

        // Set destination marker
        if (destinationMarker) {
          map.removeLayer(destinationMarker);
        }
        destinationMarker = L.marker(destinationLatLng)
          .addTo(map)
          .bindPopup(`Destination: ${destination}`)
          .openPopup();

        // Calculate and display route with the selected travel mode
        calculateRoute(destinationLatLng, profile);
      } else {
        alert(
          "Destination not found. Please enter a valid address or place name."
        );
      }
    } catch (error) {
      console.error("Error fetching geocode data:", error);
      alert("An error occurred while fetching the destination location.");
    }
  });

// Event listener for style change
document.getElementById("styleSelect").addEventListener("change", (event) => {
  const selectedStyle = event.target.value;
  switch (selectedStyle) {
    case "dark":
      L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
        {
          maxZoom: 19,
          attribution: "&copy; OpenStreetMap contributors &copy; CartoDB",
        }
      ).addTo(map);
      break;
    case "light":
      L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
        {
          maxZoom: 19,
          attribution: "&copy; OpenStreetMap contributors &copy; CartoDB",
        }
      ).addTo(map);
      break;
    case "satellite":
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: "&copy; OpenStreetMap contributors",
      }).addTo(map);
      break;
    case "terrain":
      L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
        maxZoom: 17,
        attribution: "&copy; OpenStreetMap contributors &copy; OpenTopoMap",
      }).addTo(map);
      break;
    default:
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: "&copy; OpenStreetMap contributors",
      }).addTo(map);
      break;
  }
});
