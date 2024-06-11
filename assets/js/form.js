document.getElementById('blogForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const title = document.getElementById('title').value.trim();
    const content = document.getElementById('content').value.trim();

    if (!username || !title || !content) {
        alert('Please complete all fields.');
        return;
    }

    const post = { username, title, content };
    savePost(post);

    window.location.href = 'blog.html';
});

