const postBtn = document.querySelector('#sendPost');
postBtn.addEventListener('submit', newPost);

//################ CREATE A NEW POST ###################
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

 //############## SHOW ALL POSTS ########################
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

 //############### SHOW COMMENTS ####################
const commentBtn = querySelector('#showComment');
commentBtn = addEventListener('submit',showComments);

function showComments() {
  fetch('http://localhost:3000/comments')
  .then( r => r.json())
  .then(appendComments).catch(console.warn);
};

function appendComments(comments) {
  comments.forEach(addComments);
};

function addComments(commentData) {
  const newLi = document.createElement('li');
  newLi.textContent = `${commentData.comment}`;
  const element = document.querySelector('ul');
  element.appendChild(newLi);
};

