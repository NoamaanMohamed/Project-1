# The javaSpread Blog
- This is our journaling website, where users can submit anonymous journal entries, view and comment on posts left by others on the site and react to their posts with a small selection of emojis.
We have also added the functionality of choosing a random gif related to your gif search query.
- Visit the website at : https://thirsty-hermann-5ec6f6.netlify.app/ 

# Installation
- The blog's server has been deployed at: https://java-spread.herokuapp.com/ 
- Meaning there is no installation needed to access the blog.

# Technologies used
- [x] node.js - We used the express, nodemon, bodyparser, and cors modules to deploy our server locally.
- [x] heroku - Was used to upload our server for free so that data won't get lost over time.
- [x] netlify - Was used to deploy our client.
- [x] jest & supertest - Were used for testing front- and backend.

# Challenges
### Website styling
- One of the major challenges we face at the beginning of this project was the styling of the blog website. Initially we used a framework to get the website look nice and tidy, but then we learned that we were not allowed to use any major framework. As a result, all the styling and accessibility functions of the website were done from scratch to resemble the framework styling initially used.
### Retrieval of posts and their content
- Another issue we faced was the retrieval of posts and their content onto the client’s website.  Although the routing was done and worked fine server-side-wise, we couldn’t display new posts that we made.  Later on, we found out the error and we resolved this issue.
### Comment storage
- The next major issue we encountered was the storage of comments made to existing posts. Initially we wanted to have the comments be stored in an array that would be a key to a post object. While we could retrieve the comments themselves for a specific post, we could not create and add a new comment entry and then append it to the comment array. Therefore, to overcome this, we created a separate array containing comment objects in our data file. That way we could create a new comment object and push it to the new comment array, which then would be retrieved. Then, to associate each comment to a particular post, we added a new key to each comment object called “postId”. And then created a new route to fetch all the comments belonging to a particular post.
### Sending the count of emojis back to the server
- Although the emoji counter was an issue by itself, we managed to make it work like we wanted it. However, when the page was reloaded, counters for the emojis were reset to their original value. Ideally, we would have liked to update the values of the emojis on the server, which required us to use PUT/PATCH methods. Unfortunately due to time constraints, we could not add this feature.
### Browser compatibility
- Another issue we encountered was when we combined all the frontend and backend functions with the homepage. While fetching and posting of posts and comments worked as intended when using the Google Chrome Browser, when using Firefox, we could not add new comments or new posts. We tested the website on Safari and Microsoft Edge as well, and the webpage worked normally. We do not know why only the Firefox browser does not allow new posting methods, but we presume it is due to some privacy policies the browser itself has.

# Credits: Team JavaSpread
- [x] Tatiana Lezhneva  @Ginger9307
- [x] Noamaan Mohamed   @NoamaanMohamed
- [x] Eddie Perez       @EMP189
- [x] Julian James      @julian-james