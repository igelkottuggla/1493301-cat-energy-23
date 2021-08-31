"use strict";

const tabletWidth = 768;
const desktopWidth = 1440;
const phonesMediaQuery = window.innerWidth < tabletWidth;
const tabletsMediaQuery = window.innerWidth >= tabletWidth;
const desktopsMediaQuery = window.innerWidth < desktopWidth;
const desktopCenterLat = 59.9385374045993;
const desktopCenterLng = 30.31966093815555;
const pinCenterLat = 59.9381;
const pinCenterLng = 30.323;

let map, icon;

const script = document.createElement("script");
script.src =
  "https://maps.googleapis.com/maps/api/js?key=AIzaSyDcBUTjQkUf6aJJwRm0NgXnw6QcmjH-y8U&callback=initMap";
script.async = true;

const setNewCenter = () => {
  if (phonesMediaQuery) {
    map.setZoom(14);
  } else if (tabletsMediaQuery && desktopsMediaQuery) {
    map.setZoom(15.5);
  } else {
    map.setZoom(16);
    map.setCenter({ lat: desktopCenterLat, lng: desktopCenterLng });
  }
};

window.initMap = () => {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 59.938916705952764, lng: 30.322972921767455 },
  });

  setNewCenter();

  if (tabletsMediaQuery) {
    icon = {
      url: "img/footer/pin-tablet.png",
    };
  } else {
    icon = {
      url: "img/footer/pin-mobile.png",
    };
  }
  let marker = new google.maps.Marker({
    position: { lat: pinCenterLat, lng: pinCenterLng },
    map: map,
    icon: icon,
  });
};

document.head.appendChild(script);

window.addEventListener("resize", setNewCenter);
