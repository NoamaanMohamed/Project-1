const showBtn = document.querySelector("#showAll");
showBtn.addEventListener('click', showAll);

function showAll(e) {
  e.preventDefault();
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


showAll();
