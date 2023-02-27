const MapSetup={DEFAULT:{LAT:59.968322,LNG:30.317659},SCALE:17.5,TILE:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",OPTIONS:{zoomControl:!1,attributionControl:!1}},PinSetup={MAIN:{URL:"./img/map_pin.svg",SIZE:{WIDTH:38,HEIGHT:50}},ANCHOR_DIVIDER:2},initMarkerIcon=(n,p,t,i)=>L.icon({iconUrl:n,iconSize:[p,t],iconAnchor:[p/i,t]}),formPinIcon=initMarkerIcon(PinSetup.MAIN.URL,PinSetup.MAIN.SIZE.WIDTH,PinSetup.MAIN.SIZE.HEIGHT,PinSetup.ANCHOR_DIVIDER),formPinMarker=L.marker({lat:MapSetup.DEFAULT.LAT,lng:MapSetup.DEFAULT.LNG},{draggable:!1,icon:formPinIcon}),initMap=()=>{const n=L.map("map",MapSetup.OPTIONS).setView({lat:MapSetup.DEFAULT.LAT,lng:MapSetup.DEFAULT.LNG},MapSetup.SCALE);L.tileLayer(MapSetup.TILE).addTo(n),formPinMarker.addTo(n).bindPopup("Набережная реки Карповки, 5, литера П, Санкт-Петербург, 197022")};export{initMap};