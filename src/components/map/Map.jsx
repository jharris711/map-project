import React, { Component } from "react";
import { connect } from "react-redux";
import L from "leaflet";

import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
import "leaflet-defaulticon-compatibility";

const style = {
  overflow: "hidden",
  width: "100%",
  height: "100vh"
};

const thunderforestAPIkey = process.env.REACT_APP_THUNDERFOREST_API_KEY;

const maps = {
  light: L.tileLayer(
    "https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}"
  ),
  dark: L.tileLayer(
    "https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
  ),
  spinal: L.tileLayer(
    `https://{s}.tile.thunderforest.com/spinal-map/{z}/{x}/{y}.png?apikey=${thunderforestAPIkey}`
  )
};
