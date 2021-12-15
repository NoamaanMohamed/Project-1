<<<<<<< HEAD

// posts = [
//     {id:1, content: "This is the first post of this website" , date:"13/12/2021"},
//     {id:2, content: "This is the second post of the website" , date:""},
//     {id:3, content: "Tomorrow we will find out if all we did today was worth it" , date:""}, 
// ]

let posts = [
=======
posts = [
>>>>>>> 10c7a6c67e8271e8b8e2f69148495e3270567ae6
  {
      id: 0,
      title: "Day 1",
      body:  "1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem deleniti quae",
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
      likes3: "3",
      gif: "https://media1.giphy.com/media/zvBuF2oYRErVS/giphy-downsized.gif?cid=9dc9e58e9suovuvu29aceyfk4ayb76xa7tab7ubqudg3s6ll&rid=giphy-downsized.gif&ct=g"
  },
  {
      id: 1,
      title: "Day 2",
      body:  "2Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem deleniti quae,Dolorem deleniti quae,",
      date:  "02.01.2021",
      comments: [],
      likes1: "0",
      likes2: "0",
      likes3: "5",
      gif: ""
      
  },
  {
      id: 2,
      title: "Day 3",
      body:  "3Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem deleniti quae,Dolorem deleniti quae,Dolorem deleniti quae,Dolorem deleniti quae,",
      date:  "02.01.2021",
      comments: [],
      likes1: "1",
      likes2: "1",
      likes3: "1",
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
      likes1: "2",
      likes2: "3",
      likes3: "0",
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
      likes1: "0",
      likes2: "0",
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
      likes1: "4",
      likes2: "1",
      likes3: "3",
      gif: ""
  },
  {
      id: 6,
      title: "Day 7",
      body:  "7 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper maximus nulla. Cras rhoncus massa vel enim feugiat porta. Vivamus sed felis velit. In hac habitasse platea dictumst. Morbi sagittis mollis justo a mattis. Etiam id rutrum turpis, eget blandit nulla. Sed id erat nec nulla pretium mollis.",
      date:  "02.01.2021",
      comments: [],
      likes1: "6",
      likes2: "2",
      likes3: "1",
      gif: ""
  },
  {
      id: 7,
      title: "Day8",
      body:  "8Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem deleniti quae,",
      date:  "02.01.2021",
      comments: [],
      likes1: "1",
      likes2: "2",
      likes3: "3",
      gif: ""
  }
]









let comments = [
    {
        id: 0,
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam volutpat.",
        postId: 4
    },
    {
        id: 1,
        body: "jnwefjw hbwbfew",
        postId: 4
    },
    {
        id: 2,
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non.",
        postId: 4
    },
    {
        id: 3,
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rhoncus.",
        postId: 4
    },
    {
        id: 0,
        body: "nwlenwl",
        postId: 0
    },
    {
        id: 1,
        body: "jnwefjw",
        postId: 0
    },
    {
        id: 2,
        body: "jnwefjw",
        postId: 0
    },
    {
        id: 0,
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a.",
        postId: 3
    },
    {
        id: 1,
        body: "jnwefjw",
        postId: 5
    },
    {
        id: 0,
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dui.",
        postId: 5
    }
];



module.exports = { posts, comments };