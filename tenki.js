const url = new URL("https://api.openweathermap.org/data/2.5/weather");
const params = {
    appid: "80c8b8161f02d41197ff6bb8ca596de0",
    q: "london"
};
const qs = new URLSearchParams(params);

fetch(`${url}?${qs}`, {
    method: "GET"
})
.then(response => {
    const json = response.json();
    return json;
})
.then(json => {
    const weather = json.weather[0].description;
    console.log(weather);
    const root = document.getElementById("root");
    root.innerHTML = `<p>${weather}</p>`;
});

