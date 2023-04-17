(async function () {
  data = await fetch("./data/data.json").then((response) => response.json());
  console.log(data);
  const gen = ['All'];
  const lang = ['All'];
  const year = ['All'];
  const rating = ['All'];

  showData(data);
  setSelect();

  const selectGenElem = document.getElementById("genre");
  const selectRatingElem = document.getElementById("rating");
  const selectYearElem = document.getElementById("release");
  const selectLangElem = document.getElementById("language");
  selectGenElem.addEventListener("change", filteredData);
  selectRatingElem.addEventListener("change", filteredData);
  selectYearElem.addEventListener("change", filteredData);
  selectLangElem.addEventListener("change", filteredData);

  function filteredData() {
    const filterdData = data.filter((m) => {
      const filterdDataG =
        selectGenElem.value == "All"
          ? m
          : m.genres.includes(selectGenElem.value);
      const filterdDataY =
        selectYearElem.value == "All"
          ? m
          : new Date(m.release_date).getFullYear() == selectYearElem.value;
      const filterdDataL =
        selectLangElem.value == "All"
          ? m
          : m.original_language == selectLangElem.value;
      const filterdDataR =
        selectRatingElem.value == "All"
          ? m
          : m.vote_average >= selectRatingElem.value;

      return filterdDataG && filterdDataY && filterdDataL && filterdDataR;
    });
    showData(filterdData);

    console.log(filterdData);
  }

  function showData(data) {
    const mainElem = document.getElementById("main");
    mainElem.innerHTML = "";

    data.map(function (e) {
      const HeaderrowElem = document.createElement("tr");
      const HeaderElem1 = document.createElement("th");
      HeaderElem1.innerText = "Rank";
      const HeaderElem2 = document.createElement("th");
      HeaderElem2.innerText = "Movie";
      const HeaderElem3 = document.createElement("th");
      HeaderElem3.innerText = "Year";
      HeaderrowElem.appendChild(HeaderElem1, HeaderElem2, HeaderElem3);

      const rowElem = document.createElement("tr");
      const dRankElem = document.createElement("td"); //.innerHTML = data.vote_average
      dRankElem.innerText = e.vote_average;
      const dMoveElem = document.createElement("td"); //.innerHTML = data.title
      const imgMovieElem = document.createElement("img");
      const pMovieElem = document.createElement("p");
      imgMovieElem.src = `https://image.tmdb.org/t/p/w45${e.poster_path}`;
      imgMovieElem.alt = "Movie Image";
      pMovieElem.innerText = e.title;
      dMoveElem.appendChild(imgMovieElem);
      dMoveElem.appendChild(pMovieElem);
      const dYearElem = document.createElement("td"); //.innerHTML = data.release_date
      dYearElem.innerText = new Date(e.release_date).getFullYear();

      rowElem.appendChild(dRankElem);
      rowElem.appendChild(dMoveElem);
      rowElem.appendChild(dYearElem);
      mainElem.appendChild(rowElem);
      console.log(typeof e.genres)
       const genArray = typeof e.genres==='string'? e.genres : Object(e.genres).forEach((element)=>{console.log(element)})

      gen.push(genArray)  
      lang.push(e.original_language);

      year.push(new Date(e.release_date).getFullYear());
      rating.push(e.vote_average);
    });
  }

  function setSelect() {
    const selectGenreElem = document.getElementById("genre");
    const selectRatingElem = document.getElementById("rating");
    const selectYearElem = document.getElementById("release");
    const selectLangElem = document.getElementById("language");
    const setGenre = new Set(gen);
    const setRating = new Set(rating);
    const setYear = new Set(year);
    const setLang = new Set(lang);

    Object(setGenre).forEach((element) => {
      const optGenreElem = document.createElement("option");
      optGenreElem.setAttribute("value", element);
      const optionText = document.createTextNode(element);
      optGenreElem.appendChild(optionText);
      selectGenreElem.appendChild(optGenreElem);
    });

    Object(setRating).forEach((element) => {
      const optRatingElem = document.createElement("option");
      optRatingElem.setAttribute("value", element);
      const optionText = document.createTextNode(element);
      optRatingElem.appendChild(optionText);
      selectRatingElem.appendChild(optRatingElem);
    });
    Object(setYear).forEach((element) => {
      const optYearElem = document.createElement("option");
      optYearElem.setAttribute("value", element);
      const optionText = document.createTextNode(element);
      optYearElem.appendChild(optionText);
      selectYearElem.appendChild(optYearElem);
    });
    Object(setLang).forEach((element) => {
      const optLangElem = document.createElement("option");
      optLangElem.setAttribute("value", element);
      const optionText = document.createTextNode(element);
      optLangElem.appendChild(optionText);
      selectLangElem.appendChild(optLangElem);
    });
  }
})();
