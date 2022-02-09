async function getData() {
  try {
    const resp1 = await axios(`https://randomuser.me/api/`);

    const fname = resp1.data.results[0].name.first;
    const lname = resp1.data.results[0].name.last;
    const img = resp1.data.results[0].picture.large;
    const gender = resp1.data.results[0].gender;
    const email = resp1.data.results[0].email;
    const street = resp1.data.results[0].location.street.name;
    const nr = resp1.data.results[0].location.street.number;
    const city = resp1.data.results[0].location.city;
    const country = resp1.data.results[0].location.country;

    const lat = resp1.data.results[0].location.coordinates.latitude;
    const lon = resp1.data.results[0].location.coordinates.longitude;

    gender == "female"
      ? (document.body.style.backgroundColor = "pink")
      : (document.body.style.backgroundColor = "lightblue");
    document.getElementById("name").innerHTML = `${fname} ${lname}`;
    document.getElementById(
      "email"
    ).innerHTML = `<a href="mailto:${email}">${email}</a>`;
    document.getElementById(
      "adress"
    ).innerHTML = `${street} ${nr}, ${city} ${country}`;
    document.getElementById("profile").src = img;

    initMap(lat, lon, img);
  } catch {
    console.log("error", error);
  }
}

let map;

function initMap(lat, lon, img) {
  map = new google.maps.Map(document.getElementById("map"), {
    center: new google.maps.LatLng(lat, lon),
    zoom: 5,
  });

  const image = {
    url: img,
    scaledSize: new google.maps.Size(50, 50),
  };
  const Marker = new google.maps.Marker({
    position: new google.maps.LatLng(lat, lon),
    map,
    icon: image,
  });
}
