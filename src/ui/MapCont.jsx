import mapboxgl from "mapbox-gl";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { FaMapMarkerAlt, FaMarker } from "react-icons/fa";
import { createRoot } from "react-dom/client";
import { useHillsData } from "../features/useHillsData";

const StyledMapCont = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.2s;
  border-radius: 2rem;

  .marker {
    background-image: url("https://docs.mapbox.com/help/demos/custom-markers-gl-js/mapbox-icon.png");
    background-size: cover;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    cursor: pointer;
  }

  .mapboxgl-popup {
    max-width: 200px;
  }

  .mapboxgl-popup-content {
    text-align: center;
    font-family: "Open Sans", sans-serif;
  }

  .mark {
    width: 3rem;
    height: 3rem;
    color: var(--map-700);
  }

  .purple {
    color: #9e7cd7;
  }
  .blue {
    color: #20a7db;
  }

  .green {
    color: #26e936;
  }

  .yellow {
    color: #ffea61;
  }
  .orange {
    color: #ffb347;
  }

  .red {
    color: #ff6666;
  }
  .black {
    color: var(--black);
  }
`;

const geojson = {
  peaks: [
    {
      color: "purple",
      altitude: 459,
      coordinates: [11.1388688305, 47.5200236826],
      name: "Karwendel",
      description: "Karwendel",
      image: "https://museen.de/imgbstr-9928182.jpg",
    },
    {
      color: "blue",
      altitude: 995,
      coordinates: [11.2388688305, 47.4200236826],
      name: "Karwendel",
      description: "Karwendel",
      image: "https://museen.de/imgbstr-9928182.jpg",
    },
    {
      color: "green",
      altitude: 1391,
      coordinates: [11.22862059, 47.45134097866],
      name: "Hoher Kranzberg",
      description: "The classic",
      image:
        "https://i0.wp.com/homeoftravel.de/wp-content/uploads/2021/04/Wanderung-zum-Hohen-Kranzberg-in-Mittenwald.jpg?fit=2048%2C1280&quality=89&ssl=1",
    },
    {
      color: "yellow",
      altitude: 1565,
      coordinates: [11.37184097751, 47.62600443592],
      name: "Jochberg",
      description: "Very najs",
      image:
        "https://i0.wp.com/homeoftravel.de/wp-content/uploads/2021/05/Jochberg.jpg?fit=1920%2C1080&quality=89&ssl=1",
    },
    {
      color: "orange",
      altitude: 2385,
      coordinates: [11.2988688305, 47.4300236826],
      name: "Westliche Karwendelspitze",
      description: "Karwendel",
      image: "https://museen.de/imgbstr-9928182.jpg",
    },
    {
      color: "red",
      altitude: 2962,
      coordinates: [10.98582176, 47.42712457],
      name: "Zugspitze",
      description: "Top of germany",
      image:
        "https://zugspitze.de/Bilder/Zugspitze/Sommer/Gipfel%20-%20Gipfelstation/194/image-thumb__194__hero-content/Zugspitze_Gipfelstation_2018_Brey.171e18f5.jpg",
    },
    {
      color: "black",
      altitude: 3200,
      coordinates: [11.77184097751, 47.62600443592],
      name: "Jochberg",
      description: "Very najs",
      image:
        "https://i0.wp.com/homeoftravel.de/wp-content/uploads/2021/05/Jochberg.jpg?fit=1920%2C1080&quality=89&ssl=1",
    },
  ],
};

function MapCont({ zoom, setClickCoordinates, hills, setOpenNewHillForm }) {

  mapboxgl.accessToken =
    "pk.eyJ1IjoidmlsaWFtbm92aWNreSIsImEiOiJjbGVlazBvcWYwaHVjM3ZtajZveGoxM244In0.hnpQA34MhL9qxzfDOcUd2g";
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(11.264);
  const [lat, setLat] = useState(47.4413);
  const markerRef = useRef(null);

  useEffect(() => {

    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/viliamnovicky/cleelbb5x004001qktswrhubb", // Use a standard Mapbox style for testing
      center: [lng, lat],
      zoom: zoom,
      scrollZoom: {
        zoomRate: 2, // Default is 1, lower value for less sensitivity
        wheelZoomRate: 2, // Default is 1, lower value for less sensitivity
      },
    });

    map.current.on("click", (e) => {
      const coords = e.lngLat;
      const data = e
      console.log(data)
    
      // Remove the previous marker if it exists
      if (markerRef.current) {
        markerRef.current.remove();
      }

      // Center the map on the clicked location
    map.current.flyTo({
      center: [coords.lng, coords.lat],
      zoom: map.current.getZoom(), // Keep the current zoom level
      speed: 0.7, // Optional: speed of the fly-to effect, default is 1.2
    });

      // Check if the click was directly on the map (not on a marker or any other overlay)
      if (e.originalEvent.target.classList.contains('mapboxgl-canvas')) {
        setClickCoordinates([coords.lng, coords.lat]);
        setOpenNewHillForm(true)
    
    
        // Create a DOM element for the custom marker
        const markerContainer = document.createElement("div");
        const root = createRoot(markerContainer);
        root.render(<FaMapMarkerAlt className="mark" />);
    
        // Create a new marker
        const newMarker = new mapboxgl.Marker(markerContainer)
          .setLngLat([coords.lng, coords.lat])
          .addTo(map.current);
    
        // Update the marker ref
        markerRef.current = newMarker;
      }
    });


    map.current.on("load", () => {
      for (const peak of hills) {
        const markerContainer = document.createElement("div");
        const root = createRoot(markerContainer);
        root.render(<FaMapMarkerAlt className={`custom-marker mark ${peak.color}`} />);

        new mapboxgl.Marker(markerContainer)
          .setLngLat(peak.coords)
          .setPopup(
            new mapboxgl.Popup({ offset: 20 }).setHTML(
              `<h3>${peak.name} (${peak.altitude}m)</h3>
              <img src="${peak.image}"></img>
              <button class="popup-button">details</button>`
            )
          )
          .addTo(map.current);
      }
    });

    map.current.on("error", (error) => {
      console.error("Mapbox error:", error);
      if (error.source) {
        console.error("Error source:", error.source);
      }
      if (error.tile) {
        console.error("Error tile:", error.tile);
      }
    });
  }, [lng, lat, zoom]); // Initialize map on component mount

  useEffect(() => {
    if (map.current) {
      map.current.setZoom(zoom);
    }
  }, [zoom]); // Update zoom level when `zoom` prop changes

  return <StyledMapCont ref={mapContainer} className="map-container" />;
}

export default MapCont;
