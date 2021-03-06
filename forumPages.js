class ForumPage {
    constructor(title){
        this.title = title;
        this.posts = []; // all the posts on the forum page
        this.polls = []; // all the polls on the forum page
    }

    // displaying all the information about the posts
    displayAllPosts() {
        this.posts.forEach(this.format); // printing all the posts
    }

    format(post){
        console.log(' ')
        console.log('Post:')
        console.log(' ')
        console.log('title: '+post.title);
        console.log('date: '+post.date);
        console.log('author: '+post.author);
        console.log(post.text)
    }
}

module.exports = ForumPage;