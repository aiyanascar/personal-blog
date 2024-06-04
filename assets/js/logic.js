const getPosts = () => {
    return JSON.parse(localStorage.getItem('posts')) || [];
}

const savePost = (post) => {
    const posts = getPosts();
    posts.push(post);
    localStorage.setItem('posts', JSON.stringify(posts));
}
