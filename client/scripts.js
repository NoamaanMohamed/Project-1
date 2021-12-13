const giphyForm = document.querySelector('#giphy-form');
            let ApiKey = "XVDNoMMkh34V76bFFB0HhvT9SJiQJim8";

            const sendApiRequest = (e) => {
                e.preventDefault();
                let userInput = document.getElementById("giphysearch").value;
                console.log(userInput);

                let giphyApiUrl = `https://api.giphy.com/v1/gifs/search?q=${userInput}&rating=g&api_key=${ApiKey}`;
                fetch(giphyApiUrl)
                    .then( data => {
                        return data.json();
                    } )
                    .then( json => {
                        console.log(json.data);
                        console.log("META", json.meta);
                        console.log(json.data[Math.floor(Math.random()*50)].images.fixed_height.url);
                        let imgPath = json.data[Math.floor(Math.random()*50)].images.fixed_height.url;
                        let img = document.createElement("img");
                        img.setAttribute("src", imgPath);
                        let out = document.querySelector(".giphyOut");
                        out.insertAdjacentElement("afterbegin", img);
                        }
                    )
            }
            giphyForm.addEventListener("submit", sendApiRequest);




























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

