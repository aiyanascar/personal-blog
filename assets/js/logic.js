// Local storage functions
const getPosts = () => {
    return JSON.parse(localStorage.getItem('posts')) || [];
}

const savePost = (post) => {
    const posts = getPosts();
    posts.push(post);
    localStorage.setItem('posts', JSON.stringify(posts));
}

// Dark/Light mode toggle function
document.getElementById('toggleMode').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    document.getElementById('toggleMode').textContent = isDarkMode ? '🌙' : '☀️';
});
