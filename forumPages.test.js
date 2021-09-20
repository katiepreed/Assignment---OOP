const ForumPage = require('./forumPages');

test('ForumPage can create a forum page', () => {
    const winter = new ForumPage('winter');
});

test('ForumPage sets title argument as property',() => {
    const winter = new ForumPage('winter');
    expect(winter.title).toBe('winter');
});