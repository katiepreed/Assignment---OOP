const Comment = require('./comments');
const Post = require('./posts');
const Poll = require('./polls');
const prompt = require('prompt-sync')();

class User {
    constructor(username){
        this.username = username;
    }

    createPost(title, date, text, forumPage) {
        // add a post to the forum's post array (in its constructor)
        forumPage.posts.push(new Post(title, date, this.username, text));
    }

    commentOnPost(date, text, postTitle, forumPage ) {
        // search throught the posts array in the forum's constructor to find the the post with the correct title
        // then add a comment to the post's comments array (that is in its constructor)
        for (const element of forumPage.posts) {
            if (element.title === postTitle ) {
                element.comments.push(new Comment(date, this.username, text));
            }
        }
    }
    
    userDisplayAllComments(forumPage, postTitle) {
        // search throught the posts array to find correct post and then display all the comments
        for (const element of forumPage.posts) {
            if (element.title === postTitle ) {
                element.displayAllComments();  
            }
        }
    }

    userDisplayAllPosts(forumPage){
        forumPage.displayAllPosts();
    }

    createPoll(title, date, options, forumPage){
        // create a new poll and add it the poll array
        forumPage.polls.push(new Poll(title, date, this.username, options));
    }

    voteInPoll(pollTitle, forumPage){
        console.log('');
        // search for the poll with the correct title and then show the choices availbale
        for (const poll of forumPage.polls) {
            if (poll.title === pollTitle ) {
                for (const choice of poll.options) {
                    console.log('- '+choice) ;
                }
                console.log('');
                let userChoice = prompt('Choice: ');
                // add the vote to the votes array using a function from the Poll class
                poll.vote(this.username, userChoice);
            }
        }
    }

    userDisplayVotes(pollTitle, forumPage){
        // find the poll with the correct title and then show all the people who voted
        for (const poll of forumPage.polls) {
            if (poll.title === pollTitle ) {
                poll.showVotes();
            }
        }
    }
}

module.exports = User;