const User = require('./users');
const ForumPage = require('./forumPages');

let katie = new User('Katie');
let gardening = new ForumPage('gardening')
let knitting = new ForumPage('knitting')
let colours = new ForumPage('Colours')

katie.createPost('garden', '11/20/22', 'Are gardens getting smaller?', gardening);
katie.createPost('flowers','11/10/20', "Planting flowers is good for your health", gardening)

katie.commentOnPost('11/10/02', 'Wow!!!', 'garden', gardening);

//katie.createPoll('Colours', '11/10/20', ['red', 'yellow', 'green', 'blue'], colours);
//katie.showPoll(colours)

//katie.voteInPoll('Colours', colours)
//katie.voteInPoll('Colours', colours)
//katie.userDisplayVotes('Colours', colours)

//gardening.displayAllPosts()
//knitting.displayAllPosts()

//katie.userDisplayAllComments(gardening, 'garden')
//katie.userDisplayAllComments(gardening, 'flowers')
//katie.userDisplayAllPosts(gardening)

console.log(gardening.posts[0].comments[0].author)