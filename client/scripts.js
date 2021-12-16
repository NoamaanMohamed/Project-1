
// -----------CONSTANTS---------------------------
const ApiKey = "XVDNoMMkh34V76bFFB0HhvT9SJiQJim8";
const emojis = ["&#128514;", "&#128293;", "&#128078;"]; 


// -----------START------------------------------
// start - section allPosts, fetch the data and show it
showAll();

// navBar listeners
document.querySelector("#refAllPosts").addEventListener("click", showSectionAllPosts);
document.querySelector("#refNewPost").addEventListener("click", addNewPost);

// SECTION 1 - allPosts listeners
// click the post
document.addEventListener("click", function(e) {
  // console.log(e.target);
  // console.log(e.target.className);
  if((e.target && e.target.className == "postFrame")   || 
      (e.target && e.target.className == "post")       ||
      (e.target && e.target.className == "postFooter") ||
      (e.target && e.target.className == "postTitle")  || 
      (e.target && e.target.className == "postGif")    || 
      (e.target && e.target.className == "gifFrame")   || 
      (e.target && e.target.className == "postBody")) {
      // console.log(e.target.className)
      // console.log(e.target);

      let selectedPostID = e.target.getAttribute('data-id');
      console.log("show single post: ",selectedPostID);
      appendPostAndComs(selectedPostID);
  }
});
// click emoji
document.addEventListener("click", function(e) {
  // console.log(e.target.className)
  if ((e.target && e.target.className == "emoji1") ||
      (e.target && e.target.className == "emoji2") ||
      (e.target && e.target.className == "emoji3")) {

      let selectedPostID = e.target.getAttribute('data-id');
      // console.log(selectedPostID);
      // console.log(e.target.className[5]);
      updateLikes(selectedPostID, e.target.className[5]);
  }
});

// SECTION 2 - singlePost&Comments listeners
document.querySelector("#sendComment").addEventListener("click", addNewComment);

// SECTION 3 - newPost listeners
document.querySelector('#btnGiphySearch').addEventListener("click", getGiphy);
document.querySelector('.btnAddPost').addEventListener("click", postPost);

// -----------------FUNCTIONS----------------------

// function shows section 1 - allPosts, and hides the other sections
// Uses for switching between sections without submitting new post or comment data
function showSectionAllPosts() {
  document.getElementById('posts').classList.remove('hide-section');
  document.getElementById('showPostAndComments').classList.add('hide-section');
  document.getElementById('addPost').classList.add('hide-section');
}

// function shows section 2 - selectedPost, and hides the other sections
function showSectionSelectedPost() {
  document.getElementById('posts').classList.add('hide-section');
  document.getElementById('showPostAndComments').classList.remove('hide-section');
  document.getElementById('addPost').classList.add('hide-section');
  document.getElementById('submitComment').reset();
}

// function shows section 3 - newPost, and hides the other sections
function addNewPost() {
  document.getElementById('posts').classList.add('hide-section');
  document.getElementById('showPostAndComments').classList.add('hide-section');
  document.getElementById('addPost').classList.remove('hide-section');
  document.getElementById('submitNewPost').reset();
}

// function gets all posts data from server and calls function appendPost to show them 
// function showAll() {
//   fetch('https://java-spread.herokuapp.com/posts')
//     .then(resp => resp.json())
//     .then(appendPosts)
//     .catch(console.warn);
async function showAll() {
  const response = await fetch('https://java-spread.herokuapp.com/posts');  
  const posts  = await response.json();
  console.log(posts)
  appendPosts(posts);
  posts.forEach(post => getComments(post.id))
}

// helping function for showAll
// calls function showPost for every post
function appendPosts(posts) {
  showSectionAllPosts();
  // clean the section 1 before loading new post data
  document.querySelector(".allPosts").innerHTML = "";
  posts.forEach(post => showPost(post));
};

// helping function for showPost
// creates html elements to show post as a column in a row 
function showPost(post) {
  console.log(post);

  const postGrid = document.querySelector(".allPosts");

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
  // console.log(newPostFrame.getAttribute("data-id"));
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
  newEmoji1.innerHTML = `<span class="emoji1" data-id="${post.id}">&#128514;</span> ${post.likes1}`
  newEmoji1.classList.add('emoji1p');
  newEmoji1.setAttribute('data-id', post.id);
  newPostFooter.append(newEmoji1);

  const newEmoji2 = document.createElement('p');
  newEmoji2.innerHTML = `<span class="emoji2" data-id="${post.id}">&#128293;</span> ${post.likes2}`
  newEmoji2.classList.add('emoji2p');
  newEmoji2.setAttribute('data-id', post.id);
  newPostFooter.append(newEmoji2);

  const newEmoji3 = document.createElement('p');
  newEmoji3.innerHTML = `<span class="emoji3" data-id="${post.id}">&#128078;</span> ${post.likes3}`
  newEmoji3.classList.add('emoji3p');
  newEmoji3.setAttribute('data-id', post.id);
  newPostFooter.append(newEmoji3);      
};

// function gets the post data from the server by its ID and then 
// calls function showSinglePost and function getComments
async function appendPostAndComs(postId) {
  const response = await fetch(`https://java-spread.herokuapp.com/posts/${postId}`);
  const data = await response.json();
  showSinglePost(data);
  getComments(postId);  
};

// helping function for appendPostAndComs
// creates html elements for the selected post 
function showSinglePost(post) {
  showSectionSelectedPost();
  console.log(post);

  document.querySelector('.singlePost').innerHTML = '';
  document.querySelector('.comList').innerHTML = '';

  const singlePost = document.querySelector('.singlePost')

  const newPostTitle = document.createElement('h3');
  newPostTitle.innerText = post.title;
  newPostTitle.classList.add('postTitle');
  singlePost.append(newPostTitle);

  const newPostBody = document.createElement('p');
  newPostBody.innerText = post.body;
  newPostBody.setAttribute('data-id', post.id);
  newPostBody.classList.add('postBody');
  singlePost.append(newPostBody);

  const newGifFrame = document.createElement('div');
  newGifFrame.classList.add("gifFrame");
  singlePost.append(newGifFrame);

  const newPostGif = document.createElement('img');
  newPostGif.setAttribute("src", post.gif);
  newPostGif.classList.add('postGif');
  newGifFrame.append(newPostGif);

  const newPostFooter = document.createElement('div');
  newPostFooter.setAttribute('data-id', post.id);
  newPostFooter.classList.add('postFooter');
  singlePost.append(newPostFooter);
}

// functiont gets all comments from the server
function getComments(postId) {
   console.log(`https://java-spread.herokuapp.com/posts/${postId}/comments`);
    fetch(`https://java-spread.herokuapp.com/posts/${postId}/comments`)
    .then(r => r.json())
    .then(appendComments)
    .catch(console.warn)
  };
// async function getComments(postId) {
//   const response = await fetch(`https://java-spread.herokuapp.com/posts/${postId}/comments`);
//   const data = await response.json();
//   console.log("data", data)
//   appendComments(data,postId);
// };

// function creates elements for number of comments and calls the showComment for every comment
function appendComments(comments) {

  const newComNumber = document.createElement('p');
  newComNumber.innerHTML = `<i class="fas fa-comment"></i> ${comments.length} `
  newComNumber.classList.add('card-text');
  newComNumber.setAttribute('data-id', comments);

  postId = (comments[0] == null)? "" : comments[0].postId;
  console.log(postId)
  
  const sectionSinglePosts = document.querySelector('#posts').classList.contains('hide-section')
  console.log("section", sectionSinglePosts, comments);
  if (sectionSinglePosts) {
      document.querySelector(".singlePost .postFooter").append(newComNumber);
      comments.forEach(comment => showComment(comment));
  } else {
    // if (postId != '') {
      console.log(document.querySelector(`.postFooter[data-id='${postId}']`))
      document.querySelector(`.postFooter[data-id='${postId}']`).append(newComNumber);
    // };
  };
}                        

// helping function for appendComment
// function creates elements for the comment
function showComment(comment) {
  const newComFrame = document.createElement('div');
  newComFrame.classList.add('comFrame');
  document.querySelector('.comList').append(newComFrame);

  const newComment = document.createElement('p');
  newComment.innerHTML = comment.comment;
  newComment.classList.add('comment');
  newComFrame.append(newComment);
}

// function sends new comment to the server and refreshes section 
function addNewComment(e) {
  e.preventDefault();

  console.log("button pressed")
  // get post ID
  postId = document.querySelector(".singlePost .postBody").getAttribute("data-id");
  console.log("postId", postId);
  const newComment = document.querySelector(".newComment").value;
  console.log(newComment);
  const commentData = {
    comment: newComment,
    postId: postId
  };
  console.log(commentData);

  const options = {
    method: 'POST',
    body: JSON.stringify(commentData),
    headers: {
      "Content-Type": "application/json"
    }
  };

  fetch('https://java-spread.herokuapp.com/comments', options)
    .then(r => r.json())
    // .then(appendComments)
    .catch(console.warn);
  
  window.location.reload();  
  appendPostAndComs(postId);
};

// function increases number of likes +1 after the click
function updateLikes(selectedPostID, emojiNumber) {
  console.log(`".emoji${emojiNumber}"`);  
  console.log(selectedPostID, "selected post id")

  let emojiSet = document.querySelector(`p.emoji${emojiNumber}p[data-id='${selectedPostID}']`);
  console.log("set ", emojiSet);
  var reactN = "";
  for (let i = 0; i < emojiSet.childNodes.length; i++) {
      let node = emojiSet.childNodes[i];
      if (node.nodeType  === Node.TEXT_NODE) {
          reactN += node.data;
      }
  }
  console.log(reactN);

  // TODO open after PUT method for likes in API 
  // const likesKey = `likes${emojiNumber}`;
  // const likesData = {
  //   // [likesKey]: toString(Number(reactN) + 1)
  //   likes1: "1"
  // }
  // console.log(likesData);

  // const options = { 
  //   method: 'PUT',
  //   body: JSON.stringify(likesData),
  //   headers: {
  //       "Content-Type": "application/json",
  //   }
  // };  

  // urlIdPostEndpoint = `https://java-spread.herokuapp.com/posts/${selectedPostID}`;
  // console.log(urlIdPostEndpoint);
  // fetch(urlIdPostEndpoint, options)
  //     .then(resp => resp.json())
  //     .catch(console.warn);

  emojiSet.innerHTML = `<span class="emoji${emojiNumber}" data-id="${selectedPostID}">${emojis[emojiNumber-1]}</span>  ${Number(reactN)+1} `
}

// function sends data of the new post to the server and refreshes page
function postPost(e){
  e.preventDefault();
  console.log(document.querySelector("#addPost #inputPostTitle"))

  // does the gyphy exist?
  gif = (document.querySelector(".giphyOut img") === null)? "": document.querySelector(".giphyOut img").getAttribute("src");

  const postData = {
    title : document.querySelector("#addPost #inputPostTitle").value,
    body  : document.querySelector("#addPost #inputPostBody").value,
    date  : new Date().toJSON().slice(0, 10),
    gif   : gif
  };
  console.log(postData)

  const options = { 
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
        "Content-Type": "application/json"
    }
  };

  fetch('https://java-spread.herokuapp.com/posts', options)
  // .then(r => r.json())
  // .then(appendPosts)
  .catch(console.warn);

  window.location.reload();
 
};

// function gets one random gif from giphy.com
function getGiphy(e) {
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
            
// const commentBtn = document.querySelector('#sendComment');

// function addAllComments(commentData) {
//   const newDiv = document.createElement('div');
//   newDiv.className = "col-sm";
//   newDiv.textContent = `${commentData.body}`;
//   const element = document.querySelector("div.row");
//   element.appendChild(newDiv);
// }

// function newComment(e) {
//   e.preventDefault();
//   const commentData = {
//     body: e.target.body.value
//   };
//   const options = {
//     method: 'POST',
//     body: JSON.stringify(commentData),
//     headers: {
//       "Content-Type": "application/json"
//     }
//   };
//   console.log(e.target.body.value);

//   fetch('https://java-spread.herokuapp.com/posts', options)
//     .then(r => r.json())
//     .then(addAllComments)
//     .catch(console.warn);
// };

// commentBtn.addEventListener('submit', newComment);
