import 'bootstrap/dist/js/bootstrap.js';
import template from './app.html';
import MapView from './Components/Map/map.js';
require("./app.scss");

class application {
    constructor(opts) {
        this.rootView = document.getElementById('app-container').innerHTML = template;
        this.mapView = new MapView(opts);
        console.info('App started with these options:', opts);
    }
}

window.app = application;

module.exports = application;
