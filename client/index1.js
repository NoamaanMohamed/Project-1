// Post Data as const
const posts = [
    {
        id: 0,
        title: "Day 1",
        body:  "1Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem deleniti quae,",
        date:  "01.01.2021",
        comments: [
            {
                id: 0,
                body: "nwlenwl"
            },
            {
                id: 1,
                body: "jnwefjw", 
            },
            {
                id: 2,
                body: "jnwefjw",
            }
        ],
        likes1: "1",
        likes2: "2",
        likes3: "0",
        gif: "https://media1.giphy.com/media/zvBuF2oYRErVS/giphy-downsized.gif?cid=9dc9e58e9suovuvu29aceyfk4ayb76xa7tab7ubqudg3s6ll&rid=giphy-downsized.gif&ct=g"
    },
    {
        id: 1,
        title: "Day 2",
        body:  "2Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem deleniti quae,Dolorem deleniti quae,",
        date:  "02.01.2021",
        comments: [],
        likes1: "0",
        likes2: "2",
        likes3: "0",
        gif: ""
    },
    {
        id: 2,
        title: "Day 3",
        body:  "3Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem deleniti quae,Dolorem deleniti quae,Dolorem deleniti quae,Dolorem deleniti quae,",
        date:  "02.01.2021",
        comments: [],
        likes1: "1",
        likes2: "0",
        likes3: "0",
        gif: ""
    },
    {
        id: 3,
        title: "Day 4",
        body:  "4Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        date:  "02.01.2021",
        comments: [
            {
                id: 0,
                body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a."
            },
            {
                id: 1,
                body: "jnwefjw", 
            }
        ],
        likes1: "1",
        likes2: "1",
        likes3: "1",
        gif: "https://media2.giphy.com/media/dsiv65A5ZSo7YXo8cH/giphy-downsized.gif?cid=9dc9e58e9suovuvu29aceyfk4ayb76xa7tab7ubqudg3s6ll&rid=giphy-downsized.gif&ct=g"
    },
    {
        id: 4,
        title: "Day 5",
        body:  "5Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem deleniti quae,",
        date:  "02.01.2021",
        comments: [
            {
                id: 0,
                body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam volutpat."
            },
            {
                id: 1,
                body: "jnwefjw hbwbfew", 
            },
            {
                id: 2,
                body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non.",
            },
            {
                id: 3,
                body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rhoncus.",
            }
        ],
        likes1: "2",
        likes2: "2",
        likes3: "0",
        gif: ""
    },
    {
        id: 5,
        title: "Day 6",
        body:  "6 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem deleniti quae,",
        date:  "02.01.2021",
        comments: [
            {
                id: 0,
                body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dui."
            }
        ],
        likes1: "1",
        likes2: "2",
        likes3: "3",
        gif: ""
    },
    {
        id: 6,
        title: "Day 7",
        body:  "7 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper maximus nulla. Cras rhoncus massa vel enim feugiat porta. Vivamus sed felis velit. In hac habitasse platea dictumst. Morbi sagittis mollis justo a mattis. Etiam id rutrum turpis, eget blandit nulla. Sed id erat nec nulla pretium mollis.",
        date:  "02.01.2021",
        comments: [],
        likes1: "1",
        likes2: "0",
        likes3: "5",
        gif: ""
    },
    {
        id: 7,
        title: "Day8",
        body:  "8Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem deleniti quae,",
        date:  "02.01.2021",
        comments: [],
        likes1: "3",
        likes2: "3",
        likes3: "3",
        gif: ""
    }
]


showAllPosts(posts);

// document.querySelector("refAllPosts").addEventListener("click", showAllPosts(posts));
document.querySelector("#refNewPost").addEventListener("click", addNewPost);

document.addEventListener("click", function(e) {
    console.log(e.target.className)
    if ((e.target && e.target.className == "postFrame")  || 
        (e.target && e.target.className == "post")       ||
        (e.target && e.target.className == "postFooter") ||
        (e.target && e.target.className == "postTitle")  || 
        (e.target && e.target.className == "postGif")    || 
        (e.target && e.target.className == "gifFrame")   || 
        (e.target && e.target.className == "emoji")      || 
        (e.target && e.target.className == "postBody")) {

        let selectedPostID = e.target.getAttribute('data-id');
        console.log(selectedPostID);
        showPostAndComments(selectedPostID );
    }
});

document.addEventListener("click", function(e) {
    console.log(e.target.className)
    if ((e.target && e.target.className == "emoji1") ||
        (e.target && e.target.className == "emoji2") ||
        (e.target && e.target.className == "emoji3")) {

        let selectedPostID = e.target.getAttribute('data-id');
        console.log(selectedPostID);
        console.log(e.target.className[5]);
        updateLikes(selectedPostID, e.target.className[5]);
    }
});


//---------------- POSTS FLOW------------------------------
function showAllPosts(posts) {
    posts.forEach(post => showPost(post));
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
    newEmoji1.innerHTML = `<span class="emoji1" data-id="${post.id}">&#128514;</span>  ${post.likes1} `
    // newEmoji1.innerHTML = `<span>&#128514;</span> `
    newEmoji1.classList.add('emoji1');
    newEmoji1.setAttribute('data-id', post.id);
    newPostFooter.append(newEmoji1);

    const newEmoji2 = document.createElement('p');
    // open with comments
    newEmoji2.innerHTML = `<span class="emoji2" data-id="${post.id}">&#128293;</span>  ${post.likes2} `
    // newEmoji2.innerHTML = `<span class="emoji">&#128293;</span> `
    newEmoji2.classList.add('emoji2');
    newEmoji2.setAttribute('data-id', post.id);
    newPostFooter.append(newEmoji2);

    const newEmoji3 = document.createElement('p');
    // open with comments
    newEmoji3.innerHTML = `<span class="emoji3" data-id="${post.id}">&#128078;</span>  ${post.likes3} `
    // newEmoji3.innerHTML = `<span>&#128078;</span> `
    newEmoji3.classList.add('emoji3');
    newEmoji3.setAttribute('data-id', post.id);
    newPostFooter.append(newEmoji3);

    const newComNumber = document.createElement('p');
    newComNumber.innerHTML = `<i class="fas fa-comment"></i> ${post.comments.length} `
    newComNumber.classList.add('numCom');
    newComNumber.setAttribute('data-id', post.id);
    newPostFooter.append(newComNumber);         
};

function showPostAndComments(postId) {
    document.getElementById('posts').classList.add('hide-section');
    document.getElementById('showPostAndComments').classList.remove('hide-section');

    const post = posts[postId];
    console.log(post);

    const singlePost = document.querySelector('.singlePost')

    const newPostTitle = document.createElement('h3');
    newPostTitle.innerText = post.title;
    newPostTitle.classList.add('postTitle');
    singlePost.append(newPostTitle);

    const newPostBody = document.createElement('p');
    newPostBody.innerText = post.body;
    newPostBody.classList.add('postBody');
    singlePost.append(newPostBody);

    const newPostFooter = document.createElement('div');
    newPostFooter.setAttribute('data-id', post.id);
    newPostFooter.classList.add('postFooter');
    singlePost.append(newPostFooter);

    const newComNumber = document.createElement('p');
    newComNumber.innerHTML = `<i class="fas fa-comment"></i> ${post.comments.length} `
    newComNumber.classList.add('card-text');
    newPostFooter.setAttribute('data-id', post.id);
    newPostFooter.append(newComNumber);
    
    console.log(post.comments);

    post.comments.forEach(comment => showComment(comment));



function showComment(comment) {

    const newComFrame = document.createElement('div');
    newComFrame.classList.add('comFrame');
    document.querySelector('.comList').append(newComFrame);

    const newComment = document.createElement('p');
    newComment.innerHTML = comment.body;
    newComment.classList.add('comment');
    newComFrame.append(newComment);
}


/// for emojy
// document.addEventListener('click', function(e){
//   if(e.target && e.target.id== 'myDynamicallyAddedElementID'){
//        //do something
//   }
// });
}


function addNewPost() {
    console.log("add new post");
    document.getElementById('posts').classList.add('hide-section');
    document.getElementById('showPostAndComments').classList.add('hide-section');
    document.getElementById('addPost').classList.remove('hide-section');
  }

const emojis = ["&#128514;", "&#128293;", "&#128078;"]; 


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