require("leaflet-css");
require("./map.scss");
import L from 'leaflet';
import esri from 'esri-leaflet';

export default class MapView {
    constructor(opts) {
        var map = L.map('map-container').setView([38.84, -105.04], 13);
        esri.basemapLayer("Topographic").addTo(map);
    }
}
