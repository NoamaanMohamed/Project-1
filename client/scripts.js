const showBtn = document.querySelector("#showAll");
const postBtn = document.querySelector("#postBtn");
showBtn.addEventListener('click', showAll);
postBtn.addEventListener('click', e => sendPost(e));

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
