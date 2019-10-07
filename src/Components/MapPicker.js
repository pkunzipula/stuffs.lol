/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useState } from "react";
import L from "leaflet";

const MapPicker = () => {
  const position = [51.505, -0.09];
  const map = L.map("map").setView(position, 13);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  L.marker(position)
    .addTo(map)
    .bindPopup("A pretty CSS3 popup. <br> Easily customizable.");
  return (
    <div
      css={css`
        height: 250px;
      `}
      id="mapid"
    >
      Hey Now
    </div>
  );
};

export default MapPicker;
