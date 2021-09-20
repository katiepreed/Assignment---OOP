const User = require('./users');
const ForumPage = require('./forumPages');

test('User can create a user', () => {
    let john = new User('john')
});

test('User sets username argument as property',() => {
    const kate = new User('kate');
    expect(kate.username).toBe('kate');
});

test('User can create a post', () => {
    const kate = new User('kate');
    const gardening = new ForumPage('gardening');
    kate.createPost('garden', '11/20/22', 'Are gardens getting smaller?', gardening);
});


test('Can create a comment', () => {
    const kate = new User('kate');
    const gardening = new ForumPage('gardening');
    kate.createPost('garden', '11/20/22', 'Are gardens getting smaller?', gardening);
    kate.commentOnPost('11/10/02', 'Wow!!!', 'garden', gardening);  
})

test('User sets author argument as property of a comment', () => {
    const kate = new User('kate');
    const gardening = new ForumPage('gardening');
    kate.createPost('garden', '11/20/22', 'Are gardens getting smaller?', gardening);
    kate.commentOnPost('11/10/02', 'Wow!!!', 'garden', gardening);
    expect(gardening.posts[0].comments[0].author).toBe(kate.username)
})

