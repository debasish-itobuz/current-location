const btn = document.querySelector("#btn");

async function getdata(lat, long) {
  const output = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=0c80b2b56f1943ada19100744230103&q=${lat},${long}&aqi=no`
  );
  return await output.json();
}

async function getLocation(position) {
  //   console.log(position);
  const result = await getdata(
    position.coords.latitude,
    position.coords.longitude
  );
  console.log(result);
}

function getfailed() {
  console.log("Can't fetch current location");
}

btn.addEventListener("click", async () => {
  navigator.geolocation.getCurrentPosition(getLocation, getfailed);
});
