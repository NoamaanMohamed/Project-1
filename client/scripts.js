
const showBtn = document.querySelector("#showAll");
const postBtn = document.querySelector("#postBtn");
showBtn.addEventListener('click', showAll);
postBtn.addEventListener('click', sendPost);

function showAll() {
  fetch('http://localhost:3000/posts')
    .then(resp => resp.json())
    .then(appendPosts).catch(console.warn);
}

function appendPosts(posts){
  posts.forEach(addAllPosts);
};

function addAllPosts(postData) {
  const newDiv = document.createElement('div');
  newDiv.className = "col-sm";
  newDiv.textContent = `${postData.content}`;
  const element = document.querySelector("div.row");
  element.appendChild(newDiv);
}

function sendPost(e){
  e.preventDefault();

  const postData = {
    content: e.target.content.value,
    date : new Date().toJSON().slice(0, 10),
  };
  const options = { 
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
        "Content-Type": "application/json"
    }
  };

  fetch('http://localhost:3000/posts', options)
  .then(r => r.json())
  .then(addAllPosts)
  .catch(console.warn);
};


showAll();

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
