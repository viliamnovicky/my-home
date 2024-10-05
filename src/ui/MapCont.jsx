import mapboxgl from "mapbox-gl";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { FaMapMarkerAlt } from "react-icons/fa";
import { createRoot } from "react-dom/client";
import { getFlagEmoji } from "../helpers/getFlagEmoji";

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
    min-width: 35rem;
    max-width: 50vw;
  }

  .mark {
    width: 3rem;
    height: 3rem;
    color: var(--map-700);
  }

  .hover-popup {
    text-transform: uppercase;
    font-weight: 400;
    font-size: 1.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    img {
      width: 2rem;
      margin: 0;
      padding: 0;
    }
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
  .white {
    color: var(--white);
  }
`;

function MapCont({
  zoom,
  setClickCoordinates,
  hills,
  setOpenNewHillForm,
  setMenuVisibility,
  onShowDetails,
}) {
  function handleOpenForm() {
    setOpenNewHillForm(true);
    setMenuVisibility(true);
  }

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
      const data = e;
      console.log(data);

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
      if (e.originalEvent.target.classList.contains("mapboxgl-canvas")) {
        setClickCoordinates([coords.lng, coords.lat]);
        handleOpenForm();

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

    {
      hills &&
        map.current.on("load", () => {
          for (const peak of hills) {
            const markerContainer = document.createElement("div");
            const root = createRoot(markerContainer);
            root.render(<FaMapMarkerAlt className={`custom-marker mark ${peak.color}`} />);

            // Create the main popup
            const mainPopup = new mapboxgl.Popup({ offset: 20 }).setHTML(
              `<h3>${peak.name} (${peak.altitude}m)</h3>
                <img src="${peak.image}" alt="${peak.name}"></img>
                <button class="popup-button" id=${peak.id}>details</button>`
            );

            const hoverPopup = new mapboxgl.Popup({ offset: 10 })
              .setHTML(
                `<div class="hover-popup">
                  <img src="https://flagcdn.com/16x12/${peak.countryCode.toLowerCase()}.png" 
                  alt="${peak.countryName} flag">
                  <p>
                  ${peak.name} (${peak.altitude}m)
                  </p>
                </div>`
              )
              .setLngLat(peak.coords);

            // Create the marker and attach mouse events
            const marker = new mapboxgl.Marker(markerContainer)
              .setLngLat(peak.coords)
              .setPopup(mainPopup)
              .addTo(map.current);

            // Add mouse events to show/hide hover popup
            markerContainer.addEventListener("mouseenter", () => {
              hoverPopup.addTo(map.current);
            });

            markerContainer.addEventListener("mouseleave", () => {
              hoverPopup.remove();
            });

            mainPopup.on("open", () => {
              document.getElementById(peak.id).addEventListener("click", () => onShowDetails(peak.tag));
            });
          }
        });
    }

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
