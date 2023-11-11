let currentLanguage = 'en';
let currentPage = 1;

// Función para obtener los géneros desde la API
// obtener los géneros
async function fetchGenres() {
  try {
    const response = await fetch(`${apiUrl}/genre/movie/list?api_key=${apiKey}&language=${currentLanguage}`);
@@ -25,7 +25,7 @@ async function fetchGenres() {
  }
}

// Función para obtener y mostrar las películas
// obtener y mostrar las películas
async function fetchMovies(genreId = '', page = 1) {
  try {
    const response = await fetch(`${apiUrl}/movie/popular?api_key=${apiKey}&language=${currentLanguage}&with_genres=${genreId}&page=${page}`);
@@ -70,7 +70,7 @@ toggleLanguageButton.addEventListener('click', () => {
fetchGenres();
fetchMovies();

// Cambiar películas al seleccionar un género
// Cambiar películas 
genreSelect.addEventListener('change', () => {
  currentPage = 1; // Resetear la página al cambiar el género
  fetchMovies(genreSelect.value, currentPage);
