/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

let map = null;

const initializeMap = (location, setLocation) => {
  map = L.map("mapid");
  window.navigator.geolocation.getCurrentPosition(
    position => {
      const latlng = [
        location.lat || position.coords.latitude,
        location.lng || position.coords.longitude
      ];
      map = map.setView(latlng, 13);
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);
      L.marker(latlng)
        .addTo(map)
        .bindPopup("Location of Stuffs")
        .openPopup();
      const popup = L.popup();

      map.on("click", event => {
        console.log(event.latlng);
        setLocation({
          lat: event.latlng.lat,
          lng: event.latlng.lng
        });
        popup
          .setLatLng(event.latlng)
          .setContent("Activity Location: " + event.latlng.toString())
          .openOn(map);
      });
    },
    error => {
      console.error(error);
    },
    {}
  );
};

const MapPicker = ({ location, setLocation }) => {
  useEffect(() => {
    initializeMap(location, setLocation);
    console.log("Everything is here");
    return () => {
      map.off();
      map.remove();
      console.log("componentWillUnmount");
    };
  }, [location, setLocation]);
  return (
    <div
      css={css`
        height: 250px;
        width: 100%;
      `}
      id="mapid"
    ></div>
  );
};

export default MapPicker;
