const KEY = "e0283766cee7e7e70be7e75409ae8042";
const URL = "";

function Search() {
  let cidade = document.getElementById("cidade").value;
  BuscarDados(cidade);
}

async function BuscarDados(cidade) {
  let dados = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${KEY}&lang=pt_br&units=metric`
  )
    .then((response) => response.json())
    .catch((e) => alert("Error 500"));
  RetornarDados(dados);
}

function RetornarDados(dados) {
  console.log(dados);
  document.querySelector(".cidade").innerText = dados.name;

  document.querySelector(".temperatura").innerText = Math.round(
    dados.main.temp,
    0
  );
  document.querySelector(".estado").innerText = `, ${dados.sys.country}`;
  document.querySelector(".umidade").innerText = dados.main.humidity;
  let condicaoMeteorologica = (document.querySelector(".ensolarado").innerText =
    dados.weather[0].main);
  document.querySelector(
    ".img"
  ).src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`;
  RetornarImagem(condicaoMeteorologica);
}

function RetornarImagem(condicaoMeteorologica) {
  let imgElement = document.querySelector(".dsc-card-img");

  if (condicaoMeteorologica === "Clear") {
    imgElement.src = "./images/estados/ensolarada.webp";
  } else if (condicaoMeteorologica === "Rain") {
    imgElement.src = "./images/estados/rain.avif";
  } else if (condicaoMeteorologica === "Clouds") {
    imgElement.src = "./images/estados/clouds.jpg";
  } else if (condicaoMeteorologica === "Thunderstorm") {
    imgElement.src = "./images/estados/thunderstorm.jpg";
  } else if (condicaoMeteorologica === "Snow") {
    imgElement.src = "./images/estados/snow.jpg";
  } else if (
    condicaoMeteorologica === "Mist" ||
    condicaoMeteorologica === "Fog"
  ) {
    imgElement.src = "./images/estados/mist.jpg";
  } else if (condicaoMeteorologica === "Haze") {
    imgElement.src = "./images/estados/haze.jpg";
  }
}
