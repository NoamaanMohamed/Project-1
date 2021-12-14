
//const showBtn = document.querySelector("#refAllPosts");
// const postBtn = document.querySelector("#postBtn");
//showBtn.addEventListener('click', showAll);
// postBtn.addEventListener('click', sendPost);

showAll();

document.addEventListener("click", function(e) {
  // console.log(e.target);
  // console.log(e.target.className);
  if((e.target && e.target.className == "postFrame")   || 
      (e.target && e.target.className == "post")       ||
      (e.target && e.target.className == "postFooter") ||
      (e.target && e.target.className == "postTitle")  || 
      (e.target && e.target.className == "postBody")) {
      console.log(e.target.className)
      console.log(e.target);

      let selectedPostID = e.target.getAttribute('data-id');
      console.log(selectedPostID);
      showPostAndComments(selectedPostID );
  }
});

// -----------------FUNCTIONS----------------------
function showAll() {
  fetch('http://localhost:3000/posts')
    .then(resp => resp.json())
    .then(appendPosts).catch(console.warn);
}

// ----replaced by ginger
// function appendPosts(posts){
//   posts.forEach(addAllPosts);
// };

// function addAllPosts(postData) {
//   const newDiv = document.createElement('div');
//   newDiv.className = "col-sm";
//   newDiv.textContent = `${postData.body}`;
//   const element = document.querySelector("div.row");
//   element.appendChild(newDiv);
// }

function appendPosts(posts) {
  posts.forEach(showPost);
};

function showPost(post) {
  console.log(post);

  const postGrid = document.querySelector(".allPosts");
  console.log(postGrid);

  const newPost = document.createElement('div');
  newPost.classList.add('col-md-4');
  newPost.classList.add('col-sm-6');
  newPost.classList.add('col-xs-12');
  newPost.classList.add('post');
  newPost.setAttribute('data-id', post.id);
  postGrid.append(newPost);

  const newPostFrame = document.createElement('div');
  newPostFrame.classList.add('postFrame');
  newPostFrame.setAttribute('data-id', post.id);
  console.log(newPostFrame.getAttribute("data-id"));
  newPost.append(newPostFrame);

  const newPostTitle = document.createElement('h3');
  newPostTitle.innerText = post.title;
  newPostTitle.setAttribute('data-id', post.id);
  newPostTitle.classList.add('postTitle');
  newPostFrame.append(newPostTitle);

  const newPostBody = document.createElement('p');
  newPostBody.setAttribute('data-id', post.id);
  newPostBody.innerText = post.body;
  newPostBody.classList.add('postBody');
  newPostFrame.append(newPostBody);

  const newPostFooter = document.createElement('div');
  newPostFooter.setAttribute('data-id', post.id);
  newPostFooter.classList.add('postFooter');
  newPostFrame.append(newPostFooter);

  const newComNumber = document.createElement('p');
  // open with comments
  // newComNumber.innerHTML = `<i class="fas fa-comment"></i> ${post.comments.length} `
  newComNumber.innerHTML = `<i class="fas fa-comment"></i> `
  newComNumber.classList.add('card-text');
  newComNumber.setAttribute('data-id', post.id);
  // newComNumber.innerHTML = post.comments.length;
  newPostFooter.append(newComNumber);

  // const newCommentSign = document.createElement('i');
  // newCommentSign.classList.add('fas');
  // newCommentSign.classList.add('fa-comment');
  // newComNumber.append(newCommentSign);         
};

// added by ginger
function showPostAndComments(postId) {
  document.getElementById('posts').classList.add('hide-section');
  document.getElementById('showPostAndComments').classList.remove('hide-section');

  const post = posts[postId];
  console.log(post);

  const singlePost = document.querySelector('.singlePost')

  const newPostTitle = document.createElement('h3');
  // open after title
  // newPostTitle.innerText = post.title;
  newPostTitle.classList.add('postTitle');
  singlePost.append(newPostTitle);

  const newPostBody = document.createElement('p');
  // open after API by ID
  // newPostBody.innerText = post.body;
  newPostBody.classList.add('postBody');
  singlePost.append(newPostBody);

  const newPostFooter = document.createElement('div');
  // open after API by ID
  // newPostFooter.setAttribute('data-id', post.id);
  newPostFooter.classList.add('postFooter');
  singlePost.append(newPostFooter);

  const newComNumber = document.createElement('p');
  // newComNumber.innerHTML = `<i class="fas fa-comment"></i> ${post.comments.length} `
  newComNumber.innerHTML = `<i class="fas fa-comment"></i>  `
  newComNumber.classList.add('card-text');
  // open after API by ID
  // newPostFooter.setAttribute('data-id', post.id);
  newPostFooter.append(newComNumber);
  // open after API by ID
  // console.log(post.comments);

  // post.comments.forEach(comment => showComment(comment));
}
// open after API by ID
// function showComment(comment) {
//   const newComFrame = document.createElement('div');
//   newComFrame.classList.add('comFrame');
//   document.querySelector('.comList').append(newComFrame);

//   const newComment = document.createElement('p');
//   newComment.innerHTML = comment.body;
//   newComment.classList.add('comment');
//   newComFrame.append(newComment);
// }

const allPosts = document.querySelector('#refAllPosts');
const newPost = document.querySelector('#refNewPost');
const getAllPosts = () => {
  document.getElementById('posts').classList.remove('hide-section');
  document.getElementById('showPostAndComments').classList.add('hide-section');
  document.getElementById('addPost').classList.add('hide-section');
};
const writeNewPost = () => {
  document.getElementById('posts').classList.add('hide-section');
  document.getElementById('showPostAndComments').classList.add('hide-section');
  document.getElementById('addPost').classList.remove('hide-section');
}
allPosts.addEventListener('click', getAllPosts);
newPost.addEventListener('click', writeNewPost);



function sendPost(e){
  e.preventDefault();

  const postData = {
    body: e.target.body.value,
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


const giphyForm = document.querySelector('#giphy-form');
            let ApiKey = "XVDNoMMkh34V76bFFB0HhvT9SJiQJim8";

            const init = () => {

            }
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


