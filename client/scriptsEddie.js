const postBtn = document.querySelector('#sendPost');
postBtn.addEventListener('submit', newPost);

function newPost(e){
    e.preventDefault();

    const postData = {
        title: e.target.title.value,
        body: e.target.body.value,
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
  newDiv.textContent = `${postData.title}`;
  const element = document.querySelector("div.row");
  element.appendChild(newDiv);
}

showAll();
