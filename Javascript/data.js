

function buscar1() {
  let search = document.getElementById("search").value;
  let lang = document.getElementById("languaje1").value;

  let apiK = `https://api.giphy.com/v1/gifs/search?api_key=CsZ2k1XvRYvEuXOG8kxi1E3Ogm7d0ZEI&q=${search}&limit=25&offset=0&rating=g&lang=${lang}`;
  
  console.log(apiK)

  fetch(apiK)
  .then(response => response.json())
  .then(data => {
    let image = data.data[0].images.original.url ;
    let robo0 = document.getElementById("result0").src=image ;
  console.log (robo0)
  console.log (image)
  })
  
}