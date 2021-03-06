class Post {
    constructor(title, date, author, text){
        this.title = title;
        this.date = date;
        this.author = author;
        this.text = text;
        this.comments = []; // to keep track of comments
    }
    
    // displaying all the information about the comments
    displayAllComments() {
        this.comments.forEach(this.format); 
    }

    format(comment){
        console.log(' ')
        console.log('Comment:')
        console.log(' ')
        console.log('date: '+comment.date);
        console.log('author: '+comment.author);
        console.log(comment.text)
    }
}



module.exports = Post;