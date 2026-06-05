const filmes = [
  { titulo: "Homem-Aranha: Sem Volta para Casa", ano: 2021, categoria: "fase-4", diretor: "Jon Watts", nota: 8.2, poster: "posters/1g0dhYtq4irTy1GPXvft6k4YIjm.jpg", trailer: "https://www.youtube.com/watch?v=JfVOs4VSpmA" },
  { titulo: "Os Vingadores", ano: 2012, categoria: "fase-1", diretor: "Joss Whedon", nota: 8.0, poster: "posters/4ssDuvEDkSARwEDyBl2X5EHvYKU.jpg", trailer: "https://www.youtube.com/watch?v=eOrNdBpGMv8" },
  { titulo: "Mulan", ano: 2020, categoria: "outros", diretor: "Niki Caro", nota: 5.7, poster: "posters/6ELCZlTA5lGUops70hKdB83WJhH.jpg", trailer: "https://www.youtube.com/watch?v=KK8FHdFluOQ" },
  { titulo: "Homem-Formiga", ano: 2015, categoria: "fase-2", diretor: "Peyton Reed", nota: 7.3, poster: "posters/7SGGUITE6oc2fh9MjlK5M00dsQd.jpg", trailer: "https://www.youtube.com/watch?v=pWdKf3MneyI" },
  { titulo: "Vingadores: Guerra Infinita", ano: 2018, categoria: "fase-3", diretor: "Irmãos Russo", nota: 8.4, poster: "posters/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg", trailer: "https://www.youtube.com/watch?v=6ZfuNTqbHE8" },
  { titulo: "Doutor Estranho no Multiverso da Loucura", ano: 2022, categoria: "fase-4", diretor: "Sam Raimi", nota: 6.9, poster: "posters/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg", trailer: "https://www.youtube.com/watch?v=X23X_S6fU7w" },
  { titulo: "Capitão América: O Soldado Invernal", ano: 2014, categoria: "fase-2", diretor: "Irmãos Russo", nota: 7.7, poster: "posters/257136.jpg", trailer: "https://www.youtube.com/watch?v=7SlFlB_ADIA" },
  { titulo: "Shang-Chi e a Lenda dos Dez Anéis", ano: 2021, categoria: "fase-4", diretor: "Destin D. Cretton", nota: 7.4, poster: "posters/2818037.jpg", trailer: "https://www.youtube.com/watch?v=8YjFbMbfXaQ" },
  { titulo: "Thor: O Mundo Sombrio", ano: 2013, categoria: "fase-2", diretor: "Alan Taylor", nota: 6.8, poster: "posters/21024039_20130801212713895.jpg", trailer: "https://www.youtube.com/watch?v=npvJ9FTgZbM" },
  { titulo: "Pantera Negra: Wakanda Para Sempre", ano: 2022, categoria: "fase-4", diretor: "Ryan Coogler", nota: 7.1, poster: "posters/bb30eccf-3bf0-4757-9483-a2dde059414c.jpg", trailer: "https://www.youtube.com/watch?v=-Z4zKOkQbsk" },
  { titulo: "Capitão América: O Primeiro Vingador", ano: 2011, categoria: "fase-1", diretor: "Joe Johnston", nota: 6.9, poster: "posters/Capameposterc.webp", trailer: "https://www.youtube.com/watch?v=JerVrbLldXw" },
  { titulo: "Vingadores: Ultimato", ano: 2019, categoria: "fase-3", diretor: "Irmãos Russo", nota: 8.4, poster: "posters/eu_disneyplus_avengers-endgame_c169_r_f4af8cb5.jpg", trailer: "https://www.youtube.com/watch?v=TcMBFSGVi1c" },
  { titulo: "O Incrível Hulk", ano: 2008, categoria: "fase-1", diretor: "Louis Leterrier", nota: 6.6, poster: "posters/gKzYx79y0AQTL4UArK1cBQl3nvm.jpg", trailer: "https://www.youtube.com/watch?v=xcFMYB3LVYU" },
  { titulo: "Viúva Negra", ano: 2021, categoria: "fase-4", diretor: "Cate Shortland", nota: 6.7, poster: "posters/image_a2514f6d.jpeg", trailer: "https://www.youtube.com/watch?v=RxAzAMhrBiM" },
  { titulo: "Thor", ano: 2011, categoria: "fase-1", diretor: "Kenneth Branagh", nota: 7.0, poster: "posters/images (1).jpg", trailer: "https://www.youtube.com/watch?v=JOddp-nlNvQ" },
  { titulo: "Capitão América: Guerra Civil", ano: 2016, categoria: "fase-3", diretor: "Irmãos Russo", nota: 7.8, poster: "posters/images (2).jpg", trailer: "https://www.youtube.com/watch?v=dKrVegVI0Us" },
  { titulo: "Homem-Aranha: Longe de Casa", ano: 2019, categoria: "fase-3", diretor: "Jon Watts", nota: 7.5, poster: "posters/images (3).jpg", trailer: "https://www.youtube.com/watch?v=Nt9L1jCKGnE" },
  { titulo: "Guardiões da Galáxia Vol. 3", ano: 2023, categoria: "fase-5", diretor: "James Gunn", nota: 7.9, poster: "posters/images (4).jpg", trailer: "https://www.youtube.com/watch?v=u3V5KDHRQvk" },
  { titulo: "Os Marvels", ano: 2023, categoria: "fase-5", diretor: "Nia DaCosta", nota: 5.9, poster: "posters/images (5).jpg", trailer: "https://www.youtube.com/watch?v=wS_qbMgNyHQ" },
  { titulo: "Homem de Ferro", ano: 2008, categoria: "fase-1", diretor: "Jon Favreau", nota: 7.9, poster: "posters/images.jpg", trailer: "https://www.youtube.com/watch?v=8ugaeA-nMTc" },
  { titulo: "Vingadores: Era de Ultron", ano: 2015, categoria: "fase-2", diretor: "Joss Whedon", nota: 7.3, poster: "posters/or06FN3Dka5tukk1e9sl16pB3iy.jpg", trailer: "https://www.youtube.com/watch?v=tmeOjFno6Do" },
  { titulo: "Thor: Amor e Trovão", ano: 2022, categoria: "fase-4", diretor: "Taika Waititi", nota: 6.2, poster: "posters/pIkRyD18kI4FhoCNQuWxWu5cBLM.jpg", trailer: "https://www.youtube.com/watch?v=tgB1wUcmbbw" },
  { titulo: "Homem de Ferro 2", ano: 2010, categoria: "fase-1", diretor: "Jon Favreau", nota: 6.9, poster: "posters/Poster_de_HdF_2.jpg", trailer: "https://www.youtube.com/watch?v=BoohRdNiElk" },
  { titulo: "Homem de Ferro 3", ano: 2013, categoria: "fase-2", diretor: "Shane Black", nota: 7.1, poster: "posters/qhPtAc1TKBmPqNvcdXSO n9Bn7hZ.jpg", trailer: "https://www.youtube.com/watch?v=2CzoSeClcw0" },
  { titulo: "Guardiões da Galáxia", ano: 2014, categoria: "fase-2", diretor: "James Gunn", nota: 8.0, poster: "posters/r7vmZjyZw9rpJMQUdXpjgiCOK9.jpg", trailer: "https://www.youtube.com/watch?v=d96cjJhvlMA" },
  { titulo: "Thor: Ragnarok", ano: 2017, categoria: "fase-3", diretor: "Taika Waititi", nota: 7.9, poster: "posters/rzRwTcFvttcN1ZpZXzv4j3tSdJu.webp", trailer: "https://www.youtube.com/watch?v=ue80QwXMRHg" },
  { titulo: "Doutor Estranho", ano: 2016, categoria: "fase-3", diretor: "Scott Derrickson", nota: 7.5, poster: "posters/uGBVJ3bEbCoZbDjlI9wTxcygko1.jpg", trailer: "https://www.youtube.com/watch?v=HSzx-zryEgM" },
  { titulo: "Pantera Negra", ano: 2018, categoria: "fase-3", diretor: "Ryan Coogler", nota: 7.3, poster: "posters/uxzzxjjgPlY7slzFvMotPv8wjKA.jpg", trailer: "https://www.youtube.com/watch?v=xjDjIWPwcPU" }
];

let categoriaAtiva = "todos";

function mostrarFilmes() {
  const gallery = document.getElementById("gallery");
  const emptyState = document.getElementById("emptyState");
  const contador = document.getElementById("resultsCount");
  const buscaTratada = document.getElementById("searchInput").value.toLowerCase();
  const buscaCategoria = buscaTratada.replace(" ", "-");

  gallery.innerHTML = "";

  const resultado = filmes.filter(function(filme) {
    const tituloNormalizado = filme.titulo.toLowerCase();
    const categoriaNormalizada = (filme.categoria || "").toLowerCase();

    const buscaOk = tituloNormalizado.includes(buscaTratada) ||
                    categoriaNormalizada.includes(buscaCategoria) ||
                    categoriaNormalizada.replace("-", " ").includes(buscaTratada);

    const categoryOk = categoriaAtiva === "todos" || filme.categoria === categoriaAtiva;

    return buscaOk && categoryOk;
  });

  if (resultado.length === 0) {
    emptyState.hidden = false;
    contador.textContent = "0 filme(s) encontrado(s)";
    return;
  }

  emptyState.hidden = true;
  contador.textContent = resultado.length + " filme(s) encontrado(s)";

  for (let i = 0; i < resultado.length; i++) {
    const f = resultado[i];
    const card = document.createElement("article");
    card.className = "card";

    const catBadge = (f.categoria || "").replace("-", " ").toUpperCase();

    card.innerHTML =
      '<a href="' + f.trailer + '" target="_blank" class="card-link">' +
        '<div class="card-poster">' +
          '<img src="' + f.poster + '" alt="Pôster do filme ' + f.titulo + '" class="card-img">' +
          '<div class="card-play">▶</div>' +
          '<span class="card-badge">' + catBadge + '</span>' +
          '<span class="card-year">' + (f.ano || "") + '</span>' +
        '</div>' +
      '</a>' +
      '<div class="card-body">' +
        '<h3 class="card-title">' + f.titulo + '</h3>' +
        '<p class="card-director">Dir. ' + f.diretor + '</p>' +
        '<p class="card-rating">&#9733; ' + f.nota.toFixed(1) + '</p>' +
      '</div>';

    gallery.appendChild(card);
  }
}

document.getElementById("searchInput").addEventListener("input", mostrarFilmes);

const botoes = document.querySelectorAll(".cat-btn");
for (let i = 0; i < botoes.length; i++) {
  botoes[i].addEventListener("click", function() {
    for (let j = 0; j < botoes.length; j++) {
      botoes[j].classList.remove("active");
    }
    this.classList.add("active");
    categoriaAtiva = this.getAttribute("data-category");
    mostrarFilmes();
  });
}

mostrarFilmes();