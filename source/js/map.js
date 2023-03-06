// Настройки карты
const MapSetup = {
  DEFAULT: {
    LAT: 59.968322,
    LNG: 30.317659,
  },
  SCALE : 17.5,
  TILE: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  OPTIONS: {
    zoomControl: false,
    attributionControl: false,
  }
};

// Настройки метки
const PinSetup = {
  MAIN: {
    URL: './img/map_pin.svg',
    SIZE: {
      WIDTH: 38,
      HEIGHT: 50,
    },
  },
  ANCHOR_DIVIDER: 2,
};

// Функция инициализации иконки маркера
const initMarkerIcon = (url, width, height, divider) => L.icon({
  iconUrl: url,
  iconSize: [width, height],
  iconAnchor: [width / divider, height],
});

// Формируем маркер
const formPinIcon = initMarkerIcon(PinSetup.MAIN.URL, PinSetup.MAIN.SIZE.WIDTH, PinSetup.MAIN.SIZE.HEIGHT, PinSetup.ANCHOR_DIVIDER);

// Позиционируем маркер
const formPinMarker = L.marker(
  {
    lat: MapSetup.DEFAULT.LAT,
    lng: MapSetup.DEFAULT.LNG,
  },
  {
    draggable: false,
    icon: formPinIcon,
  },
);

// Собираем карту
const initMap = () => {

  // Центрируем карту при загрузке и убираем кнопки изменения масштаба
  const map = L.map("map", MapSetup.OPTIONS).setView({
    lat: MapSetup.DEFAULT.LAT,
    lng: MapSetup.DEFAULT.LNG
  }, MapSetup.SCALE);

  // Добавляем слой с картой openstreetmap
  L.tileLayer(MapSetup.TILE).addTo(map);

  // Добавляем метку
  formPinMarker.addTo(map)
    .bindPopup('Набережная реки Карповки, 5, литера П, Санкт-Петербург, 197022');
}

export { initMap }
