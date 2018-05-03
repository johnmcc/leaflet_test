const MapWrapper = function(element, lat, lng, zoom){
    const osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    const osm = new L.TileLayer(osmUrl);

    this.map = L.map(element)
        .addLayer(osm)
        .setView([lat, lng], zoom);
};

MapWrapper.prototype.goTo = function(lat, lng){
    this.map.setView([lat, lng]);
};

MapWrapper.prototype.addMarker = function(lat, lng, text){
    L.marker([lat, lng])
    .bindPopup(text)
    .on("click", function(){
        this.openPopup();
    })
    .addTo(this.map);
}