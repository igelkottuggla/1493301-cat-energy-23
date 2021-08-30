"use strict";

const tabletWidth = 768;
const desktopWidth = 1440;

let map, icon;

const setNewCenter = () => {
  if (window.innerWidth < tabletWidth) {
    map.setZoom(14);
  } else if (
    window.innerWidth >= tabletWidth &&
    window.innerWidth < desktopWidth
  ) {
    map.setZoom(15.5);
  } else {
    map.setZoom(16);
    map.setCenter({ lat: 59.9385374045993, lng: 30.31966093815555 });
  }
};

window.addEventListener("resize", setNewCenter);

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 59.938916705952764, lng: 30.322972921767455 },
  });

  setNewCenter();

  if (window.innerWidth >= tabletWidth) {
    icon = {
      url: "img/footer/pin-tablet.png",
    };
  } else {
    icon = {
      url: "img/footer/pin-mobile.png",
    };
  }
  let marker = new google.maps.Marker({
    position: { lat: 59.9381, lng: 30.323 },
    map: map,
    icon: icon,
  });
}
