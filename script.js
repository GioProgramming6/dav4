document.getElementById('loadPosts').addEventListener('click', function () {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
        .then(response => response.json())
        .then(posts => {
            const container = document.getElementById('postsContainer');
            container.innerHTML = '';
            
            posts.forEach(post => {
                const postDiv = document.createElement('div');
                postDiv.classList.add('post');
                
                const postTitle = document.createElement('h2');
                postTitle.textContent = post.title;
                
                const postBody = document.createElement('p');
                postBody.textContent = post.body;
                
                postDiv.appendChild(postTitle);
                postDiv.appendChild(postBody);
                container.appendChild(postDiv);
            });
        })
        .catch(error => console.error('Error fetching posts:', error));
});