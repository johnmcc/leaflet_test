let mw;

const handleTokyoClick = (event) => {
    event.preventDefault();
    const lat = 35.6895;
    const lng = 139.6917;

    mw.goTo(lat, lng);
    mw.addMarker(lat, lng, "Tokyo");
};

const handleFindMeClick = (event) => {
    event.preventDefault();
    if("geolocation" in navigator){
        navigator.geolocation.getCurrentPosition(position => {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;
            
            mw.goTo(lat, lng);
            mw.addMarker(lat, lng, "You Are Here");
        });
    }
};

const setupListeners = () => {
    const tokyoBtn = document.getElementById("tokyo");
    tokyoBtn.addEventListener("click", handleTokyoClick);

    const findmeBtn = document.getElementById("findMe");
    findmeBtn.addEventListener("click", handleFindMeClick);
};

const app = () => {
    mw = new MapWrapper("map", 55, -4, 10);

    setupListeners();
}

window.addEventListener("load", app);