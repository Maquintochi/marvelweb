const filmes = [
  { titulo: "Capitão América: O Soldado Invernal", ano: 2014, categoria: "fase-2", diretor: "Irmãos Russo", nota: 7.7, poster: "posters/257136.jpg", trailer: "https://www.youtube.com/watch?v=7SlFlB_ADIA" },
  { titulo: "Shang-Chi e a Lenda dos Dez Anéis", ano: 2021, categoria: "fase-4", diretor: "Destin D. Cretton", nota: 7.4, poster: "posters/2818037.jpg", trailer: "https://www.youtube.com/watch?v=8YjFbMbfXaQ" },
  { titulo: "Thor: O Mundo Sombrio", ano: 2013, categoria: "fase-2", diretor: "Alan Taylor", nota: 6.8, poster: "posters/21024039_20130801212713895.jpg", trailer: "https://www.youtube.com/watch?v=npvJ9FTgZbM" },
  { titulo: "Pantera Negra: Wakanda Para Sempre", ano: 2022, categoria: "fase-4", diretor: "Ryan Coogler", nota: 7.1, poster: "posters/bb30eccf-3bf0-4757-9483-a2dde059414c.jpg", trailer: "https://www.youtube.com/watch?v=-Z4zKOkQbsk" },
  { titulo: "Capitão América: O Primeiro Vingador", ano: 2011, categoria: "fase-1", diretor: "Joe Johnston", nota: 6.9, poster: "posters/Capameposterc.webp", trailer: "https://www.youtube.com/watch?v=JerVrbLldXw" },
  { titulo: "Viúva Negra", ano: 2021, categoria: "fase-4", diretor: "Cate Shortland", nota: 6.7, poster: "posters/image_a2514f6d.jpeg", trailer: "https://www.youtube.com/watch?v=RxAzAMhrBiM" },
  { titulo: "Thor", ano: 2011, categoria: "fase-1", diretor: "Kenneth Branagh", nota: 7.0, poster: "posters/images (1).jpg", trailer: "https://www.youtube.com/watch?v=JOddp-nlNvQ" },
  { titulo: "Capitão América: Guerra Civil", ano: 2016, categoria: "fase-3", diretor: "Irmãos Russo", nota: 7.8, poster: "posters/images (2).jpg", trailer: "https://www.youtube.com/watch?v=dKrVegVI0Us" },
  { titulo: "Homem-Aranha: Longe de Casa", ano: 2019, categoria: "fase-3", diretor: "Jon Watts", nota: 7.5, poster: "posters/images (3).jpg", trailer: "https://www.youtube.com/watch?v=Nt9L1jCKGnE" },
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
