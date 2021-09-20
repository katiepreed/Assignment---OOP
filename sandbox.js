const User = require('./users');
const ForumPage = require('./forumPages');

let katie = new User('Katie')

let gardening = new ForumPage('gardening')
let knitting = new ForumPage('knitting')
let colours = new ForumPage('Colours')

katie.createPost('garden', new Date().toString(), 'Are gardens getting smaller?', gardening);
katie.createPost('flowers',new Date().toString(), "Planting flowers is good for your health", gardening)

katie.commentOnPost(new Date().toString(), 'Wow!!!', 'garden', gardening);
katie.commentOnPost(new Date().toString(), "That's so cool!!!", 'garden', gardening)


katie.userDisplayAllComments(gardening, 'garden')
katie.userDisplayAllComments(gardening, 'flowers')


katie.userDisplayAllPosts(gardening)
katie.userDisplayAllPosts(knitting)

katie.createPoll('Colours', new Date().toString(), ['red', 'yellow', 'green', 'blue'], colours);

katie.voteInPoll('Colours', colours)
katie.voteInPoll('Colours', colours)

katie.userDisplayVotes('Colours', colours)

//console.log(gardening.posts[0].comments[0].author)
