/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

let map = null;

const initializeMap = location => {
  if (!location) return;
  if (!location.lat || !location.lng) return;
  map = L.map("mapid", {
    center: [location.lat, location.lng],
    zoom: 13,
    closePopupOnClick: false,
    boxZoom: false,
    doubleClickZoom: false,
    zoomControl: false,
    scrollWheelZoom: false,
    trackResize: false
  });

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  let myIcon = L.icon({
    iconUrl: "/img/marker-icon-2x.png",
    iconSize: [38, 65],
    iconAnchor: [22, 64]
  });
  L.marker([location.lat, location.lng], {
    icon: myIcon
  }).addTo(map);
};

const StuffsLocation = ({ location }) => {
  useEffect(() => {
    initializeMap(location);
    console.log("componentDidMount");
    return () => {
      if (!map) return;
      console.log(map);
      map.off();
      map.remove();
      console.log("componentWillUnmount");
    };
  }, [location]);
  if (!location || !location.lat || !location.lng) {
    map = null;
    return <div></div>;
  }
  return (
    <div
      id="mapid"
      css={css`
        margin: 0 auto;
        height: 300px;
        width: 100%;
        @media (max-width: 800px) {
          margin: 24px auto;
        }
      `}
    ></div>
  );
};

export default StuffsLocation;
