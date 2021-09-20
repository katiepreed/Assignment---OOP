const Comment = require('./comments');

test('Comment can create a comment', () => {
    let hi = new Comment('9/9/9','kate', 'hi')
});

test('Comment sets text argument as property',() => {
    let hi = new Comment('9/9/9','kate', 'hi')
    expect(hi.text).toBe('hi')
});