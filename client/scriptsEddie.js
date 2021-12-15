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
  newDiv.textContent = `${postData.body}`;
  const element = document.querySelector("div.col-sm");
  element.appendChild(newDiv);
}

showAll();

 //############### SHOW COMMENTS ####################
const commentBtn = document.querySelector('#showComment');
commentBtn.addEventListener('click', showComments);

function showComments() {
  fetch('http://localhost:3000/comments')
  .then(resp => resp.json())
  .then(appendComments).catch(console.warn);
  
  function appendComments(comments){
  comments.forEach(addComments);
  };

  function addComments(postData) {
  const newDiv = document.createElement('div');
  newDiv.className = "col-sm";
  newDiv.textContent = `${postData.comment}`;
  const element = document.querySelector("#commentDiv");
  element.appendChild(newDiv);
  }
};

//############ SHOW ALL COMMENTS THAT BELONG TO THE FIRST POST #############
 showComments1(0);
function showComments1(postId){
  fetch(`http://localhost:3000/posts/${postId}/comments`)
  .then(resp => resp.json())
  .then(appendComments).catch(console.warn);

  function appendComments(comments){
  comments.forEach(addComments);
  };

  function addComments(postData) {
  const newDiv = document.createElement('div');
  newDiv.className = "col-sm";
  newDiv.textContent = `${postData.comment}`;
  const element = document.querySelector("#commentDivFirstPost");
  element.appendChild(newDiv);
  }
};


//############# POST A NEW COMMENT ##################
const postCommentBtn = document.querySelector('#sendComment');
postCommentBtn.addEventListener('submit', postComment);

function postComment(e){
  e.preventDefault();

  const postData = {
    postId: e.target.postId.value,
    comment: e.target.comment.value,
  };

  const options = { 
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
        "Content-Type": "application/json"
    }
  };

  fetch('http://localhost:3000/comments', options)
      .then(r => r.json())
      .then(addComments)
      .catch(console.warn);
   
  function addComments(postData) {
  const newDiv = document.createElement('div');
  newDiv.className = "col-sm";
  newDiv.textContent = `${postData.comment}`;
  const element = document.querySelector("#commentDiv");
  element.appendChild(newDiv);
  };
};

