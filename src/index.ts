/*
 * Copyright 2019 Google LLC. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/* eslint-disable no-undef, @typescript-eslint/no-unused-vars, no-unused-vars */
import "./style.css";
import * as locations from "../location_history.json";

let map: google.maps.Map;

function initMap(): void {

  const lat: number = +locations["Location History"][0]["Latitude, Longitude"].split(" ")[0];
  const lng: number = +locations["Location History"][0]["Latitude, Longitude"].split(" ")[4];

  map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
    zoom: 10,
    center: new google.maps.LatLng(lat, lng),
    mapTypeId: "terrain",
  });

  // Create a <script> tag and set the USGS URL as the source.
  const script = document.createElement("script");

  // This example uses a local copy of the GeoJSON stored at
  // http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojsonp
  script.src =
    "https://developers.google.com/maps/documentation/javascript/examples/json/earthquake_GeoJSONP.js";
  document.getElementsByTagName("head")[0].appendChild(script);
}

// Loop through the results array and place a marker for each
// set of coordinates.
const eqfeed_callback = function (results: any) {

  for (let i = 0; i < locations["Location History"].length; i++) {
    // format -> "49.561 \u00b1 39.66 meters, 5.537 \u00b1 39.66 meters"
    const lat: number = +locations["Location History"][i]["Latitude, Longitude"].split(" ")[0];
    const lng: number = +locations["Location History"][i]["Latitude, Longitude"].split(" ")[4];
    const latLng = new google.maps.LatLng(lat, lng);

    new google.maps.Marker({
      position: latLng,
      map: map,
      title: locations["Location History"][i].Time.split(" ")[0],
      label: {
        text: locations["Location History"][i].Time.split(" ")[0],
        color: '#222222',
        fontSize: '12px'
      }
    });
  }
};
export { initMap, eqfeed_callback };
