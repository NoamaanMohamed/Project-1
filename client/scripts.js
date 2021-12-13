let search = document.querySelector(".search");
let searchButton = document.querySelector(".search-btn");
let resultTen = document.getElementById("ten");
let resultOne = document.getElementById("one");

const searchResult = () => {
    let url = "https://www.google.com/search?q="+ search.value; 
    window.open(url, "_self");
}

function getTenResults(e) {
    e.preventDefault()
    fetch('http://localhost:3000/results')
      .then(resp => resp.text())
      .then(text => {
        window.location.href = "./tenresults.html";
        document.getElementById('text').innerHTML = text;
      })
  }

  function getRandomResult(e) {
    e.preventDefault()
    fetch('http://localhost:3000/random')
      .then(resp => resp.text())
      .then(text => {
        window.location.href = "./randomresult.html";
        document.getElementById('textone').innerHTML = text;
      })
  }

searchButton.addEventListener("click", searchResult)
resultTen.addEventListener('click', e => getTenResults(e))
resultOne.addEventListener("click", getRandomResult)

