const Post = require('./posts');

class Poll extends Post{
    constructor(title, date, author, options){
        super(title, date, author);
        this.options = options;
        this.votes = []; // to keep track of votes
    }

    vote(user, choice){
        this.votes.push([user,choice])
    }

    showVotes(){
        this.votes.forEach(this.format); 
    }

    format(vote){
        console.log('')
        console.log('user: '+vote[0])
        console.log('vote: '+vote[1])
    }

}

module.exports = Poll;