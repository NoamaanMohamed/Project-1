
// -----------CONSTANTS---------------------------
const ApiKey = "XVDNoMMkh34V76bFFB0HhvT9SJiQJim8";
const emojis = ["&#128514;", "&#128293;", "&#128078;"]; 


// -----------START------------------------------
// start - section allPosts, fetch the data and show it
showAll();

// navBar listeners
document.querySelector("#refNewPost").addEventListener("click", addNewPost);
document.querySelector("#refAllPosts").addEventListener("click", showAllPosts);

// section allPosts listeners
document.addEventListener("click", function(e) {
  console.log(e.target);
  console.log(e.target.className);
  if((e.target && e.target.className == "postFrame")   || 
      (e.target && e.target.className == "post")       ||
      (e.target && e.target.className == "postFooter") ||
      (e.target && e.target.className == "postTitle")  || 
      (e.target && e.target.className == "postGif")    || 
      (e.target && e.target.className == "gifFrame")   || 
      (e.target && e.target.className == "emoji")      || 
      (e.target && e.target.className == "postBody")) {
      console.log(e.target.className)
      console.log(e.target);

      let selectedPostID = e.target.getAttribute('data-id');
      console.log(selectedPostID);
      appendPostAndComs(selectedPostID );
  }
});

// section singlePost&Comments listeners


// section newPost listeners
document.querySelector('#btnGiphySearch').addEventListener("click", sendApiRequest);


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

  const newGifFrame = document.createElement('div');
  newGifFrame.classList.add("gifFrame");
  newPostFrame.append(newGifFrame);

  const newPostGif = document.createElement('img');
  newPostGif.setAttribute("src", post.gif);
  newPostGif.classList.add('postGif');
  newGifFrame.append(newPostGif);

  const newPostFooter = document.createElement('div');
  newPostFooter.setAttribute('data-id', post.id);
  newPostFooter.classList.add('postFooter');
  newPostFrame.append(newPostFooter);

  const newEmoji1 = document.createElement('p');
  // open with comments
  // newComNumber.innerHTML = `<span>&#128517;</span> ${post.likes1} `
  newEmoji1.innerHTML = `<span>&#128514;</span>  `
  newEmoji1.classList.add('emoji');
  newEmoji1.setAttribute('data-id', post.id);
  newPostFooter.append(newEmoji1);

  const newEmoji2 = document.createElement('p');
  // open with comments
  // newComNumber.innerHTML = `<span>&#128517;</span> ${post.likes2} `
  newEmoji2.innerHTML = `<span>&#128293;</span>  `
  newEmoji2.classList.add('emoji');
  newEmoji2.setAttribute('data-id', post.id);
  newPostFooter.append(newEmoji2);

  const newEmoji3 = document.createElement('p');
  // open with comments
  // newComNumber.innerHTML = `<span>&#128517;</span> ${post.likes3} `
  newEmoji3.innerHTML = `<span>&#128078;</span>  `
  newEmoji3.classList.add('emoji');
  newEmoji3.setAttribute('data-id', post.id);
  newPostFooter.append(newEmoji3);
  
  const newComNumber = document.createElement('p');
  // open with comments
  // newComNumber.innerHTML = `<i class="fas fa-comment"></i> ${post.comments.length} `
  newComNumber.innerHTML = `<i class="fas fa-comment"></i> `
  newComNumber.classList.add('card-text');
  newComNumber.setAttribute('data-id', post.id);
  newPostFooter.append(newComNumber);

  // const newCommentSign = document.createElement('i');
  // newCommentSign.classList.add('fas');
  // newCommentSign.classList.add('fa-comment');
  // newComNumber.append(newCommentSign);         
};

// added by ginger
function appendPostAndComs(postId) {
  urlIdPostEndpoint = `http://localhost:3000/posts/${postId}`;
  console.log(urlIdPostEndpoint);
  fetch(urlIdPostEndpoint)
    .then(resp => resp.json())
    // .then(resp => console.log(resp, "fetch id"))
    .then(showPostAndComs).catch(console.warn);
};

function showPostAndComs(post) {
  document.getElementById('posts').classList.add('hide-section');
  document.getElementById('showPostAndComments').classList.remove('hide-section');
  document.getElementById('addPost').classList.add('hide-section');

  console.log(post);

  const singlePost = document.querySelector('.singlePost')

  const newPostTitle = document.createElement('h3');
  // open after title
  // newPostTitle.innerText = post.title;
  newPostTitle.classList.add('postTitle');
  singlePost.append(newPostTitle);

  const newPostBody = document.createElement('p');
  newPostBody.innerText = post.body;
  newPostBody.classList.add('postBody');
  singlePost.append(newPostBody);

  const newPostFooter = document.createElement('div');
  // open after API by ID
  newPostFooter.setAttribute('data-id', post.id);
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

function showAllPosts() {
  document.getElementById('posts').classList.remove('hide-section');
  document.getElementById('showPostAndComments').classList.add('hide-section');
  document.getElementById('addPost').classList.add('hide-section');
}

function addNewPost() {
  document.getElementById('posts').classList.add('hide-section');
  document.getElementById('showPostAndComments').classList.add('hide-section');
  document.getElementById('addPost').classList.remove('hide-section');

  document.getElementById('submitNewPost').reset();
}
// function increases number of likes +1 after click
function updateLikes(selectedPostID, emojiNumber) {
  console.log(`".emoji${emojiNumber}"`);  
  let emojiSet = document.querySelector(`p.emoji${emojiNumber}[data-id='${selectedPostID}']`);
  console.log("set ", emojiSet);
  var reactN = "";
  for (let i = 0; i < emojiSet.childNodes.length; i++) {
      let node = emojiSet.childNodes[i];
      if (node.nodeType  === Node.TEXT_NODE) {
          reactN += node.data;
      }
  }
  console.log(reactN);
  reactN.innerText == Number(reactN.innerText) + 1;
  emojiSet.innerHTML = `<span class="emoji${emojiNumber}" data-id="${selectedPostID}">${emojis[emojiNumber-1]}</span>  ${Number(reactN)+1} `

  //#TO DO call post function 

}



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


// function sendApiRequest() { 
// const giphyForm = document.querySelector('#giphy-form');

function sendApiRequest(e) {
// const sendApiRequest = (e) => {
  console.log("gif")
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
      // console.log("META", json.meta);
      // console.log(json.data[Math.floor(Math.random()*50)].images.fixed_height.url);
      let imgPath = json.data[Math.floor(Math.random()*50)].images.fixed_height.url;
      console.log(imgPath)
      let img = document.createElement("img");
      img.setAttribute("src", imgPath);
      let out = document.querySelector(".giphyOut");
      // remove previous giphy before putting new one 
      out.innerHTML = '';
      out.insertAdjacentElement("afterbegin", img);
    }
)};
            

