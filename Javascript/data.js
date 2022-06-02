function buscar1() {
  let search = document.getElementById("search").value;
  let lang = "es";
  let Url = `https://api.giphy.com/v1/gifs/search?api_key=CsZ2k1XvRYvEuXOG8kxi1E3Ogm7d0ZEI&q=${search}&limit=25&offset=0&rating=g&lang=${lang}`;

  console.log(search);
}
