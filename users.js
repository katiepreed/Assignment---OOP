const Comment = require('./comments');
const Post = require('./posts');
const Poll = require('./polls');
const prompt = require('prompt-sync')();

class User {
    constructor(username){
        this.username = username;
    }
    createPost(title, date, text, forumPage) {
        forumPage.posts.push(new Post(title, date, this.username, text));
    }

    commentOnPost(date, text, postTitle, forumPage ) {
        for (const element of forumPage.posts) {
            if (element.title === postTitle ) {
                element.comments.push(new Comment(date, this.username, text));
            }
        }
    }
    
    userDisplayAllComments(forumPage, postTitle) {
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
        forumPage.polls.push(new Poll(title, date, this.username, options));
    }

    voteInPoll(pollTitle, forumPage){
        console.log('');
        for (const item of forumPage.polls) {
            if (item.title === pollTitle ) {
                for (const choice of item.options) {
                    console.log('- '+choice) ;
                }
                console.log('');
                let userChoice = prompt('Choice: ');
                item.vote(this.username, userChoice);
            }
        }
    }

    userDisplayVotes(pollTitle, forumPage){
        for (const poll of forumPage.polls) {
            if (poll.title === pollTitle ) {
                poll.showVotes();
            }
        }
    }
}

module.exports = User;