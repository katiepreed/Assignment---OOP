const Post = require('./posts');

test('Posts can create a post', () => {
    let snow = new Post('snow', '9/9/9','kate', 'it is cold')
});

test('Post sets title argument as property',() => {
    let snow = new Post('snow', '9/9/9','kate', 'it is cold')
    expect(snow.title).toBe('snow')
});