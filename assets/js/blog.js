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
                <p class="post-author">Posted by: ${post.username}</p>
            `;
            postsContainer.appendChild(postElement);
        });
    }

    // Retrieve the username from localStorage and update the footer
    const username = localStorage.getItem('username');
    const footer = document.querySelector('footer p');
    if (username) {
        footer.innerHTML = `Made with ❤️ by ${username}`;
    }

    document.getElementById('toggleMode').addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const modeButton = document.getElementById('toggleMode');
        if (document.body.classList.contains('dark-mode')) {
            modeButton.textContent = '🌚';
        } else {
            modeButton.textContent = '🌞';
        }
    });

    document.getElementById('backButton').addEventListener('click', () => {
        window.location.href = 'index.html';
    });
});

