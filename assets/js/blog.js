document.addEventListener('DOMContentLoaded', () => {
    const postsContainer = document.getElementById('postsContainer');
    const posts = getPosts();

    if (posts.length === 0) {
        postsContainer.innerHTML = '<p>No blog posts available.</p>';
    } else {
        posts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.classList.add('post');
            postElement.innerHTML = `
                <h2>${post.title}</h2>
                <p>${post.content}</p>
                <p><strong>Author:</strong> ${post.username}</p>
            `;
            postsContainer.appendChild(postElement);
        });
    }

    document.getElementById('toggleMode').addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });

    document.getElementById('backButton').addEventListener('click', () => {
        window.location.href = 'index.html';
    });
});
